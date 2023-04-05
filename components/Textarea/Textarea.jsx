import React from "react";
import styles from "./Textarea.module.css";

const Textarea = ({ name, text, mensage }) => {
  return (
    <div className={styles.textarea}>
      <label htmlFor={name}>{text}</label>
      <textarea className={styles.textarea}>{mensage}</textarea>
    </div>
  );
};

export default Textarea;
