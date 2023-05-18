import styles from "./HeaderHome.module.css";
import HomeComponent from "./componentHome";

const HeaderHome = () => {
  const contentText =
    "A SouJunior oferece a oportunidade de trabalhar com produtos digitais e adquirir habilidade valiosas para a sua transição de carreira. \n Com o nosso apoio, você terá chance de desenvolver suas competências e aprofundar o seu conhecimento em áreas de seu interesse, aumentando assim suas chances de sucesso na sua trajetoria profissional";

  const imageHome2 = "/assets/imageHome_2.png";
  const imageHome1 = "/assets/imageHome_1.png";

  const imgStyle1 = styles.image1;
  const imgStyle2 = styles.image2;

  const containerStyle1 = styles.homeContainer1;
  const containerStyle2 = styles.homeContainer2;

  return (
    <section className={styles.headerHomeContainer}>
      <HomeComponent
        tittle="Desenvolva habilidades no mercado de tecnologia com a SouJunior."
        content={contentText}
        image={imageHome1}
        imgStyles={imgStyle1}
        containerStyle={containerStyle1}
      />
      <HomeComponent
        tittle="Ajude a impulsionar carreiras!"
        content="Na SouJunior, você terá a oportunidade de fornecer mentorias ou
        apoiar a organização de outras formas, contribuindo para o
        desenvolvimento de futuros profissionais do mercado de tecnologia.
        Junte-se a nós e faça a diferença no mundo"
        image={imageHome2}
        imgStyles={imgStyle2}
        containerStyle={containerStyle2}
      />
    </section>
  );
};

export default HeaderHome;
