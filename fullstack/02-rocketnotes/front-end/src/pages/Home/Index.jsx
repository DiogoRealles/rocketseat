import { ContainerHome, Brand, Menu, Search, Content, NewNote } from './styles';

import ContainerHeader from '../../components/Header/Index';
import ContainerButtonText from '../../components/ButtonText/Index';

const Index = () => {
  return (
    <ContainerHome>
      <Brand>
        <h1>Rocketnotes</h1>
      </Brand>
      <ContainerHeader />
      <Menu>
        <li>
          <ContainerButtonText label="Todos" isActive />
        </li>
        <li>
          <ContainerButtonText label="ReactJS" />
        </li>
        <li>
          <ContainerButtonText label="NodeJS" />
        </li>
      </Menu>
      <Search>
        <h2>Search</h2>
      </Search>
      <Content>
        <h2>Content</h2>
      </Content>
      <NewNote>
        <h2>NewNote</h2>
      </NewNote>
    </ContainerHome>
  );
};

export default Index;
