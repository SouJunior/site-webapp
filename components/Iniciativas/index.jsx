// Import Swiper React components
import { useEffect, useState } from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { iniciativasSouJunior } from "../../utils/iniciativasSwipe";
import { shuffleArray } from "../../utils/shuffleArray";
import Card from "../commons/Card/Card";
import styles from "./Iniciativa.module.css";

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
