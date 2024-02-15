import styled from "styled-components";

export const ContainerButton = styled.button`
  width: 100%;
  background: ${({ theme }) => theme.colors.orange};
  color: ${({ theme }) => theme.colors.background_800};
  height: 56px;
  border: 0;
  padding: 16px;
  margin-top: 16px;
  border-radius: 10px;
  font-weight: 500;

  &:disabled {
    opacity: 0.5;
    /* cursor: not-allowed; */
  }
`;
