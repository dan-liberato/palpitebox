# PalpiteBox

<p align="center">
  <img alt="Repo size" src="https://img.shields.io/github/repo-size/dan-liberato/palpitebox.svg" />
  <img alt="GitHub language count" src="https://img.shields.io/github/languages/count/dan-liberato/palpitebox.svg">
  <img alt="GitHub top language" src="https://img.shields.io/github/languages/top/dan-liberato/palpitebox.svg">
  <img src="https://img.shields.io/github/last-commit/dan-liberato/palpitebox" alt="Last Commit"/>
</p>

<p align="center">![Screenshot](palpitebox.png)</p>

## :bookmark_tabs: &middot; Nota

Projeto desenvolvido acompanhando os vídeos da semana Fullstack Master do
[DevPleno](https://devpleno.com/).

Ainda não conhecia o Next.js, mas pude ver que ele facilita o desenvolvimento com
React, inclusive torna muito mais fácil para projetos que necessitem de foco em
SEO

## :computer: &middot; Projeto

O PalpiteBox permite que os clientes de um restaurante ou negócio local possam
dar sua opinião sobre o atendimento, produto eetc.

Em troca, o cliente recebe um cupom (desconto, condição especial).

## :rocket: &middot; Tecnologias

Desenvolvido com:

- [Node.js](https://nodejs.org/en/)
- [Next.js](https://nextjs.org/)
- [Tailwind](http://tailwindcss.com/)
- [PostCSS](https://postcss.org/)
- [CSS Modules](https://github.com/css-modules/css-modules)
- [Google Sheets](https://www.google.com/sheets/about/)

## Para testar o PalpiteBox

Clone o repositório e instale as dependências
>yarn install

Crie um novo projeto no ***Google APIs** e selecione
a **API do Google Sheets**, gere uma credencial
para seu projeto, pegue o email da credencial/
conta de serviço e compartilhe uma planilha do
Google com esse e-mail.

Pegue a id da planilha que você criou e
adicione no arquivo **.env.example**:

> SHEET_CLIENT_EMAIL=Add email of service credential
> SHEET_PRIVATE_KEY=Add private key of service credential
> SHEET_DOC_ID=Add spreadsheet id

Após adicionar as informações acima, altere o
nome do arquivo para **.env.local**.

Agora é só rodar o comando
> yarn dev

Caso queira evitar esse processo acesse
>

Projeto desenvolvido durante a semana Fullstack
Master - [DevPleno](https://devpleno.com/)
