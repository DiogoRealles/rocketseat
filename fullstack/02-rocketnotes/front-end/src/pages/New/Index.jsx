import { ContainerNew, Form } from './styles';

import ContainerHeader from '../../components/Header/Index';
import ContainerInput from '../../components/Input/Index';
import ContainerTextarea from '../../components/Textarea/Index';
import ContainerButton from '../../components/Button/Index';
import ContainerNoteItem from '../../components/NoteItem';
import ContainerSection from '../../components/Section/Index';
import { Link } from 'react-router-dom';

const Index = () => {
  return (
    <ContainerNew>
      <ContainerHeader />

      <main>
        <Form action="">
          <header>
            <h1>Criar nota</h1>
            <Link to="/">Voltar</Link>
          </header>

          <ContainerInput placeholder="Título" />
          <ContainerTextarea placeholder="Observações" />

          <ContainerSection title="Links úteis">
            <ContainerNoteItem value="https://rocketseat.com.br" />
            <ContainerNoteItem isNew placeholder="Novo link" />
          </ContainerSection>

          <ContainerSection title="Links úteis">
            <div className="tags">
              <ContainerNoteItem value="ReactJS" />
              <ContainerNoteItem isNew placeholder="Nova tag" />
            </div>
          </ContainerSection>

          <ContainerButton label="Salvar" />
        </Form>
      </main>
    </ContainerNew>
  );
};

export default Index;
