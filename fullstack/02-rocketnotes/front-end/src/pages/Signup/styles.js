import styled from 'styled-components';
import backgroundImg from '../../assets/background.png';

export const ContainerSignin = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: stretch;
`;

export const Form = styled.form`
  padding-inline: 13.6rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;

  > h1 {
    font-size: 4.8rem;
    color: ${({ theme }) => theme.colors.orange};
  }

  > h2 {
    font-size: 2.4rem;
    margin-block: 4.8rem;
  }

  > p {
    font-size: 1.4rem;
    color: ${({ theme }) => theme.colors.gray_100};
  }

  > a {
    margin-top: 12.4rem;
    color: ${({ theme }) => theme.colors.orange};
  }
`;

export const Background = styled.div`
  flex: 1;
  background: url(${backgroundImg}) no-repeat center/cover;
`;
