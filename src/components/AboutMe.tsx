import React from "react";
import styles from "../styles/aboutMe.module.scss";
import foto from "../assets/foto1.jpg";
import { imageListClasses } from "@mui/material";

function AboutMe() {
  const skills: string[] = [
    "html",
    "css",
    "js",
    "react",
    "materialui",
    "vue",
    "sass",
    "bootstrap",
    "typescript",
    "csharp",
    "sql",
  ];

  return (
    <div id="AboutMe" className={styles.container_AboutMe}>
      <h1>ABOUT ME </h1>
      <section>
        <div className={styles.text_AboutMe}>
          <p>
            Hello! I enjoy doing front end projects but I also have some back
            end skills. My biggest strengths come about finding solutions that
            the final user will see. Front end is great because I get the
            opportunity to solve both logic and design problems, which makes
            motives me.
          </p>
          <p>
            I got started in software development in 2020, learning by myself
            with free platforms on the internet; then, when I had the chance, I
            joined college. Now I have one year left to graduate 😊
          </p>
          <div className={styles.skills}>
            {skills.map((e) => (
              <img key={e} src={"../assets/" + e + ".png"} alt={e + " logo"} />
            ))}
          </div>
        </div>
        <div className={styles.shape}>
          <div className={styles.shape2}></div>
          <img className={styles.shape} src={foto} alt="" />
        </div>
      </section>
    </div>
  );
}

export default AboutMe;
