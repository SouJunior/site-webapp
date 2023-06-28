import React from "react";
import style from "./Card.module.css";
import { Paragraph } from "../Paragraph";

const Card = ({ title, subtitle, description, image, type, path }) => (
  <section className={type === "type-1" ? style.card : style.card2}>
    <h1 className={style.title}>{title}</h1>
    <div className={style.container}>
      <div className={style.content}>
        <h2 className={style.subtitle}>{subtitle}</h2>

        {description.map((paragraph) => (
          <Paragraph>{paragraph}</Paragraph>
        ))}
        <button className={style.button}>
          <a href={path} target="_blank" rel="noreferrer">
            Clique aqui e Confira!
          </a>
        </button>
      </div>

      <div className={style.image}>
        <img src={image} alt={title} />
      </div>
    </div>
  </section>
);

export default Card;
