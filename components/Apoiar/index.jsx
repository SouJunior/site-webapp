import { useState } from 'react'
import { ChevronDown, ChevronUp } from 'lucide-react';

import { accordionItems} from '../../utils/accordionItems'
import styles from './Apoiar.module.css'
import apoiarImagem from '../../public/assets/apoio.png'
import Image from 'next/image'

export function Apoiar() {
  const [openItem, setOpenItem] = useState(null);

  const handleOpen = (id) => {
    setOpenItem((prev) => (prev === id ? null : id));
  };

  return (
    <section className={styles.ContainerBox} id="apoiar">
      <div className={styles.apoiarContainer}>
        <div className={styles.apoiarContent}>
          <h1 className={styles.title}>Apoie a SouJunior</h1>
          <p className={styles.paragraph}>Apoiar a SouJunior é contribuir para que mais profissionais juniores possam desenvolver as habilidades técnicas necessárias para ingressar no mercado de tecnologia. Com o seu apoio, ampliamos as oportunidades para quem está dando os primeiros passos na área de tecnologia.</p>
        </div>

        <ul className={styles.accordionContainer}>
          {accordionItems.map((item) => (
            <div key={item.id}>
              <div onClick={() => handleOpen(item.id)} className={styles.accordionArrown}>
                <h2 className={styles.accordionTitle}>
                  {item.title}
                </h2>
                {openItem === item.id ? (
                  <ChevronUp className={styles.itemArrown} size={30} />
                ) : (
                  <ChevronDown className={styles.itemArrown} size={30} />
                )}
              </div>
              {openItem === item.id && (
                <li>
                  <h3 className={styles.subTitle}>Ajude a espalhar a voz sobre a SouJunior!</h3>
                  <p className={styles.paragraph}>{item.content}</p>
                  <button className={styles.buttonStyle}>Cadastre-se como apoiador</button>
                </li>
              )}
              <hr className={styles.rowAccordion} />
            </div>
          ))}
        </ul>

        <div className={styles.financiadorContainer}>
          <h2 className={styles.title}>Seja um financiador!</h2>
          <p className={styles.paragraph}>Você também pode apoiar a SouJunior se tornando um financiador do projeto, contribuindo diretamente para o crescimento da SouJunior. Sua ajuda financeira permite que continuemos oferecendo oportunidades e recursos para profissionais juniores ingressarem no mercado de tecnologia.</p>
        </div>
        <div className={styles.buttonContainer}>
          <a className={styles.apoiarButton} href="#apoiar">
            Acesse nosso Apoia-se
          </a>
          <div className={styles.imageApoiar}>
            <Image src={apoiarImagem} alt="Apoiar" />
          </div>
        </div>
      </div>
    </section>
  );
}
