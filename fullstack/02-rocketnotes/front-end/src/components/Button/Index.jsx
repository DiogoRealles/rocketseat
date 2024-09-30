import { ContainerButton } from './styles';

const Index = ({ label, loading = false, ...rest }) => {
  return (
    <ContainerButton type="button" disabled={loading} {...rest}>
      {loading ? 'Carregando...' : label}
    </ContainerButton>
  );
};

export default Index;
