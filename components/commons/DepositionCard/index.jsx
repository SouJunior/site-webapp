import Image from "next/image";
import miniLogo from "../../../public/assets/mini-logo.svg"
import style from "./DepositionCard.module.css"

export function DepositionCard({ name, description, role, imgPath }){
  return <div className={style.depositionCard}>
    <header className={style.header} >
      <div className={style.headerDepositionInfo}>
        <Image className={style.depositionImg} src={imgPath} alt="" width={180} height={180}/>
        <div>
          <p className={style.name}>
            {name}
          </p>
          <p className={style.role}>
            {role}
          </p>
        </div>
      </div>
      <div>
        <Image src={miniLogo} width={150} height={90} />
      </div>
    </header>
      <p className={style.description}>
        {description}
      </p>
  </div>
}