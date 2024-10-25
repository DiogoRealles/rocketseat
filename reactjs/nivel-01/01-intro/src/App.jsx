import Post from './components/Post';

const App = () => {
  return (
    <div>
      <h1>Hello World Ignite feed</h1>
      <Post
        title="Post 1"
        body="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequatur minus soluta illo delectus! Quod eum nesciunt culpa, alias mollitia quisquam molestiae dolore omnis recusandae veritatis delectus nam. Maiores, rerum necessitatibus."
      />
      <Post title="Post 2" body="Outro post legal." />
      <Post title="Post 3" body="Outro post maneiro." />
    </div>
  );
};

export default App;
