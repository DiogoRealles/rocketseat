import styled from "styled-components";
import { Link } from "react-router-dom";

export const ContainerHeader = styled.header`
  grid-area: header;
  width: 100%;
  height: 105px;
  border: 1px solid ${({ theme }) => theme.colors.background_700};
  display: flex;
  justify-content: space-between;
  padding: 0 80px;
`;

export const Profile = styled(Link)`
  display: flex;
  align-items: center;
  > img {
    width: 56px;
    height: 56px;
    border-radius: 50%;
  }

  > div {
    display: flex;
    flex-direction: column;
    margin-left: 16px;
    line-height: 24px;

    span {
      font-size: 14px;
      color: ${({ theme }) => theme.colors.gray_100};
    }

    strong {
      font-size: 18px;
      color: ${({ theme }) => theme.colors.white};
    }
  }
`;

export const Logout = styled.button`
  border: none;
  background: none;

  > svg {
    color: ${({ theme }) => theme.colors.gray_100};
    font-size: 36px;
  }
`;
