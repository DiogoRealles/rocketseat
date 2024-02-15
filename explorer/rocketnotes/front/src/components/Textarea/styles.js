import styled from "styled-components";

export const ContainerTextarea = styled.textarea`
  width: 100%;
  height: 150px;
  background: ${({ theme }) => theme.colors.background_900};
  color: ${({ theme }) => theme.colors.white};
  border: none;
  resize: none;
  margin-bottom: 8px;
  border-radius: 10px;
  padding: 16px;

  &::placeholder {
    color: ${({ theme }) => theme.colors.gray_100};
  }
`;
