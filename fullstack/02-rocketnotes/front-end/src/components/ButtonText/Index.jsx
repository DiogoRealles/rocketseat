import { ContainerButtonText } from './styles';

const Index = ({ label, isActive = false, ...rest }) => {
  return (
    <ContainerButtonText type="button" isActive={isActive} {...rest}>
      {label}
    </ContainerButtonText>
  );
};

export default Index;
