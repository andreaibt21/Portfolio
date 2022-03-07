import React from "react";
import styles from "../styles/aboutMe.module.scss";
import foto from "../assets/foto1.jpg";
function AboutMe() {
  return (
    <div className={styles.container_AboutMe}>
      <h1>ABOUT ME </h1>
      <section>
        <p>
          Texto muy bueno sobre mi background Texto muy bueno sobre mi
          background Texto muy bueno sobre mi background Texto muy bueno sobre
          mi background Texto muy bueno sobre mi background Texto muy bueno
          sobre mi background. {"\n"}
          Texto muy bueno sobre mi background Texto muy bueno sobre mi
          background Texto muy bueno sobre mi background Texto muy bueno sobre
          mi background Texto muy bueno sobre mi background Texto muy bueno
          sobre mi background.
        </p>
        <img className={styles.foto} src={foto} alt="" />
      </section>
    </div>
  );
}

export default AboutMe;
