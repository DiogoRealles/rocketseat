import { ContainerTag } from './styles';

const Index = ({ title, ...rest }) => {
  return <ContainerTag {...rest}>{title}</ContainerTag>;
};

export default Index;
