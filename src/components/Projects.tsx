import React from "react";
import Project from "./Project";
import styles from "../styles/projects.module.scss";
import { data } from "../assets/data.js";
import { useState } from "react";

function Projects() {
  const [type, setType] = useState(true);

  const handleOnClick = () => {
    setType(!type);
  };
  return (
    <div className={styles.container}>
      <h1>Projects</h1>
      <button onClick={handleOnClick}>
        {type ? "Show BACK END" : "Show FRONT END"}
      </button>

      {type ? (
        <div className={styles.grid}>
          {data.map((d) => (
            <Project
              title={d.title}
              tools={d.tools}
              code={d.code}
              live={d.live}
              img={d.img}
              key={d.key}
            />
          ))}
        </div>
      ) : (
        <div> back</div>
      )}
    </div>
  );
}

export default Projects;
