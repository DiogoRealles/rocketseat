![NodeJS](./cover.png)

# NodeJS

<details>
  <summary>O que é API (Application Programing Interface / Interface de Programação de Aplicação)</summary>
  O cliente pede ao garçom um prato, o garçom entrega o pedido para a cozinha, a cozinha prepara o prato e passa para o garçom que por sua vez retorna para o cliente. <br />
  A API é um intermediário entre o front-end e o back-end, passando e retornando dados e informações. <br />
  Cliente = Mobile / Desktop / Browser <br />
  Garçom = API NodeJS <br />
  Cozinha = Server <br />
</details>
<br />

<details>
  <summary>O que é NodeJS</summary>
  É um ambiente que permite escrever e executar aplicações JavaScript no server-side. <br />
  É utilizado por grandes empresas (Microsoft, Apple, Netflix, Amazon, etc) para desenvolvimento de grandes projetos (API, Scripts e Automação, Back-end, IA, etc). <br />
  Utiliza V8 Engine (desenvolvido pela Google) para interpretar JS e rodar no server-side. <br />
  <b>Event Loop</b> É um processo Sigle Thread / Único Porteiro e Non-blocking I-O / Não bloqueia entrada ou saída. Recebe a requisição e envia a função para Call Stack. Conforme as função vão sendo finalizadas, são retornadas pelo Event Loop para que as chamou. <br />
</details>
<br />

<details>
  <summary>Iniciando projeto em NodeJS</summary>
  <b>npm init -y:</b> Inicia rapidamente um projeto em NodeJS com algumas informações básicas (nome, versão, dependências, scripts, licensa, etc). <br />
</details>
<br />

<details>
  <summary>O que é Express</summary>
  É um framework para NodeJS, permite criar servidor da aplicação de forma rápida e segura. <br />
  Muito utilizado para criar API. <br />
</details>
<br />

<details>
  <summary>O que são Rotas</summary>
  É o caminho entre ponto A e ponto B, ou seja, o site deseja acessar algum recurso disponível na aplicação (cadastro, login, produtos, etc). <br />
  <b>meusite.com/produtos/123:</b> Domínio com end-point. <br />
  <b>meusite.com:</b> É o dominio principal. <br />
  <b>/produtos:</b> É uma rota que exibe ua lista de produtos. <br />
  <b>/123:</b> É um identificador do produto. <br />
  Toda rota está relacionada com uma funcionalidade que utiliza um dos verbos <b>HTTP</b>. <br />
  <b>GET:</b> É responsável por requisitar dados. <br />
  <b>POST:</b> É responsável por adicionar dados. <br />
  <b>PUT:</b> É responsável por editar conjunto de dados. <br />
  <b>PATCH:</b> É responsável por editar um dado expecífico. <br />
  <b>DELETE:</b> É responsável por remover dados. <br />
</details>
<br />

<details>
  <summary>Tipos de requisição</summary>
  Existem 3 tipos de parâmetros comumente utilizados, . <br />
  <b>params:</b> Recebe os dados da requisição na rota. <br />
  Uso: Buscar algo expecífico. <br />
  EX: <b>meusite.com/users/380327</b>. Pode ser usado com PUT, PATCH, GET, DELETE. <br />
  <b>query:</b>  Recebe os dados da requisição como parâmetro na URL. Uso: Filtros para consultas na aplicação. <br />
  EX: <b>meusite.com/products?name=notebook</b>. <br />
  <b>body:</b> Recebe os dados da requisição no corpo da requisição (FORMs), em um objeto em JSON. <br />
  Uso: Salvar dados em DBs. <br />
  EX: <b>{name: 'diogo', role: 'Front-end'}</b>. <br />
</details>
<br />
