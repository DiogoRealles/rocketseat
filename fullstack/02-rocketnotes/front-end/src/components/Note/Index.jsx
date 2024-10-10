import { ContainerNote } from './styles';
import ContainerTag from '../Tags';

const Index = ({ data, ...rest }) => {
  return (
    <ContainerNote {...rest}>
      <h1>{data.title}</h1>

      {data.tags && (
        <footer>
          {data.tags.map((tag) => (
            <ContainerTag key={tag.id} title={tag.name} />
          ))}
        </footer>
      )}
    </ContainerNote>
  );
};

export default Index;
