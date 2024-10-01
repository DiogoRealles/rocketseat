import React from 'react';
import { ContainerNew, Form } from './styles';

import ContainerHeader from '../../components/Header/Index';
import ContainerInput from '../../components/Input/Index';
import ContainerTextarea from '../../components/Textarea/Index';
import ContainerButton from '../../components/Button/Index';
import ContainerNoteItem from '../../components/NoteItem';
import ContainerSection from '../../components/Section/Index';

const Index = () => {
  return (
    <ContainerNew>
      <ContainerHeader />

      <main>
        <Form action="">
          <header>
            <h1>Criar nota</h1>
            <a href="/">Voltar</a>
          </header>

          <ContainerInput placeholder="Título" />
          <ContainerTextarea placeholder="Observações" />

          <ContainerSection title="Links úteis">
            <ContainerNoteItem value="https://rocketseat.com.br" />
            <ContainerNoteItem isNew placeholder="Novo link" />
          </ContainerSection>
        </Form>
      </main>

      <ContainerButton label="Salvar" />
    </ContainerNew>
  );
};

export default Index;
