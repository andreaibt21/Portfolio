import React from "react";
import styles from "../styles/projects.module.scss";
import { data } from "../assets/data.js";
import { dataBE } from "../assets/dataBE.js";
import { useState } from "react";
import ProjectFE from "./ProjectFE";
import ProjectBE from "./ProjectBE";
function Projects() {
  const [type, setType] = useState("back");

  const handleOnClick1 = () => {
    setType("front");
  }
   const handleOnClick2 = () => {
    setType("back");
  }

  return (
    <div className={styles.container}>
      <h1>Projects</h1>

      <div className={styles.button_container}>
        <button onClick={handleOnClick1}  className={type === "front"? styles.button_selected: ""}>
          FRONT END
        </button>
        <button onClick={handleOnClick2}   className={type === "back"? styles.button_selected: ""}>
          BACK END
        </button>
      </div>

      {type === "front"? (
        <div className={styles.grid}>
          {data.map((d) => (
            <ProjectFE
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
        <div style={{ backgroundColor: "" }}>
          {dataBE.map((d) => (
            <ProjectBE
              title={d.title}
              // tools={d.tools}
              key={d.key}
              open={d.open}
              content={d.content}
              tools={d.tools}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default Projects;
