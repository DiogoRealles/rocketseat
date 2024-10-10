import { ContainerButtonText } from './styles';

const Index = ({ title, isActive = false, ...rest }) => {
  return (
    <ContainerButtonText
      type="button"
      $isactive={isActive.toString()}
      {...rest}
    >
      {title}
    </ContainerButtonText>
  );
};

export default Index;
