import styles from "./Heading.module.css";

export const Heading = ({ level, children }) => {
  const Heading = level;
  return <Heading className={styles[level]}>{children}</Heading>;
};
