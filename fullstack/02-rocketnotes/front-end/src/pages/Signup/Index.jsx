import { ContainerSignin, Form, Background } from './styles';
import { FiUser, FiMail, FiLock } from 'react-icons/fi';
import ContainerInput from '../../components/Input/Index';
import ContainerButton from '../../components/Button/Index';
import { Link } from 'react-router-dom';

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

        <Link to="/">Voltar para o login</Link>
      </Form>
    </ContainerSignin>
  );
};

export default Index;
