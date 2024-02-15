import { ContainerButton } from "./styles";

const index = ({ title, loading = false, ...props }) => {
  return (
    <ContainerButton type="button" disabled={loading} {...props}>
      {loading ? "Carregando..." : title}
    </ContainerButton>
  );
};

export default index;
