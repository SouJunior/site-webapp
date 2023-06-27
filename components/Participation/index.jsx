import { useState } from "react";
import Image from "next/image";
import { IoMdAdd, IoMdClose } from "react-icons/io";

import styles from "./Participation.module.css";
import { headers } from "../../utils/headers";
import { Heading } from "../commons/Heading";
import { Paragraph } from "../commons/Paragraph";

export const ParticipationSection = () => {
  const [textJr, setTextJr] = useState(false);
  const [textMentor, setTextMentor] = useState(false);
  const [textSupporter, setTextSupporter] = useState(false);
  const [icon, setIcon] = useState(IoMdAdd);
  const [action, setAction] = useState(false);

  return (
    <>
      <div className={styles.headerContainer} id="participation">
        <Heading level={"h1"}>
          Faça você também parte da nossa comunidade!
        </Heading>
        <div className={styles.headers}>
          {headers
            .filter((header) => header.id <= 9)
            .map(({ id, img }) => (
              <div key={id} className={styles.headersImg}>
                <Image
                  src={img}
                  width={150}
                  height={150}
                  className={styles.image}
                />
              </div>
            ))}
        </div>
      </div>
      <section className={styles.ParticipationSection} id={"participar"}>
        <div className={styles.container}>
          <div className={styles.leftSide}>
            <Paragraph>
              Na SouJunior, há diversas maneiras de participar do projeto, tanto
              para juniores como para mentores ou apoiadores.
            </Paragraph>
            <Paragraph>
              Os interessados em colaborar podem ajudar na construção do projeto
              ou patrocinar a iniciativa como apoiadores ou parceiros.
            </Paragraph>
            <Paragraph>
              Há várias formas de participar e os interessados podem clicar em
              uma das categorias abaixo e preencher as informações solicitadas.
            </Paragraph>
          </div>

          <div className={styles.rightSide}>
            <div className={textJr ? styles.textJr : styles.hide}>
              <button
                className={styles.btn}
                onClick={() => setTextJr(!textJr) && setIcon(IoMdClose)}>
                {textJr ? <IoMdClose /> : <IoMdAdd />}
                <Heading level={"h3"}>Sou Júnior</Heading>
              </button>

              {textJr && (
                <>
                  <p className={styles.p}>
                    A SouJunior oferece uma oportunidade para pessoas
                    interessadas em trabalhar na área de tecnologia, mas que
                    ainda não têm experiência suficiente.
                  </p>

                  <p className={styles.p}>
                    Os candidatos podem se inscrever através de um formulário.
                  </p>
                  <p className={styles.p}>
                    As informações dos candidatos serão avaliadas quando houver
                    vagas disponíveis para a área de interesse e o candidato
                    será contatado para seguir o processo.
                  </p>

                  <br />
                  <br />
                  <button className={styles.button}>
                    <a
                      href="https://forms.gle/d7yFWXjCPj9CLFFN9"
                      target="_blank"
                      rel="noopener noreferrer">
                      Quero Participar!
                    </a>
                  </button>
                </>
              )}
            </div>

            <div className={textMentor ? styles.textMentor : styles.hide}>
              <button
                className={styles.btn}
                onClick={() =>
                  setTextMentor(!textMentor) && setIcon(IoMdClose)
                }>
                {textMentor ? <IoMdClose /> : <IoMdAdd />}
                <Heading level={"h3"}>Sou Mentor</Heading>
              </button>

              {textMentor && (
                <>
                  <p className={styles.p}>
                    A SouJunior busca profissionais atuantes no mercado de
                    trabalho há pelo menos 6 meses para atuar como mentores.
                  </p>
                  <p className={styles.p}>
                    Os interessados devem preencher o formulário de inscrição e
                    serão contatados quando houver demanda na área de atuação.”
                  </p>
                  <br />
                  <button className={styles.button}>
                    <a
                      href="https://forms.gle/d7yFWXjCPj9CLFFN9"
                      target="_blank"
                      rel="noopener noreferrer ">
                      Quero Participar!
                    </a>
                  </button>
                </>
              )}
            </div>

            <div className={textSupporter ? styles.textSupporter : styles.hide}>
              <button
                className={styles.btn}
                onClick={() =>
                  setTextSupporter(!textSupporter) && setIcon(IoMdClose)
                }>
                {textSupporter ? <IoMdClose /> : <IoMdAdd />}
                <Heading level={"h3"}>Sou Apoiador</Heading>
              </button>

              {textSupporter && (
                <>
                  <p className={styles.p}>
                    O projeto SouJunior busca pessoas interessadas em contribuir
                    para o projeto de alguma forma, incluindo financiadores da
                    iniciativa, divulgadores com canais no YouTube, podcast ou
                    blog sobre tecnologia, especialistas dispostos a palestrar
                    para profissionais Juniores de tecnologia, recrutadores e
                    empresas que desejam contratar.
                  </p>
                  <p className={styles.p}>
                    Interessados devem se inscrever através do formulário e,
                    posteriormente, contatados pela equipe responsável.
                  </p>

                  <button className={styles.button}>
                    <a href="/apoiar" rel="noopener noreferrer">
                      Quero Participar!
                    </a>
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
