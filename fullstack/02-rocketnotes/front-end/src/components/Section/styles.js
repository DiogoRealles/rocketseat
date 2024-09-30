import styled from 'styled-components';

export const ContainerSection = styled.section`
  margin-block: 2.8rem;

  > h2 {
    border-bottom: 1px solid ${({ theme }) => theme.colors.background_700};
    padding-bottom: 1.6rem;
    margin-bottom: 2.8rem;
    color: ${({ theme }) => theme.colors.gray_100};
    font-size: 2rem;
    font-weight: 400;
  }
`;
