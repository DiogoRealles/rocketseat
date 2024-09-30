import { ContainerSection } from './styles';

const Index = ({ title, children }) => {
  return (
    <ContainerSection>
      <h2>{title}</h2>
      {children}
    </ContainerSection>
  );
};

export default Index;
