import { useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import Image from "next/image";
import { Heading } from "../commons/Heading";
import { Paragraph } from "../commons/Paragraph";
import { Accordion } from "../Accordion";

import styles from "./Apoiar.module.css";

export const ApoiarSection = () => {

  const [icon, setIcon] = useState(IoIosArrowUp);

  return (
    <section className={styles.apoiarSection} id={"apoie-a-soujunior"}>
      <div className={styles.container}>
        <Heading level={"h1"}>Apoie a SouJunior</Heading>
        <Paragraph>Apoiar a SouJunior é contribuir para que mais profissionais juniores possam desenvolver as habilidades técnicas necessárias para ingressar no mercado de tecnologia. Com o seu apoio, ampliamos as oportunidades para quem está dando os primeiros passos na área de tecnologia.</Paragraph>
        
        <Accordion/>

        <div className={styles.footer}>
          <div className={styles.titleFooter}>
            <Heading level={"h1"}>
              Seja um financiador!
            </Heading>
          </div>
          <Paragraph>
            Você também pode apoiar a SouJunior se tornando um financiador do projeto, contribuindo diretamente para o crescimento da SouJunior.
            Sua ajuda financeira permite que continuemos oferecendo oportunidades e recursos para profissionais juniores ingressarem no mercado de tecnologia.
          </Paragraph>
          <div className={styles.apoiarContent}>
            <button className={styles.buttonApoiar} onClick={() => window.open("https://apoia.se/soujunior", "_blank", "noopener noreferrer")}>
              <div className={styles.buttonApoiarContent}>
                <p>Acesse nosso Apoia-se</p>
                <div>
                  <Image src="/assets/group_125.png" width={65} height={61.53} alt="group_125.png" />
                </div>
              </div>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
