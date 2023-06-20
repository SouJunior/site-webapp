import Image from "next/image";
import style from "./DepositionCard.module.css";

export function DepositionCard({ name, description, role, imgPath }) {
  return (
    <div className={style.depositionCard}>
      <header className={style.header}>
        <div className={style.headerDepositionInfo}>
          <Image
            className={style.depositionImg}
            src={imgPath}
            alt=""
            width={97}
            height={97}
          />
          <div>
            <p className={style.name}>{name}</p>
            <p className={style.role}>{role}</p>
          </div>
        </div>
      </header>
      <div className={style.description}>
        <p className={style.paragraph}>{description}</p>
      </div>
    </div>
  );
}
