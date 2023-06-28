import style from "./FooterV2.module.css";
import { dataSocial } from "../../../utils/dataSocial";

const FooterV2 = () => {
  return (
    <div className={style.masterContainer}>
     
      <div className={style.container}>
<<<<<<< HEAD
        <div className={style.imageContainer}>
=======
      <div className={style.imageContainer}>
>>>>>>> 817c6a7f9446a3a51d255472cc12b4ed9cfb919c
          <img className={style.image} src="/assets/icons/Logo.svg" alt="#" />
        </div>
        <div className={style.listContainer}>
          <h1 className={style.tittle}>Conheça a SouJunior</h1>
          <ul className={style.list}>
            <li className={style.link}>
              <a href="/sobre-nos">Sobre nós</a>
            </li>
            <li className={style.link}>
              <a href="#">Missão visão e valores</a>
            </li>
            <li className={style.link}>
              <a href="/#iniciativas">Nossas iniciativas</a>
            </li>
          </ul>
        </div>
        <div className={style.listContainer}>
          <h1 className={style.tittle}>Fale conosco</h1>
          <ul className={style.list}>
            <li className={style.link}>
              <a href="/faq">Faq</a>
            </li>
            <li className={style.link}>
              <a href="/ouvidoria">Ouvidoria</a>
            </li>
            <li className={style.link}>
              <a href="/apoiar">Faça parte</a>
            </li>
          </ul>
        </div>
<<<<<<< HEAD
        <div className={style.iconsContainer}>
          <h1 className={style.tittle}>Faça parte da nossa comunidade!</h1>
          <div className={style.icon}>
            {dataSocial.map(({ name, icon, path, id }) => (
              <a
                href={path}
                className={style.socialBtn}
=======
        

       <div>
       <h2 >Faça parte da nossa comunidade!</h2>
       
        <div className={style.iconsConatiner} >
            {dataSocial.map(({ name, icon, path, id }) => (
              <a
                href={path}
                // className={styles.socialBtn}
>>>>>>> 817c6a7f9446a3a51d255472cc12b4ed9cfb919c
                id={id}
                key={name}
                target="_blank"
                rel="noreferrer">
                {icon}
              </a>
            ))}
          </div>
<<<<<<< HEAD
        </div>
=======
          </div>
>>>>>>> 817c6a7f9446a3a51d255472cc12b4ed9cfb919c
      </div>
    </div>
  );
};

export default FooterV2;
