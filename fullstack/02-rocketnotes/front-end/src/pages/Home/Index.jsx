import { ContainerHome, Brand, Menu, Search, Content, NewNote } from './styles';

import ContainerHeader from '../../components/Header/Index';
import ContainerButtonText from '../../components/ButtonText/Index';
import ContainerInput from '../../components/Input/Index';
import ContainerSection from '../../components/Section/Index';

import { FiPlus, FiSearch } from 'react-icons/fi';
import ContainerNote from '../../components/Note/Index';

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
        <ContainerInput
          icon={FiSearch}
          type="search"
          placeholder="Pesquisar pelo título"
        />
      </Search>
      <Content>
        <ContainerSection title="Minhas notas">
          <ContainerNote
            data={{
              title: 'ReactJS',
              tags: [
                { id: '1', name: 'ReactJS' },
                { id: '2', name: 'NodeJS' },
              ],
            }}
          />
          {/* <ContainerTag title="ReactJS" /> */}
        </ContainerSection>
      </Content>
      <NewNote to="/new">
        <FiPlus />
        Criar nota
      </NewNote>
    </ContainerHome>
  );
};

export default Index;
