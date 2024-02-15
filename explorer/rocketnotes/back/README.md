# Rocketseat - Explorer - Rocketnotes - Back-end

![alt text](stack.png)

# API - Application Programming Interface / Interface de Programação de Aplicação

São conjuntos de normas que possibilita a comunicação entre aplicativos e plataformas por meio de padrões e protocolos. <br />

exemplos: Facebook permite tanto ver fotos do facebook quanto do Instagram. <br />
WhatsApp permite tanto ver contatos do dispositivos quanto do aplicativo. <br />

analogia: <br />
**Cliente** faz uma requisição ao **garçom** <br />
**Garçom** leva a requição à **cozinha** <br />
**Cozinha** prepara e entrega o prato ao **garçom** <br />
**Garçom** entrega o prato como resposta ao **cliente**. <br />

Cliente => Site / App <br />
Garçom => API (NodeJS) <br />
Cozinha => Back-end / server <br />

# API REST - Representational State Transfer / Transfêrencia Representacional de Estado

É um modelo de arquitetura que fornece diretrizes / regras para a comunicação entre aplicações seguindo princípios e protocolos Web, por exemplo HTTP. <br />

# API RESTful

É uma API REST que segue as diretrizes / normas definidas.

# Diretrizes RESTful

**Client - Server:** Client e server dever estar separados, diferente de monolitos. <br />
**Stateless:** Cada requisição deve ter o necessário para o server entender e responder a requisição. O server. O server não deve lembrar / armazenar estados. <br />
**Layered System:** O client acessa o endpoint sem saber como é implementado. <br />

# NodeJS

É um ambiente que permite rodar aplicações JS no server-side. Aplicações como envios de emails, segurança de aplicações, Micro serviços (funções isoladas para serem re-útilizadas), API, Scripts e Automatizações, e muito mais. <br />
NodeJS possui a vantagem de ser rápido e escalável. Usar JS tanto no front-end quanto no back-end. Grande comunidade de Desenvolvedores que desenvolvem e mantém grande acervo de blibliotecas. Utilizadas por muitas empresas. <br />

# Funcionamento do NodeJS

Cliente faz uma requisição de login (email + senha) <br />
NodeJS faz uma verificação: <br />
1º: Se email existe. <br />
2º: Se senha está correta. <br />
3º: Devolve um "crachá" com seus dados mais 1 token e permite entrada. <br />

analogia: <br />

**Event loop** do NodeJS é single thread e não bloqueante, ou seja, coloca as requisições em uma Call Stack / Fila / Pilha. <br />
Na Call Stack as funções de forma assíncrona são processadas e devolvidas a aplicação. <br />

# Projeto NodeJS

Para iniciar um projeto com NodeJS é necessário iniciar com comando npm: <br />

`npm init -y`

# Pacotes

Pacotes são trechos de códigos que podem ser usadas e re-útilizadas quando e onde necessários. <br />

# Pacotes internos do NodeJS

São módulos do próprio NodeJS como: <br />
**fs:** Módulo para trabalhar com criação, escrita, leitura e delete de arquivos. <br />
**path:** Módulo para trabalhar com caminhos de arquivos. <br />
**http:** Módulo para trabalhar rotas da aplicação. <br />

Além destes pacotes, NodeJS possui muito outros módulos para diversas finalidades. <br />

# Pacotes de 3º

São módulos desenvolvidos por outros Devs como: <br />
**express:** Módulo para trabalhar com criação de servidor web. <br />
**react-router-dom:** Módulo para trabalhar com rotas da aplicação. <br />
**http:** Módulo para trabalhar rotas da aplicação. <br />

Além destes pacotes, NodeJS possui muito outros módulos para diversas finalidades. <br />

# Pacotes internos da aplicação

São módulos criados para a aplicação durante o desenvolvimento: <br />
São criados e exportados com **module.exports** e importados com **import**. <br />

Além destes pacotes, a comunidade NPM possui muito outros módulos para diversas finalidades. <br />

# NPM - Node Package Manager

É o gerenciador de pacotes do NodeJS. Permite adiciona, atualizar e desinstalar pacotes na aplicação. <br />
Permite também rodar scripts / comandos de pacotes instalados na aplicação. <br />
É focado na instalação de pacotes. <br />

# NPX - Node Package Execute

É o executor de pacotes npm. Permite executar qualquer pacote que quiser do registro npm sem sequer instala-lo. <br />
É focado na execução de pacotes. <br />

# express

<pre>
  <code>
    const express = require("express");
    const server = express();
    const port = 3333;

    server.get("/", (req, res) => {
      res.send("Hello World - Express!");
    });

    server.listen(port, () => {
      console.log(`Express running in port: ${port}`);
    });
  </code>
</pre>

**Sscripts:** São comandos que executam um determinado código automatizado. <br />

`"server": "node --watch ./src/server.js",`

# Rotas

É o caminho entre o ponto A e o ponto B. <br />
https://meusevidor.com/**products**. <br />
Utiliza verbos HTTP (GET, POST, PUT / PATCH, DELETE). <br />

# Verbos HTTP

**GET:** Utilizado para **ler** dados da aplicação. <br />
**POST:** Utilizado para **criar** dados da aplicação. <br />
**PUT:** Utilizado para **atualizar** dados da aplicação. <br />
**PATCH:** Utilizado para **atualização parcial** dos dados da aplicação. <br />
**DELETE:** Utilizado para **deletar** dados da aplicação. <br />

# Status Code

São grupos de status que informam o status da aplicação. <br />

