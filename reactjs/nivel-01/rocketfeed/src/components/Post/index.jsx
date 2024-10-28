import styles from './styles.module.css';

import Comment from '../Comment/';

const Index = (props) => {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <img
            className={styles.avatar}
            src={props.avatarURL}
            alt="Foto de perfil"
          />

          <div className={styles.authorInfo}>
            <strong>{props.name}</strong>
            <span>{props.role}</span>
          </div>
        </div>

        <time title="11 de Maio às 08:13h" dateTime={props.publishedAt}>
          {props.publishedAt}
        </time>
      </header>

      <div className={styles.content}>
        <p>Fala Devs 👏</p>
        <p>{props.content}</p>

        <p>
          👉 <a href="">diogorealles.github.com/doctorcare</a>
        </p>
        <p>
          <a href="">#novoprojeto</a>&nbsp;
          <a href="">#nlw</a>&nbsp;
          <a href="">#frontend</a>&nbsp;
        </p>
      </div>

      <form className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>
        <textarea placeholder="Deixe um comentário" />

        <footer>
          <button type="submit">Publicar</button>
        </footer>
      </form>

      <div className={styles.commentList}>
        <Comment avatarURL="https://randomuser.me/api/portraits/women/88.jpg" />
        <Comment avatarURL="https://randomuser.me/api/portraits/men/88.jpg" />
        <Comment avatarURL="https://randomuser.me/api/portraits/women/28.jpg" />
      </div>
    </article>
  );
};

export default Index;
