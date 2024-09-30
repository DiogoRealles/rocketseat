import { ContainerDetails, Links, Content } from './styles';
import ContainerTag from '../../components/Tags/Index';
import ContainerButton from '../../components/Button/Index';
import ContainerHeader from '../../components/Header/Index';
import ContainerSection from '../../components/Section/Index';
import ContainerButtonText from '../../components/ButtonText/Index';

const Index = () => {
  return (
    <ContainerDetails>
      <ContainerHeader />

      <main>
        <Content>
          <ContainerButtonText label="Excluir nota" />

          <h1>Introdução ao ReactJS</h1>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo iste
            aperiam obcaecati labore rerum tenetur sapiente animi possimus
            aspernatur optio! Molestiae ea fugiat nesciunt, sint iure esse
            dolores vitae porro?. <br />
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates,
          </p>

          <ContainerSection title="Links úteis">
            <Links>
              <li>
                <a href="">htps://rocketseat.com</a>
              </li>
              <li>
                <a href="">htps://origamid.com</a>
              </li>
            </Links>
          </ContainerSection>

          <ContainerSection title="Marcadores">
            <ContainerTag title="Express" />
            <ContainerTag title="NodeJS" />
          </ContainerSection>

          <ContainerButton label="Voltar" />
        </Content>
      </main>
    </ContainerDetails>
  );
};

export default Index;
