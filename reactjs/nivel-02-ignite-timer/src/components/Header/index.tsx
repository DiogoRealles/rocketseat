import { HeaderContainer } from './styles';
import { Timer, Scroll } from 'phosphor-react';

import logoIgnite from '../../assets/img/ignite-logo.svg';
import { NavLink } from 'react-router-dom';

const Index = () => {
  return (
    <HeaderContainer>
      <img src={logoIgnite} alt="" />

      <nav>
        <NavLink to="/" title="Timer">
          <Timer size={24} />
        </NavLink>
        <NavLink to="history" title="Histórico">
          <Scroll size={24} />
        </NavLink>
      </nav>
    </HeaderContainer>
  );
};

export default Index;
