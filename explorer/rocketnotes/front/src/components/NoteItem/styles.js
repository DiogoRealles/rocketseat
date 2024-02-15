import styled from "styled-components";

export const ContainerNoteItem = styled.div`
  display: flex;
  align-items: center;
  background: ${({ theme, $isnew }) =>
    $isnew ? "transparent" : theme.colors.background_900};
  color: ${({ theme }) => theme.colors.gray_300};
  border: ${({ theme, $isnew }) =>
    $isnew ? `1px dashed ${theme.colors.gray_300}` : "none"};
  margin-bottom: 8px;
  border-radius: 10px;
  padding-right: 16px;

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
    height: 56px;
    padding: 12px;
    color: ${({ theme }) => theme.colors.white};
    background: transparent;
    border: none;

    &::placeholder {
      color: ${({ theme }) => theme.colors.gray_100};
    }
  }
`;
