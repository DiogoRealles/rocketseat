import { ContainerSignin, Form, Background } from './styles';
import { FiUser, FiMail, FiLock } from 'react-icons/fi';
import ContainerInput from '../../components/Input';
import ContainerButton from '../../components/Button';

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

        <a href="">Criar conta</a>
      </Form>

      <Background />
    </ContainerSignin>
  );
};

export default Index;
