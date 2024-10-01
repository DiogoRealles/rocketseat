import { ContainerTextarea } from './styles';

const Index = ({ value, ...rest }) => {
  return <ContainerTextarea {...rest}>{value}</ContainerTextarea>;
};

export default Index;
