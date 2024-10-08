import { createContext, useContext, useEffect, useState } from 'react';
import { api } from '../services/api';

export const AuthContext = createContext({});

function AuthProvider({ children }) {
  const [data, setData] = useState({});

  async function sigIn({ email, password }) {
    try {
      const response = await api.post('/sessions', { email, password });
      const { user, token } = response.data;

      localStorage.setItem('@rocketnotes:user', JSON.stringify(user));
      localStorage.setItem('@rocketnotes:token', token);

      api.defaults.headers.common['authorization'] = `Bearer ${token}`;

      setData({ user, token });
    } catch (error) {
      if (error.res) {
        alert(error.res.data.message);
      } else {
        alert('Não foi possível entrar!');
      }
    }
  }

  function signOut() {
    localStorage.removeItem('@rocketnotes:token');
    localStorage.removeItem('@rocketnotes:user');

    setData({});
  }

  async function updateProfile({ user, avatarFile }) {
    try {
      if (avatarFile) {
        const fileUpdatedForm = new FormData();
        fileUpdatedForm.append('avatar', avatarFile);

        const res = await api.patch('/users/avatar', fileUpdatedForm);
        user.avatar = res.data.avatar;
      }

      await api.put('/users', user);

      localStorage.setItem('@rocketnotes:user', JSON.stringify(user));

      setData({ user, token: data.token });

      alert('Perfil atualizado!');
    } catch (error) {
      if (error.res) {
        alert(error.res.data.message);
      } else {
        alert('Não foi possível atualizar o perfíl!');
      }
    }
  }

  useEffect(() => {
    const token = localStorage.getItem('@rocketnotes:token');
    const user = localStorage.getItem('@rocketnotes:user');

    if (token && user) {
      api.defaults.headers.common['authorization'] = `Bearer ${token}`;

      setData({
        token,
        user: JSON.parse(user),
      });
    }
  }, []);

  return (
    <AuthContext.Provider
      value={{ sigIn, signOut, updateProfile, user: data.user }}
    >
      {children}
    </AuthContext.Provider>
  );
}

function useAuth() {
  const context = useContext(AuthContext);

  return context;
}

export { AuthProvider, useAuth };
