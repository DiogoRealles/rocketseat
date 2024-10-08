import { RiShutDownLine } from 'react-icons/ri';
import { ContainerHeader, Profile, Logout } from './styles';
import { useAuth } from '../../hooks/auth';
import avatarPlaceholder from '../../assets/avatar_placeholder.svg';
import { api } from '../../services/api';
import { useNavigate } from 'react-router-dom';

const Index = () => {
  const navigate = useNavigate();
  const { signOut, user } = useAuth();

  function handleSignOut() {
    navigate('/');
    signOut();
  }

  const avatarUrl = user.avatar
    ? `${api.defaults.baseURL}/files/${user.avatar}`
    : avatarPlaceholder;

  return (
    <ContainerHeader>
      <Profile to="/profile">
        <img src={avatarUrl} alt={user.name} />
        <div>
          <span>Bem-vindo</span>
          <strong>{user.name}</strong>
        </div>
      </Profile>

      <Logout onClick={handleSignOut}>
        <RiShutDownLine size={36} />
      </Logout>
    </ContainerHeader>
  );
};

export default Index;
