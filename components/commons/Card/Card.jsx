import React from 'react';
import style from "./Card.module.css"


const Card = ({ title,title2,description, image }) => (
  <section className={style.card}>
    <h1>{title}</h1>
    <div className={style.container}>
      <div className={style.content} >
      
        <h2>{title2}</h2>
        <h3>{description}</h3>
        
        <button className={style.button}>
          <a href="https://discord.com/channels/759176734460346423/1009798805459304540" target='_blank' rel="noreferrer">Clique aqui e Confira!</a>
        </  button>
        
        

      </div>
    
    <div className={style.image}>
    <img src={image} alt={title} />
    </div>
    </div>
  </section>
);

export default Card;
