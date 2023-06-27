import style from "./FooterV2.module.css";
import { dataSocial } from "../../../utils/dataSocial";

const FooterV2 = () => {
  return (
    <div className={style.masterContainer}>
      <div className={style.container}>
        <div className={style.imageContainer}>
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
              <a href="#">Nossas iniciativas</a>
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
              <a href="#">Ouvidoria</a>
            </li>
            <li className={style.link}>
              <a href="/apoiar">Faça parte</a>
            </li>
          </ul>
        </div>
        <div className={style.iconsContainer}>
          <h1 className={style.tittle}>Faça parte da nossa comunidade!</h1>
          <div className={style.icon}>
            {dataSocial.map(({ name, icon, path, id }) => (
              <a
                href={path}
                className={style.socialBtn}
                id={id}
                key={name}
                target="_blank"
                rel="noreferrer">
                {icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterV2;
