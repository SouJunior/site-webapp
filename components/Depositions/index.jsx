import style from "./Depositions.module.css"
import { data } from "../../utils/depositionCarouselInfo"
import Image from "next/image"
import { DepositionCard } from "../commons/DepositionCard"
import 'pure-react-carousel/dist/react-carousel.es.css';
import { Swiper, SwiperSlide } from "swiper/react"
import { useRef } from "react";
import arrowLeft from "../../public/assets/arrow-left.svg"
import arrowright from "../../public/assets/arrow-right.svg"

export function Depositions() {
  const carousel = useRef(null);

  const handleLeftSide = (e) => {
    e.preventDefault();
    carousel.current.scrollLeft -= carousel.current.clientWidth;
  };
  const handleRightSide = (e) => {
    e.preventDefault();
    carousel.current.scrollLeft += carousel.current.clientWidth;
  };
  return <section className={style.depositionsSectionWrapper}>
    <header className={style.depositionsHeader}>
      <h2 className={style.depositionsTitle}>
        Depoimentos
      </h2>
    </header>

    <div className={style.depositionsContainer}>
      <div>
        <div className={style.depositionsContainerWrapper}>
          {data.map(collaborator => (
            <div key={collaborator.imgPath}>
              <Image src={collaborator.imgPath} alt='' width={80} height={80} className={style.collaboratorImg}/>
            </div>
          ))}

        </div>
        <p className={style.subTitle}>O que dizem sobre nós</p>
        </div>
      
      <div className={style.carouselWrapper}>
        <Swiper 
          ref={carousel}
          className={style.carouselContainer}   
          spaceBetween={50}
          slidesPerView={1}
        >
          {data.map(collaborator => (
            <SwiperSlide key={collaborator.imgPath}>
              <DepositionCard imgPath={collaborator.imgPath} title={collaborator.title} description={collaborator.description} role={collaborator.role} name={collaborator.name}/>
            </SwiperSlide>
          ))}
        </Swiper>
          <span onClick={handleLeftSide} className={style.leftArrow}>
            <Image src={arrowLeft}/>
          </span>
          <span onClick={handleRightSide} className={style.rightArrow}>
            <Image src={arrowright}/>
          </span>
      </div>
    </div>
  </section>
}