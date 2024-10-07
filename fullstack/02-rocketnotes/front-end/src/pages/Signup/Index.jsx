import { ContainerSignin, Form, Background } from './styles';
import { FiUser, FiMail, FiLock } from 'react-icons/fi';
import ContainerInput from '../../components/Input/Index';
import ContainerButton from '../../components/Button/Index';
import { Link, useNavigate } from 'react-router-dom';
import { api } from '../../services/api';
import { useState } from 'react';

const Index = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  function handleSignup() {
    if (!name || !email || !password) {
      return alert('Preencha todos os campos!');
    }

    api
      .post('/users', { name, email, password })
      .then(() => {
        alert('Usuário cadastrado com sucesso!');
        navigate('/');
      })
      .catch((error) => {
        if (error.response) {
          alert(error.response.data.message);
        } else {
          alert('Não foi possível cadastrar!');
        }
      });
  }

  return (
    <ContainerSignin>
      <Background />

      <Form>
        <h1>Rocketnotes</h1>
        <p>Aplicação para salvar egerenciar seus links úteis.</p>

        <h2>Criar sua conta</h2>

        <ContainerInput
          placeholder="Nome"
          type="text"
          icon={FiUser}
          onChange={({ target }) => setName(target.value)}
        />
        <ContainerInput
          placeholder="E-mail"
          type="email"
          icon={FiMail}
          onChange={({ target }) => setEmail(target.value)}
        />
        <ContainerInput
          placeholder="Senha"
          type="password"
          icon={FiLock}
          onChange={({ target }) => setPassword(target.value)}
        />

        <ContainerButton label="Cadastrar" onClick={handleSignup} />

        <Link to="/">Voltar para o login</Link>
      </Form>
    </ContainerSignin>
  );
};

export default Index;
