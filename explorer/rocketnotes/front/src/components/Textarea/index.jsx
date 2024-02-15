import { ContainerTextarea } from "./styles";

const index = ({ value, ...props }) => {
  return <ContainerTextarea {...props}>{value}</ContainerTextarea>;
};

export default index;
