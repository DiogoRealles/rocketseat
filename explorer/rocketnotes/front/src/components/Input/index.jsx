import { ContainerInput } from "./styles";

const index = ({ icon: Icon, ...props }) => {
  return (
    <ContainerInput>
      {Icon && <Icon size={20} />}
      <input {...props} />
    </ContainerInput>
  );
};

export default index;
