import { ContainerButtonText } from './styles';

const Index = ({ label, isActive = false, ...rest }) => {
  return (
    <ContainerButtonText
      type="button"
      $isactive={isActive.toString()}
      {...rest}
    >
      {label}
    </ContainerButtonText>
  );
};

export default Index;
