import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Heading } from "../commons/Heading";
import { Paragraph } from "../commons/Paragraph";
import styles from "./MissionValues.module.css";

export const MissionValues = () => {
  return (
    <>
      <div className={styles.bannerContainer} id="mission">
        <picture>
          <source
            media="(max-width: 960px)"
            srcSet="/assets/hero-missao.svg 768w"
            sizes="960px"
          />
          <source srcSet="/assets/hero-missao.svg 1280w" sizes="1440px" />

          <img
            src="/assets/hero-missao.svg"
            alt="Uma experiência real de trabalho em uma empresa de tecnologia."
          />
        </picture>

        <Heading level={"h3"}>Propósito, Missão e Visão </Heading>
      </div>

      <section className={styles.MissionSection}>
        <div className={styles.container}>
          <div className={styles.contentMissionWrapper}>
            <div className={styles.boxText}>
              <div>
                <Heading level={"h4"}>Propósito</Heading>
                <Paragraph>Porque fazemos o que fazemos:</Paragraph>
              </div>
              <Paragraph>
                Impactar na formação de uma nova geração tech pela forma de
                pensar e agir.
              </Paragraph>
            </div>
            <div className={styles.boxText}>
              <div>
                <Heading level={"h4"}>Missão</Heading>
                <Paragraph>O que buscamos todos os dias:</Paragraph>
              </div>
              <Paragraph>
                Conectar potenciais às oportunidades para transformar a
                realidade das pessoas e das empresas.
              </Paragraph>
            </div>
            <div className={styles.boxText}>
              <div>
                <Heading level={"h4"}>Visão</Heading>
                <Paragraph>Qual o nosso foco:</Paragraph>
              </div>
              <Paragraph>
                Ser a maior incubadora de talentos tech nacional, tornando-se
                referência na formação dos Juninhos e Juninhas através de seu
                laboratório de experiência. Com a construção de uma mentalidade
                de aprendizagem, colaboração, produtividade e assertividade.
              </Paragraph>
            </div>
          </div>
        </div>
      </section>
      <section className={styles.ValuesSection}>
        <div className={styles.bannerContainer}>
          <Heading level={"h3"}>Valores</Heading>
        </div>

        <div className={styles.container}>
          <div className={styles.wrapperValues}>
            <div className={styles.boxValues}>
              <Swiper
                pagination={{
                  clickable: true,
                }}
                autoplay={{
                  delay: 20000,
                  disableOnInteraction: false,
                }}
                modules={[Autoplay, Pagination]}
              >
                <SwiperSlide key={"1"}>
                  <div className={styles.textWrapper}>
                    <div className={styles.textContent}>
                      <Heading level={"h4"}>
                        Somos JUNIORES e esses são os nossos pilares:
                      </Heading>
                      <Paragraph>
                        Universal para todos, prezamos pela diversidade e
                        inclusão, porque acreditamos que a oportunidade deve ser
                        para todas as pessoas.
                      </Paragraph>
                      <ul className={styles.list}>
                        <li>
                          <Paragraph>
                            Buscamos a pluralidade de ideias, pontos de vista e
                            origens;
                          </Paragraph>
                        </li>
                        <li>
                          <Paragraph>
                            Tratamos com respeito e acolhimento todas as pessoas
                            envolvidas;
                          </Paragraph>
                        </li>
                      </ul>
                      <Paragraph>
                        Juniores só no nome, temos a mentalidade de sempre ir
                        além e entregar mais.
                      </Paragraph>
                      <ul className={styles.list}>
                        <li>
                          <Paragraph>
                            Realizamos entregas de impacto, com responsabilidade
                            e excelência;
                          </Paragraph>
                        </li>
                        <li>
                          <Paragraph>
                            Nos comportamos com uma postura ativa e madura para
                            com os problemas, não somente os resolvemos como
                            também os solucionamos;
                          </Paragraph>
                        </li>
                      </ul>
                    </div>
                  </div>
                </SwiperSlide>

                <SwiperSlide key={"2"}>
                  <div className={styles.textWrapper}>
                    <div className={styles.textContent}>
                      <Heading level={"h4"}>
                        Somos JUNIORES e esses são os nossos pilares:
                      </Heading>
                      <Paragraph>
                        Narratividade no que diz respeito à nossa postura de
                        protagonistas em escrever a própria história.
                      </Paragraph>
                      <ul className={styles.list}>
                        <li>
                          <Paragraph>
                            Agimos como protagonistas de nossas carreiras no dia
                            a dia;
                          </Paragraph>
                        </li>
                      </ul>
                      <Paragraph>
                        Interatividade, porque sabemos como a comunicação é uma
                        ferramenta poderosa a ser aperfeiçoada e que a sua
                        principal utilidade é gerar ação.
                      </Paragraph>
                      <ul className={styles.list}>
                        <li>
                          <Paragraph>
                            Interagimos de maneira engajada com as ações da
                            SouJunior e para com a própria comunidade;
                          </Paragraph>
                        </li>
                        <li>
                          <Paragraph>
                            Gostamos de ajudar as pessoas e também de sermos
                            ajudados;
                          </Paragraph>
                        </li>
                      </ul>
                    </div>
                  </div>
                </SwiperSlide>

                <SwiperSlide key={"3"}>
                  <div className={styles.textWrapper}>
                    <div className={styles.textContent}>
                      <Heading level={"h4"}>
                        Somos JUNIORES e esses são os nossos pilares:
                      </Heading>
                      <Paragraph>
                        Obstinação com o nosso futuro, pois sabemos que a vida
                        de um Juninho exige persistência e resiliência.
                      </Paragraph>
                      <ul className={styles.list}>
                        <li>
                          <Paragraph>
                            Somos pessoas dedicadas, disciplinadas e buscamos um
                            aprendizado contínuo;
                          </Paragraph>
                        </li>
                        <li>
                          <Paragraph>
                            Temos nossos objetivos de vida e carreira, então
                            sabemos como a SouJunior pode nos ajudar e
                            vice-versa;
                          </Paragraph>
                        </li>
                        <li>
                          <Paragraph>
                            Diante das adversidades, sempre nos lembramos do que
                            nos move;
                          </Paragraph>
                        </li>
                      </ul>
                      <Paragraph>
                        Responsabilidade com o projeto, com as nossas ações e
                        com a nossa própria marca pessoal e profissional.
                      </Paragraph>
                      <ul className={styles.list}>
                        <li>
                          <Paragraph>
                            Sabemos lidar bem com prazos, acordos e demandas;
                          </Paragraph>
                        </li>
                        <li>
                          <Paragraph>
                            Entendemos o que representa um processo de
                            voluntariado e o que a SouJunior representa;
                          </Paragraph>
                        </li>
                      </ul>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide key={"4"}>
                  <div className={styles.textWrapper}>
                    <div className={styles.textContent}>
                      <Heading level={"h4"}>
                        Somos JUNIORES e esses são os nossos pilares:
                      </Heading>
                      <Paragraph>
                        Exemplo, agimos para buscar trazer o melhor nas pessoas
                        através das nossas conexões.
                      </Paragraph>
                      <ul className={styles.list}>
                        <li>
                          <Paragraph>
                            Sabemos que o exemplo arrasta, então agimos como
                            exemplos positivos e agregadores dentro do
                            SouJunior;
                          </Paragraph>
                        </li>
                      </ul>
                      <Paragraph>
                        Sinergia nas ações que constroem a SouJunior, somos
                        cooperativos e agimos todos juntos em uma só direção.
                      </Paragraph>
                      <ul className={styles.list}>
                        <li>
                          <Paragraph>
                            Buscamos o alinhamento contínuo sobre o ecossistema
                            do SouJunior;
                          </Paragraph>
                        </li>
                        <li>
                          <Paragraph>
                            Trabalhamos com uma comunicação assertiva,
                            respeitosa, alinhada e consistente entre times e
                            pessoas;
                          </Paragraph>
                        </li>
                        <li>
                          <Paragraph>
                            Temos a comunicação assíncrona por padrão porque o
                            nosso comportamento permite isso;
                          </Paragraph>
                        </li>
                      </ul>
                    </div>
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
