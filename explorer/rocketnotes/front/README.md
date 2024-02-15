# Rocketseat - Explorer - Rocketnotes - Front-end

![alt text](stack.png)

# React

É uma lib / framework JavaScript para criar UIs, sua característica é não ser opinativo, ou seja, não tem uma estrutura / arquitetura de projeto rigida a ser seguido. <br />
É declarativo, ou seja, cria views simples para cada estado da aplicação, renderizando somentes os componentes necessários. <br />
É baseado em componentes, ou seja, códigos encapsulados com seus próprios estados podendo ser combinados com outros componentes. <br />

# Vite

É um bootstrap, ou seja, um setup pronto para agilizar o desenvolvimento da aplicação. <br />
Seu diferencial é ser mais rápido e performático em relação ao Create React App. <br />
`npm create vite@latest` <br />

# SPA

**Single Page Application / Aplicação de Página Única** é uma estratégia de aplicações renderizarem 1 única página, e as demais serem renderizadas na página root / index de forma dinâmica oferecendo boa experiência e performance na aplicação. <br />

# Components

São trecho de códigos encapsulados em funções que retornam JSX. <br />
Um componente só pode retornar 1 elemento (podendo ter outros elementos dentro deste único elemento, como no fragment). <br />
`<></>: fragment`

# JSX / TSX

É a extenção usada pelo ReactJS que indica que será retornado tanto **HTML** como **JS**. <br />

# React Router DOM

É uma lib externa que auxília nas rotas em projetos **ReactJS**

# Styled-components

É um pré-processador de CSS que evita colisão de estilo, ou seja, impede que um estilo interfira em outra parte do projeto. <br />
Bom desempenho, por funcionar diretamente nos componentes, analisa o que será usados e os adicionados após a interação do usuário, diminuindo o código final. <br />
Permite estilo dinâmico, adaptando os estilos baseado na props recebidas, é possível criar estilos dinâmicos de forma fácil. <br />
Mantem o estilo no contexto do componente, facilitando o desenvolvimento e manutenção <br />
`npm i styled-components`

# Hooks

São funções internas do ReactJS que permite trabalhar os dados e seus estados. <br />
principais hooks: <br />
**useState:** Responsável por inicializar uma "variável" para reter os dados entre as renderizações. <br /> Possui no 2º param uma função de estado para atulalizar a "variável". <br />
**useEffect:** Responsável por disparar / observar um estado ao iniciar / atualizar um componente. Pode receber um array com estados / dependências ao atualizar irá re-renderizar o component. <br />
**useRef:** Responsável por... <br />
**useCallback:** Responsável por... <br />
**...:** .... <br />

# Context

É uma "bolha" que envolve o(a)s components / "partes" para poder transitar os dados entre components. <br />
**createContext:** Utilizado para criar o contexto, que irá envolver os components desejados, afim de compartilhar os dados entre components. <br /> <br />
**provider:** Utilizado para prover os dados que será compartilhados. <br />
**useContext:** Utilizado para usar o contexto, . <br />

# LocalStorage

Permite armazenar informações no navegador du usuário. <br />
trabalha com **key** e **value** as informações são guardadas em textos e para recuperar é necessário parsear para object. <br />
**localStorage.setItem():** Método para inserir key e valor no localStorage. <br />
**localStorage.getItem():** Método para recuperar valores pela key do localStorage. <br />
**localStorage.removeItem():** Método para remover valores pela key do localStorage. <br />

# Deploy Front-end

# Deploy

É implantar / enviar o projeto para deixar disponível / acessível em um determinado ambiente. <br />

**Netlify | Vercel | Github Pages:** Serviços online que permite fazer deploy do front-end da aplicação. <br />
