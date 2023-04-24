import styles from "./Title.module.css";

const Title = ({ texto }) => {
  return <h1 className={styles.Title}>{texto}</h1>;
};

export default Title;
