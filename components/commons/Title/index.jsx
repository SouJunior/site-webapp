import React from "react";
import styles from "./Title.module.css";

// const element = {
//   h1: "h1",
//   h2: "h2",
//   h3: "h3",
//   h4: "h4",
// };
const Title = ({ children }) => {
  return <h1 className={styles.TitleH1}>{children}</h1>;

  // return Title;
};

export default Title;
