import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import styles from './Iniciativa2.module.css'
import Card from '../commons/Card/Card';
import Card2 from '../commons/Card2/Card2';


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
   },
  {
    id:3,
    title: 'Conheça outras iniciativas da SouJunior',
    subtitle: "SouJunior Lab",
    description:"Coloque em pratica suas expertises em projetos reais, e ganhe experiência no mercado de trabalho.",
    image: 'assets/iniciativa/lab.jpg',  
    type: 'type-1' 
  },
  {
    id: 4,
    title: 'Conheça outras iniciativas da SouJunior',
    subtitle:'SouJunior Talk',
    description:'Se você está procurando uma maneira de aprimorar seu inglês com pessoas reais, temos uma excelente notícia para você!A SouJunior TAlk é um ambiente de treino de inglês que oferece uma plataforma interativa onde você pode praticar suas habilidades linguísticas. ',
    image: 'assets/iniciativa/talk.svg', 
    type: 'type-2' 
  }

];

export default function App() {
   

//  

const [slideIndex, setSlideIndex] = useState(0);

const type1Data = cardData.filter((card) => card.type === 'type-1');
const type2Data = cardData.filter((card) => card.type === 'type-2');
const mergedData = type1Data.concat(type2Data);

const handleSlideChange = () => {
  setSlideIndex((prevIndex) => (prevIndex + 1) % mergedData.length);
};

return (
  <>
    <Swiper
      spaceBetween={30}
      centeredSlides={true}
      autoplay={{
        delay: 1000,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      navigation={true}
      modules={[Autoplay, Pagination, Navigation]}
      className={styles.mySwiper}
      onSlideChange={handleSlideChange}
    >
      {mergedData
.map(({ title, subtitle, description, image }) => (
<SwiperSlide key={title}>
{title === 'SouJunior Lab' ? (
<Card
           title={title}
           subtitle={subtitle}
           description={description}
           image={image}
         />
) : (
<Card2
           title={title}
           subtitle={subtitle}
           description={description}
           image={image}
         />
)}
</SwiperSlide>
))}
</Swiper>
</>
);
}


