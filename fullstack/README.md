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
  Utiliza Módulos / Packages para construir aplicações. <br />
  <a href="https://nodejs.org/en/download/"><b>Download NodeJS</b></a>
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
  Existem 3 tipos de parâmetros comumente utilizados. <br />
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

<details>
  <summary>O que é Controllers</summary>
  São classes onde conterão os métodos de processamento e regras de negócio da aplicação. <br />
  É preciso instanciar onde for utilizar, ou usar métodos estaticos. <br />
</details>
<br />

<details>
  <summary>O que são HTTP Status Code</summary>
  Representa o estado da resposta, são agrupados por faixas númericas. <br />
  <b>100-199:</b> Informativo (A solicitação foi aceita ou em processamento, etc). <br />
  <b>200-299:</b> Sucesso (Requisição bem sucedida, etc). <br />
  <b>300-399:</b> Redirecionamento (Movido, movido permanentemente, etc). <br />
  <b>400-499:</b> Erro no cliente (Bad req, set timeout, não autorizado, não encontrado, etc). <br />
  <b>500-599:</b> Erro no servidor (Servidor falhou ao concluir a solicitação, erro interno, etc). <br />
</details>
<br />

<details>
  <summary>O que é Middleware</summary>
  São funções que ficam entre a requisição do usuário e a resposta da aplicação. Tem acesso a request e response e Next. <br />
  É como um porteiro, que verifica o ticket dos visitantes e libera ou barra a entrada. <br />
  EX: Permite que somente usuários admins cadastrem produtos na loja, middleware faz essa verificação e redireciona para cadastro ou login. <br />
</details>
<br />

<details>
  <summary>O que é Banco de Dados</summary>
  É uma coleção de diversos tipos de dados (lista de contatos, de compras de convidados, etc). Devem estar organizados por assuntos. <br />
  Banco de dados é composto por: <br />
  <b>Banco de Dados:</b> Recebe um nome único. É onde ficaram guardados tabelas e dados. <br />
  <b>Tabela:</b> Recebe um nome único. É uma forma de organizar os dados por assuntos, os dados são inseridos em tuplas/celula (id, nome, email, password, avatar, etc). <br />
  <b>Registro:</b> São os dados e seus tipos (varchar, inter, boolean, etc). <br />
  Banco de dados co tableas que se relacionam são conhecidos como: <b>Banco de Dados Relacional</b>. <br />
</details>
<br />

<details>
  <summary>O que é SQL</summary>
  É a linguagem padrão para banco de dados relacional. <br />
  Utiliza comandos para manipulação dos dados. <br />
  <b>CREATE:</b> Comando para criar DB ou tabelas. <br />
  <b>DROP:</b> Comando para excluir DB ou tabelas. <br />
  <b>ALTER:</b> Comando para alterar nome de DB ou tabelas. <br />
  <b>INSERT INTO:</b> Comando para inserir dados em uma tabela. <br />
</details>
<br />

<details>
  <summary>O que é Query Builder</summary>
  É construtor de consulta. Permite construir instruções SQL independente do banco de dados relacional utilizado. <br />
  Exemplo de query builder: KNexJS. <br />
</details>
<br />

<details>
  <summary>O que é Query Builder</summary>
  É construtor de consulta. Permite construir instruções SQL independente do banco de dados relacional utilizado. <br />
  Exemplo de query builder: KNexJS. <br />
  <b>npm i knex:</b> Comando para instalar KNexJS no projeto. <br />
  <b>npx knex init:</b> Comando para iniciar arquivo de configuração do KNexJS. <br />
</details>
<br />

<details>
  <summary>O que é Migrations</summary>
  É uma forma de versionar a base de dados. Trabalha na manipulação da base de dados: criando, alterando ou removendo. <br />
  <b>UP:</b> Comando para criar ou alterar algo no DB. <br />
  <b>DOWN:</b> Comando para fazer rollback / desfazer alterações realizadas pela migration. <br />
</details>
<br />
