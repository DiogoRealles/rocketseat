import styled from 'styled-components';

export const ContainerNoteItem = styled.div`
  display: flex;
  align-items: center;

  background-color: ${({ theme, isNew }) =>
    isNew ? 'transparent' : theme.colors.background_900};
  color: ${({ theme }) => theme.colors.gray_300};

  border: ${({ theme, isNew }) =>
    isNew ? `1px dashed ${theme.colors.gray_300}` : 'none'};

  margin-bottom: 0.8rem;
  border-radius: 1rem;
  padding-right: 1.6rem;

  > button {
    border: none;
    background: none;
  }

  .button-delete {
    color: ${({ theme }) => theme.colors.red};
  }

  .button-add {
    color: ${({ theme }) => theme.colors.orange};
  }

  > input {
    width: 100%;
    height: 5.6rem;
    padding: 1.2rem;
    color: ${({ theme }) => theme.colors.white};
    background: transparent;
    border: none;

    &::placeholder {
      color: ${({ theme }) => theme.colors.gray_300};
    }
  }
`;
