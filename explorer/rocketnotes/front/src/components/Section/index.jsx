import { ContainerSection } from "./styles";

const index = ({ title, children }) => {
  return (
    <ContainerSection>
      <h2>{title}</h2>
      {children}
    </ContainerSection>
  );
};

export default index;
