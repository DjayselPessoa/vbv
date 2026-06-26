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

3. Execute o comando:

```cmd
Open Latest VSCode Blog Post
```
4. O painel será aberto mostrando o post mais recente.

## Extension Settings 🔧 

Atualmente não há configurações adicionais.
Futuras versões podem incluir opções como:

- Idioma preferido para o cabeçalho.

- Tema claro/escuro para o painel.

## Known Issues 🐞 

- Posts com conteúdo muito dinâmico podem perder formatação.

- Imagens não são renderizadas, apenas exibidas como links.

## Release Notes 📦 

0.0.1
- Primeira versão funcional.

- Exibe o último post do blog com texto justificado e links corrigidos.

## Credits 👤 
Extension by [@DjayselPessôa](https://github.com/DjayselPessoa) github.com

## Resources 📚 

- [VS Code Blog](https://code.visualstudio.com/blogs/)

- [VS Code Extension Guidelines](https://code.visualstudio.com/api/ux-guidelines/overview)