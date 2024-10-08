import { ContainerHome, Brand, Menu, Search, Content, NewNote } from './styles';

import ContainerHeader from '../../components/Header/Index';
import ContainerButtonText from '../../components/ButtonText/Index';
import ContainerInput from '../../components/Input/Index';
import ContainerSection from '../../components/Section/Index';

import { FiPlus, FiSearch } from 'react-icons/fi';
import ContainerNote from '../../components/Note/Index';
import { useEffect, useState } from 'react';
import { api } from '../../services/api';

const Index = () => {
  const [tags, setTags] = useState([]);
  const [tagsSelected, setTagsSelected] = useState([]);

  function handleTagSelected(tagName) {
    const alreadySelected = tagsSelected.includes(tagName);

    if (alreadySelected) {
      const filteredTags = tagsSelected.filter((tag) => tag !== tagName);
      setTagsSelected(filteredTags);
    } else {
      setTagsSelected((prevState) => [...prevState, tagName]);
    }
  }

  useEffect(() => {
    async function fetchTags() {
      const res = await api.get('/tags');

      setTags(res.data);
    }

    fetchTags();
  }, []);

  return (
    <ContainerHome>
      <Brand>
        <h1>Rocketnotes</h1>
      </Brand>
      <ContainerHeader />
      <Menu>
        <li>
          <ContainerButtonText
            label="Todos"
            onClick={() => handleTagSelected('all')}
            isActive={tagsSelected.length === 0}
          />
        </li>
        {tags &&
          tags.map((tag) => (
            <li key={String(tag.id)}>
              <ContainerButtonText
                label={tag.name}
                onClick={() => handleTagSelected(tag.name)}
                isActive={tagsSelected.includes(tag.name)}
              />
            </li>
          ))}
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
