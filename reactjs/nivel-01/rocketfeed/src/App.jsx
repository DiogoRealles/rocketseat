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
          <Post title="title" body="body" />
          <Post title="title" body="body" />
        </main>
      </div>
    </div>
  );
};

export default App;
