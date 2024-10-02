import { RiShutDownLine } from 'react-icons/ri';
import { ContainerHeader, Profile, Logout } from './styles';

const Index = () => {
  return (
    <ContainerHeader>
      <Profile to="/profile">
        <img
          src="https://avatars.githubusercontent.com/u/96884051?v=4"
          alt="Foto do usuário"
        />
        <div>
          <span>Bem-vindo</span>
          <strong>Diogo Realles</strong>
        </div>
      </Profile>

      <Logout>
        <RiShutDownLine size={36} />
      </Logout>
    </ContainerHeader>
  );
};

export default Index;
