import { FiPlus, FiSearch } from "react-icons/fi";
import { ContainerHome, Brand, Menu, Search, Content, NewNote } from "./styles";
import { api } from "../../services/api";
import Header from "../../components/Header";
import ContainerButtonText from "../../components/ButtonText";
import Input from "../../components/Input";
import ContainerSection from "../../components/Section";
import Note from "../../components/Note";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const index = () => {
  const [search, setSearch] = useState("");
  const [tags, setTags] = useState([]);
  const [tagsSelected, setTagsSelected] = useState([]);
  const [notes, setnotes] = useState([]);

  const navigate = useNavigate();

  function handleTagSelected(tagName) {
    if (tagName === "all") {
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
      const res = await api.get("/tags");
      setTags(res.data);
    }

    fetchTags();
  }, []);

  useEffect(() => {
    async function fetchNotes() {
      const res = await api.get(`/notes?title=${search}&tags=${tagsSelected}`);

      setnotes(res.data);
    }

    fetchNotes();
  }, [tagsSelected, search]);

  return (
    <ContainerHome>
      <Brand>
        <h1>Rocketnotes</h1>
      </Brand>

      <Header />

      <Menu>
        <li>
          <ContainerButtonText
            title="Todos"
            isActive={tagsSelected.length === 0}
            onClick={() => handleTagSelected("all")}
          />
        </li>
        {tags &&
          tags.map((tag) => (
            <li key={String(tag.id)}>
              <ContainerButtonText
                title={tag.name}
                onClick={() => handleTagSelected(tag.name)}
                isActive={tagsSelected.includes(tag.name)}
              />
            </li>
          ))}
      </Menu>

      <Search>
        <Input
          type="search"
          placeholder="Pesquisar pelo título"
          onChange={({ target }) => setSearch(target.value)}
          icon={FiSearch}
        />
      </Search>

      <Content>
        <ContainerSection title="Minhas notas">
          {notes.map((note) => (
            <Note
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

export default index;
