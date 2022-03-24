import Form from "./Form";
import styles from "../styles/contact.module.scss";

function Contact() {
  return (
    <div id="Contact">
      <h1 className={styles.title}>Contact</h1>
      <div className={styles.contact_container}>
        <Form />
        <div className={styles.links}>
          <a
            href="https://www.linkedin.com/in/andreaibt/"
            target="_blank"
            rel="noreferrer"
          >
            <img src="assets/linkedin.svg" alt="" />
          </a>
          <a
            href="https://codepen.io/andreaibt21"
            target="_blank"
            rel="noreferrer"
          >
            <img src="assets/codepen.svg" alt="" />
          </a>
          <a
            href="https://github.com/andreaibt21"
            target="_blank"
            rel="noreferrer"
          >
            <img src="assets/github.svg" alt="" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Contact;
