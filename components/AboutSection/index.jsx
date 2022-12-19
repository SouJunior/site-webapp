import React from "react";
import Image from "next/image";

import styles from "./AboutSection.module.css";

export const AboutSection = () => {
  return (
    <section className={styles.AboutSection} id={"sobre"}>
      <div className={styles.container}>
        <div className={styles.alight}>
          <h1 className={styles.title}> Sobre a Iniciativa</h1>
          <p className={styles.text}>
          A SouJunior é um projeto Open Source com o propósito de preparar os profissionais juniores para o mercado através da construção de
           alguns produtos e do conhecimento prático do dia a dia de trabalho de uma empresa de tecnologia. Para que essa iniciativa se torne real, contamos com um time de voluntários,
            desde iniciantes no mercado de tecnologia até profissionais experientes que atuam como mentores e lideram os times.<br/><br/>

        A SouJunior contará com um portfolio de produtos que proporcionará visibilidade aos juniores, os conectando tanto aos profissionais de recrutamento,
         para que a tão almejada primeira experiência seja alcançada, quanto aos mentores que irão orientá-los em sua jornada profissional que está apenas começando.<br/><br/>

  Portanto, participar da Sou Junior é uma grande chance de adquirir experiência e de participar de um projeto de alta visibilidade, com o amparo de uma rede de apoio, além do networking e conexão com novas oportunidades.
          </p>
        </div>

      
      </div>
    </section>
  );
};
