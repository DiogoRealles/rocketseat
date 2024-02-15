import { FiUser, FiMail, FiLock, FiArrowLeft, FiCamera } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

import Input from "../../components/Input";
import Button from "../../components/Button";
import { useAuth } from "../../hooks/auth";
import { api } from "../../services/api";
import avatarPlaceholder from "../../assets/avatar_placeholder.svg";

import { ContainerProfile, Form, Avatar } from "./styles";

const index = () => {
  const navigate = useNavigate();

  const { user, updateProfile } = useAuth();

  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);
  const [passwordOld, setPasswordOld] = useState();
  const [passwordNew, setPasswordNew] = useState();

  function handleBack() {
    navigate(-1);
  }

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

  function handleChangeAvatar(event) {
    const file = event.target.files[0];
    setAvatarFile(file);

    const imagePreview = URL.createObjectURL(file);
    setAvatar(imagePreview);
  }

  return (
    <ContainerProfile>
      <header>
        <button to="/" onClick={handleBack}>
          <FiArrowLeft />
        </button>
      </header>
      <Form>
        <Avatar>
          <img src={avatar} alt="Foto de perfil" />

          <label htmlFor="avatar">
            <FiCamera />
            <input
              id="avatar"
              type="file"
              name="avatar"
              onChange={handleChangeAvatar}
            />
          </label>
        </Avatar>
        <Input
          name="name"
          type="text"
          placeholder="Nome"
          icon={FiUser}
          value={name}
          onChange={({ target }) => setName(target.value)}
        />
        <Input
          name="email"
          type="email"
          placeholder="E-mail"
          icon={FiMail}
          value={email}
          onChange={({ target }) => setEmail(target.value)}
        />
        <Input
          name="password"
          type="password"
          placeholder="Senha atual"
          icon={FiLock}
          onChange={({ target }) => setPasswordOld(target.value)}
        />
        <Input
          name="confirmpassword"
          type="password"
          placeholder="Nova senha"
          icon={FiLock}
          onChange={({ target }) => setPasswordNew(target.value)}
        />

        <Button title="Salvar" onClick={handleUpdate} />
      </Form>
    </ContainerProfile>
  );
};

export default index;
