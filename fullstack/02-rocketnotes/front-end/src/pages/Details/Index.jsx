import { ContainerDetails, Links, Content } from './styles';
import ContainerTag from '../../components/Tags/Index';
import ContainerButton from '../../components/Button/Index';
import ContainerHeader from '../../components/Header/Index';
import ContainerSection from '../../components/Section/Index';
import ContainerButtonText from '../../components/ButtonText/Index';
import { useNavigate, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { api } from '../../services/api';

const Index = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [data, setData] = useState(null);

  function handleBack() {
    navigate(-1);
  }

  async function handleRemove() {
    const confirm = window.confirm('Deseja realmente remover a nota?');

    if (confirm) {
      await api.delete(`/notes/${id}`);

      navigate(-1);
    }
  }

  useEffect(() => {
    async function fetchNote() {
      const res = await api.get(`/notes/${id}`);

      setData(res.data);
    }

    fetchNote();
  }, []);

  return (
    <ContainerDetails>
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
                    <li key={String(link.id)}>
                      <a href={link.url} target="_blank">
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
                  <ContainerTag title={tag.name} key={String(tag.id)} />
                ))}
              </ContainerSection>
            )}

            <ContainerButton title="Voltar" onClick={handleBack} />
          </Content>
        </main>
      )}
    </ContainerDetails>
  );
};

export default Index;
