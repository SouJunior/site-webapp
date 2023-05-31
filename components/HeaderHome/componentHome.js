import styles from "./HeaderHome.module.css";

const HomeComponent = ({
  tittle,
  content,
  image,
  imgStyles,
  containerStyle,
}) => {
  return (
    <div className={containerStyle}>
      <div className={styles.headerTextContainer}>
        <h1 className={styles.tittle}>{tittle}</h1>
        <div>
          {content.split("\n").map((linha, index) => (
            <p key={index} className={styles.content}>
              {linha}
            </p>
          ))}
        </div>
      </div>
      <img src={image} alt="teste" className={imgStyles} />
    </div>
  );
};

export default HomeComponent;
