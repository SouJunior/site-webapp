import React from "react";
import Image from "next/image";
import styles from "./AboutUs.module.css";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import { AiFillLinkedin } from "react-icons/ai";
import { FaDiscord } from "react-icons/fa";
import { headers } from "../../utils/headers";
import { Subtitle } from "../commons/Subtitle";
import { Paragraph } from "../commons/Paragraph";
import { Heading } from "../commons/Heading";

export const SobreNos = () => {
  const inlineStyle = {
    backgroundColor: "transparent",
    color: "#FFF",
    borderBottom: "1px solid #FFF",
    borderShadow: "0px",
    padding: "2.6rem 1.5rem",
  };

  return (
    <>
      <div className={styles.bannerContainer}>
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

        <Heading level={"h2"}>
          Uma experiência real de trabalho em uma empresa de tecnologia.
        </Heading>
      </div>
      <section className={styles.AboutSection}>
        <h1 className={styles.title}>Sobre Nós</h1>
        <div className={styles.container}>
          <div className={styles.paragraphWrapper}>
            <Paragraph>
              O projeto SouJunior surgiu em 01 de Julho de 2019, a partir da
              insatisfação do idealizador <strong>Wouerner Brandão</strong> com
              o mercado tech, quando percebeu que poucas pessoas tinham
              conhecimento ou experiência na área da tecnologia. Atualmente
              contamos com mais de 120 voluntários.
            </Paragraph>
            <Paragraph>
              Com o intuito de fomentar a ideia de levar conhecimento e
              aprendizado numa área em ascensão, Wouerner reuniu algumas pessoas
              com o mesmo propósito de criar o projeto SouJunior. Preparando
              assim os profissionais juniores para o mercado por meio da
              construção de produtos e do conhecimento prático do dia a dia de
              uma empresa de tecnologia, desde o início, colocando a “mão na
              massa”.
            </Paragraph>
            <Paragraph>
              Para que essa iniciativa se torne real, contamos com um time de
              voluntários, desde iniciantes no mercado de tecnologia até
              profissionais experientes, que atuam como mentores e lideram os
              times.
            </Paragraph>
            <Paragraph>
              A SouJunior contará com um portfólio de produtos que proporcionará
              visibilidade aos juniores, os conectando tanto aos profissionais
              de recrutamento, para que a tão almejada primeira experiência seja
              alcançada, quanto aos mentores que irão orientá-los em sua jornada
              profissional que está apenas começando.
            </Paragraph>
            <Paragraph>
              Portanto, participar da SouJunior é uma grande chance de adquirir
              experiência e de participar de um projeto de alta visibilidade,
              com o amparo de uma rede de apoio, além do networking e conexão
              com novas oportunidades.
            </Paragraph>
          </div>
        </div>
      </section>

      <section className={styles.InterviewSection}>
        <Heading level={"h3"}>
          Entrevista o CEO da Sou Junior - Wouerner Brandão
        </Heading>

        <div className={styles.ceo}>
          <div className={styles.avatar}>
            <Image
              src="https://avatars.githubusercontent.com/u/287287?v=4"
              alt="foto de perfil Wouerner Brandão"
              width={232}
              height={232}
            />
          </div>

          <div className={styles.ceoContent}>
            <Heading level={"h4"}>Wouerner Brandão</Heading>
            <Paragraph>CEO SouJunior</Paragraph>
            <Paragraph>
              Wouerner Brandão é natural de Brasília, casado, pai do Erik,
              reside no Recanto das Emas e recentemente trabalhou em órgãos
              federais em Brasília.
            </Paragraph>
            <p></p>

            <ul>
              <li>
                <a
                  href="https://www.linkedin.com/in/wouerner/"
                  target="_blank"
                  rel="noreferrer">
                  <AiFillLinkedin />
                </a>
              </li>

              <li>
                <a
                  href="https://discordapp.com/users/502651078685360129"
                  target="_blank"
                  rel="noreferrer">
                  <FaDiscord />
                </a>
              </li>
            </ul>

            <p></p>
          </div>
        </div>

        <div className={styles.container}>
          <Accordion defaultExpanded={true} style={inlineStyle}>
            <AccordionSummary
              aria-controls="panel1a-content"
              id="panel1a-header">
              <Typography variant="string" className={styles.question}>
                Como e quando foi iniciar na carreira de tecnologia?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography variant="string">
                <Paragraph>
                  Iniciei a carreira na área de tecnologia no ano de 2010 como
                  estagiário, permanecendo 1 ano e 2 meses. Após essa
                  experiência, conquistei uma colocação de contrato CLT. Estudei
                  bacharelado na área de sistemas por 4 anos, e nos últimos 12
                  anos atuo profissionalmente em programação nas linguagens de
                  PHP e JavaScript, no cargo de desenvolvedor Sênior na empresa
                  eNe Soluções.
                </Paragraph>
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion defaultExpanded={true} style={inlineStyle}>
            <AccordionSummary
              aria-controls="panel2a-content"
              id="panel2a-header">
              <Typography variant="string" className={styles.question}>
                O que te motivou a criar a Open Source SouJunior?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography variant="p" className={styles.paragraph}>
                <Paragraph>
                  Depois de 5 - 6 anos de carreira já com uma boa bagagem de
                  conhecimentos, via que em alguns lugares que trabalhei tinham
                  estagiários. Mas estas empresas, geralmente não contratavam
                  juniores, e eu estava sempre envolvido com a complementação de
                  estudos dos estagiários. Depois que fiz 8 anos de carreira fui
                  para o trabalho remoto, onde trabalho há 4 anos, mas perdi o
                  acesso aos juniores. A partir daí, comecei a fazer mentorias
                  on-line, durante 3 meses. Quando as mentorias terminavam ou
                  alguns encontravam colocação no mercado, pensei em reformular
                  o processo para ajudar mais pessoas. Logo, priorizei o meu
                  LinkedIn para ver qual era a demanda das pessoas na plataforma
                  e levar benefícios às suas carreiras. Notei que a queixa
                  principal na plataforma era a falta de experiência e pelo
                  conhecimento que adquiri, percebi que para os juniores
                  conseguirem uma experiência válida seria trabalhar com
                  projetos Open Source, mesmo sem qualquer tipo de remuneração e
                  serem reconhecidos pelo mercado. Com isso tive a ideia de
                  criar a Open Source SouJunior, para que os juniores pudessem
                  atuar e adquirir experiência.
                </Paragraph>
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion defaultExpanded={true} style={inlineStyle}>
            <AccordionSummary
              aria-controls="panel2a-content"
              id="panel2a-header">
              <Typography variant="string" className={styles.question}>
                O que você considera um diferencial da SouJunior em relação às
                outras comunidades de trabalho voluntário?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography variant="p" className={styles.paragraph}>
                <Paragraph>
                  O diferencial é que as pessoas migram para a SouJunior para
                  ganhar experiência, criando projetos reais em grupo, em equipe
                  e as outras comunidades são voltadas para cursos ou para tirar
                  dúvidas. Na SouJunior, o júnior inicia interagindo com outras
                  pessoas, aprendendo a trabalhar de fato em um projeto real, e
                  assim adquirir experiência na prática. Temos tech recruiter e
                  quando o júnior se inscrever para participar do projeto,
                  passará por um onboarding. O júnior terá um mentor na área
                  específica em que irá atuar, com estrutura de Scrum, Produto,
                  Agilidade e Desenvolvimento. Tudo o que se assemelha e se
                  aproxima de uma empresa de médio e grande porte".
                </Paragraph>
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion defaultExpanded={true} style={inlineStyle}>
            <AccordionSummary
              aria-controls="panel2a-content"
              id="panel2a-header">
              <Typography variant="string" className={styles.question}>
                Qual o seu plano para estimular o interesse das pessoas em
                relação a SouJunior e impactar tanto os curiosos quanto os
                voluntários de forma que eles permaneçam continuamente engajados
                em relação a essa iniciativa?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography variant="p" className={styles.paragraph}>
                <Paragraph>
                  A SouJunior está presente nas maiores Redes Sociais, mas na
                  maioria delas percebemos que o conteúdo se perde no meio da
                  diversidade de informações, como postagens, imagens e vídeos.
                  Porém o LinkedIn foi uma grande surpresa, pois visualizamos um
                  fluxo crescente e contínuo de pessoas querendo conhecer mais
                  sobre a iniciativa. Então, além de manter essa rede atualizada
                  de informações, lançamos o nosso Site para que as pessoas
                  possam conhecer tanto o projeto, quanto o produto construído
                  pelos nossos juniores, e isso gerou um impacto muito positivo
                  dentro e fora da comunidade. Portanto, entendemos o quanto "o
                  site é necessário para nós, porque se tornou um agregador de
                  informações e um local onde as pessoas poderão ter o primeiro
                  contato com o produto, reconhecerão o valor do projeto e se
                  alinharão ao nosso propósito".
                </Paragraph>
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion defaultExpanded={true} style={inlineStyle}>
            <AccordionSummary
              aria-controls="panel2a-content"
              id="panel2a-header">
              <Typography variant="string" className={styles.question}>
                Você acredita que a SouJunior é o que você idealizou?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography variant="p" className={styles.paragraph}>
                <Paragraph>
                  Sim. Em relação a ideia do projeto eu sempre tive o propósito
                  de entregar duas coisas: a primeira era promover a experiência
                  prática para os juniores, que mesmo sendo difícil mensurar
                  atualmente, sabemos que está acontecendo. A segunda era a
                  ideia de estabelecer o trabalho em equipe, a colaboração e o
                  esforço conjunto, gerando resultados impactantes para a
                  jornada profissional dessas pessoas. Podemos ver isto
                  acontecendo principalmente no desenvolvimento dos nossos
                  produtos, o que foi comprovado após a primeira entrega do
                  nosso Site.
                </Paragraph>
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion defaultExpanded={true} style={inlineStyle}>
            <AccordionSummary
              aria-controls="panel2a-content"
              id="panel2a-header">
              <Typography variant="string" className={styles.question}>
                Você acredita que a SouJunior te ajudou a evoluir
                profissionalmente?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography variant="p" className={styles.paragraph}>
                <Paragraph>
                  Com certeza eu evolui profissionalmente após a SouJunior. Na
                  verdade, eu não tinha liderado equipes tão grandes, como as
                  que a SouJunior tem hoje. As equipes que eu liderava
                  anteriormente eram de 5 a 10 pessoas no máximo e agora a
                  SouJunior tem 10 vezes mais voluntários. Então, com toda a
                  certeza tem agregado bastante na minha carreira e também na
                  questão de marketing pessoal, que me dá a oportunidade de
                  conhecer outras pessoas e também outros projetos.
                </Paragraph>
              </Typography>
            </AccordionDetails>
          </Accordion>

          <Accordion defaultExpanded={true} style={inlineStyle}>
            <AccordionSummary
              aria-controls="panel2a-content"
              id="panel2a-header">
              <Typography variant="string" className={styles.question}>
                Qual o maior desafio para você em ser o CEO da SouJunior?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography variant="p" className={styles.paragraph}>
                <Paragraph>
                  O maior desafio foi o recrutamento em alguns aspectos, por ser
                  voluntariado. Outra questão é o desafio financeiro em colocar
                  os projetos on-line, já que tudo se baseia em dólar, como
                  hospedagem do site, seguidores e outras ferramentas que tem um
                  custo alto. Desta forma e considerando um número grande de
                  pessoas que temos no projeto, esse processo se torna bem mais
                  complexo.
                </Paragraph>
              </Typography>
            </AccordionDetails>
          </Accordion>

          <Accordion defaultExpanded={true} style={inlineStyle}>
            <AccordionSummary
              aria-controls="panel2a-content"
              id="panel2a-header">
              <Typography variant="string" className={styles.question}>
                Você pretende futuramente transformar a SouJunior numa empresa
                jurídica?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography variant="p" className={styles.paragraph}>
                <Paragraph>
                  Provavelmente não. Acredito que a SouJunior terá pequenos
                  negócios para se sustentar, mas não a transformarei em uma
                  empresa no formato total, com profissionais remunerados ou
                  algo do tipo. Porém, se houvesse uma doação que comportasse
                  isso, poderíamos pensar no assunto.
                </Paragraph>
              </Typography>
            </AccordionDetails>
          </Accordion>
        </div>
      </section>

      <section className={styles.HeadersSection}>
        <h1>
          Essa é a equipe de heads que, junto com o Brandão, gerenciam os
          produtos do projeto!
        </h1>

        <div className={styles.headersContainer}>
          {headers.map(({ id, nome, cargo, img, linkedin, discord }) => {
            return (
              <div key={nome} className={styles.headerWrapper}>
                <Image src={img} width={100} height={100} />
                <div>
                  <h2>{nome}</h2>
                  <h3>{cargo}</h3>
                </div>
                <ul>
                  <li>
                    <a
                      href={linkedin}
                      key={id}
                      target="_blank"
                      rel="noreferrer">
                      <AiFillLinkedin />
                    </a>
                  </li>
                  <li>
                    <a href={discord} key={id} target="_blank" rel="noreferrer">
                      <FaDiscord />
                    </a>
                  </li>
                </ul>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
};
