import { FiArrowLeft, FiUser, FiMail, FiLock, FiCamera } from 'react-icons/fi';
import { ContainerProfile, Form, Avatar } from './styles';
import ContainerInput from '../../components/Input';
import ContainerButton from '../../components/Button';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useAuth } from '../../hooks/auth';
import avatarPlaceholder from '../../assets/avatar_placeholder.svg';
import { api } from '../../services/api';

const Index = () => {
  const { user, updateProfile } = useAuth();
  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);
  const [passwordOld, setPasswordOld] = useState();
  const [passwordNew, setPasswordNew] = useState();
  const avatarUrl = user.avatar
    ? `${api.defaults.baseURL}/files/${user.avatar}`
    : avatarPlaceholder;
  const [avatar, setAvatar] = useState(avatarUrl);
  const [avatarFile, setAvatarFile] = useState(null);

  async function handleUpdate() {
    const updated = {
      name,
      email,
      password: passwordNew,
      old_password: passwordOld,
    };

    const userUpdated = Object.assign(user, updated);

    await updateProfile({ user: userUpdated, avatarFile });
  }

  function handleChangeAvatar({ target }) {
    const file = target.files[0];
    setAvatarFile(file);

    const imagePreview = URL.createObjectURL(file);
    setAvatar(imagePreview);
  }

  return (
    <ContainerProfile>
      <header>
        <Link to="/">
          <FiArrowLeft size={24} />
        </Link>
      </header>

      <Form>
        <Avatar>
          <img src={avatar} alt={user.name} />

          <label htmlFor="avatar">
            <FiCamera size={24} />

            <input
              id="avatar"
              name="avatar"
              type="file"
              onChange={handleChangeAvatar}
            />
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

        <ContainerButton title="Salvar" onClick={handleUpdate} />
      </Form>
    </ContainerProfile>
  );
};

export default Index;
