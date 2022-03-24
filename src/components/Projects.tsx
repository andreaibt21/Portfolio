import styles from "../styles/projects.module.scss";
import { data } from "../assets/dataFE.js";
import { dataBE } from "../assets/dataBE.js";
import { useState } from "react";
import ProjectFE from "./ProjectFE";
import ProjectBE from "./ProjectBE";

function Projects() {
  const [type, setType] = useState("back");

  const [openTab, setOpenTab] = useState(0);

  const handleOnClick1 = () => {
    setType("front");
  };
  const handleOnClick2 = () => {
    setType("back");
  };

  return (
    <div id="Projects" className={styles.container}>
      <h1>Projects</h1>

      <div className={styles.button_container}>
        <button
          onClick={handleOnClick1}
          className={type === "front" ? styles.button_selected : ""}
        >
          FRONT END
        </button>
        <button
          onClick={handleOnClick2}
          className={type === "back" ? styles.button_selected : ""}
        >
          BACK END
        </button>
      </div>

      {type === "front" ? (
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
        <div className={styles.accordionBE}>
          {dataBE.map((d) => (
            <ProjectBE
              id={d.key}
              title={d.title}
              key={d.key}
              open={d.open}
              content={d.content}
              tools={d.tools}
              img={d.img}
              link={d.link}
              openTab={openTab}
              setOpenTab={setOpenTab}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default Projects;
