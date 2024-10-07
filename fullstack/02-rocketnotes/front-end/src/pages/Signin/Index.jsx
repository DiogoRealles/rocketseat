import { ContainerSignin, Form, Background } from './styles';
import { FiMail, FiLock } from 'react-icons/fi';
import ContainerInput from '../../components/Input/Index';
import ContainerButton from '../../components/Button/Index';

import { useAuth } from '../../hooks/auth';

import { Link } from 'react-router-dom';
import { useState } from 'react';

const Index = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { sigIn } = useAuth();

  function handleSignin() {
    sigIn({ email, password });
  }

  return (
    <ContainerSignin>
      <Form>
        <h1>Rocketnotes</h1>
        <p>Aplicação para salvar egerenciar seus links úteis.</p>

        <h2>Faça seu login</h2>

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

        <ContainerButton label="Entrar" onClick={handleSignin} />

        <Link to="/register">Criar conta</Link>
      </Form>

      <Background />
    </ContainerSignin>
  );
};

export default Index;
