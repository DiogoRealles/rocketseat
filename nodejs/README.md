![NodeJS](./cover.png)

# NodeJS

<details>
  <summary>O que é NodeJS</summary>
  É uma plataforma que utiliza <b>V8 Engine</b> para executar aplicações back-end em JavaScript no server-side. <br />
  Como: Envio de email, conexões a banco de dados, web sever, api, chatbots, e muito mais. <br />
  <a href="https://nodejs.org/en/download/"><b>Download NodeJS</b></a>
  <img src="./nodejs.png" />
  Utiliza Módulos / Packages para construir aplicações. <br />
  NodeJS - Possui gerenciadores de pacotes, o famoso NPM, existe seu principal concorrente YARN. <br />
  Gerenciadores de pacotes permitem instalar e disponibilizar bibliotecas de tercceiros de uma forma muito simples (npm i nome_do_pacote, yarn add nome_do_pacote). <br />
  NodeJS trabalha com sistemas de módulos. <br />
  NodeJS possui conjuntos de modulos próprios: <br />
  FileSystem - Para leitura e escrita de arquivos. <br />
  http - Para metodos http e rotas. <br />
  NodeJS é baseado em sistema de event loops, ou seja, em eventos. <br />
  Internamente possui um espaço para uma pilha de funções que vão entrando. <br />
  NodeJS (O Boss) - É single-thred, porém possui 4 threds
  "funcionários especializados" para quem ele delega as funções. <br />
  Seu diferencial é separar funções simples de funções temporais e promises,
  sendo assim: Non-blocking I/O (não bloqueante), ou seja, ao delegar funções
  para seus "funcionários especializados" ele fica livre para tratar de outras
  funções. <br />
  ao iniciar um projeto é comum que os arquivos de configuração JS fiquem em uma pasta "src". <br />
  Ao iniciar um projeto com <b>node/npm</b> é criado um arquivo package.json. <br />
  <b>npm init -y</b> - Comando para iniciar projeto em NodeJS. <br />
  <b>package.json</b> - Arquivo de configuração e descrição do projeto iniciado com npm. <br />
  <b>scripts</b> - Responsável por executar comandos e assim executar os scripts dentro de outros arquivos. <br />
  <b>server.js<b> - Arquivo de configuração contendo os métodos http/Express/NextJS para criação de server e rotas do projeto. <br />
  <b>--watch --no-warnings<b> - Comando que permite o NodeJS monitorar alterações em arquivos e fazer um reload/reinicie o servidor express. <br />
</details>
<br />

<details>
  <summary>Import / Export</summary>
  NodeJS aceita duas formas de importar e exportar módulos. <br />
  module.exports = {names_module} / require('names_module'): É o commonJS, modo como NodeJS importa e exporta módulos. <br />
  import / export: É o ES6Modules, modo como JS importa e exporta módulos. <br />
  <b>"type": "module"</b> - Opção do package.json que permite NodeJS aceitar ES6Modules. <br />
</details>
<br />

<details>
  <summary>O que são Rotas?</summary>
  Rotas são caminho de entrada dentro da aplicação / API. <br />
  Cada rota possui diferentes funções e verbos HTTP para descrever determinada ação (requisição / resposta). <br />
  <b>GET</b> - Solicita uma informação (lista, id). <br />
  <b>POST</b> - Enviar dados. <br />
  <b>PUT</b> - Atualizar mais de um dado, deve receber um route params (rota/:id), para identificar corretamente qual dado buscar, atualizar ou deletar. <br />
  <b>DELETE</b> - Deletar algum dado, geralmente é referenciado por ID, deve receber um route params (rota/:id), para identificar corretamente qual dado buscar, atualizar ou deletar. <br />
  <b>PATCH</b> - Atualizar um único dado, deve receber um route params (rota/:id), para identificar corretamente qual dado buscar, atualizar ou deletar. <br />
  <b>Status Code</b> - São status code que informam o status das requisições, geralmente são formados por 3 digitos, sendo o primeiro a categria: <br />
  <b>100</b> - São da categora informativo (solicitação aceita, em processo, etc). <br />
  <b>200</b> - Sucesso (Cadastrado com sucesso, requisição ok). <br />
  <b>300</b> - Redirecionamento (arquivo movido, etc). <br />
  <b>400</b> - Erros do lado do cliente (requisição não atendida, não encontrado, etc). <br />
  <b>500</b> - Erro do lado do servidor (erro interno, etc). <br />
