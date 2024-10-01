import styled from 'styled-components';

export const ContainerInput = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  background: ${({ theme }) => theme.colors.background_900};
  color: ${({ theme }) => theme.colors.gray_300};
  margin-bottom: 0.8rem;
  border-radius: 1rem;

  > input {
    width: 100%;
    height: 5.6rem;
    padding: 1.2rem;
    background: transparent;
    color: ${({ theme }) => theme.colors.white};
    border: 0;

    &::placeholder {
      color: ${({ theme }) => theme.colors.gray_300};
    }
  }

  > svg {
    margin-left: 1.6rem;
  }
`;
