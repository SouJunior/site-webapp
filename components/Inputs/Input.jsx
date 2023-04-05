import React from "react";
import styles from "./Form.module.css";

const Input = ({ type, text, name, placeholder, value }) => {
  return (
    <div className={styles.formControl}>
      <label htmlFor={name}>{text}</label>
      <input
        type={type}
        name={name}
        id={name}
        placeholder={placeholder}
        value={value}
        
      />
    </div>
  );
};

export default Input;
