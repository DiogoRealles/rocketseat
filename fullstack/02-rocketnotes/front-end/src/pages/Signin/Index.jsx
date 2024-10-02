import { ContainerSignin, Form, Background } from './styles';
import { FiMail, FiLock } from 'react-icons/fi';
import ContainerInput from '../../components/Input/Index';
import ContainerButton from '../../components/Button/Index';
import { Link } from 'react-router-dom';

const Index = () => {
  return (
    <ContainerSignin>
      <Form>
        <h1>Rocketnotes</h1>
        <p>Aplicação para salvar egerenciar seus links úteis.</p>

        <h2>Faça seu login</h2>

        <ContainerInput placeholder="E-mail" type="email" icon={FiMail} />
        <ContainerInput placeholder="Senha" type="password" icon={FiLock} />

        <ContainerButton label="Entrar" />

        <Link to="/register">Criar conta</Link>
      </Form>

      <Background />
    </ContainerSignin>
  );
};

export default Index;
