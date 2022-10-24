# PayFriends React

<br />
<p align="center">
    <img src="./public/images/payfriends.png" alt="Logo payfriends" width="100">
<p align="center">
  <a href="#o-que-é">O que é</a> •
  <a href="#instalação">Instalação</a> •
  <a href="#rodar">Rodar</a> •
  <a href="#testes">Testes</a> •
  <a href="#to-do">To do</a> •
</p>

## O que é

* App criado utilizando [Next.js](https://nextjs.org/) inicializado com [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app). A aplicação é um CRUD contendo login de usuario e home com listagem dos pagamentos, consumindo os dados de uma API mock(JSON serve), cujo os dados estão no arquivo `db.json` na raiz do projeto.

## Instalação

* Você deve ter o <a href="https://nodejs.org/en/">Nodejs</a> instalado em sua maquína

* Você deve ter o <a href="https://www.npmjs.com/package/json-server">JSON serve</a> instalado globalmente em sua maquína

* Após clonar o repositório e entrar na pasta, instale os pacotes com o comando:

```bash
npm i
# ou
npm install
```

## Rodar

* Rode o projeto utilizando os seguintes comandos, o primeiro é para subir a aplicação e o segundo para subir o json serve, nosso serviço de API:

```bash
npm run dev
```
e

```bash
json-server db.json --port 4000
```

Após a compilação, o App estará disponível para acesso
pelo navegador em http://localhost:3000/

E os dados do JSON serve estarão em http://localhost:3000/

## Testes


## Contribuindo

Faça um fork do projeto. Siga os passos de instalação. Crie uma branch a partir da branch main!

Cheque as issues abertas ou abra uma <a href=https://github.com/danditeoa/picpay-desafio-frontend/issues> aqui</a>

## To do

Por conta do tempo, optei por implementar o mínimo viável da aplicação, sem deixar de possibilitar o desenvolvimento das tarefas pendentes.

* Escrever validações para todos os inputs
* Revisar acessibilidade
* Testar em diferentes sistemas e navegadores
* Escrever testes
* Refatorar SCSS
* Implementar pesquisa por usuário
* Criar componente de filtro
* Página de perfil
* Adicionar pagamento
* Excluir e editar pagamento
* Melhorar a tabela de pagamentos e a responsividade da tela
* Melhorar o login. Dentro do tempo disponível implementei apenas um login mockado, que ainda esta sem validações. Utilizei o <a href=https://react-hook-form.com> React Hook Form</a> que permite a criação de formulários muito mais perfomaticos pois tem menor tempo de montagem e evita renderizações desnecessárias.