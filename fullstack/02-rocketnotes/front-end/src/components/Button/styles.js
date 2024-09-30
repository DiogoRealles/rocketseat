import styled from 'styled-components';

export const ContainerButton = styled.button`
  width: 100%;
  background: ${({ theme }) => theme.colors.orange};
  color: ${({ theme }) => theme.colors.background_800};
  height: 5.6rem;
  border: 0;
  padding: 0 1.6rem;
  margin-top: 1.6rem;
  border-radius: 1rem;
  font-weight: 500;

  &:disabled {
    opacity: 0.5;
  }
`;
