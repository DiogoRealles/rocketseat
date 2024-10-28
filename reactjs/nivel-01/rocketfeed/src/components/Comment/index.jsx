import { ThumbsUp, Trash } from 'phosphor-react';
import styles from './styles.module.css';
import Avatar from '../Avatar/';

const Index = (props) => {
  return (
    <div className={styles.comment}>
      <Avatar hasBorder={false} src={props.src} />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Diogo Realles</strong>
              <time title="11 de maio às 08:13h" dateTime="2022-05-11 08:13:30">
                Cerca de 1h atrás
              </time>
            </div>
            <button title="Deletar comentário">
              <Trash size={20} />
            </button>
          </header>

          <p>Muito bom Diogo, Parabéns!! 👏</p>
        </div>

        <footer>
          <button>
            <ThumbsUp size={20} />
            Aplaudir <span>20</span>
          </button>
        </footer>
      </div>
    </div>
  );
};

export default Index;
