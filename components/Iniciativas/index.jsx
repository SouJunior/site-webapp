import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import styles from './Iniciativa.module.css'
import Card from '../commons/Card/Card';



// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";


const cardData = [
  { id: 1,
    title: 'Conheça outras iniciativas da SouJunior',
    subtitle:'SouJunior Lab',
    description:'Coloque em pratica suas expertises em projetos reais, e ganhe experiência no mercado de trabalho.',
    image: 'assets/iniciativa/lab.jpg',
    type: 'type-1',
   },
  { id: 2,
    title: 'Conheça outras iniciativas da SouJunior',
    subtitle:'SouJunior Talk',
    description:'Se você está procurando uma maneira de aprimorar seu inglês com pessoas reais, temos uma excelente notícia para você!A SouJunior TAlk é um ambiente de treino de inglês que oferece uma plataforma interativa onde você pode praticar suas habilidades linguísticas. ',
    image: 'assets/iniciativa/talk.svg',
    type: 'type-2' 
   }

];

export default function App() {
  return (
    <>
      <Swiper
        className={styles.teste}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
       
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination]}>
        {cardData.map(({ title, subtitle, description, image, type }) => (
          <SwiperSlide>
            <Card
              type={type}
              title={title}
              subtitle={subtitle}
              description={description}
              image={image}
            />
          </SwiperSlide>
        ))}
      </Swiper>

      
    </>
  );
}