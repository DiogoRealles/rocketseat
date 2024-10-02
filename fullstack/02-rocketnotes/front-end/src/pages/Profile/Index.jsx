import { FiArrowLeft, FiUser, FiMail, FiLock, FiCamera } from 'react-icons/fi';
import { ContainerProfile, Form, Avatar } from './styles';
import ContainerInput from '../../components/Input';
import ContainerButton from '../../components/Button';
import { Link } from 'react-router-dom';

const Index = () => {
  return (
    <ContainerProfile>
      <header>
        <Link to="/">
          <FiArrowLeft size={24} />
        </Link>
      </header>

      <Form>
        <Avatar>
          <img
            src="https://avatars.githubusercontent.com/u/96884051?v=4"
            alt=""
          />

          <label htmlFor="avatar">
            <FiCamera size={24} />

            <input id="avatar" name="avatar" type="file" />
          </label>
        </Avatar>

        <ContainerInput placeholder="Nome" type="text" icon={FiUser} />
        <ContainerInput placeholder="E-mail" type="email" icon={FiMail} />
        <ContainerInput
          placeholder="Senha atual"
          type="password"
          icon={FiLock}
        />
        <ContainerInput
          placeholder="Nova senha"
          type="password"
          icon={FiLock}
        />

        <ContainerButton label="Salvar" />
      </Form>
    </ContainerProfile>
  );
};

export default Index;
