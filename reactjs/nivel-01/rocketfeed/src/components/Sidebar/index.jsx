import { PencilLine } from 'phosphor-react';
import Avatar from '../Avatar';
import styles from './styles.module.css';

const Index = () => {
  return (
    <aside className={styles.sidebar}>
      <img
        className={styles.cover}
        src="https://images.unsplash.com/photo-1618209076877-3b577b275eef?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fGhhcmR3YXJlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=50"
      />
      <div className={styles.profile}>
        <Avatar src="https://avatars.githubusercontent.com/u/96884051?v=4" />

        <strong>Diogo Realles</strong>
        <span>Front-end Web Developer</span>
      </div>

      <footer>
        <a href="#">
          <PencilLine size={20} />
          Editar seu perfil
        </a>
      </footer>
    </aside>
  );
};

export default Index;
