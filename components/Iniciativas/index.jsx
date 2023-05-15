import React, { useState, useEffect } from 'react';
import Card from '../commons/Card/Card';
import Card2 from '../commons/Card2/Card2';
import CarouselIndicator from '../commons/CarouselIndicator/CarouselIndicator';
import styles from './Iniciativas.module.css'

const cardData = [
  { id: 1,
    title: 'Conheça outras iniciativas da SouJunior',
    title2:'SouJunior Lab',
    description:'Coloque em pratica suas expertises em projetos reais, e ganhe experiência no mercado de trabalho.',
    image: 'assets/iniciativa/lab.jpg',
    type: 'type-1',
   },
  { id: 2,
    title: 'Conheça outras iniciativas da SouJunior',
    title2:'SouJunior Talk',
    description:'Se você está procurando uma maneira de aprimorar seu inglês com pessoas reais, temos uma excelente notícia para você!A SouJunior TAlk é um ambiente de treino de inglês que oferece uma plataforma interativa onde você pode praticar suas habilidades linguísticas. ',
    image: 'assets/iniciativa/talk.svg',
    type: 'type-2' 
   },
  {
    id:3,
    title: 'Conheça outras iniciativas da SouJunior',
    title2: "SouJunior Lab",
    description:"Coloque em pratica suas expertises em projetos reais, e ganhe experiência no mercado de trabalho.",
    image: 'assets/iniciativa/lab.jpg',  
    type: 'type-1' 
  },
  {
    id: 4,
    title: 'Conheça outras iniciativas da SouJunior',
    title2:'SouJunior Talk',
    description:'Se você está procurando uma maneira de aprimorar seu inglês com pessoas reais, temos uma excelente notícia para você!A SouJunior TAlk é um ambiente de treino de inglês que oferece uma plataforma interativa onde você pode praticar suas habilidades linguísticas. ',
    image: 'assets/iniciativa/talk.svg', 
    type: 'type-2' 
  }

];

const Carousel = () => {
  const [currentCard, setCurrentCard] = useState(0);

    useEffect(() => {
      const interval = setInterval(() => {
        setCurrentCard(currentCard === cardData.length - 1 ? 0 : currentCard + 1);
      }, 2000);
      return () => clearInterval(interval);
    }, [currentCard]);

  const renderCard = (card) => {
    if (card.type === 'type-1') {
      return <Card title={card.title} title2={card.title2} description={card.description} image={card.image} />;
    } else {
      return <Card2 title={card.title} title2={card.title2} description={card.description} image={card.image} />;
    }
  };

  return (
    <div className={styles.carousel}>
      {renderCard(cardData[currentCard])}
    </div>
  );

// {  return (
//     <div >
//       <Card title={cardData[currentCard].title} title2={cardData[currentCard].title2} description={cardData[currentCard].description} image={cardData[currentCard].image} />
      
//     </div>}
  
};








export default Carousel;
