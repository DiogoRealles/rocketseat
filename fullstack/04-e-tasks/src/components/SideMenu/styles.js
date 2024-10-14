import styled from 'styled-components';
import { DEVICE_BREAKPOINTS } from '../../styles/deviceBreakpoints';

export const Container = styled.aside`
  grid-area: menu;
  background-color: ${({ theme }) => theme.COLORS.GRAY_700};
  width: 100%;
  height: 100vh;

  display: flex;
  flex-direction: column;

  @media screen and (max-width: ${DEVICE_BREAKPOINTS.MD}) {
    grid-area: none;
    position: absolute;
    z-index: 1;
    transform: translateX(-100%);
    transition: all 0.3s ease-in-out;

    &[data-menu-is-open='true'] {
      transform: translateX(0);
    }
  }
`;

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  padding: 3.2rem 2.4rem;
`;

export const Title = styled.h1`
  display: flex;
  align-items: center;
  gap: 0.7rem;
  color: ${({ theme }) => theme.COLORS.BLUE_200};
  font-size: 2.4rem;
`;

export const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  flex: 1;

  > a {
    color: ${({ theme }) => theme.COLORS.GRAY_100};
    display: flex;
    align-items: center;
    gap: 0.7rem;
    padding-left: 2.4rem;
    height: 5.6rem;
    font-size: 1.6rem;

    &[data-menu-active='true'] {
      background-color: ${({ theme }) => theme.COLORS.BLUE_200};
      color: ${({ theme }) => theme.COLORS.BLUE_600};
    }
  }
`;

export const Footer = styled.footer`
  padding: 2.4rem;
  display: flex;
  align-items: center;
  gap: 0.7rem;

  > img {
    width: 4rem;
    height: 4rem;
    border-radius: 2.2rem;
  }

  > div {
    display: flex;
    flex: 1;
    flex-direction: column;
  }

  > div strong {
    font-size: 1.4rem;
  }
  > div small {
    font-size: 1.2rem;
  }
`;

export const Button = styled.button`
  background-color: transparent;
  border: none;

  > svg {
    font-size: 2rem;
    color: ${({ theme }) => theme.COLORS.GRAY_300};
  }
`;
