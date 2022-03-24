import styles from "../styles/projectFE.module.scss";

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
    <div className={styles.portfolio__item}>
      <p className={styles.portfolio__description}>
        <span className={styles.underline}>{props.title}</span>
        <br />
        <br />
        <span className={styles.technologies}>{props.tools}</span>
        <br />
      </p>
      <div className={styles.portfolio__links}>
        {props.code !== "" ? (
          <a
            className={styles.portfolio__link}
            href={props.code}
            target="_blank"
            rel="noreferrer"
          >
            Code
          </a>
        ) : (
          ""
        )}
        <a
          className={styles.portfolio__link}
          href={props.live}
          target="_blank"
          rel="noreferrer"
        >
          Live
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
