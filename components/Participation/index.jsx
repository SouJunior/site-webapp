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
    <section className={styles.ParticipationSection} id={"participar"}>
      <div className={styles.container}>
        <div className={styles.leftSide}>
          <h1 className={styles.h1}>Quem pode participar?</h1>
          <p className={styles.paragraph}>
          Aqui na SouJunior, você poderá participar do projeto de muitas maneiras. Temos oportunidades para profissionais nível júnior e mentores das mais diversas áreas, caso você tenha o interesse de colocar a {"mão na massa"} e construir esse projeto conosco.<br/><br/>
          Porém, se o interesse for de patrocinar a iniciativa para que ela continue por muito tempo, você poderá se tornar nosso apoiador ou parceiro.
          Confira ao lado todas as categorias de participação disponíveis na SouJunior, preencha os formulários das quais for do seu interesse e entraremos em contato!
          </p>
          <p className={styles.hidden}>
          Aqui na SouJunior, você poderá participar do projeto de muitas maneiras.
          Temos oportunidades para profissionais nível júnior e mentores das mais diversas áreas, caso você tenha o interesse de colocar a {"mão na massa"}e construir esse projeto conosco.<br/><br/>
          Porém, se o interesse for de patrocinar a iniciativa para que ela continue por muito tempo, você poderá se tornar nosso apoiador ou parceiro.
          Confira ao abaixo todas as categorias de participação disponíveis na SouJunior, preencha os formulários das quais for do seu interesse e entraremos em contato!
          </p>
        </div>

        <div className={styles.rightSide}>
          <div className={textJr ? styles.textJr : styles.hide}>
            <button
              className={styles.btn}
              onClick={() => setTextJr(!textJr) && setIcon(IoMdClose)}
            >
              {textJr ? <IoMdClose /> : <IoMdAdd />}
              <h2>Sou Júnior</h2>
            </button>

            {textJr && (
              <>
                <p className={styles.p}>
                São as pessoas que querem trabalhar na área de tecnologia, estudaram ou estão estudando sobre a área de interesse, mas <b>ainda não têm toda a experiência 
                exigida</b> pelos recrutadores e empresas para as contratarem para uma vaga júnior.<br/><br/>
                Se você identificou que possui interesse em alguma das carreiras acima, mas ainda não tem experiência (seu perfil Junior será analisado pelo Linkedin),  
                <b> pode aplicar para participar do SouJunior, através do formulário de inscrição</b>.<br/><br/>
                Assim que tivermos vaga para sua área de interesse, analisaremos suas informações e caso você seja um match, entraremos em contato.
                Daremos sempre prioridade para aqueles que já participem do servidor <b>SouJunior no Discord</b> e do <b>Github da SouJunior</b> por
                 já estarem familiarizados com as ferramentas e sobre como projeto funciona.
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
              <h2 className={styles.border}>Sou Mentor</h2>
            </button>

            {textMentor && (
              <>
                <p className={styles.p}>
                São profissionais já inseridos e <b>atuantes no mercado de trabalho, há pelo menos 6 meses</b>.<br/><br/>
                Se você tem disponibilidade e interesse em contribuir para a SouJunior, preencha o formulário de inscrição que entraremos em contato quando tivermos
                 a demanda de pessoas mentoras na área de sua atuação.
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
              <h2 className={styles.border}> Sou Apoiador</h2>
            </button>

            {textSupporter && (
              <>
                  <p className={styles.p}>
                  
                  São pessoas que tenham interesse e possam contribuir de alguma forma para o projeto SouJunior. <br/><br/>
                
                <ul>
                
                <li>Pessoas de divulgação, que tenham canal no YouTube, podcast, blog ou administradores de grupos, que abordem assuntos referentes às
                      áreas de atuação de profissionais de tecnologia.</li><br/><br/>
                      
                <li>Pessoas especialistas que se disponham a palestrar sobre algum assunto de interesse, aos profissionais Juniors de tecnologia.</li><br/><br/>
                      
                <li>Recrutadores e empresas dispostas a contratar ou que priorizem a contratação dos profissionais Juniors voluntários da SouJunior.</li><br/><br/>
                                      
              </ul>

              Se você pode contribuir para a SouJunior como pessoa apoiadora ou parceira, inscreva-se através do formulário e nossa equipe responsável entrará em contato com você.

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
              <h2 className={styles.border}>Comunidade</h2>
            </button>

            {textCommunity && (
              <>
                <p className={styles.p}>
                 
                São pessoas que queiram saber como funciona e o que está acontecendo no projeto. <br/><br/>
                Como a SouJunior é uma plataforma Open Source, qualquer pessoa que se interesse pode acessar as informações sobre o andamento do projeto. <br/><br/>
                Desde <b>curiosos</b> que só querem dar uma olhadinha, até aqueles que queiram <b>observar como a SouJunior funciona</b>, antes de decidirem se querem participar do projeto ou não.<br/><br/>
                Acesse o servidor <b>SouJunior no Discord</b> e do <b>Github do SouJunior</b>, espie e acompanhe o dia a dia do projeto, inclusive como ouvinte nas reuniões nos canais de voz.<br/><br/>
                Ao entrar no servidor SouJunior do Discord, leia atentamente as regras <b>#rules</b> e fique sempre atento ao <b>#chat</b> para interagir com os demais participantes da comunidade.

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
        </div>
      </div>
    </section>
  );
};
