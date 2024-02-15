import styled from "styled-components";
import backgroundImg from "../../assets/background.png";

export const ContainerSignIn = styled.div`
  height: 100vh;
  display: flex;
  align-items: stretch;
`;

export const Form = styled.form`
  padding-inline: 136px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;

  > h1 {
    font-size: 48px;
    color: ${({ theme }) => theme.colors.orange};
  }

  > h2 {
    font-size: 24px;
    margin-block: 48px;
  }

  > p {
    font-size: 14px;
    color: ${({ theme }) => theme.colors.gray_100};
  }

  > a {
    margin-top: 124px;
    color: ${({ theme }) => theme.colors.orange};
  }
`;

export const Background = styled.div`
  flex: 1;
  background: url(${backgroundImg}) no-repeat center / cover;
`;
