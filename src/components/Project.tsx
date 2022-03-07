import React from "react";
import styles from "../styles/project.module.scss";

interface Props {
  title: string;
  tools: string;
  code: string;
  live: string;
  img: string;
  key: number;
}
function Project(props: Props) {
  return (
    // <div className={styles.container} style={{backgroundImage:`url({props.img})`}}>
    // <div className={styles.container_project}>
    //   <img className={styles.project_img} src={props.img} alt={props.title} />
    //   <div className={styles.description}>
    //     <h1>{props.title}</h1>
    //     <p>{props.tools}</p>
    //     <div className={styles.links}>
    //       <a href={props.code} target="_blank" rel="noreferrer">
    //         code
    //       </a>
    //       <a href={props.live} target="_blank" rel="noreferrer">
    //         live
    //       </a>
    //     </div>
    //   </div>
      <div className={styles.portfolio__item}>
            <p className={styles.portfolio__description}>
              <span className={styles.underline}>{props.title}</span>
              <br /><br />
              <span className={styles.technologies}>{props.tools}</span><br />
            </p>
        <div className={styles.portfolio__links}>
        <a className={styles.portfolio__link} href={props.code} target="_blank"  rel="noreferrer">
            {/* <i className={styles.fab fa-codepen}></i> */}
            code
        </a>
        <a className={styles.portfolio__link} href={props.live} target="_blank"  rel="noreferrer">
            {/* <i className={styles.fas fa-external-link-alt}></i> */}
            live
        </a>
        </div>
            <img
              src={props.img}
              alt={props.title}
              className={styles.portfolio__img}
            />
          </div>




    // </div>
  );
}

export default Project;
