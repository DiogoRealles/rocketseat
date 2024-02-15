import { FiUser, FiMail, FiLock } from "react-icons/fi";

import { Link, useNavigate } from "react-router-dom";
import { api } from "../../services/api";
import Input from "../../components/Input";
import Button from "../../components/Button";

import { ContainerSignIn, Form, Background } from "./styles";
import { useState } from "react";

const index = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  function handleSignUp() {
    if (!name || !email || !password) {
      alert("Preencha todos os campos!");
    }

    api
      .post("/users", { name, email, password })
      .then(() => {
        alert("Usuário cadastrado com sucesso.");
        navigate("/");
      })
      .catch((error) => {
        if (error.response) {
          alert(error.response.data.message);
        } else {
          alert("Não foi possível cadastrar!");
        }
      });
  }

  return (
    <ContainerSignIn>
      <Background />
      <Form>
        <h1>Rocketnotes</h1>
        <p>Aplicação para salvar e gerenciar seus links úteis.</p>

        <h2>Crie sua conta</h2>

        <Input
          name="name"
          type="text"
          placeholder="Nome"
          icon={FiUser}
          onChange={({ target }) => setName(target.value)}
        />
        <Input
          name="email"
          type="email"
          placeholder="E-mail"
          icon={FiMail}
          onChange={({ target }) => setEmail(target.value)}
        />
        <Input
          name="password"
          type="password"
          placeholder="Senha"
          icon={FiLock}
          onChange={({ target }) => setPassword(target.value)}
        />

        <Button title="Cadastrar" onClick={handleSignUp} />

        <Link to="/">Voltar para login</Link>
      </Form>
    </ContainerSignIn>
  );
};

export default index;
