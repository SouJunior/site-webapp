import styles from "./HeaderHome.module.css";

const HeroHomeComponent = ({
  tittle,
  content,
  image,
  imgStyles,
  containerStyle,
}) => {
  return (
    <div className={containerStyle}>
      <div className={styles.TextContent}>
        <h1 className={styles.tittle}>{tittle}</h1>
        <div>
          {content.split("\n").map((linha, index) => (
            <p key={index} className={styles.paragraph}>
              {linha}
            </p>
          ))}
        </div>
      </div>
      <img src={image} alt={tittle} className={imgStyles} />
    </div>
  );
};

export default HeroHomeComponent;
