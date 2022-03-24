import styles from "../styles/ProjectBE.module.scss";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDownRounded";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUpRounded";

interface Props {
  title: string;
  id: number;
  open: boolean;
  content: string;
  tools: string;
  img: string;
  link: string;
  openTab: number;
  setOpenTab: (openTab: number) => void;
}
function BackEnd3(props: Props) {
  function handleClick() {
    props.setOpenTab(props.id);
    if (props.openTab === props.id) {
      props.setOpenTab(0);
    }
  }

  // console.log("openTab", props.openTab);
  // console.log("id", props.id);

  return (
    <div className={styles.accordion}>
      <div className={styles.title} onClick={handleClick}>
        <span className={styles.title_text}>{props.title}</span>

        {props.openTab === props.id ? (
          <KeyboardArrowDownIcon aria-label="open" />
        ) : (
          <KeyboardArrowUpIcon aria-label="close" />
        )}
      </div>

      <div
        className={
          props.openTab === props.id ? styles.content_opened : styles.content
        }
      >
        <div
          className={
            props.openTab === props.id
              ? styles.content_text_opened
              : styles.content_text
          }
        >
          <p>{props.content}</p>
          <p>Using: {props.tools}</p>
          {props.img !== "" ? (
            <img
              src={props.img}
              alt={props.title + "'s program demostration"}
              className={styles.img_gif}
            />
          ) : (
            ""
          )}
          <a
            href={props.link}
            className={styles.link}
            target="_blank"
            rel="noreferrer"
          >
            code
          </a>
        </div>
      </div>
    </div>
  );
}

export default BackEnd3;
