import styles from './styles.module.css';

import logo from '../../assets/img/ignite-logo.svg';

const Index = () => {
  return (
    <div>
      <header className={styles.header}>
        <img src={logo} alt="Ignite Feed" />
        <h1>Ignite Feed</h1>
      </header>
    </div>
  );
};

export default Index;
