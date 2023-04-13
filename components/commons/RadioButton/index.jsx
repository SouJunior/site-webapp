import { useState } from "react";
import styles from "../RadioButton/RadioButton.module.css";

export const RadioButton = ({ options, value, setValue }) => {
  return (
    <>
      {options.map((option) => (
        <label key={option} className={styles.radioLabel}>
          <input
            className={styles.radioInput}
            type="radio"
            value={option}
            checked={value === option}
            onChange={({ target }) => setValue(target.value)}
          />
          <span className={styles.customRadio} />
          {option}
        </label>
      ))}
    </>
  );
};
