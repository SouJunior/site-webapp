import React from "react";

import styles from "./Participation.module.css";

export const Participation = () => {
return (

    <section className={styles.container}>

    <div className={styles.leftSide}>
        <h1 className={styles.h1}>
        Quem pode participar?
                </h1>
        <p> Aqui no SouJunior, temos oportunidades para profissionais Juniors e mentores de diversas profissões.
            Além disso, temos oportunidades para apoiadores e parceiros para diferentes frentes de contribuição
            para o projeto. 
            Veja ao lado quais são as categorias de participantes disponíveis
            para contribuir com a SouJunior e como participar.</p>
    </div>

    <div className={styles.rightSide}>

        <h3 className={styles.border}> + Sou Júnior</h3>
        <h3 className={styles.border}> + Sou Mentor</h3>
        <h3 className={styles.border}> + Sou Apoiador</h3>
        <h3 className={styles.border}> + Comunidade</h3>


    </div>

    </section>

    
    
    
    
    
    
    
    
    
    
    )

};