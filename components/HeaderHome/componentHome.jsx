import styles from "./HeaderHome.module.css";
import Image from "next/image";

const HeroHomeComponent = ({
  tittle,
  content,
  image,
  imgStyles,
  containerStyle,
}) => {
  return (
    <div className={containerStyle}>
      <div className={styles.textContent}>
        <h1 className={styles.tittle}>{tittle}</h1>
        <div>
          {content.split("\n").map((linha, index) => (
            <p key={index} className={styles.paragraph}>
              {linha}
            </p>
          ))}
        </div>
      </div>
      <div className={styles.imageContainer}>
        {/* <img src={image} alt={tittle} className={imgStyles} /> */}
        <Image
          src={image}
          // sizes="(max-width: 479px) 100vw, (max-width: 767px) 92vw, 100vw"
          width={817}
          height={423}
          loading="lazy"
        />
      </div>
    </div>
  );
};

export default HeroHomeComponent;
