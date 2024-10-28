import './styles/global.css';
import styles from './App.module.css';

import Post from './components/Post';
import Sidebar from './components/Sidebar';

import Header from './components/Header';

const App = () => {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />

        <main>
          <Post
            name="Kirito Kamada"
            role="Web Developer Front-end"
            publishedAt="Publicado há 1h"
            avatarURL="https://randomuser.me/api/portraits/men/27.jpg"
            content="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quod eius sint tenetur provident porro recusandae unde accusamus, molestiae commodi quis dolor minus nulla. Quo atque quas tempore cum aliquam enim?"
          />
          <Post
            name="Asuna Suguha"
            role="UX UI Designer"
            publishedAt="Publicado há 1h"
            avatarURL="https://randomuser.me/api/portraits/women/88.jpg"
            content="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quod eius sint tenetur provident porro recusandae unde accusamus, molestiae commodi quis dolor minus nulla. Quo atque quas tempore cum aliquam enim?"
          />
        </main>
      </div>
    </div>
  );
};

export default App;
