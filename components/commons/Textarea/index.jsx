import React from "react";
import styles from "./Textarea.module.css";

const Textarea = ({
  name,
  text,
  mensage,
  value,
  onChange,
  isTouched,
  isValid,
}) => {
  return (
    <div className={styles.textarea}>
      <label htmlFor={name}>{text}</label>
      <textarea
        onChange={onChange}
        value={value}
        id={name}
        className={styles.textarea}
      >
        {mensage}
      </textarea>
      {!isValid && (
        <p style={{ fontSize: "14px", color: "red" }}>
          Por favor, preencha este campo.
        </p>
      )}
    </div>
  );
};

export default Textarea;
