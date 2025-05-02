import styles from "./Paragraph.module.css";

export const Paragraph = ({ descripition, children }) => {
  return (
    <p
      className={styles.Paragraph}
      style={
        descripition ? { marginBlock: "1.5rem" } : { marginBlock: "0rem" }
      }>
      {children}
    </p>
  );
};
