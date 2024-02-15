import Textarea from "../../components/Textarea";
import NoteItem from "../../components/NoteItem";
import Section from "../../components/Section";
import Button from "../../components/Button";
import ContainerButtonText from "../../components/ButtonText";
import Input from "../../components/Input";
import Header from "../../components/Header";
import { useNavigate } from "react-router-dom";
import { ContainerNew, Form } from "./styles";
import { useState } from "react";
import { api } from "../../services/api";

const index = () => {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const [links, setLinks] = useState([]);
  const [newLink, setNewLink] = useState("");
  const [tags, setTags] = useState([]);
  const [newTag, setNewTag] = useState("");

  function handleBack() {
    navigate(-1);
  }

  function handleAddLink() {
    setLinks((prevState) => [...prevState, newLink]);
    setNewLink("");
  }

  function handleAddTag() {
    setTags((prevState) => [...prevState, newTag]);
    setNewTag("");
  }

  function handleRemoveLink(deleted) {
    setLinks((prevState) => prevState.filter((link) => link !== deleted));
  }

  function handleRemoveTag(deleted) {
    setTags((prevState) => prevState.filter((tag) => tag !== deleted));
  }

  async function handleNewNote() {
    if (!title) {
      return alert("Digite um título da nota!");
    }

    if (newLink) {
      return alert(
        "Você deixou um link no campo para adicionar, mas não clicou em adicionar. Clique para adicionar ou deixe o campo em branco."
      );
    }

    if (newTag) {
      return alert(
        "Você deixou uma tag no campo para adicionar, mas não clicou em adicionar. Clique para adicionar ou deixe o campo em branco."
      );
    }

    await api.post("/notes", {
      title,
      description,
      tags,
      links,
    });

    alert("Nota criada com sucesso.");

    navigate(-1);
  }

  return (
    <ContainerNew>
      <Header />

      <main>
        <Form>
          <header>
            <h1>Criar nota</h1>
            <ContainerButtonText title="Voltar" onClick={handleBack} />
          </header>

          <Input
            type="text"
            placeholder="Título"
            onChange={({ target }) => setTitle(target.value)}
          />
          <Textarea
            placeholder="Observações"
            onChange={({ target }) => setDescription(target.value)}
          />

          <Section title="Links úteis">
            {links.map((link, index) => (
              <NoteItem
                key={String(index)}
                value={link}
                onClick={() => {
                  handleRemoveLink(link);
                }}
              />
            ))}

            <NoteItem
              isNew
              placeholder="Novo link"
              value={newLink}
              onChange={(e) => setNewLink(e.target.value)}
              onClick={handleAddLink}
            />
          </Section>

          <Section title="Marcadores">
            <div className="tags">
              {tags.map((tag, index) => (
                <NoteItem
                  key={String(index)}
                  value={tag}
                  onClick={() => {
                    handleRemoveTag(tag);
                  }}
                />
              ))}

              <NoteItem
                isNew
                placeholder="Nova tag"
                value={newTag}
                onChange={(e) => setNewTag(e.target.value)}
                onClick={handleAddTag}
              />
            </div>
          </Section>

          <Button title="Salvar" onClick={handleNewNote} />
        </Form>
      </main>
    </ContainerNew>
  );
};

export default index;
