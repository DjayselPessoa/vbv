import * as vscode from 'vscode';
import('node-fetch');
import * as cheerio from 'cheerio';
import * as nls from 'vscode-nls';

const localize = nls.config({messageFormat: nls.MessageFormat.file})();

/**
 * Ativa a extensão VSCBlog.
 * 
 * Cria um item na barra de status e registra o comando `vbv.openLatestBlog`.
 * O comando abre um painel WebView exibindo o último post do VS Code Blog.
 *
 * @param {vscode.ExtensionContext} context - Contexto da extensão, usado para registrar disposables e armazenar estado global.
 */

export function activate(context: vscode.ExtensionContext) {
    /**
     * Item da barra de status que permite abrir o último post do VS Code Blog.
     * Mostra um ícone de livro e pode ser atualizado para indicar novos posts.
     */
    const statusBarItem = vscode.window.createStatusBarItem(vscode.StatusBarAlignment.Right, 100);
    statusBarItem.text = "$(book) VSCBlog";
    statusBarItem.command = "vbv.openLatestBlog";
    statusBarItem.show();
    context.subscriptions.push(statusBarItem);
    /**
     * Busca a URL do último post publicado no VS Code Blog.
     *
     * @returns {Promise<string|null>} URL completa do último post ou null em caso de erro.
     */
    async function getLatestPostUrl(): Promise<string | null> {
        try {
            const res = await fetch("https://code.visualstudio.com/blogs");
            const html = await res.text();
            const $ = cheerio.load(html);
            const firstPostLink = $("a.blog-home-featured").attr("href");
            if (!firstPostLink) {return null;};
            return "https://code.visualstudio.com"+firstPostLink;
        } catch (error) {
            return null;
        }
    }
    /**
     * Verifica se há um novo post em relação ao último salvo no estado global.
     * Atualiza o texto do statusBarItem para indicar novidade.
     */
    async function checkForNewPost() {
        const latestUrl = await getLatestPostUrl();
        if(!latestUrl) {return;};

        const savedUrl = context.globalState.get<string>("LastBlogPost");
        const readFlag = context.globalState.get<boolean>("LastBlogPostRead");

        if(savedUrl && savedUrl !== latestUrl){
            await context.globalState.update("LastBlogPost", latestUrl);
            await context.globalState.update("LastBlogPostRead", false);
            statusBarItem.text = "$(bell) VSCBlog NEW";
        }else{
            if (readFlag === false) {
                statusBarItem.text = "$(bell) VSCBlog NEW";
            } else {
                statusBarItem.text = "$(book) VSCBlog";
            }            
        }
    }
    /**
     * Comando principal da extensão.
     * Abre um WebView exibindo o conteúdo do último post do VS Code Blog.
     * Substitui imagens por links e corrige links internos.
     */
    let disposable = vscode.commands.registerCommand('vbv.openLatestBlog', async () => {
        try {
            const latestUrl = await getLatestPostUrl();

            if(!latestUrl){
                vscode.window.showErrorMessage("Não foi possível encontrar o post mais recente.");
                return;
            }else {
                vscode.window.showErrorMessage(`link encontrado: ${latestUrl}`);
            }

            // Buscar o conteúdo do post
            const postRes = await fetch(latestUrl);
            const postHtml = await postRes.text();
            const $$ = cheerio.load(postHtml);
            const wrapper = $$(".docs-content-wrapper");

            // corrigir imagens
            wrapper.find("img").each((_, el) => {
                const src = $$(el).attr("src");
                if(src){
                    $$(el).replaceWith(`<a href="https://code.visualstudio.com${src}" target="_blank">[Imagem]</a>`);
                }
            });

            // corrigir links internos
            wrapper.find("a").each((_, el)=>{
                let link = String($$(el).attr("href"));
                const inText = $$(el).text();
                if(!link.includes("https://")){
                    const href = link;
                    if(href){
                        $$(el).replaceWith(`<a href="https://code.visualstudio.com${href}" target="_blank">${inText}</a>`);
                    }
                }                
            });

            let content = wrapper.html() || "Conteúdo não encontrado!";

            // criar painel
            const panel = vscode.window.createWebviewPanel(
                'latestBlog',
                'Latest VS Code Blog Post',
                vscode.ViewColumn.One,
                {enableScripts: true}
            );

            panel.webview.html = `
                <html>
                    <head>
                        <style>
                            body {
                                font-family: sans-serif;
                                margin: 3em;
                                line-height: 1.6;
                            }
                            p {
                                text-align: justify;
                                margin-bottom: 1em;
                            }
                            h1, h2, h3 {
                                margin-top: 1.5em;
                                margin-bottom: 0.5em;
                            }
                            tr {
                                border: 1px solid #fff;
                            }
                            td {
                                border: 1px solid #888;
                                padding: 0.5em
                            }
                            hr {
                                border-color: #888;
                            }
                            a {
                                color: #0066cc;
                                text-decoration:none;
                            }
                            a:hover {
                                text-decoration: underline;
                            }
                        </style>
                    </head>
                    <body>
                        <h2>Latest VS Code Blog Post</h2>
                        <h3><a href="https://code.visualstudio.com/blogs/" target="_blank">VS Code Blog - homepage</a></h3>
                        <hr>
                        ${content}
                        <hr>
                        <footer>
                            Extension by <a href="https://github.com/DjayselPessoa" target="_blank">@DjayselPessôa</a>
                        </footer>
                    </body>
                </html>
            `;

            // atualizar estado com o último post aberto
            await context.globalState.update("LastBlogPost", latestUrl);
            await context.globalState.update("LastBlogPostRead", true);
            statusBarItem.text = "$(book) VSCBlog";
        } catch (error) {
            vscode.window.showErrorMessage("Erro ao carregar o blog: " + error);
        }
    });

    context.subscriptions.push(disposable);

    // checar ao ativar
    checkForNewPost();

    setInterval(checkForNewPost, 360 * 60 * 1000);
}
/**
 * Função chamada ao desativar a extensão.
 */
export function deactivate() {}
