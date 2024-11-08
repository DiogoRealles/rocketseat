import './styles/global.css';
import styles from './App.module.css';
import Post, { PostType } from './components/Post/';
import Sidebar from './components/Sidebar/';
import Header from './components/Header/';

const posts: PostType[] = [
  {
    id: 1,
    author: {
      avatarURL: 'https://randomuser.me/api/portraits/men/19.jpg',
      name: 'Igor Azevedo Santos',
      role: 'Web Developer Front-end',
    },
    content: [
      { type: 'paragraph', content: 'Fala galera, 👋' },
      {
        type: 'paragraph',
        content:
          'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quod eius sint tenetur provident porro recusandae unde accusamus, molestiae commodi quis dolor minus nulla. Quo atque quas tempore cum aliquam enim?',
      },
      { type: 'link', content: 'igor/doctorcare' },
    ],
    publishedAt: new Date('2024-05-03 20:00:00'),
  },
  {
    id: 2,
    author: {
      avatarURL: 'https://randomuser.me/api/portraits/women/88.jpg',
      name: 'Emilly Sousa Fernandes',
      role: 'UX UI Designer',
    },
    content: [
      { type: 'paragraph', content: 'Fala galera, 👋' },
      {
        type: 'paragraph',
        content:
          'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo tempore, incidunt ipsam libero corporis ratione beatae qui repellat asperiores commodi! Nostrum, molestias? Doloribus quo, odit ullam corrupti vitae doloremque! Accusantium?',
      },
      { type: 'link', content: 'amly/nlw11' },
    ],
    publishedAt: new Date('2024-10-03 20:00:00'),
  },
  {
    id: 3,
    author: {
      avatarURL: 'https://randomuser.me/api/portraits/men/17.jpg',
      name: 'Devson Correia Oliveira',
      role: 'Web Developer Back-end',
    },
    content: [
      { type: 'paragraph', content: 'Fala galera, ⚔️' },
      {
        type: 'paragraph',
        content:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, minima distinctio? Architecto veniam ratione nihil voluptates deserunt pariatur eaque optio. Commodi sequi asperiores iste. Porro nobis cumque sint ducimus provident!',
      },
      { type: 'link', content: 'filhododev/portfolio' },
    ],
    publishedAt: new Date('2024-11-03 20:00:00'),
  },
];

const App = () => {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />

        <main>
          {posts.map((post) => (
            <Post key={post.id} post={post} />
          ))}
        </main>
      </div>
    </div>
  );
};

export default App;
