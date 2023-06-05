import style from "./Depositions.module.css"
import { data } from "../../utils/depositionCarouselInfo"
import Image from "next/image"
import { DepositionCard } from "../commons/DepositionCard"
import 'pure-react-carousel/dist/react-carousel.es.css';

export function Depositions() {
  return <section className={style.depositionsSectionWrapper}>
    <header className={style.depositionsHeader}>
      <h2 className={style.depositionsTitle}>
        Depoimentos
      </h2>
    </header>

    <div className={style.depositionsContainer}>
      <div>
        <div className={style.depositionsContainerWrapper}>
          {data.map(collaborator => (
            <div key={collaborator.imgPath}>
              <Image src={collaborator.imgPath} alt='' width={80} height={80} className={style.collaboratorImg}/>
            </div>
          ))}

        </div>
        <p className={style.subTitle}>O que dizem sobre nós</p>
        </div>
      <div className={style.carouselContainer}>
        <DepositionCard imgPath={data[0].imgPath} title={'collaborator.title'} description={'collaborator.description'} role={'role'} name={'Priscila Souza'}/>
      </div>
    </div>
  </section>
}