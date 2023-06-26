import styles from "./HeroHome.module.css";
import Image from "next/image";
import Title from "../commons/Title";
import { Paragraph } from "../commons/Paragraph";

const ContentHero = ({ title, content, image, imgStyles, containerStyle }) => {
  return (
    <div className={containerStyle}>
      <div className={styles.textContent}>
        <Title>{title}</Title>
        <div>
          {content.split("\n").map((linha, index) => (
            // <p key={index} className={styles.paragraph}>
            //   {linha}
            // </p>
            <Paragraph key={index}>{linha}</Paragraph>
          ))}
        </div>
      </div>
      <div className={styles.imageContainer}>
        <img src={image} alt={title} className={imgStyles} />
        {/* <Image
          src={image}
          // sizes="(max-width: 479px) 100vw, (max-width: 767px) 92vw, 100vw"
          width={817}
          height={423}
          loading="lazy"
        /> */}
      </div>
    </div>
  );
};

export default ContentHero;
