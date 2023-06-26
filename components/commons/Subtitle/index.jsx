import React from "react";
import styles from "./Subtitle.module.css";

export const Subtitle = ({ children }) => {
  return <h2 className={styles.Subtitle}>{children}</h2>;
};
