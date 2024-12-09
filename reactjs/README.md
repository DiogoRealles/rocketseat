![ReactJS](./cover.png)

# ReactJS

<details>
  <summary>O que é ReactJS</summary>
  É uma ferramenta que auxilia na construção de UIs altamente interativas, ReactJS pode ser acoplados a outros ambientes VR, TVs, Mobile, etc. <br />
  <b>SPA - Single Page Application / Aplicação de Página Única:</b> É um conceito de se trabalhar com a parte visual diferente do conceito tradicional como páginas estáticas e/ou tendo a necessidade de cada requisição recarregar todo o projeto para trazer novos dados. Hoje em dia com ferraments/SPAs  é possível recarregar somente onde os dados necessitam de atualizações. <br />
  <b>Estático:</b> O conteúdo/infomações não mudam com frequência, não faz requisições com frequência, geralmente os dados/informações da inseridos de forma manual no código/hardcode. <br />
  Geralmente construídos com HTML, CSS (framework CSS) e JS. <br />
  <b>Dinâmico:</b> O conteúdo/informações mudam com frequência, tem necessidade de estar fazendo requisições para manter os dados atualizados. <br />
  Geralmente construído com frameworks front-end + frameworks Back-end + banco de dados. <br />
  <b>SSR - Server Side Rendering / Renderização do Lado do Servidor:</b> É um Rendering pattern que consiste em renderizar o conteúdo no server-side, ou seja, na requisição das informações o servidor contém tanto código Back-end como Front-end, então ele processa os dados e gera o Front-end enviando os dados solicitados. <br />
  <b>CSR - Client Side Rendering / Renderização do Lado do Cliente:</b> É um Rendering pattern que consiste em renderizar o conteúdo no client-side, ou seja, na requisição das informações o servidor processa os dados e envia geralmente em JSON para serem exibidos no Front-end (Desktop, Mobile, VR, etc). <br />
  <b>Babel:</b> ReactJS utiliza este transpiler para converter código ESNext para uma versão anterior que os browsers tenham suporte. <br />
  <b>Webpack:</b> ReactJS utiliza este bundler para unir diversos arquivos e compor a aplicação. <br />
  <b>Vite:</b> É uma ferramenta mais performática que auxilia a construção de Front-end, possui internamente transpiler e bundler. <br />
  <b>npm create vite@latest -- --template NAME_PROJECT react:</b> Comando para criar projeto ReactJS com Vite. <br />
  <b>npm i:</b> Comando para instalar pacotes no projeto ReactJS com Vite. <br />
</details>
<br />

<details>
  <summary>O que é Components</summary>
  É uma forma de desacoplar um parte da interface e que possa ser replicado em outras partes com informações diferentes. <br />
  É composto por uma função que retorna "HTML + JS = .jsx". <br />
  ReactJS permite criar layouts para serem evitar re-renderização de partes como: Header, Footer e outros componentes "fixos". <br />
  <b>Outlet:</b> É um método que "injeta" os componentes/conteúdo. <br />
</details>
<br />

<details>
  <summary>O que são props</summary>
  São valores que os componentes podem receber para transitar valores entre sí. <br />
</details>
<br />

<details>
  <summary>O que são hoocks</summary>
  <b>states</b>. <br />
  <b>useEffect</b>. <br />
  <b>custom Hooks</b>. <br />
</details>
<br />

<details>
  <summary>O que é CSS in JS?</summary>
  É uma forma de estilizar os componentes com sintaxe JS. <br />
  <b>Styled-Components:</b> É um pacote que permite criar components a partir da estilização com CSS in JS. <br />
  Styled-Components possui algumas vantagens como: auxiliar na estilização dinâmica dos componentes, nomear classes únicas evitando conflitos de estilos. <br />
  <b>ThemeProvider:</b> É um context do styled-components que aplica o tema no projeto. <br />
  <b>styled.d.ts:</b> É um arquivo de definição de tipagem para declarar e agregar propriedades de variáveis de estilos na tipagem. <br />
  <b></b>. <br />
  <b>Global:</b> É um arquivo que permite definir variáveis de estilos globais para o projeto. É importante que esteja dentro do ThemeProvider para ter acesso as váriaveis de estilo da tipagem. <br />
  <b>npm i styled-components:</b> Comando para instalar styled-components em projeto ReactJS. <br />
  <b>npm i @types/styled-components -D:</b> Comando para instalar os tipos do styled-components em projeto ReactJS. <br />
