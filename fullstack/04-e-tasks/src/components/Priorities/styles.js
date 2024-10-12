import styled from 'styled-components';
import { DEVICE_BREAKPOINTS } from '../../styles/deviceBreakpoints';

export const Container = styled.section`
  padding: 3.2rem;
`;

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;

  > h1 {
    font-size: 2.4rem;
    color: ${({ theme }) => theme.COLORS.RED_200};
    display: flex;
    align-items: center;
    gap: 0.7rem;
  }

  > small {
    color: ${({ theme }) => theme.COLORS.GRAY_200};
  }
`;

export const Tasks = styled.div`
  border: 0.1rem dashed ${({ theme }) => theme.COLORS.RED_200};
  min-height: 15.4rem;
  border-radius: 0.7rem;
  margin-top: 1.6rem;

  display: flex;
  gap: 1.6rem;
  padding: 2.4rem;
  flex-wrap: wrap;

  @media screen and (max-width: ${DEVICE_BREAKPOINTS.MD}) {
    justify-content: center;
    align-items: center;
  }
`;
