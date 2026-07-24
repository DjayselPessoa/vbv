**Fluxo final para publicar**

- Compile: `npm run compile`
    
- Limpe devDependencies: `npm prune --omit=dev
    
- Empacote: `vsce package --no-yarn`
    
- Teste o `.vsix` localmente
    
- Publique: `vsce publish`

- depois recupere as dependências dev: npm install

a pasta out pode ser apagada normalmente