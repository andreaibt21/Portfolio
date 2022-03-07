import React from "react";
import Nav from "./Nav";
import styles from "../styles/home.module.scss";
const Home = () => {
  return (
    <div>
      <Nav/>
      <div className={styles.container}>
        <div className={styles.name}>
          <h1>Hi, I am Andrea Briceño</h1>
          <div className={styles.line}/>
          <h1>Front End Developer</h1>
        </div>
      </div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#6100FF"
          fillOpacity="1"
          d="M0,288L60,250.7C120,213,240,139,360,106.7C480,75,600,85,720,112C840,139,960,181,1080,192C1200,203,1320,181,1380,170.7L1440,160L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"
        ></path>
      </svg>
    </div>
  );
};

export default Home;
