import { FiArrowLeft, FiUser, FiMail, FiLock, FiCamera } from 'react-icons/fi';
import { ContainerProfile, Form, Avatar } from './styles';
import ContainerInput from '../../components/Input';
import ContainerButton from '../../components/Button';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useAuth } from '../../hooks/auth';

const Index = () => {
  const { user } = useAuth();
  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);
  const [passwordOld, setPasswordOld] = useState();
  const [passwordNew, setPasswordNew] = useState();

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

        <ContainerInput
          placeholder="Nome"
          type="text"
          icon={FiUser}
          value={name}
          onChange={({ target }) => setName(target.value)}
        />
        <ContainerInput
          placeholder="E-mail"
          type="email"
          icon={FiMail}
          value={email}
          onChange={({ target }) => setEmail(target.value)}
        />
        <ContainerInput
          placeholder="Senha atual"
          type="password"
          icon={FiLock}
          onChange={({ target }) => setPasswordOld(target.value)}
        />
        <ContainerInput
          placeholder="Nova senha"
          type="password"
          icon={FiLock}
          onChange={({ target }) => setPasswordNew(target.value)}
        />

        <ContainerButton label="Salvar" />
      </Form>
    </ContainerProfile>
  );
};

export default Index;
