import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Controller, Navigation } from "swiper";
import { DepositionCard } from "../commons/DepositionCard";
import style from "./Depositions.module.css";
import { data } from "../../utils/depositionCarouselInfo";
import { Heading } from "../../components/commons/Heading";

export function Depositions() {
  return (
    <>
      <section className={style.DepositionsSection} id="depoimentos">
        <header className={style.depositionsHeader}>
          <Heading level={"h1"}>Depoimentos</Heading>
        </header>
        <div className={style.container}>
          <div className={style.wrapper}>
            <div className={style.depositionsCollaborators}>
              <div className={style.collaborator}>
                {data
                  .filter((collaborator) => collaborator.id <= 7)
                  .map(({ imgPath }) => (
                    <div className={style.collaboratorImg} key={imgPath}>
                      <Image
                        key={imgPath}
                        src={imgPath}
                        alt=""
                        width={90}
                        height={90}
                        className={style.collaboratorImg}
                      />
                    </div>
                  ))}
              </div>
              <p className={style.subTitle}>O que dizem sobre nós</p>
            </div>

            <div className={style.depositionsCards}>
              <Swiper
                className={style.cardWrapper}
                spaceBetween={60}
                slidesPerView={1}
                rewind={true}
                navigation={true}
                controller={true}
                modules={[Controller, Navigation]}
              >
                {data.map(({ imgPath, title, description, role, name }) => (
                  <SwiperSlide key={imgPath}>
                    <DepositionCard
                      imgPath={imgPath}
                      title={title}
                      description={description}
                      role={role}
                      name={name}
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
