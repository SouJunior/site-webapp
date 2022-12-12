import React from "react";
import Image from "next/image";

import styles from "./AboutSection.module.css";

export const AboutSection = () => {
  return (
    <section className={styles.AboutSection} id={"sobre"}>
      <div className={styles.container}>
        <div className={styles.alight}>
          <h1 className={styles.title}> O que é o Sou Junior?</h1>
          <p className={styles.text}>
            Um projeto Open Source focado em construir uma plataforma para
            conectar recrutadores a profissionais juniores que buscam uma
            colocação no mercado de tecnologia. <br />
            Feito por pessoas voluntárias e iniciantes no mercado de tecnologia,
            mentorados por profissionais experientes que lideram os times.
            <br />
            Uma chance de adquirir experiência e de participar de um projeto de
            alta visibilidade, com o amparo de uma rede de apoio, além do
            networking e conexão com novas oportunidades.
          </p>
        </div>

        <div className={styles.galaxia}>
          <Image
            src="/assets/galaxia2.webp"
            alt="galaxia"
            width={594}
            height={409}
          />
        </div>
      </div>
    </section>
  );
};
