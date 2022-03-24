import styles from "../styles/nav.module.scss";
const Nav = () => {
  return (
    <nav className={styles.nav}>
      <a href="#Home">HOME</a>
      <a href="#AboutMe">ABOUT ME</a>
      <a href="#Projects">PROYECTS</a>
      <a href="#Contact">CONTACT</a>
    </nav>
  );
};

export default Nav;
