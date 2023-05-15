import { useState } from "react";
import Image from "next/image";
import { IoMdAdd, IoMdClose } from "react-icons/io";

import styles from "./Participation.module.css";
import { headers } from "../../utils/headers";

export const ParticipationSection = () => {
  const [textJr, setTextJr] = useState(false);
  const [textMentor, setTextMentor] = useState(false);
  const [textSupporter, setTextSupporter] = useState(false);
  // const [textCommunity, setTextCommunity] = useState(false);
  const [icon, setIcon] = useState(IoMdAdd);
  const [action, setAction] = useState(false);

  return (
    <>
      <div className={styles.headerContainer}>
        <h1 className={styles.h1}>
          Faça você também parte da nossa comunidade!
        </h1>
        <div className={styles.headers}>
          {headers.map(({ id, img }) => (
            <div key={id} className={styles.headersImg}>
              <Image src={img} width={150} height={150} />
            </div>
          ))}
        </div>
      </div>
      <section className={styles.ParticipationSection} id={"participar"}>
        <div className={styles.container}>
          <div className={styles.leftSide}>
            <p className={styles.paragraph}>
              Na SouJunior, há diversas maneiras de participar do projeto, tanto
              para juniores como para mentores ou apoiadores.
            </p>
            <p className={styles.paragraph}>
              Os interessados em colaborar podem ajudar na construção do projeto
              ou patrocinar a iniciativa como apoiadores ou parceiros.
            </p>
            <p className={styles.paragraph}>
              Há várias formas de participar e os interessados podem clicar em
              uma das categorias abaixo e preencher as informações solicitadas.
            </p>
            {/* <p className={styles.paragraph}>
            Aqui na SouJunior, você poderá participar do projeto de muitas
            maneiras. Temos oportunidades para profissionais nível júnior e
            mentores das mais diversas áreas, caso você tenha o interesse de
            colocar a &quot;mão na massa&quot; e construir esse projeto conosco.
            <br />
            <br />
            Porém, se o interesse for de patrocinar a iniciativa para que ela
            continue por muito tempo, você poderá se tornar nosso apoiador ou
            parceiro. Confira ao lado todas as categorias de participação
            disponíveis na SouJunior, preencha os formulários das quais for do
            seu interesse e entraremos em contato!
          </p>
          <p className={styles.hidden}>
            Aqui na SouJunior, você poderá participar do projeto de muitas
            maneiras. Temos oportunidades para profissionais nível júnior e
            mentores das mais diversas áreas, caso você tenha o interesse de
            colocar a &quot;mão na massa&quot; e construir esse projeto conosco.
            <br />
            <br />
            Porém, se o interesse for de patrocinar a iniciativa para que ela
            continue por muito tempo, você poderá se tornar nosso apoiador ou
            parceiro. Confira abaixo todas as categorias de participação
            disponíveis na SouJunior, preencha os formulários das quais for do
            seu interesse e entraremos em contato!
          </p> */}
          </div>

          <div className={styles.rightSide}>
            <div className={textJr ? styles.textJr : styles.hide}>
              <button
                className={styles.btn}
                onClick={() => setTextJr(!textJr) && setIcon(IoMdClose)}>
                {textJr ? <IoMdClose /> : <IoMdAdd />}
                <h2>Sou Júnior</h2>
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
                <h2 className={styles.border}>Sou Mentor</h2>
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
                <h2 className={styles.border}> Sou Apoiador</h2>
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

            {/* <div className={textCommunity ? styles.textCommunity : styles.hide}>
            <button
              className={styles.btn}
              onClick={() =>
                setTextCommunity(!textCommunity) && setIcon(IoMdClose)
              }>
              {textCommunity ? <IoMdClose /> : <IoMdAdd />}
              <h2 className={styles.border}>Comunidade</h2>
            </button>

            {textCommunity && (
              <>
                <p className={styles.p}>
                  São pessoas que queiram saber como funciona e o que está
                  acontecendo no projeto. <br />
                  <br />
                  Como a SouJunior é uma plataforma Open Source, qualquer pessoa
                  que se interesse pode acessar as informações sobre o andamento
                  do projeto. <br />
                  <br />
                  Desde <b>curiosos</b> que só querem dar uma olhadinha, até
                  aqueles que queiram <b>observar como a SouJunior funciona</b>,
                  antes de decidirem se querem participar do projeto ou não.
                  <br />
                  <br />
                  Acesse o servidor <b>SouJunior no Discord</b> e do{" "}
                  <b>Github do SouJunior</b>, espie e acompanhe o dia a dia do
                  projeto, inclusive como ouvinte nas reuniões nos canais de
                  voz.
                  <br />
                  <br />
                  Ao entrar no servidor SouJunior do Discord, leia atentamente
                  as regras <b>#rules</b> e fique sempre atento ao <b>#chat</b>{" "}
                  para interagir com os demais participantes da comunidade.
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
          </div> */}
          </div>
        </div>
      </section>
    </>
  );
};
