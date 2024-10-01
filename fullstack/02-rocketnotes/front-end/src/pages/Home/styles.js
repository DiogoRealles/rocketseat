import styled from 'styled-components';

export const ContainerHome = styled.div`
  width: 100%;
  height: 100vh;
  display: grid;
  grid-template-columns: 25rem auto;
  grid-template-rows: var(--containerHeaderHeight) 12.8rem auto 6.4rem;
  grid-template-areas: 'brand header' 'menu search' 'menu content' 'newnote content';
  background: ${({ theme }) => theme.colors.background_800};
`;

export const Brand = styled.div`
  grid-area: brand;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid ${({ theme }) => theme.colors.background_700};
  background: ${({ theme }) => theme.colors.background_900};

  > h1 {
    font-size: 2.4rem;
    color: ${({ theme }) => theme.colors.orange};
  }
`;

export const Menu = styled.ul`
  grid-area: menu;
  background: ${({ theme }) => theme.colors.background_900};
  padding-top: 6.4rem;
  text-align: center;

  > li {
    margin-bottom: 2.4rem;
  }
`;

export const Search = styled.div`
  grid-area: search;
  padding: 6.4rem 6.4rem 0;
`;

export const Content = styled.div`
  grid-area: content;
  padding-inline: 6.4rem;
  overflow-y: auto;
`;

export const NewNote = styled.button`
  grid-area: newnote;
  background: ${({ theme }) => theme.colors.orange};
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    margin-right: 0.8rem;
  }
`;
