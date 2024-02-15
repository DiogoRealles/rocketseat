import { RiShutDownLine } from "react-icons/ri";
import { useAuth } from "../../hooks/auth";
import avatarPlaceholder from "../../assets/avatar_placeholder.svg";
import { ContainerHeader, Profile, Logout } from "./styles";
import { api } from "../../services/api";
import { useNavigate } from "react-router-dom";

const index = () => {
  const navigate = useNavigate();

  const { signOut, user } = useAuth();
  const avatarUrl = user.avatar
    ? `${api.defaults.baseURL}/files/${user.avatar}`
    : avatarPlaceholder;

  function handleSignOut() {
    navigate("/");

    signOut();
  }

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
        <RiShutDownLine />
      </Logout>
    </ContainerHeader>
  );
};

export default index;
