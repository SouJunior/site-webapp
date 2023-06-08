import styles from "./HeaderHome.module.css";
import HomeComponent from "./componentHome";

const HeaderHome = () => {
  const contentText =
    "A SouJunior oferece a oportunidade de trabalhar com produtos digitais e adquirir habilidade valiosas para a sua transição de carreira. \n Com o nosso apoio, você terá chance de desenvolver suas competências e aprofundar o seu conhecimento em áreas de seu interesse, aumentando assim suas chances de sucesso na sua trajetoria profissional";

  return (
    <section className={styles.HeroHomeContainer}>
      <HomeComponent
        tittle="Desenvolva habilidades no mercado de tecnologia com a SouJunior."
        content={contentText}
        image={"/assets/skills-home.svg"}
        imgStyles={styles.image1}
        containerStyle={styles.skillsContainer}
      />
      <HomeComponent
        tittle="Ajude a impulsionar carreiras!"
        content="Na SouJunior, você terá a oportunidade de fornecer mentorias ou
        apoiar a organização de outras formas, contribuindo para o
        desenvolvimento de futuros profissionais do mercado de tecnologia.
        Junte-se a nós e faça a diferença no mundo"
        image={"/assets/career-home.svg"}
        imgStyles={styles.image2}
        containerStyle={styles.careerContainer}
      />
    </section>
  );
};

export default HeaderHome;
