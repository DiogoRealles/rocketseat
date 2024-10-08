import { ContainerNew, Form } from './styles';

import ContainerHeader from '../../components/Header/Index';
import ContainerInput from '../../components/Input/Index';
import ContainerTextarea from '../../components/Textarea/Index';
import ContainerButton from '../../components/Button/Index';
import ContainerNoteItem from '../../components/NoteItem';
import ContainerSection from '../../components/Section/Index';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { api } from '../../services/api';

const Index = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [links, setLinks] = useState([]);
  const [newLink, setNewLink] = useState('');
  const [tags, setTags] = useState([]);
  const [newTag, setNewTag] = useState('');

  const navigate = useNavigate();

  function handleAddLink() {
    setLinks((prevState) => [...prevState, newLink]);

    setNewLink('');
  }

  function handleRemovelink(deleted) {
    setLinks((prevState) => prevState.filter((link) => link !== deleted));
  }

  function handleAddTag() {
    setTags((prevState) => [...prevState, newTag]);

    setNewTag('');
  }

  function handleRemoveTag(deleted) {
    setTags((prevState) => prevState.filter((tag) => tag !== deleted));
  }

  async function handleNewNote() {
    if (!title) {
      return alert('Digite o título da nota!');
    }

    if (newLink) {
      return alert(
        'Você deixou um link no campo para adicionar, mas não clicou em adicionar. Clique para adicionar ou deixe o campo em branco!'
      );
    }

    if (newTag) {
      return alert(
        'Você deixou uma tag no campo para adicionar, mas não clicou em adicionar. Clique para adicionar ou deixe o campo em branco!'
      );
    }

    await api.post('/notes', { title, description, links, tags });

    alert('Nota criada com sucesso!');

    navigate('/');
  }

  return (
    <ContainerNew>
      <ContainerHeader />

      <main>
        <Form action="">
          <header>
            <h1>Criar nota</h1>
            <Link to="/">Voltar</Link>
          </header>

          <ContainerInput
            placeholder="Título"
            onChange={({ target }) => setTitle(target.value)}
          />
          <ContainerTextarea
            placeholder="Observações"
            onChange={({ target }) => setDescription(target.value)}
          />

          <ContainerSection title="Links úteis">
            {links.map((link, index) => (
              <ContainerNoteItem
                key={String(index)}
                value={link}
                onClick={() => handleRemovelink(link)}
              />
            ))}

            <ContainerNoteItem
              isNew
              placeholder="Novo link"
              value={newLink}
              onChange={({ target }) => setNewLink(target.value)}
              onClick={handleAddLink}
            />
          </ContainerSection>

          <ContainerSection title="Marcadores">
            <div className="tags">
              {tags.map((tag, index) => (
                <ContainerNoteItem
                  key={String(index)}
                  value={tag}
                  onClick={() => handleRemoveTag(tag)}
                />
              ))}

              <ContainerNoteItem
                isNew
                placeholder="Nova tag"
                value={newTag}
                onChange={({ target }) => setNewTag(target.value)}
                onClick={handleAddTag}
              />
            </div>
          </ContainerSection>

          <ContainerButton label="Salvar" onClick={handleNewNote} />
        </Form>
      </main>
    </ContainerNew>
  );
};

export default Index;
