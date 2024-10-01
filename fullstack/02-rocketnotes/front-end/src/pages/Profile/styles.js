import styled from 'styled-components';

export const ContainerProfile = styled.div`
  width: 100%;

  > header {
    width: 100%;
    height: 14.4rem;
    background: ${({ theme }) => theme.colors.background_900};
    display: flex;
    align-items: center;
    padding-inline: 12.4rem;

    svg {
      color: ${({ theme }) => theme.colors.gray_100};
      font-size: 2.4rem;
    }
  }
`;

export const Avatar = styled.div`
  position: relative;
  width: 18.6rem;
  height: 18.6rem;
  overflow: hidden;
  margin: -12.4rem auto 3.2rem;

  > img {
    width: 18.6rem;
    height: 18.6rem;
    border-radius: 50%;
  }

  > label {
    position: absolute;
    bottom: 0.7rem;
    right: 0.7rem;
    width: 4.8rem;
    height: 4.8rem;
    border-radius: 50%;
    background: ${({ theme }) => theme.colors.orange};
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;

    input {
      display: none;
    }

    svg {
      width: 2rem;
      height: 2rem;
      color: ${({ theme }) => theme.colors.background_800};
    }
  }
`;

export const Form = styled.form`
  width: 100%;
  max-width: 34rem;
  margin: 3rem auto 0;

  > div:nth-child(4) {
    margin-top: 2.4rem;
  }
`;
