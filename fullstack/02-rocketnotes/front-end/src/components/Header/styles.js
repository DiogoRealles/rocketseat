import styled from 'styled-components';

export const ContainerHeader = styled.header`
  grid-area: header;
  width: 100%;
  border-bottom: 0.1rem solid ${({ theme }) => theme.colors.background_700};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-inline: 8rem;
`;

export const Profile = styled.div`
  width: 100%;
  display: flex;
  align-items: center;

  > img {
    width: 5.6rem;
    height: 5.6rem;
    border-radius: 50%;
  }

  > div {
    display: flex;
    flex-direction: column;
    margin-left: 1.6rem;
    line-height: 2.4rem;

    span {
      font-size: 1.6rem;
      color: ${({ theme }) => theme.colors.gray_100};
    }

    strong {
      font-size: 1.8rem;
      color: ${({ theme }) => theme.colors.white};
    }
  }
`;

export const Logout = styled.div`
  border: none;
  background: none;

  > svg {
    color: ${({ theme }) => theme.colors.gray_100};
    font-size: 3.6rem;
  }
`;
