import { ContainerButtonText } from "./styles";

const index = ({ title, isActive = false, ...props }) => {
  return (
    <ContainerButtonText type="button" $isactive={isActive} {...props}>
      {title}
    </ContainerButtonText>
  );
};

export default index;
