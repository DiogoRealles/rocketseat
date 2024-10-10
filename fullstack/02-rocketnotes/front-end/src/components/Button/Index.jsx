import { ContainerButton } from './styles';

const Index = ({ title, loading = false, ...rest }) => {
  return (
    <ContainerButton type="button" disabled={loading} {...rest}>
      {loading ? 'Carregando...' : title}
    </ContainerButton>
  );
};

export default Index;
