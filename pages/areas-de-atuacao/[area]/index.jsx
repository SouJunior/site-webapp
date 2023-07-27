// import { useRouter } from "next/router";
// const AreaItem = () => {
//   const router = useRouter();
//   const { area } = router.query;
//   return (
//     <div>
//       <p>Olá {area}</p>
//     </div>
//   );
// };

// export default AreaItem;

import React from "react";
import Image from "next/image";
import styles from "./Area.module.css";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import { AiFillLinkedin } from "react-icons/ai";
import { FaDiscord } from "react-icons/fa";
import { Heading } from "../../../components/commons/Heading";
import { Paragraph } from "../../../components/commons/Paragraph";
import { mentores, juninhos } from "../../../utils/produto";

const AreaItem = () => {
  const inlineStyle = {
    backgroundColor: "transparent",
    color: "#FFF",
    borderBottom: "1px solid #FFF",
    borderShadow: "0px",
    padding: "2.6rem 0rem",
  };

  return (
    <>
      <div className={styles.bannerContainer}>
        <picture>
          <source
            media="(max-width: 960px)"
            srcSet="/assets/hero-produtos.svg 768w"
            sizes="960px"
          />
          <source srcSet="/assets/hero-produtos.svg 1280w" sizes="1440px" />

          <img
            src="/assets/hero-produtos.svg"
            alt="Uma experiência real de trabalho em uma empresa de tecnologia."
          />
        </picture>
        <Heading level={"h3"}>Áreas de Atuação</Heading>
        <Heading level={"h2"}>Produtos</Heading>
      </div>
      <section className={styles.AboutSection}>
        <h1 className={styles.title}>Sobre a Área de Produtos</h1>
        <div className={styles.container}>
          <div className={styles.paragraphWrapper}>
            <Paragraph>
              A área Produtos dentro da SouJunior tem como objetivo assegurar
              que a tecnologia desenvolvida atenda às necessidades e
              expectativas dos clientes. Isso envolve a estratégia de Produtos,
              a avaliação de viabilidade técnica e financeira, a liderança do
              desenvolvimento e a entrega de soluções de alta qualidade.
            </Paragraph>
            <Paragraph>
              O objetivo da equipe de Produtos é garantir que o software Open
              source SouJunior, seja desenvolvido de forma colaborativa e atenda
              às necessidades e expectativas da comunidade de usuários. Além
              disso, a Equipe de Produtos também interage com todas as áreas da
              SouJunior, para garantir a adoção e o sucesso do produto no
              mercado.
            </Paragraph>
          </div>
        </div>
      </section>

      <section className={styles.InterviewSection}>
        <Heading level={"h3"}>
          Entrevista a Head de Produtos da Sou Junior - Vanêssa Santana
        </Heading>
        <div className={styles.container}>
          <div className={styles.paragraphWrapper}>
            <Paragraph>
              A nossa Head de Produtos é a Vanêssa Santana, nascida em Recife
              mas residente em São Paulo. Formada em Sistemas de Informação e
              pós graduada em Gerenciamento de Projetos e Gerenciamento de
              Produtos. Atua na área da TI há 17 anos, assumindo papéis de
              Gerente de Projetos, Head de Produtos e Agil e Coach. Atualmente
              trabalha com o Agil e Project Manager na Bayer. Engajada na
              comunidade tecnológica, ela mentora pessoas em transição de
              carreira, ministra cursos voltados para a agilidade e atua como
              trainee da Certificadora PeopleCert, preparando os interessados
              para as provas de certificações do universo Ágil.
            </Paragraph>
            <Paragraph>
              Também foi co-autora do livro “Jornada Ágil do Produto” e
              participa como escritora líder de mais quatro livros da “Jornada
              Colaborativa”, onde também faz parte da equipe de curadores do
              livro “Ágil além da TI”Na Sou Junior ela ocupa o cargo de Head de
              Produtos e lidera uma equipe de 16 pessoas, dentre mentores e
              juninhos, para a construção de 6 produtos, além de apoiar a
              comunidade da Sou Junior Lab, selecionando e orientando os PMs e
              Agilistas juniores na condução de suas atividades.
            </Paragraph>
            <Paragraph>
              Porém, como não só de TI vive o ser humano, nas horas vagas (que
              todos nós queremos saber quais são), ela gosta de viajar para
              conhecer novos lugares e culturas, ler, escrever livros sobre
              temas não relacionados à tecnologia, assistir filmes, conversar
              com os seus amigos e mimar suas sobrinhas.Confira a seguir a
              entrevista que a equipe de produtos do site Sou Junior fez com a
              Vanêssa Santana, para conhecer um pouco mais sobre sua jornada
              profissional e opinião a respeito da área que atua:
            </Paragraph>
          </div>
        </div>
        <div className={styles.ceo}>
          <div className={styles.avatar}>
            <Image
              src="https://user-images.githubusercontent.com/104070821/229590190-be5c776e-9715-4758-be2a-b0fe693959d9.png"
              alt="foto de perfil Wouerner Brandão"
              width={532}
              height={532}
            />
          </div>

          <div className={styles.ceoContent}>
            <Heading level={"h4"}>Vanêssa Santana</Heading>
            <Paragraph>Head de Produtos</Paragraph>
            <Paragraph>
              Atua na área da TI há 17 anos, assumindo papéis de Gerente de
              Projetos, Head de Produtos e Agile Coach. Atualmente trabalha com
              o Agile Project Manager na Bayer.
            </Paragraph>

            <ul>
              <li>
                <a
                  href="https://www.linkedin.com/in/vanessa-patricia/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <AiFillLinkedin />
                </a>
              </li>

              <li>
                <a
                  // href="https://discordapp.com/users/502651078685360129"
                  href="https://discordapp.com/users/1126080086131609672"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaDiscord />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className={styles.container}>
          <Accordion defaultExpanded={true} style={inlineStyle}>
            <AccordionSummary
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography variant="string" className={styles.question}>
                Como e quando foi iniciar na carreira de tecnologia?
              </Typography>
            </AccordionSummary>
            <AccordionDetails className={styles.AccordionDetails}>
              <Typography variant="string">
                <Paragraph>
                  Sempre gostei de tecnologia e de cálculo. Acompanhando a
                  trajetória do trabalho de meu pai, ingressei no curso de
                  Engenharia Química, onde fiz parte de um grupo que estudava
                  uma linguagem de programação chamada Fortran. Fui conhecendo e
                  me apaixonei por desenvolvimento de software, quando resolvi
                  prestar outro vestibular para tecnologia, do qual fui aprovada
                  e mudei de curso. Desde então segui uma trajetória voltadas
                  para projetos, iniciando na análise de negócios com a análise
                  da qualidade, depois líder de projetos, gerente de projetos e,
                  com o surgimento da agilidade, tive oportunidade de trabalhar
                  como Head de Produtos e Agile Coach, mas atualmente sou Agile
                  Project Manager.
                </Paragraph>
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion defaultExpanded={true} style={inlineStyle}>
            <AccordionSummary
              aria-controls="panel2a-content"
              id="panel2a-header"
            >
              <Typography variant="string" className={styles.question}>
                O que te motivou a fazer parte da SouJunior?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography variant="p" className={styles.paragraph}>
                <Paragraph>
                  Ensinar pessoas, disseminar conhecimento e trabalhar em
                  iniciativas de capacitação sempre foi o meu intuito e por isso
                  participo de algumas comunidades como Mulheres de Produtos,
                  Mulheres Agilitas, Mentora e tento ajudar as pessoas na sua
                  evolução profissional. Durante algumas visitas ao LinkedIn,
                  comecei a ver bastante postagens da SouJunior e achei a
                  proposta bem bacana. Pesquisando um pouco mais, notei que eles
                  ainda não tinham a área do Produtos, então chamei o Brandão
                  para conversar, fiz uma proposta de inclusão de APMs no
                  movimento, ele gostou da ideia e desde então atuo como Head de
                  área, onde tive a oportunidade de estruturá-la e vê-la crescer
                  cada vez mais.
                </Paragraph>
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion defaultExpanded={true} style={inlineStyle}>
            <AccordionSummary
              aria-controls="panel2a-content"
              id="panel2a-header"
            >
              <Typography variant="string" className={styles.question}>
                Como você acompanha e mensura o sucesso do produto?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography variant="p" className={styles.paragraph}>
                <Paragraph>
                  O critério de sucesso do Produto depende muito de cada
                  organização. Portanto, após conhecer e avaliar o contexto
                  organizacional, podermos criar as nossas métricas, que vai de
                  uma massa estratégica de dados até um bate papo com os
                  Usuários, para que possamos garantir que o produto represente
                  o que a organização acredita que é sucesso.
                </Paragraph>
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion defaultExpanded={true} style={inlineStyle}>
            <AccordionSummary
              aria-controls="panel2a-content"
              id="panel2a-header"
            >
              <Typography variant="string" className={styles.question}>
                Como você envolve sua equipe no processo de desenvolvimento de
                produtos?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography variant="p" className={styles.paragraph}>
                <Paragraph>
                  Procuro envolver a equipe em todo as fases do processo de
                  desenvolvimento do produto. Em alguns casos eu tenho uma
                  conversa anterior com o sponsor/stakeholder para avaliarmos
                  alguns pontos e verificarmos uma viabilidade de construção ou
                  prioridade de início, mas após isso a equipe já é informada
                  que temos um grande trabalho pela frente. Nós analisamos em
                  conjunto, definimos atividades de discovery que serão
                  executadas, trabalhamos na ideação, desenho, acompanhamento da
                  construção e entrega de valor, onde os APMs tenham a
                  capacidade de aprender e participar de maneira prática em
                  todas as fases desse processo.
                </Paragraph>
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion defaultExpanded={true} style={inlineStyle}>
            <AccordionSummary
              aria-controls="panel2a-content"
              id="panel2a-header"
            >
              <Typography variant="string" className={styles.question}>
                Sabemos que a área de TI está em constante inovação. Portanto,
                como você acredita que as pessoas podem se manter atualizadas
                para essas novas oportunidades que surgem e mudanças que ocorrem
                diariamente nesse universo tecnológico?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography variant="p" className={styles.paragraph}>
                <Paragraph>
                  Temos que ter consciência que na área de TI tudo mudará, pois
                  é um universo onde sempre estamos atualizando, transformando,
                  deletando ideias e recomeçando. Aconselho que você se atualize
                  da maneira que conseguir, seja lendo livros, promovendo
                  networking, conversando e conhecendo as pessoas e buscando
                  cursos gratuitos. Costumo incentivar as pessoas a gastar
                  menos, porque às vezes elas não podem, mas quando falamos de
                  TI, não é porque algo é gratuito que não vai te ajudar
                  fortemente na sua transição de carreira. Evolui bastante
                  nesses 17 anos de jornada profissional, mas só consegui fazer
                  isso porque estava constantemente buscando me manter
                  atualizada com as tendências do mercado, falando com pessoas,
                  estudando e fazendo cursos (até os gratuitos). O que não
                  podemos fazer é nos acomodarmos e acreditarmos que não temos
                  mais nada a aprender.
                </Paragraph>
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion defaultExpanded={true} style={inlineStyle}>
            <AccordionSummary
              aria-controls="panel2a-content"
              id="panel2a-header"
            >
              <Typography variant="string" className={styles.question}>
                Como você garante a colaboração e comunicação efetiva com as
                equipes envolvidas no desenvolvimento do produto?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography variant="p" className={styles.paragraph}>
                <Paragraph>
                  Podemos ser os maiores e melhores promotores de engajamento,
                  colaboração, vontade de participação das pessoas, mas mesmo
                  assim não garantimos que tenhamos uma comunicação efetiva,
                  pois isso também depende de cada uma delas. Mas, para driblar
                  esse desafio e tornar as pessoas mais envolvidas, falando
                  especificamente da SouJunior, sempre tento promover a
                  transparência, mostrando o que estamos fazendo. Além disso,
                  tentamos reunir ao máximo com as pessoas, buscar a opinião e
                  solicitar a participação delas, para que elas se sintam
                  pertencentes aquela construção, além de promover um ambiente
                  seguro e de espaço aberto ao diálogo.
                </Paragraph>
              </Typography>
            </AccordionDetails>
          </Accordion>

          <Accordion defaultExpanded={true} style={inlineStyle}>
            <AccordionSummary
              aria-controls="panel2a-content"
              id="panel2a-header"
            >
              <Typography variant="string" className={styles.question}>
                Como você resolve conflitos de interesses entre equipes de
                produto e outras áreas?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography variant="p" className={styles.paragraph}>
                <Paragraph>
                  Estamos lidando com pessoas e cada uma tem um conceito de
                  valor diferente, onde o que uma pode ver algo como empecilho,
                  outra pode ver como um ganho ou um bônus. Acho que não é só
                  sobre resolver conflitos, mas como poder mitigá-los. Então,
                  muitas vezes, se antecipar aos conflitos vem muito sobre você
                  explicar o valor da área de produtos para as outras áreas,
                  equalizando o entendimento de que estamos ali para contribuir.
                  Trazendo esse conceito para a SouJunior, promovemos uma live
                  onde eu e o Brandão falamos um pouco sobre a área de Produtos
                  e como ela poderia servir positivamente as outras áreas de uma
                  organização, além de dar voz ao Usuário e favorecer também a
                  empresa através de uma entrega de valor. Com isso disso
                  acredito que as pessoas conseguiram compreender porque estamos
                  querendo saber de tudo e até se envolver em todos os processos
                  que estejam associados a construção do nosso incremento,
                  evitando alguns problemas de comunicação ou conflitos entre as
                  pessoas.
                </Paragraph>
              </Typography>
            </AccordionDetails>
          </Accordion>

          <Accordion defaultExpanded={true} style={inlineStyle}>
            <AccordionSummary
              aria-controls="panel2a-content"
              id="panel2a-header"
            >
              <Typography variant="string" className={styles.question}>
                Como você garante que o produto atenda às necessidades e
                expectativas dos usuários e clientes?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography variant="p" className={styles.paragraph}>
                <Paragraph>
                  Uma das maiores responsabilidades do produto é entregar valor,
                  maximizar o seu valor, tendo em vista que ele é sempre feito
                  para sanar uma dor e atender a uma necessidade. Como podemos
                  garantir que o que estou entregando realmente atenderá as
                  necessidades e expectativas do meu usuário? É preciso
                  conhecê-los, entendê-los e ouvi-los. Se nosso produto é global
                  ou nacional não temos como alcançar a todos, por isso a
                  importância de se trabalhar bem com pesquisa. Sendo assim, não
                  adianta simplesmente tentar adivinhar o que o seu cliente
                  deseja para poder lançar um produto, você tem que realmente
                  saber o que ele deseja. Existem várias ferramentas que
                  facilitam esse jornada, mas sem dúvidas os dados ajudam
                  bastante nesse processo de ver onde o cliente está, onde ele
                  desiste e abandona a jornada no nosso produto. A partir disso
                  vamos atrás para fazer entrevistas e entender o motivo deles
                  desistirem. Com essas informações é possível que possamos
                  entregar sempre algo que não só atenda ou supere as
                  expectativas no nosso Usuário.
                </Paragraph>
              </Typography>
            </AccordionDetails>
          </Accordion>
        </div>
      </section>

      <section className={styles.HeadersSection}>
        <Heading level={"h2"}>Essa é a Equipe de Produtos da SouJunior</Heading>
        <div className={styles.titleDescripiton}>
          <Heading level={"h3"}>Mentores</Heading>
        </div>

        <div className={styles.headersContainer}>
          {mentores.map(({ id, nome, role, img, linkedin, discord }) => {
            console.log(nome);
            return (
              <div key={nome} className={styles.headerWrapper}>
                <Image src={img} width={100} height={100} />
                <div>
                  <h2>{nome}</h2>
                  <h3>{role}</h3>
                </div>
                <ul>
                  <li>
                    <a
                      href={linkedin}
                      key={id}
                      target="_blank"
                      rel="noreferrer"
                    >
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
        <div className={styles.titleDescripiton}>
          <Heading level={"h3"}>Juninhos</Heading>
        </div>
        <div className={styles.headersContainer}>
          {juninhos.map(({ id, nome, role, img, linkedin, discord }) => {
            console.log(nome);
            return (
              <div key={nome} className={styles.headerWrapper}>
                <Image src={img} width={100} height={100} />
                <div>
                  <h2>{nome}</h2>
                  <h3>{role}</h3>
                </div>
                <ul>
                  <li>
                    <a
                      href={linkedin}
                      key={id}
                      target="_blank"
                      rel="noreferrer"
                    >
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

export default AreaItem;
