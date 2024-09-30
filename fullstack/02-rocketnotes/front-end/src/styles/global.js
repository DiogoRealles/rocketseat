import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
:root{
  --font-body: 'Roboto Slab', sans-serif;
  --containerHeaderHeight: 10.5rem;
}

html{
  font-size: 62.5%;
}

  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body{
    background: ${({ theme }) => theme.colors.background_800};
    color: ${({ theme }) => theme.colors.white};
    font-size: 1.6rem;

    -webkit-font-smoothing: antialiased;
  }

  body, input, button, textarea{
    font-family: var(--font-body);
    font-size: 1.6rem;
    outline: none;
  }

  a{
    text-decoration: none;
  }

  button, a{
    cursor: pointer;
    transition: all .3s ease-in-out;

    &:hover{
      filter: brightness(.9);
    }
  }

  img{
    max-width: 100%;
    object-fit: cover;
    vertical-align: middle;
  }
`;
