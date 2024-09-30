import { Container } from './styles';
import ContainerHeader from '../../components/Header/Index';
import ContainerButton from '../../components/Button/Index';

const Index = () => {
  return (
    <Container>
      <div className="">
        <ContainerHeader />
        <ContainerButton label="Voltar" />
      </div>
      <h1>Details</h1>
    </Container>
  );
};

export default Index;
