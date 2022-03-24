import React from "react";
import "./App.css";
import Home from "./components/Home";
import AboutMe from "./components/AboutMe";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import styles from "./styles/app.module.scss";

function App() {
  const squares = [];
  for (let i = 0; i <= 50; i++) squares.push(<li key={i}></li>);

  return (
    <div className={styles.app}>
      <Home />
      <AboutMe />
      <Projects />
      <Contact />
      <ul className={styles.box_area}>{squares}</ul>
    </div>
  );
}

export default App;
