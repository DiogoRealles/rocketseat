import { ContainerTag } from "./styles";

const index = ({ title, ...props }) => {
  return <ContainerTag {...props}>{title}</ContainerTag>;
};

export default index;
