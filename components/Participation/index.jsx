import {useState} from "react";
import {IoMdAdd, IoMdClose} from "react-icons/io";
import {VscCircleFilled} from "react-icons/vsc";

import styles from "./Participation.module.css";

export const ParticipationSection = () => {
  const [textJr, setTextJr] = useState(false);
  const [textMentor, setTextMentor] = useState(false);
  const [textSupporter, setTextSupporter] = useState(false);
  const [textCommunity, setTextCommunity] = useState(false);
  const [icon, setIcon] = useState(IoMdAdd);

  return (
    <section className={styles.container} id={"participar"}>
      <div className={styles.leftSide}>
        <h1 className={styles.h1}>Quem pode participar?</h1>
        <p className={styles.paragraph}>
          Temos oportunidades para profissionais Juniors e mentores de diversas
          profissões. Além disso, temos oportunidades para apoiadores e
          parceiros para diferentes frentes de contribuição para o projeto.
          <br /> <br />
          Veja ao lado quais são as categorias de participantes disponíveis para
          contribuir com a SouJunior e como participar.
        </p>
      </div>

      <section className={styles.rightSide}>
        <div className={textJr ? styles.textJr : styles.hide}>
          <button
            className={styles.btn}
            onClick={() => setTextJr(!textJr) && setIcon(IoMdClose)}
          >
            {textJr ? <IoMdClose /> : <IoMdAdd />}
            <h3>Sou Júnior</h3>
          </button>

          {textJr && (
            <>
              <p className={styles.p}>
                São as pessoas que querem trabalhar na área de tecnologia,
                estudam ou estão estudando sobre a área de interesse, mas
                <b>ainda não tem toda experiência exigida</b> pelos recrutadores
                e empresas para contratarem para uma vaga júnior.
                <br />
                <br />
                Se você identificou que possui interesse e, alguma das carreiras
                acima, mas ainda não tem experiência (seu perfil Junior será
                analisado pelo Linkedin),
                <b>
                  pode aplicar para participar do SouJunior, através do
                  formulário de inscrição.
                </b>
                <br />
                <br />
                Assim que tivermos vaga para sua área de interesse, analisaremos
                suas informações e caso você seja um match, entraremos em
                contato.
                <br />
                <br />
                Daremos sempre prioridade para aqueles que já participarem do
                servidor <b>SouJunior no Discor</b>e do{" "}
                <b>Github do SouJunior</b> por já estarem familiarizados com as
                ferramentas e sobre como o projeto funciona.
              </p>
              <br />
              <br />
              <button className={styles.button}>
                <a
                  href="https://forms.gle/d7yFWXjCPj9CLFFN9"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Quero Participar
                </a>
              </button>
            </>
          )}
        </div>

        <div className={textMentor ? styles.textMentor : styles.hide}>
          <button
            className={styles.btn}
            onClick={() => setTextMentor(!textMentor) && setIcon(IoMdClose)}
          >
            {textMentor ? <IoMdClose /> : <IoMdAdd />}
            <h3 className={styles.border}>Sou Mentor</h3>
          </button>

          {textMentor && (
            <>
              <p className={styles.p}>
                São profissionais já inseridos e
                <b>atuantes no mercado de trabalho, há pelo menos 6 meses.</b>
                <br />
                <br />
                Se você tem disponibilidade e interesse em contribuir para o
                SouJunior, preencha o formulário de inscrição quere entraremos
                em contato quando tivermos demanda de pessoas mentoras na área
                de atuação.
                <br />
                <br />
              </p>
              <br />
              <button className={styles.button}>
                <a
                  href="https://forms.gle/d7yFWXjCPj9CLFFN9"
                  target="_blank"
                  rel="noopener noreferrer "
                >
                  Quero Participar
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
            }
          >
            {textSupporter ? <IoMdClose /> : <IoMdAdd />}
            <h3 className={styles.border}> Sou Apoiador</h3>
          </button>

          {textSupporter && (
            <>
              <p className={styles.p}>
                São pessoas que tenham interesse e possam contribuir de alguma
                forma para o projeto SouJunior.
                <br />
                <br />
                <VscCircleFilled /> Pessoas de divulgação, que tenham canal no
                YouTube, podcast, Blog ou Administradores de grupos, todos que
                abordem assuntos referentes às áreas de atuação de profissionais
                de tecnologia.
                <br />
                <br />
                <VscCircleFilled /> Pessoas especialistas que se disponham em
                <b>palestrar sobre algum assunto de interesse,</b>aos
                profissionais Juniors de tecnologia. <br />
                <br />
                <VscCircleFilled /> Recrutadores e empresas
                <b>
                  dispostas a contratar ou que priorizem a contratação de
                  profissionais Juniors
                </b>
                voluntários do SouJunior. <br />
                <br />
                Se você pode contribuir para o SouJunior como pessoa apoiadora
                ou parceira, inscreva-se através do formulário e nossa equipe
                responsável entrará em contato com você.
              </p>
              <br />
              <br />
              <button className={styles.button}>
                <a
                  href="https://forms.gle/d7yFWXjCPj9CLFFN9"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Quero Participar
                </a>
              </button>
            </>
          )}
        </div>

        <div className={textCommunity ? styles.textCommunity : styles.hide}>
          <button
            className={styles.btn}
            onClick={() =>
              setTextCommunity(!textCommunity) && setIcon(IoMdClose)
            }
          >
            {textCommunity ? <IoMdClose /> : <IoMdAdd />}
            <h3 className={styles.border}>Comunidade</h3>
          </button>

          {textCommunity && (
            <>
              <p className={styles.p}>
                São pessoas que queiram saber como funciona e o que está
                acontecendo no projeto. <br />
                <br />
                Como o SouJunior é um plataforma Open Source, qualquer pessoa
                que se interesse pode acessar as informações sobre o andamento
                do projeto. <br />
                <br />
                Desde <b>curiosos</b> que só querem dar uma olhadinha, até
                aqueles que queiram <b>observar como o SouJunior funciona</b>,
                antes de decidirem se querem participar do projeto ou não.
                <br />
                <br />
                Acesse o servidor <b>SouJunior no Discord</b> e do
                <b>Github do SouJunior</b> espie e acompanhe o dia a dia do
                projeto, inclusive como ouvite nas reuniões nos canais de voz.
                <br />
                <br />
                Ao entrar no servidor SouJunior do Discord, leia atentamente as
                regras
                <>
                  <b>#rules</b>
                </>
                e fique sempre atento ao
                <>
                  <b>#chat</b>
                </>
                para interagir com os demais participantes da comunidade.
              </p>
              <br />
              <br />
              <button className={styles.button}>
                <a
                  href="https://forms.gle/d7yFWXjCPj9CLFFN9"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Quero Participar
                </a>
              </button>
            </>
          )}
        </div>
      </section>
    </section>
  );
};
