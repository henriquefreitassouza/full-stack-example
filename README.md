# Full Stack Example

Este app utiliza React, Node, Express e a API APOD da Nasa para simular um ambiente logado. Ao clicar no botão de login, a aplicação exibe dados da APOD.

Feito com base neste tutorial: https://medium.com/leniolabs/build-and-deploy-a-web-application-with-react-and-node-js-express-1d06cae88705

## Motivação

Ilustrar conceitos de front e back end.

## Funcionamento

O app mostra uma tela de login que possui apenas um botão. Ao clicar no botão de login, uma chamada é feita a API local criada no Express e o usuário é autenticado. A autenticação acontece fazendo uma consulta ao arquivo .env na raiz do projeto e consultando a chave API_KEY. Esta chave é então armazenada no localStorage do navegador. A existência do localStorage sinaliza ao app que o usuário está logado.

Uma vez logado, o app exibe a tela home e faz uma chamada a API local criada no Express. Essa chamada, por sua vez, usa o Axios para fazer uma consulta na API da Nasa e retornar o APOD do dia da consulta.

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
- routes/router.js: Agregador de rotas;
- routes/paths: Rotas individuais;
- models: Estruturas de dados;
- models/server.js: Inicializador do servidor;
- controllers: Lógica de negócios;
- app: Front end feito em React.
- app/src/index.js: Ponto de entrada do front end;
- app/src/App.js: Carrega as partes do front end (telas Home e Login).

## Dependências

- axios: Faz a chamada na API da Nasa;
- cors: Habilita regras e cabeçalhos CORS na API do Express;
- dotenv: Gerencia variáveis de ambiente;
- express: Facilita a criação e gestão de rotas em servidores Node;
- concurrently: Facilita a execução de múltiplos comandos simultaneamente no terminal.

O React é um pacote a parte, dentro do pacote do servidor. Ele possui seu próprio package.json com dependências.
