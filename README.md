# Full Stack Example

Este app utiliza React, Node, Express e a API APOD da Nasa para simular um ambiente logado. Ao clicar no botão de login, a aplicação exibe dados da APOD.

Feito com base neste tutorial: https://medium.com/leniolabs/build-and-deploy-a-web-application-with-react-and-node-js-express-1d06cae88705

## Motivação

Ilustrar conceitos de front e back end.

## Pré requisitos

- Node e NPM

## Como usar?

- Crie um cadastro na API da Nasa obter uma chave de API: https://api.nasa.gov/;
- Faça o clone deste repositório;
- Execute o comando npm install;
- Crie um arquivo chamado .env na raiz do projeto e adicione as chaves PORT e API_KEY, sendo PORT a porta que o servidor vai escutar e API_KEY a chave devolvida pela aplicação da Nasa;
- Abra um terminal, navegue até a pasta do projeto e rode o comando npm run dev.

## Estrutura

- index.js: Ponto de entrada da aplicação;
- routes: Rotas no servidor Express;
-- router.js: Agregador de rotas;
-- paths: Rotas individuais;
- models: Estruturas de dados;
-- server.js: Inicializador do servidor;
- controllers: Lógica de negócios;
- app: Front end feito em React.
-- src/index.js: Ponto de entrada do front end;
-- src/App.js: Carrega as partes do front end (telas Home e Login).

## Dependências

- axios: Faz a chamada na API da Nasa;
- cors: Habilita regras e cabeçalhos CORS na API do Express;
- dotenv: Gerencia variáveis de ambiente;
- express: Facilita a criação e gestão de rotas em servidores Node;
- concurrently: Facilita a execução de múltiplos comandos simultaneamente no terminal.

O React é um pacote a parte, dentro do pacote do servidor. Ele possui seu próprio package.json com dependências.
