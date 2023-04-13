import { useState } from "react";
import styles from "../RadioButton/RadioButton.module.css";

export const RadioButton = ({ title, id, name, titleFor, value }) => {
  const [radio, setRadio] = useState(false);

  const toggleCheck = (e) => {
    const { name } = e.target;
    // if (name) {
    console.log(radio);
    setRadio(name.checked || !radio);
    //   console.log(radio);
    // }
    console.log(name);
  };

  return (
    <label htmlFor={titleFor} className={styles.radioLabel}>
      <input
        className={styles.radioInput}
        type="radio"
        name={name}
        id={id}
        value={value}
        onClick={toggleCheck}
        checked={radio}
      />
      <span className={styles.customRadio} />
      {title}
    </label>
  );
};
