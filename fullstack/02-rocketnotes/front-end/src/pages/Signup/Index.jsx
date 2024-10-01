import { ContainerSignin, Form, Background } from './styles';
import { FiUser, FiMail, FiLock } from 'react-icons/fi';
import ContainerInput from '../../components/Input/Index';
import ContainerButton from '../../components/Button/Index';

const Index = () => {
  return (
    <ContainerSignin>
      <Background />

      <Form>
        <h1>Rocketnotes</h1>
        <p>Aplicação para salvar egerenciar seus links úteis.</p>

        <h2>Criar sua conta</h2>

        <ContainerInput placeholder="Nome" type="text" icon={FiUser} />
        <ContainerInput placeholder="E-mail" type="email" icon={FiMail} />
        <ContainerInput placeholder="Senha" type="password" icon={FiLock} />

        <ContainerButton label="Cadastrar" />

        <a href="">Voltar para o login</a>
      </Form>
    </ContainerSignin>
  );
};

export default Index;
