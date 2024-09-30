import styled from 'styled-components';

export const ContainerTag = styled.span`
  font-size: 1.2rem;
  padding: 0.5rem 1.4rem;
  border-radius: 0.5rem;
  margin-right: 0.6rem;
  background: ${({ theme }) => theme.colors.orange};
  color: ${({ theme }) => theme.colors.background_900};
`;
