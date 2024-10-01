import styled from 'styled-components';

export const ContainerNew = styled.div`
  width: 100%;
  height: 100vh;
  display: grid;
  grid-template-rows: var(--containerHeaderHeight) auto;
  grid-template-areas: 'header' 'content';
`;

export const Form = styled.form`
  width: 100%;
  max-width: 55rem;
  margin: 3.8rem auto;

  > header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 3.6rem;

    a {
      font-size: 2rem;
      color: ${({ theme }) => theme.colors.gray_100};
    }
  }
`;