- **100 - 199:** São códigos **informativo**. <br />
- **200 - 299:** São códigos de **confirmação / sucesso**. <br />
- **300 - 399:** São códigos de **Redirecionamento server-side**. <br />
- **400 - 499:** São códigos de **erro no client-side**. <br />
- **500 - 599:** São códigos de **erro no server-side**. <br />

# req

https://meusevidor.com/**products/:id**. <br />
São valores passados na rota para uma ação expecifíca. <br />
Geralmente para requisitar algum dado. <br />
recuperar / capturar o parâmetro. <br />
`const { id } = req.params;`

# Query Params

https://meusevidor.com/**products?name="notebook"**. <br />
São valores passados na rota para uma ação expecifica. <br />
geralmente para recuperar um dado. <br />
recuperar / capturar o query params. <br />
`const { name, email, password } = req.query;`

# body

São dados / valores passados via "corpo", geralmente por formulários. <br />
Geralmente para inserir ou atualizar dados da aplicação. <br />
É preciso informar ao express que os dados virão em formato JSON. <br />

`server.use(express.json());`

É possível responder com:
`res.json({ name, email, password });`

# MVC - Models / Views / Controllers

- **Models:** É responsável pelo modelo da tabela que irá se relacionar com o DB. <br />
- **Views:** É responsável pela parte visual, mostrando os dados no client-side. <br />
- **Controllers:** É responsável por fazer o meio de campo entre MODELS e VIEWS. Processando e levando e trazendo dados entre eles. Geralmente é criado como class. que deve ter no máximo 5 métodos. index / GET, show / GET, create / POST, delete / DELETE. <br />

- **routes:** É responsável pelas rotas da aplicação, onde cada rota será responsável por repassar ao controller os dados da rota expecifica. (users, auth, products, etc). <br />
- **middleware:** São funções que ficam entre a requisição e a próxima função de uma determinada rota, ou seja, é um observer que entra em ação quando uma requisição e feita. <br />
  3º parâmetro "next()" tem a responsabilidade de hamar a próxima função. <br />
  Dentro do middleware é possível acessar os dados da função anterior e manipular para a próxima função. <br />

```js
function myMiddleware(req, res next){
  (...)

  next();
}

usersRoutes.post("/", myMiddleware, usersController.create);
```

analogia: <br />
Usuário inicia login <br/>
Porteiro / middleware faz verificação <br/>
Se usuário estiver registrado / autenticado <br/>
Porteiro / middleware fornece um crácha com seus dados + 1 token. <br/>

# MIGRATIONS

É uma forma de versionar / automatizar a criação de DBs e tabelas na inicialização da aplicação.
Facilitando criar, alterar ou deletar dados da base de dados. <br />
Possui 2 métodos: <br />
**UP:** Responsável por criar ou alterar algo no DB. <br />
**DOWN:** Responsável pelo rollback, ou seja, desfazer as alterações realizadas pela migration. <br />

# Autenticação

São as etapas que o usuário passa para acessar a aplicação. <br />
O back-end deve verificar se ele tem cadastro e se email e senha informados conferem com email e senha cadastrado no DB da aplicação. Se tudo estiver certo, o back-end devolve um token de autenticação "crachá" e todas as requisições feitas pelo usuário dentro da aplicação é verificado o token / "crachá" com um middleware de autenticação. <br />

# JWT / JSON WEB TOKEN

É um padrão de mercado que define um token no formato JSON para a troca de informações. <br />
Não é o mecanismo de autenticação. É um meio para a troca de informações no fluxo de autenticação. <br />
Um JWT é composto por 3 partes: <br />
`ijUE945kefK9CD.eyIxMJm0t9U7.Sfclj84gr2K1for4` <br />
**1 - parte:** `ijUE945kefK9CD.` - Representa o HEADER / CABEÇALHO, onde ficam algoritmo que gera o hasy e o tipo do token _JWT_. <br />
**2 - parte:** `eyIxMJm0t9U7` - Representa o PAYLOAD / CARGA, onde ficam o conteúdo do token, é possível inserir o ID que identifica o usuário expecifico e todos os seus outros dados pelo subject do método **signin()**. <br />
**3 - parte:** `Sfclj84gr2K1for4` - Representa o VERIFY SIGNATURE / VERIFICAÇÃO DE ASSINATURA, parte que garante a integridade do token. <br />

# CORS - Cross-origin Resource Sharing / Compartilhamento de Recurso com Origem Diferente

É um mecanismo utilizado pelos navegadores para compartilhar recursos entre diferentes origens. Faz uso de headers do HTTP para informar aos navegadores se determinado recurso pode ser ou não acessado.<br />
`npm i cors`

# Axios

É uma lib utilizada para trabalhar com requisições HTTP (GET, POST, ...)
`npm i axios`

# Deploy - Back-end

É implantar / enviar o projeto para deixar disponível / acessível em um determinado ambiente. <br />

- **Desenvolvimento:** Onde é desenvolvido a aplicação. <br />
- **Staging / Teste:** Cenário próximo do mundo real para testar a aplicação. <br />
- **Produção:** Onde fica disponível para os usuários acessarem a aplicação. <br />

**Render:** Serviço online que permite fazer deploy do back-end da aplicação. <br />

# Enviroment

São arquivos que guardam dados sensíveis (senhas, token, hash, ip db, etc). <br />
Geralmente é utilizado arquivo .env <br />
Variáveis é composta de KEY = Value
Arquivo .env deve ficar somente em ambiente de desenvolvimento e não disponível em repositórios como Bitbuket / Github. .env.examplo é um modelo com KEY= e valores vazios para ser preenchido por que irá utilizar / desenvolver. <br />

# PM2

É um gerenciador de processos, gerenciando e mantendo sempre a API rodando em produção
