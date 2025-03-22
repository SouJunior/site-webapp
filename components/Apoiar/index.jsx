import { useState } from 'react'
import { ChevronDown, ChevronUp } from 'lucide-react';

import { accordionItems } from '../../utils/accordionItems'
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

        <div className={styles.accordionContainer}>
          {accordionItems.map((item) => (
            <div key={item.id} className={styles.accordionItem}>
              <button
                onClick={() => handleOpen(item.id)}
                className={styles.accordionArrown}
                aria-expanded={openItem === item.id}
                aria-controls={`accordion-content-${item.id}`}
              >
                <h2 className={styles.accordionTitle}>
                  {item.title}
                </h2>
                {openItem === item.id ? (
                  <ChevronUp className={styles.itemArrown} size={30} />
                ) : (
                  <ChevronDown className={styles.itemArrown} size={30} />
                )}
              </button>
              {openItem === item.id && (
                <div
                  className={styles.accordionContent}
                  id={`accordion-content-${item.id}`}
                >
                  <h3 className={styles.subTitle}>Ajude a espalhar a voz sobre a SouJunior!</h3>
                  <p className={styles.paragraph}>{item.content}</p>
                  <a href="/cadastro-apoiador" className={styles.buttonStyle}>Cadastre-se como apoiador</a>
                </div>
              )}
              <hr className={styles.rowAccordion} />
            </div>
          ))}
        </div>

        <div className={styles.financiadorContainer}>
          <h2 className={styles.title}>Seja um financiador!</h2>
          <p className={styles.paragraph}>Você também pode apoiar a SouJunior se tornando um financiador do projeto, contribuindo diretamente para o crescimento da SouJunior. Sua ajuda financeira permite que continuemos oferecendo oportunidades e recursos para profissionais juniores ingressarem no mercado de tecnologia.</p>
        </div>
        <div className={styles.buttonContainer}>
          <a className={styles.apoiarButton} href="https://apoia.se/soujunior" target="_blank" rel="noopener noreferrer">
            Acesse nosso Apoia-se
          </a>
          <div className={styles.imageApoiar}>
            <Image src={apoiarImagem} alt="Apoiar" width={68} height={68} />
          </div>
        </div>
      </div>
    </section >
  );
}
