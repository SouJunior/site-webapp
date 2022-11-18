import React from "react";
import styles from "./AboutSection.module.css";
import Image from "next/image";



export const AboutSection = () => {
  return (
    <section className={styles.container}>
      <div className={styles.alight}> 
      <h1 className={styles.title}> O que é o Sou Junior?</h1>
      <p className={styles.text}>
        Um projeto Open Source focado em construir uma 
        plataforma para conectar recrutadores a profissionais 
        juniores que buscam uma colocação no mercado de tecnologia.
        Feito por pessoas voluntárias e iniciantes no mercado de
        tecnologia, mentorados por profissionais experientes que
        lideram os times.
        Uma chance de adquirir experiência e de participar de 
        um projeto de alta visibilidade, com o amparo de uma 
        rede de apoio, além do networking e conexão com novas
        oportunidades.
        </p>
        </div>

        
        <div className={styles.galaxia}>

           {/* identificar o erro no comando abaixo */}
          {/* <Image src="/assets/galaxia.png" alt="galaxia" width={410} heigth={470}/> */}
          <img src="../../assets/galaxia.png" alt="galaxia"/>
          </div>
    </section>

  );
};


     