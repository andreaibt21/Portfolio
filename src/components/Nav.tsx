import React from "react";
import { Link } from "react-router-dom";
import styles from "../styles/nav.module.scss";
const Nav = () => {
  return (

        <nav className={styles.nav}>
          <Link to="">HOME</Link>
          <Link to="/Aboutme">ABOUT ME</Link>
          <Link to="">PROYECTS</Link>
          <Link to="">CONTACT</Link>
        </nav>
 
  );
};

export default Nav;
