import { useState } from "react";
import Image from "next/image";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

import styles from "./Apoiar.module.css";
import { Heading } from "../commons/Heading";
import { Paragraph } from "../commons/Paragraph";

export const ApoiarSection = () => {
  const [textPromoter, setTextPromoter] = useState(false);
  const [textSpecialist, setTextSpecialist] = useState(false);
  const [textRecruiter, setTextRecruiter] = useState(false);
  const [textCompany, setTextCompany] = useState(false);
  const [icon, setIcon] = useState(IoIosArrowUp);

  return (
    <section className={styles.ParticipationSection} id={"apoie-a-soujunior"}>
        <div className={styles.container}>
          <div className={styles.headerContainer}>
            <Heading level={"h1"}>
              Apoie a SouJunior
            </Heading>
          </div>
          <Paragraph>
            Apoiar a SouJunior é contribuir para que mais profissionais juniores possam desenvolver as habilidades técnicas necessárias para ingressar no mercado de tecnologia.
            Com o seu apoio, ampliamos as oportunidades para quem está dando os primeiros passos na área de tecnologia.
          </Paragraph>
          <div className={styles.rightSide}>
            <div className={textPromoter ? styles.textJr : styles.hide}>
              <button
                className={textPromoter ? styles.btnCross2 : styles.btnCross}
                onClick={() => setTextPromoter(!textPromoter) && setIcon(IoIosArrowDown)}
              >
                <div className={styles.contentBtn}>
                  <Heading level={"h3"}>Divulgador (Youtube, Linkedin, e etc)</Heading>
                  {textPromoter ? <IoIosArrowUp /> : <IoIosArrowDown />}
                </div>
              </button>

              {textPromoter && (
                <>
                  <div className={styles.ParagraphWrapper}>
                      <h1>Ajude a espalhar a voz sobre a SouJunior!</h1>
                      <p>Se você tem um canal no YouTube, podcast, blog ou qualquer plataforma de comunicação, divulgue nosso projeto e amplie o alcance das nossas iniciativas.</p>
                    <button className={styles.button} onClick={() => window.open("/apoiar","_blank", "noopener noreferrer")}>
                      Cadastre-se como apoiador.
                    </button>
                  </div>
                </>
              )}
            </div>

            <div className={textSpecialist ? styles.textMentor : styles.hide}>
              <button
                className={textSpecialist ? styles.btnCross2 : styles.btnCross}
                onClick={() => setTextSpecialist(!textSpecialist) && setIcon(IoIosArrowDown)}
              > 
                <div className={styles.contentBtn}>
                  <Heading level={"h3"}>Especialistas interessados em palestrar</Heading>
                  {textSpecialist ? <IoIosArrowUp /> : <IoIosArrowDown />}
                </div>
              </button>

              {textSpecialist && (
                <>
                  <div className={styles.ParagraphWrapper}>
                    <h1>Compartilhe seu conhecimento e inspire profissionais juniores!</h1>
                    <p>Se você é um especialista em tecnologia, participe como palestrante e contribua para o desenvolvimento técnico e profissional da nossa comunidade.</p>
                    <button className={styles.button} onClick={() => window.open("/apoiar","_blank", "noopener noreferrer")}>
                      Cadastre-se como apoiador.
                    </button>
                  </div>
                </>
              )}
            </div>

            <div className={textRecruiter ? styles.textSupporter : styles.hide}>
              <button
                className={textRecruiter ? styles.btnCross2 : styles.btnCross}
                aria-expanded={textRecruiter}
                aria-controls="head-content"
                onClick={() =>
                  setTextRecruiter(!textRecruiter) && setIcon(IoIosArrowDown)
                }
              >
                <div className={styles.contentBtn}>
                  <Heading level={"h3"}>Recrutadores e consultores de carreira</Heading>
                  {textRecruiter ? <IoIosArrowUp /> : <IoIosArrowDown />}
                </div>
              </button>

              {textRecruiter && (
                <div id="head-content">
                  <div className={styles.ParagraphWrapper}>
                    <h1>Faça a diferença conectando talentos a oportunidades!</h1>
                    <p>Como recrutador, você pode ajudar profissionais juniores a encontrar sua primeira vaga no mercado de tecnologia, impulsionando suas carreiras.</p>

                    <button className={styles.button} onClick={() => window.open("/apoiar","_blank", "noopener noreferrer")}>
                      Cadastre-se como apoiador.
                    </button>
                  </div>
                </div>
              )}
            </div>

            <div className={textCompany ? styles.textHead : styles.hide}>
              <button
                className={textCompany ? styles.btnCross2 : styles.btnCross}
                onClick={() =>
                  setTextCompany(!textCompany) && setIcon(IoIosArrowDown)
                }
              >
                <div className={styles.contentBtn}>
                  <Heading level={"h3"}>Empresas interessadas em contratar</Heading>
                  {textCompany ? <IoIosArrowUp /> : <IoIosArrowDown />}
                </div>
              </button>

              {textCompany && (
                <>
                  <div className={styles.ParagraphWrapper}>
                    <h1>Se sua empresa busca novos talentos, junte-se a nós!</h1>
                    <p>Contrate profissionais juniores da SouJunior e contribua para o crescimento de uma nova geração de especialistas em tecnologia.</p>

                    <button className={styles.button} onClick={() => window.open("/apoiar","_blank", "noopener noreferrer")}>
                      Cadastre-se como apoiador.
                    </button>
                  </div>
                </>
              )}
            </div>
          </div>
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
