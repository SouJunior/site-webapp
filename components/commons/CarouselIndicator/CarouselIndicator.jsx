import styles from "./carouselindicator.module.css"

  const CarouselIndicator = ({ active }) => {
    return (
      <div className={styles.carouselIndicator}>
        {cardData.map((card) => (
          <span key={card.id} className={active === card.id ? 'active' : ''}></span>
        ))}
      </div>
    );
  };

export default CarouselIndicator;