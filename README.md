⚓ [🇺🇸 English](#english)
<span id="portugues"></span>

🇧🇷 Português

# vbv – VS Code Blog Viewer

Uma extensão simples para o Visual Studio Code que permite visualizar o **post mais recente do blog oficial do VS Code** diretamente no editor.
Imagens são substituídas por links clicáveis, mantendo o conteúdo leve e legível.

---

## Features ✨

- Exibe o **último post** do [VS Code Blog](https://code.visualstudio.com/blogs/).

- Conteúdo limpo: apenas texto e links, sem navbar ou footer.

- Links internos corrigidos para abrir no site oficial.

- Imagens substituídas por links [Imagem] para abrir no navegador.

- Painel com margens, texto justificado e estilo agradável.

## Requirements ⚙️ 

- Visual Studio Code versão 1.80.0 ou superior.

- Dependências instaladas via npm install:

    - node-fetch

    - cheerio

    - vscode-nls

## Usage 🚀 

1. Instale a extensão.

2. Abra a Command Palette (Ctrl+Shift+P ou Cmd+Shift+P no macOS).

    21. Execute o comando:

    ```cmd
    Open Latest VSCode Blog Post
    ```
3. O painel será aberto mostrando o post mais recente.

4. Ou utilize o atalho no teclado: ctrl+alt+l

5. Também terá um ícone de livro na barra de status seguido do nome VSCBlog - caso não apareça ative uma primeira vez pelas duas opções anteriores: opt(2 e 4)

    51. O ícone de livro mudará para sino (após o primeiro carregamento) caso haja novo post no blog. O tempo padrão de verificação é de seis horas. 


## Extension Settings 🔧 

Atualmente não há configurações adicionais.
Futuras versões podem incluir opções como:

- Idioma preferido para o cabeçalho. (ainda avaliando este caso)

- Tema claro/escuro para o painel. (avaliando se isso é possível)

- adicionar um link para o post anterior (abrindo direto no navegador para não quebrar o funcionamento atual das funções de verificação)

## Known Issues 🐞 

- Posts com conteúdo muito dinâmico podem perder formatação.

- Imagens não são renderizadas, apenas exibidas como links.

- Mudanças de padronização das classes no blog irão quebrar a extensão (pouco provável de ocorrer)

## Release Notes 📦 

0.0.1
- Primeira versão funcional.

- Exibe o último post do blog com texto justificado e links corrigidos.

## Credits 👤 
Extension by [@DjayselPessôa](https://github.com/DjayselPessoa) github.com

## Collaborators 🤝

``` A lista de colaboradores aparecerá aqui. ```

## Resources 📚 

- [VS Code Blog](https://code.visualstudio.com/blogs/)

- [VS Code Extension Guidelines](https://code.visualstudio.com/api/ux-guidelines/overview)

---

⚓ [🇧🇷 Português](#portugues)
<span id="english"></span>

🇺🇸 English

# vbv – VS Code Blog Viewer

A simple Visual Studio Code extension that lets you view the **latest post from the official VS Code blog** directly within the editor.
Images are replaced with clickable links, keeping the content lightweight and readable.

---

## Features ✨

- Displays the **latest post** from the [VS Code Blog](https://code.visualstudio.com/blogs/).

- Clean content: text and links only; no navigation bar or footer.

- Internal links adjusted to open on the official website.

- Images replaced with [Image] links that open in your browser.

- Panel features margins, justified text, and a pleasant layout.

## Requirements ⚙️

- Visual Studio Code version 1.80.0 or higher.

- Dependencies installed via `npm install`:

- node-fetch

- cheerio

- vscode-nls

## Usage 🚀

1. Install the extension.

2. Open the Command Palette (Ctrl+Shift+P or Cmd+Shift+P on macOS). 

    21. Run the command:

    ```cmd
    Open Latest VSCode Blog Post
    ```
3. The panel will open, displaying the most recent post.

4. Alternatively, use the keyboard shortcut: `Ctrl+Alt+L`.

5. A book icon followed by the name "VSCBlog" will appear in the status bar; if it doesn't show up, activate it once using the methods above (steps 2 and 4).

    51. The book icon will change to a bell icon (after the initial load) if there is a new blog post. The default check interval is six hours.

## Extension Settings 🔧

There are currently no additional settings.
Future versions may include options such as:

- Preferred language for the header (currently under consideration).

- Light/dark theme for the panel. (evaluating feasibility)

- add a link to the previous post (opening directly in the browser to avoid breaking current verification functions)

## Known Issues 🐞

- Posts with highly dynamic content may lose formatting.

- Images are not rendered; they appear only as links.

- Changes to the blog's class naming conventions will break the extension (unlikely to happen).

## Release Notes 📦

0.0.1
- First functional version.

- Displays the latest blog post with justified text and corrected links.

## Credits 👤
Extension by [@DjayselPessôa](https://github.com/DjayselPessoa) github.com

## Collaborators 🤝

``` The list of collaborators will appear here. ```

## Resources 📚

- [VS Code Blog](https://code.visualstudio.com/blogs/)

- [VS Code Extension Guidelines](https://code.visualstudio.com/api/ux-guidelines/overview)

---