</details>
<br />

<details>
  <summary>O que é ESLint (ECMAScript Linting)?</summary>
  É um processo de validar que o código segue um padrão que pode ser definido pela equipe Exemplo: (tab: 2, ; no final, aspas simples (' ') etc.). <br />
</details>
<br />

<details>
  <summary>O que é Router DOM?</summary>
  É um pacote do ReactJS para lidar com várias rotas. <br />
  <b>BrowserRouter:</b> É um context que envolve as rotas. <br />
  <b>Routes:</b> É um método que agrupa os componentes das rotas. <br />
  <b>Route:</b> É um método que fornece a rota para uma página. Recebe uma prop path e element <br />
  <b>:</b> . <br />
</details>
<br />

<details>
  <summary>O que é React Hook Form?</summary>
  É um pacote utilizado em ReactJS que auxilia a trabalhar com formulários no React. Possui diversos métodos como useForm, etc. <br />
  Permite trabalhar em formulários de forma controlled e uncontrolled. <br />
  <b>controlled:</b> É a forma de controlar cada estado dos inputs com "onChange". <br />
  Vantagem: de gerenciar estados em tempo real e refletir alterações baseados nos estados gerenciados. <br />
  Desvantagem: Renderiza o componente a cada alteração do valor do estado. <br />
  <b>uncontrolled:</b> É a forma de controlar os estados "agrupados" ao enviar um formulário por exemplo. <br />
  Vantagem: Renderiza o componente somente ao utilizar o estado "agrupado". <br />
  Desvantagem: Perde a flexibilidade de refletir alterações em tempo real. <br />
  <b>useForm:</b> Basicamente é um método que monitora um formulário associado a este método. <br />
  <b>register:</b> É um método do useForm com propriedades de campos de formulario (min, max, onChange, value, etc). <br />
  <b>watch:</b> É um método do useForm que monitora um campo de formulário de forma controlled. <br />
  <b>handleSubmit:</b> É um método do useForm que recebe outra função como parâmetro para processar o formulário de forma unControlled. <br />
  <b>reset:</b> É um método do useForm que reseta os valores dos campos para o valor informado em defaulValues. <br />
</details>
<br />

<details>
  <summary>O que é React Hook Form resolvers?</summary>
  É um pacote utilizado em conjunto com React Hook Form Integrando-o com ZOD, YUP e outros módulos. <br />
</details>
<br />

<details>
  <summary>O que é ZOD?</summary>
  É um pacote utilizado com React para validação de formulários. <br />
  Pemite definir os tipos dos campos e sua obrigatoriedade ou opcionalidade. <br />
  <b>infer:</b> Pemite inferir tipagem aos campos dos formulários a partir do schema do Object. <br />
</details>
<br />

<details>
  <summary>O que é useState?</summary>
  É uma variável especial no ReactJS, pemite armazenar um valor e quando alterado renderizar novamente o componente. <br />
  <b>state:</b> É a variável especial, onde fica o valor inicial. <br />
  <b>setState:</b> É um método especial, responsável por atualizar o valor do state inicial. <br />
</details>
<br />

<details>
  <summary>O que é useEffect?</summary>
  É um método especial do ReactJS que permite renderizar um componente sempre que um state é atualizado. Possui um bloco de código e um array de dependências, sempre que um state desse array ser atualizado, re-renderiza o componente. <br />
</details>
<br />

<details>
  <summary>O que é Context API?</summary>
  É uma bolha que envolve todos os componentes que necessitam de determinadas informações/estados e métodos, sem necessitar de passar vários estados/métodos por props, evitando "Drop drilling". Pemite compartilhar informações entre vários componentes ao mesmo tempo. <br />
  <b>createContext:</b> É uma função que cria context e possui os states com valores iniciais. <br />
  <b>useContext:</b> É um hook que permite utilizar as informações do context em diferentes componentes. <br />
  <b>Provider:</b> É um método do context que permite compartilhar os valores com diferentes componentes englobados. <br />
</details>
<br />

<details>
  <summary>O que é useReducer?</summary>
  É um hook utilizado para agrupar funções. Recebe dois parêmetros 1 - Função que por sua vez recebe dois parâmetros também. <br />
  1.1 - Valor atual. <br />
  1.2 - Action, qual ação o usuário deseja realizar para alterar o estado, a partir do dispatch. <br />
  2 - Valor inicial. <br />
  <b>Provider:</b> . <br />
</details>
<br />
