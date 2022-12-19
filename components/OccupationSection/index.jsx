import {useRef} from "react";
import Image from "next/image";
import styles from "../OccupationSection/OccupationSection.module.css";
import {carouselItems} from "../../utils/carouselItems";


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
    <section className={styles.OccupationSection}>
      <div className={styles.OccupationContainer}>
        <h2 className={styles.titlePrimary}>Áreas de atuação</h2>
        <p className={styles.paragraph}>
          Aqui no SouJunior, atuam profissionais iniciantes das diversas áreas
          que compõem uma empresa de tecnologia. Confira abaixo as áreas de
          atuação que temos em nosso quadro atualmente:
        </p>
     
        <div className={styles.itemContainer} ref={carousel}>
          {carouselItems.map(({title, icon}) => (
            <div key={title} className={styles.item}>
              <Image src={icon} alt={title} width={61} height={61} />
              <p>{title}</p>
            </div>
          ))}
        </div>
      
        <div className={styles.arrowContainer}>
          <button onClick={handleLeftSide}>
            <Image
              src="/assets/button-directional-dark-caroussel.svg"
              width={34}
              height={34}
              alt="Anterior"
            />
          </button>
          <button onClick={handleRightSide}>
            <Image
              src="/assets/button-directional-dark-caroussel.svg"
              width={34}
              height={34}
              alt="Próximo"
            />
          </button>
        </div>
      </div>
    </section>
  );
};
