import {useRef} from "react";
import Image from "next/image";
import styles from "../OccupationSection/OccupationSection.module.css";

export const OccupationSection = () => {
  const carrousel = useRef(null);

  const handleLeftSide = (e) => {
    e.preventDefault();
    carrousel.current.scrollLeft += carrousel.current.offsetWidth;
    console.log(carrousel.current.scrollLeft);
  };
  const handleRightSide = (e) => {
    e.preventDefault();
    carrousel.current.scrollLeft -= carrousel.current.offsetWidth;
  };

  const item = [
    {title: "1Teste", src: "https://via.placeholder.com/150"},
    {title: "2Teste", src: "https://via.placeholder.com/150"},
    {title: "3Teste", src: "https://via.placeholder.com/150"},
    {title: "4Teste", src: "https://via.placeholder.com/150"},
    {title: "5Teste", src: "https://via.placeholder.com/150"},
    {title: "6Teste", src: "https://via.placeholder.com/150"},
    {title: "7Teste", src: "https://via.placeholder.com/150"},
    {title: "8Teste", src: "https://via.placeholder.com/150"},
    {title: "9Teste", src: "https://via.placeholder.com/150"},
    {title: "10Teste", src: "https://via.placeholder.com/150"},
    {title: "11Teste", src: "https://via.placeholder.com/150"},
  ];

  return (
    <section className={styles.OccupationSection}>
      <div className={styles.OccupationContainer}>
        <h2 className={styles.titlePrimary}>Áreas de atuação</h2>
        <p className={styles.paragraph}>
          Aqui no SouJunior, atuam profissionais iniciantes das diversas áreas
          que compõem uma empresa de tecnologia. Confira abaixo as áreas de
          atuação que temos em nosso quadro atualmente:
        </p>

        <div className={styles.itemContainer} ref={carrousel}>
          {item.map(({title, src}) => (
            <img key={title} src={src} alt={title} />
          ))}
        </div>
        <div className={styles.arrowContainer}>
          <button onClick={handleLeftSide}>
            <Image src="/arrow.svg" width={8} height={12} alt="Anterior" />
          </button>
          <button onClick={handleRightSide}>
            <Image src="/arrow.svg" width={8} height={12} alt="Próximo" />
          </button>
        </div>
      </div>
    </section>
  );
};
