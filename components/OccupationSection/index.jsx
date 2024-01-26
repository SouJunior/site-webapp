import Image from "next/image";
import { useRef } from "react";
import { Controller, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { carouselItems } from "../../utils/carouselItems";
import styles from "../OccupationSection/OccupationSection.module.css";
import { Heading } from "../commons/Heading";
import { Paragraph } from "../commons/Paragraph";

export const OccupationSection = () => {
  const navigationPrevRef = useRef(null);
  const navigationNextRef = useRef(null);

  return (
    <>
      <section className={styles.OccupationSection}>
        <div className={styles.OccupationContainer}>
          <Heading level={"h2"}>Áreas de atuação</Heading>
          <Paragraph>
            Aqui na SouJunior, atuam profissionais iniciantes das diversas áreas
            que compõem uma empresa de tecnologia. Confira abaixo as áreas de
            atuação que temos em nosso quadro atualmente:
          </Paragraph>

          <div className={styles.areasContainer}>
            <Swiper
              slidesPerView={8}
              freeMode={true}
              loop={true}
              rewind={true}
              modules={[Controller, Navigation]}
              navigation={{
                prevEl: navigationPrevRef?.current,
                nextEl: navigationNextRef?.current,
              }}
              onInit={(swiper) => {
                swiper.params.navigation.prevEl = navigationPrevRef?.current;
                swiper.params.navigation.nextEl = navigationNextRef?.current;
                swiper.navigation.init();
                swiper.navigation.update();
              }}
            >
              {carouselItems.map(({ title, icon }) => (
                <SwiperSlide key={title}>
                  <div className={styles.areaItem}>
                    <Image src={icon} alt={title} width={62} height={62} />
                    <p>{title}</p>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </section>

      <div className={styles.arrowContainer}>
        <button ref={navigationPrevRef}>
          <Image
            src="/assets/button-directional-dark-caroussel.svg"
            width={62}
            height={62}
            alt="Anterior"
          />
        </button>
        <button ref={navigationNextRef}>
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
