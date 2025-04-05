import React from "react";
import styles from "./Button.module.css";

export const Button = ({title, path}) => {
    return(
        <button
            onClick={() => window.open(path, "_self", "noopener noreferrer")}
            className={styles.button}
        >
            {title}
        </button>
    )
} 

export default Button;