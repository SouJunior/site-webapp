import {useRef} from "react";
import Image from "next/image";
import styles from "../OccupationSection/OccupationSection.module.css";
import {carouselItems} from "../../utils/carouselItems";

export const OccupationSection = () => {
  const carousel = useRef(null);
  const iconTec = useRef(null);

  const handleLeftSide = (e) => {
    e.preventDefault();
    carousel.current.scrollLeft -= carousel.current.clientWidth;
  };
  const handleRightSide = (e) => {
    e.preventDefault();
    carousel.current.scrollLeft += carousel.current.clientWidth;
  };

  let pos = {top: 0, left: 0, x: 0, y: 0};

  const mouseDownHandler = function (e) {
    pos = {
      // The current scroll
      left: iconTec.scrollLeft,
      top: iconTec.scrollTop,
      // Get the current mouse position
      x: iconTec.current.clientX,
      y: iconTec.current.clientY,
    };
    console.log(pos);
    console.log(y, x);

    // document.addEventListener('mousemove', mouseMoveHandler);
    // document.addEventListener('mouseup', mouseUpHandler);
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
              <Image
                src={icon}
                alt={title}
                width={61}
                height={61}
                ref={iconTec}
                onMouseMove={mouseDownHandler}
                onMouseUp={mouseDownHandler}
              />
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
