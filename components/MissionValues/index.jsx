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
            srcSet="/assets/default-banner-group-mobile.svg 768w"
            sizes="960px"
          />
          <source
            srcSet="/assets/default-banner-group.svg 1280w"
            sizes="1440px"
          />

          <img
            src="/assets/default-banner-group.svg"
            alt="Uma experiência real de trabalho em uma empresa de tecnologia."
          />
        </picture>

        <Heading level={"h2"}>Visão, Missão e Valores</Heading>
      </div>

      <section className={styles.MissionSection}>
        <div className={styles.container}>
          <Heading level={"h2"}>Propósito — porque fazemos o que fazemos:</Heading>
          <Paragraph>
          Impactar na formação de uma nova geração tech pela forma de pensar e agir.
          </Paragraph>
                 

          <section className={styles.bannerContainer}>
            <div className={styles.container}>
              <Heading level={"h2"}>Missão — o que buscamos todos os dias:</Heading>
              <Paragraph>
              Conectar potenciais às oportunidades para transformar a realidade das pessoas e das empresas.
              </Paragraph>
              <br />
              <Heading level={"h2"}>Visão— qual o nosso foco:</Heading>
              <Paragraph>
              Ser a maior incubadora de talentos tech nacional, tornando-se referência na formação dos Juninhos e Juninhas através de seu laboratório de experiência, com a construção de uma mentalidade de aprendizagem, colaboração, produtividade e assertividade.
              </Paragraph>
            </div>
          </section>
          
        
          <Heading level={"h2"}>Valores — somos JUNIORES e esses são os nossos pilares:</Heading>
          <Heading level={"h3"}>
          Juniores só no nome: temos a mentalidade de sempre ir além e entregar mais.
          </Heading>
          <ul>
            <li>
              <Paragraph>
              * Realizamos entregas de impacto, com responsabilidade e excelência;
              </Paragraph>
            </li>
            <li>
              <Paragraph>
             * Nos comportamos com uma postura ativa e madura para com os problemas, não somente os resolvemos como também os solucionamos;
              </Paragraph>
            </li>
            <Heading level={"h3"}>Universal para todos, prezamos pela diversidade e inclusão porque acreditamos que a oportunidade deve ser para todas as pessoas.</Heading>
            <li>
              <Paragraph>
              * Buscamos a pluralidade de ideias, pontos de vista e origens;
              </Paragraph>
            </li>
            <li>
              <Paragraph>
              * Tratamos com respeito e acolhimento todas as pessoas envolvidas;
              </Paragraph>
            </li>
            <Heading level={"h3"}>Narrabilidade no que diz respeito à nossa postura de protagonistas em escrever a própria história.</Heading>
            <li>
              <Paragraph>
              * Agimos como protagonistas de nossas carreiras no dia a dia;
              </Paragraph>
            </li>
           
            <Heading level={"h3"}>Interatividade, porque sabemos como a comunicação é uma ferramenta poderosa a ser aperfeiçoada e que a sua principal utilidade é gerar ação.</Heading>
            <li>
              <Paragraph>
              * Interagimos de maneira engajada com as ações da SouJunior e para com a própria comunidade;
              </Paragraph>
            </li>
            <li>
              <Paragraph>
              * Gostamos de ajudar as pessoas e também de sermos ajudados;
              </Paragraph>
            </li>

            <Heading level={"h3"}>Obstinação com o nosso futuro, pois sabemos que a vida de um Juninho exige persistência e resiliência.</Heading>
            <li>
              <Paragraph>
              * Somos pessoas dedicadas, disciplinadas e buscamos um aprendizado contínuo;
              </Paragraph>
            </li>
            <li>
              <Paragraph>
              * Temos nossos objetivos de vida e carreira, então sabemos como o SouJunior pode nos ajudar e vice-versa;
              </Paragraph>
            </li>
            <li>
              <Paragraph>
              * Diante das adversidades, sempre nos lembramos do que nos move;
              </Paragraph>
            </li>

            <Heading level={"h3"}>Responsabilidade com o projeto, com as nossas ações e com a nossa própria marca pessoal e profissional.</Heading>
            <li>
              <Paragraph>
              * Sabemos lidar bem com prazos, acordos e demandas;
              </Paragraph>
            </li>
            <li>
              <Paragraph>
              * Entendemos o que representa um processo de voluntariado e o que o SouJunior representa;
              </Paragraph>
            </li>

            <Heading level={"h3"}>Exemplo, agimos para buscar trazer o melhor nas pessoas através das nossas conexões.</Heading>
            <li>
              <Paragraph>
              * Sabemos que o exemplo arrasta, então agimos como exemplos positivos e agregadores dentro do SouJunior;
              </Paragraph>
            </li>
            <Heading level={"h3"}>Sinergia nas ações que constroem o SouJunior, somos cooperativos e agimos todos juntos em uma só direção.</Heading>

            <li>
              <Paragraph>
              * Buscamos o alinhamento contínuo sobre o ecossistema do SouJunior;
              </Paragraph>
            </li>

            <li>
              <Paragraph>
              * Trabalhamos com uma comunicação assertiva, respeitosa, alinhada e consistente entre times e pessoas;
              </Paragraph>
            </li>

            <li>
              <Paragraph>
              * Temos a comunicação assíncrona por padrão porque o nosso comportamento permite isso;
              </Paragraph>
            </li>

          </ul>
       
        </div>
      </section>
    </>
  );
};
