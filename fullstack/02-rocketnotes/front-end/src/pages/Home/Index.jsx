import { ContainerHome, Brand, Menu, Search, Content, NewNote } from './styles';

import ContainerHeader from '../../components/Header/Index';
import ContainerButtonText from '../../components/ButtonText/Index';
import ContainerInput from '../../components/Input/Index';
import ContainerSection from '../../components/Section/Index';

import { FiPlus, FiSearch } from 'react-icons/fi';
import ContainerNote from '../../components/Note/Index';
import { useEffect, useState } from 'react';
import { api } from '../../services/api';
import { useNavigate } from 'react-router-dom';

const Index = () => {
  const navigate = useNavigate();

  const [tags, setTags] = useState([]);
  const [tagsSelected, setTagsSelected] = useState([]);
  const [search, setSearch] = useState('');
  const [notes, setNotes] = useState([]);

  function handleTagSelected(tagName) {
    if (tagName === 'all') {
      return setTagsSelected([]);
    }

    const alreadySelected = tagsSelected.includes(tagName);

    if (alreadySelected) {
      const filteredTags = tagsSelected.filter((tag) => tag !== tagName);
      setTagsSelected(filteredTags);
    } else {
      setTagsSelected((prevState) => [...prevState, tagName]);
    }
  }

  function handleDetails(id) {
    navigate(`/details/${id}`);
  }

  useEffect(() => {
    async function fetchTags() {
      const res = await api.get('/tags');

      setTags(res.data);
    }

    fetchTags();
  }, []);

  useEffect(() => {
    async function fetchNotes() {
      const res = await api.get(`/notes?title=${search}&tags=${tagsSelected}`);

      setNotes(res.data.notesWithTags);
    }

    fetchNotes();
  }, [tagsSelected, search]);

  return (
    <ContainerHome>
      <Brand>
        <h1>Rocketnotes</h1>
      </Brand>
      <ContainerHeader />
      <Menu>
        <li>
          <ContainerButtonText
            title="Todos"
            onClick={() => handleTagSelected('all')}
            $isactive={tagsSelected.length === 0}
          />
        </li>
        {tags &&
          tags.map((tag) => (
            <li key={String(tag.id)}>
              <ContainerButtonText
                title={tag.name}
                onClick={() => handleTagSelected(tag.name)}
                $isactive={tagsSelected.includes(tag.name)}
              />
            </li>
          ))}
      </Menu>
      <Search>
        <ContainerInput
          icon={FiSearch}
          type="search"
          placeholder="Pesquisar pelo título"
          onChange={({ target }) => setSearch(target.value)}
        />
      </Search>
      <Content>
        <ContainerSection title="Minhas notas">
          {notes.map((note) => (
            <ContainerNote
              key={String(note.id)}
              data={note}
              onClick={() => handleDetails(note.id)}
            />
          ))}
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
