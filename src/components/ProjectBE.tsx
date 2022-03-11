import React from "react";
import { useState } from "react";
import styles from "../styles/ProjectBE.module.scss";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDownRounded";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUpRounded";
interface Props {
  title: string;
  key: number;
  open: boolean;
  content: string;
  tools: string;
}
function BackEnd3(props: Props) {
  const [openTab, setOpenTab] = useState(false);

  function handleClick() {
    setOpenTab(!openTab);
    console.log(openTab);
  }

  const sections = (
    <div key={props.key}>
      <div className={styles.title} onClick={handleClick}>
        <div className={styles.arrow_wrapper}>
          {openTab ? <KeyboardArrowDownIcon aria-label="open" /> : <KeyboardArrowUpIcon  aria-label="close"/>}
          <i
            className={
              openTab ? "fa fa-angle-down fa-rotate-180" : "fa fa-angle-down"
            }
          ></i>
        </div>
        <span className={styles.title_text}>{props.title}</span>
      </div>

      <div className={openTab ? styles.content_opened : styles.content}>
        <div
          className={openTab ? styles.content_text_openn : styles.content_text}
        >

          <p>Using: {props.tools}</p>
          <p>{props.content}</p>
        </div>
      </div>
    </div>
  );
  return <div className={styles.accordion}>{sections}</div>;
}

export default BackEnd3;

// ReactDOM.render(
//   <App />,
//   document.getElementById('accordion')
// );
