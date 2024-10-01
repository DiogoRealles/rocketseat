import styled from 'styled-components';

export const ContainerButtonText = styled.button`
  background: none;
  color: ${({ theme, $isactive }) =>
    $isactive ? theme.colors.orange : theme.colors.gray_100};
  border: none;
  font-size: 1.6rem;
`;
