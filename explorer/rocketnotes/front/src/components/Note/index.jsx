import { ContainerNote } from "./styles";

import Tag from "../Tag";

const index = ({ data, ...props }) => {
  return (
    <ContainerNote {...props}>
      <h1>{data.title}</h1>

      {data.tags && (
        <footer>
          {data.tags.map((tag) => (
            <Tag key={tag.id} title={tag.name} />
          ))}
        </footer>
      )}
    </ContainerNote>
  );
};

export default index;
