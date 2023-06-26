import { useRef } from "react";
import Image from "next/image";
import styles from "../OccupationSection/OccupationSection.module.css";
import { carouselItems } from "../../utils/carouselItems";
import { Subtitle } from "../commons/Subtitle";
import { Paragraph } from "../commons/Paragraph";

export const OccupationSection = () => {
  const carousel = useRef(null);

  const handleLeftSide = (e) => {
    e.preventDefault();
    carousel.current.scrollLeft -= carousel.current.clientWidth;
  };
  const handleRightSide = (e) => {
    e.preventDefault();
    carousel.current.scrollLeft += carousel.current.clientWidth;
  };

  return (
    <>
      <section className={styles.OccupationSection}>
        <div className={styles.OccupationContainer}>
          <Subtitle>Áreas de atuação</Subtitle>
          <Paragraph>
            Aqui na SouJunior, atuam profissionais iniciantes das diversas áreas
            que compõem uma empresa de tecnologia. Confira abaixo as áreas de
            atuação que temos em nosso quadro atualmente:
          </Paragraph>
          <div className={styles.areasContainer} ref={carousel}>
            {carouselItems.map(({ title, icon }) => (
              <div key={title} className={styles.areaItem}>
                <Image src={icon} alt={title} width={62} height={62} />
                <p>{title}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <div className={styles.arrowContainer}>
        <button onClick={handleLeftSide}>
          <Image
            src="/assets/button-directional-dark-caroussel.svg"
            width={62}
            height={62}
            alt="Anterior"
          />
        </button>
        <button onClick={handleRightSide}>
          <Image
            src="/assets/button-directional-dark-caroussel.svg"
            width={62}
            height={62}
            alt="Próximo"
          />
        </button>
      </div>
    </>
  );
};