</details>
<br />

<details>
  <summary>O que são Streams?</summary>
  NodeJS trouxe uma solução performática de forma simplificada em entregas de aquivos "chunks". <br />
  Básicamente seria ler e manipular pequenas partes de algum conteúdo (música, filme, texto) antes de obte-lo por completo. <br />
  NodeJS possui diversas portas de I/O (req: Readable Streams, res: Writable Streams) ou stdin: Readable Streams / stdout: Writable Streams comandos lidos do terminal pelo process do node. <br />
  Os chunks precisam ser convertidos de tipos primitivos (int, string, bool, etc) em Buffer para serem lidos. <br />
  Em outros casos como leitura em formato JSON é necessário que o arquivo seja lido por completo para ser manipulado. <br />
  Para isso é criado um array de buffer e a request é percorrido e os dados inseridos no array de buffer. <br />
  Buffer é uma representação de um espaço na memória do computador, usado para transitar dados de uma maneira muito rápida, os dados armazenado no Buffer, são em binários. Desta forma é mais rápido e performático por que a memória do computador só armazena dados 0/1 usando pulso de energia. Então converter String unicode UTF-8 para binários hexadecimal (16bits) para armazenar na memória flash é mais rápido e performático. <br />
  <b>buff = Buffer.from('hello')</b>. <br />
  <b>console.log(buff)</b> -> Buffer 68 65 6c 6c 6f <br />
</details>
<br />

<details>
  <summary>Params, Body, Query</summary>
  Route Params - São parâmetros das rotas, sua caracteristica é serem separados por :id, servem para buscar, identificar, editar ou deletar um recurso. <br />
  uso: let params = req.params; <br />
  Query Params - São parâmetros das rotas, sua caracteristica é serem separados por ?key=value&order=desc / ?userId=1&name=Diogo, servem para filtrar/paginação um recurso. <br />
  uso: let params = req.query; <br />
  Body Params - São parâmetros passados como objetos, sua caracteristica é serem passados no corpo / formulário da requisição geralmente como JSON, { "name" = "Diogo", lastname = "Realles"} servem para inserir/alterar um recurso. <br />
  uso: let body = req.body; <br />
</details>
<br />

<details>
  <summary>O que são Middlewares?</summary>
  São interceptadores, ou seja, são funções que executam entre uma requisição e resposta da aplicação. Possuem acesso e podem transformar os dados de request e response. <br />
  Middleware - São função que fica entre a requisição e resposta, geralmente utilizada para validação de tokken, tipo de usuário. <br />
  Funções midlewares recebem 3 parâmetros (req, res, next) *parâmetro next é responsável por dar continuidade ou não ao middleware. <br />
  Como toda função, middlewares devem ser chamados/invocados. <br />
  Middleware pode ser chamado de duas formas: <br />
  1 - Chamado como segundo parâmetro nas chamadas dos métodos das rotas, ficando entre a rota e req, res. Podem ser adicionados mais middlewares. *Esse modo serve para uma rota em específico. <br />
  2 - Utilizand método ".use( )": server.use(função_middleware); \*Este modo ficará disponível para todas as rotas abaixo deste ".use( )". <br />
</details>
<br />

<details>
  <summary>O que são API - Aplication Programming Interface (Interface de Programação de Aplicativos)?</summary>
  São regras de como as aplicações podem e devem se comunicar. <br />
  Rest - Representation State Transfer (Transferência Representacional de Estado). <br />
  É um modelo de arquitetura, um padrão, ou seja ao aplicar as regras e padrões. <br />
  Rest a API fica no padrão API Rest. <br />
  Rest possui 6 principais regras: <br />
  1 - Separar responsabilidades entre Cliente e Servidor. <br />
  2 - Deve fornecer todas as informações como se fosse a primeiro pedido. <br />
  3 - Suporte para cache. <br />
  4 - Fácil identificações de recursos, representações, feedbacks. <br />
  5 - Ser construidas por camadas (segurança, recursos, etc). <br />
  6 - Ser modular. <br />
  API RestFul - Ao aplicar regras como: <br />
  Utilização correta dos verbos HTTP e dos Status Code e padrões de Rest em uma API ela é considerada API RestFul. <br />
</details>
<br />
