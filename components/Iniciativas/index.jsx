// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import styles from "./Iniciativa.module.css";
import Card from "../commons/Card/Card";
import { iniciativasSouJunior } from "../../utils/iniciativasSwipe";
import { Autoplay, Pagination } from "swiper";
import { useState, useEffect } from "react";
import { shuffleArray } from "../../utils/shuffleArray";

export default function App() {
  const [iniciativas, setIniciativas] = useState([]);

  useEffect(() => {
    setIniciativas(shuffleArray(iniciativasSouJunior));
  }, []);

  return (
    <section className={styles.SectionIniciativas} id="iniciativas">
      <div className={styles.swiperContainer}>
        <Swiper
          pagination={{
            clickable: true,
          }}
          autoplay={{
            delay: 20000,
            disableOnInteraction: false,
          }}
          modules={[Autoplay, Pagination]}
        >
          {iniciativas.map(
            ({ title, subtitle, description, image, type, path }) => (
              <SwiperSlide key={type}>
                <Card
                  type={type}
                  title={title}
                  subtitle={subtitle}
                  description={description}
                  image={image}
                  path={path}
                />
              </SwiperSlide>
            )
          )}
        </Swiper>
      </div>
    </section>
  );
}
