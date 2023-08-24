import { useState, useEffect } from "react";
import Image from "next/image";
import { useRouter } from "next/router";

import styles from "./Area.module.css";

import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import { AiFillLinkedin } from "react-icons/ai";
import { FaDiscord } from "react-icons/fa";

import { Heading } from "../../../components/commons/Heading";
import { Paragraph } from "../../../components/commons/Paragraph";
import { Loading } from "../../../components/commons/Loading";
import { apiArea } from "../../../services/api";

const AreaItem = () => {
  const [areaItem, setAreaItem] = useState(null);
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const { area } = router.query;

  useEffect(() => {
    if (!router.isReady) {
      setLoading(true);
      return;
    }
    console.log(area);
    getArea(area);
  }, [area]);

  const getArea = async (area) => {
    const { data } = await apiArea.getArea();
    const getData = await data.filter(({ url }) => url === area);

    setAreaItem(getData);
  };

  const previewArea = () => {
    console.log("antes");
  };
  const nextArea = () => {
    console.log("depois");
  };

  if (areaItem === null) {
    return null;
  }

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
            srcSet={`${areaItem[0]["image-hero"]} 768w`}
            sizes="960px"
          />
          <source
            srcSet={`${areaItem[0]["image-hero"]} 1280w`}
            sizes="1440px"
          />

          <img
            src={`${areaItem[0]["image-hero"]}`}
            alt="Uma experiência real de trabalho em uma empresa de tecnologia."
          />
        </picture>
        <Heading level={"h3"}>Áreas de Atuação</Heading>
        <div className={styles.arrowWrapper}>
          <button onClick={previewArea}>
            <img src="/assets/arrow.svg" alt="" />
          </button>
          <Heading level={"h2"}>{areaItem[0].title}</Heading>
          <button onClick={nextArea}>
            <img src="/assets/arrow.svg" alt="" />
          </button>
        </div>
      </div>
      <section className={styles.AboutSection}>
        <h1 className={styles.title}>Sobre a Área de {areaItem[0].title}</h1>
        <div className={styles.container}>
          <div className={styles.paragraphWrapper}>
            {areaItem[0].head.descripition.map((paragraph) => (
              <Paragraph key={paragraph}>{paragraph}</Paragraph>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.InterviewSection}>
        <Heading level={"h3"}>
          Entrevista com Head de {areaItem[0].title} da Sou Junior -{" "}
          {areaItem[0].head.name}
        </Heading>
        {areaItem[0].interview.introduction.length > 1 ? (
          <div className={styles.container}>
            <div className={styles.paragraphWrapper}>
              {areaItem[0].interview.introduction.map((paragraph) => (
                <Paragraph key={paragraph}>{paragraph}</Paragraph>
              ))}
            </div>
          </div>
        ) : (
          ""
        )}
        <div className={styles.ceo}>
          <div className={styles.avatar}>
            <Image
              src={areaItem[0].head["image-profile"]}
              alt={`foto de perfil ${areaItem[0].head.name}`}
              width={532}
              height={532}
            />
          </div>

          <div className={styles.ceoContent}>
            <Heading level={"h4"}>{areaItem[0].head.name}</Heading>
            <Paragraph>{areaItem[0].head.role}</Paragraph>
            <Paragraph>{areaItem[0].head.resume}</Paragraph>

            <ul>
              <li>
                <a
                  href={areaItem[0].head.social.linkedin}
                  target="_blank"
                  rel="noreferrer"
                >
                  <AiFillLinkedin />
                </a>
              </li>

              <li>
                <a
                  href={areaItem[0].head.social.discord}
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
          {areaItem[0].interview.questions.map(({ question, awnser }) => (
            <>
              <Accordion
                key={question}
                defaultExpanded={true}
                style={inlineStyle}
              >
                <AccordionSummary
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography variant="string" className={styles.question}>
                    {question}
                  </Typography>
                </AccordionSummary>
                <AccordionDetails className={styles.AccordionDetails}>
                  <Typography variant="string">
                    <Paragraph>{awnser}</Paragraph>
                  </Typography>
                </AccordionDetails>
              </Accordion>
            </>
          ))}
        </div>
      </section>

      <section className={styles.HeadersSection}>
        <Heading level={"h2"}>
          Essa é a Equipe de {areaItem[0].title} da SouJunior
        </Heading>
        <div className={styles.titleDescripiton}>
          <Heading level={"h3"}>Mentores</Heading>
        </div>

        <div className={styles.headersContainer}>
          {[...areaItem[0].team.mentores]
            .sort((a, b) => (a.nome > b.nome ? 1 : -1))
            .map(({ id, nome, role, img, linkedin, discord }) => (
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
            ))}
        </div>
        <div className={styles.titleDescripiton}>
          <Heading level={"h3"}>Juninhos</Heading>
        </div>
        <div className={styles.headersContainer}>
          {[...areaItem[0].team.juninhos]
            .sort((a, b) => (a.nome > b.nome ? 1 : -1))
            .map(({ id, nome, role, img, linkedin, discord }) => (
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
            ))}
        </div>
      </section>
    </>
  );
};

export default AreaItem;
