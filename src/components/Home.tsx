import Nav from "./Nav";
import styles from "../styles/home.module.scss";
const Home = () => {
  return (
    <div id="Home">
      <Nav />
      <div className={styles.container_home}>
        <div className={styles.name}>
          <h1>Hi, I am Andrea Briceño</h1>
          <div className={styles.line} />
          <h1>Front End Developer</h1>
        </div>
      </div>
    </div>
  );
};

export default Home;
