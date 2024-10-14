import { List, Plus } from '@phosphor-icons/react';

import { Button } from '../Button';

import { Container, Menu } from './styles';

export function Header({ onOpenMenu }) {
  return (
    <Container>
      <Menu onClick={onOpenMenu}>
        <List size={34} />
      </Menu>
      <h1>Tarefas</h1>
      <Button icon={Plus} title="Nova tarefa" />
    </Container>
  );
}
