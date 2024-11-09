import { ButtonContainer, ButtonVariant } from './Button.styles';

interface ButtonProps {
  variant?: ButtonVariant;
}

const Index = ({ variant = 'primary' }: ButtonProps) => {
  return <ButtonContainer variant={variant}>Button</ButtonContainer>;
};

export default Index;
