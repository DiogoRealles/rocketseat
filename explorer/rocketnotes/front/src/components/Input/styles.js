import styled from "styled-components";

export const ContainerInput = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  background: ${({ theme }) => theme.colors.background_900};
  color: ${({ theme }) => theme.colors.gray_300};
  margin-bottom: 8px;
  border-radius: 10px;

  > input {
    width: 100%;
    height: 56px;
    padding: 12px;
    background: transparent;
    border: 0;
    color: ${({ theme }) => theme.colors.white};

    &::placeholder {
      color: ${({ theme }) => theme.colors.gray_100};
    }
  }

  > svg {
    margin-left: 16px;
  }
`;
