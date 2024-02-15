import { useNavigate, useParams } from "react-router-dom";
import ContainerButton from "../../components/Button";
import ContainerButtonText from "../../components/ButtonText";
import ContainerHeader from "../../components/Header";
import ContainerSection from "../../components/Section";
import ContainerTag from "../../components/Tag";

import { Container, Links, Content } from "./styles";
import { useEffect, useState } from "react";
import { api } from "../../services/api";

function index() {
  const [data, setData] = useState(null);
  const params = useParams();

  const navigate = useNavigate();

  function handleBack() {
    navigate(-1);
  }

  async function handleRemove() {
    const confirm = window.confirm("Deseja realmente remover a nota?");

    if (confirm) {
      await api.delete(`/notes/${params.id}`);
      navigate(-1);
    }
  }

  useEffect(() => {
    async function fetchNote() {
      const res = await api.get(`/notes/${params.id}`);
      setData(res.data);
    }

    fetchNote();
  }, []);

  return (
    <Container>
      <ContainerHeader />

      {data && (
        <main>
          <Content>
            <ContainerButtonText title="Excluir nota" onClick={handleRemove} />

            <h1>{data.title}</h1>

            <p>{data.description}</p>

            {data.links && (
              <ContainerSection title="Links úteis">
                <Links>
                  {data.links.map((link) => (
                    <li key={link.id}>
                      <a href={String(link.url)} target="_blink">
                        {link.url}
                      </a>
                    </li>
                  ))}
                </Links>
              </ContainerSection>
            )}

            {data.tags && (
              <ContainerSection title="Marcadores">
                {data.tags.map((tag) => (
                  <ContainerTag key={tag.id} title={tag.name} />
                ))}
              </ContainerSection>
            )}

            <ContainerButton title="Voltar" onClick={handleBack} />
          </Content>
        </main>
      )}
    </Container>
  );
}

export default index;
