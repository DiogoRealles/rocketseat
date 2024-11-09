import styled, { css } from 'styled-components';

export type ButtonVariant = 'primary' | 'secondary' | 'danger';

interface ButtonContainerProps {
  variant: ButtonVariant;
}

const buttonVariants = {
  primary: 'purple',
  secondary: 'orange',
  danger: 'tomato',
};

export const ButtonContainer = styled.button<ButtonContainerProps>`
  width: 200px;
  height: 80px;
  color: ${(props) => props.theme.white};
  background: ${(props) => props.theme.secondary};
  border-radius: 6px;
  border: none;

  /* ${(props) => {
    return css`
      background-color: ${buttonVariants[props.variant]};
    `;
  }} */
`;
