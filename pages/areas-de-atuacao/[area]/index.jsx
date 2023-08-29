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
  const [areaData, setAreaData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [index, setIndex] = useState(0);
  const router = useRouter();
  const { area } = router.query;

  useEffect(() => {
    if (!router.isReady) {
      setLoading(true);
      return;
    }

    getArea();
  }, [area]);

  const getArea = async () => {
    const { data } = await apiArea.getArea();
    setAreaData(data);
    setAreaItem(...data.filter(({ url }) => url === area));
    return data;
  };

  const previewArea = () => {
    if (index < 0) {
      setIndex(areaData.length - 1);
    }

    if (index > areaData.length - 1) {
      setIndex(0);
    }

    setIndex(index + 1 > areaData.length - 1 ? 0 : index + 1);

    router.push(`/areas-de-atuacao/${areaData[index].url}`);
  };

  const nextArea = () => {
    if (index < 0) {
      setIndex(areaData.length - 1);
    }

    if (index > areaData.length - 1) {
      setIndex(0);
    }

    setIndex(index + 1 > areaData.length - 1 ? 0 : index + 1);

    router.push(`/areas-de-atuacao/${areaData[index].url}`);
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
            srcSet={`${areaItem["image-hero"]} 768w`}
            sizes="960px"
          />
          <source srcSet={`${areaItem["image-hero"]} 1280w`} sizes="1440px" />

          <img
            src={`${areaItem["image-hero"]}`}
            alt="Uma experiência real de trabalho em uma empresa de tecnologia."
          />
        </picture>
        <Heading level={"h3"}>Áreas de Atuação</Heading>
        <div className={styles.arrowWrapper}>
          <button onClick={previewArea}>
            <img src="/assets/arrow.svg" alt="" />
          </button>
          <Heading level={"h2"}>{areaItem.title}</Heading>
          <button onClick={nextArea}>
            <img src="/assets/arrow.svg" alt="" />
          </button>
        </div>
      </div>
      <section className={styles.AboutSection}>
        <h1 className={styles.title}>Sobre a Área de {areaItem.title}</h1>
        <div className={styles.container}>
          <div className={styles.paragraphWrapper}>
            {areaItem.head.descripition.map((paragraph) => (
              <Paragraph key={paragraph}>{paragraph}</Paragraph>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.InterviewSection}>
        <Heading level={"h3"}>
          Entrevista com Head de {areaItem.title} da Sou Junior -{" "}
          {areaItem.head.name}
        </Heading>
        {areaItem.interview.introduction.length > 1 ? (
          <div className={styles.container}>
            <div className={styles.paragraphWrapper}>
              {areaItem.interview.introduction.map((paragraph) => (
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
              src={areaItem.head["image-profile"]}
              alt={`foto de perfil ${areaItem.head.name}`}
              width={532}
              height={532}
            />
          </div>

          <div className={styles.ceoContent}>
            <Heading level={"h4"}>{areaItem.head.name}</Heading>
            <Paragraph>{areaItem.head.role}</Paragraph>
            <Paragraph>{areaItem.head.resume}</Paragraph>

            <ul>
              <li>
                <a
                  href={areaItem.head.social.linkedin}
                  target="_blank"
                  rel="noreferrer"
                >
                  <AiFillLinkedin />
                </a>
              </li>

              <li>
                <a
                  href={areaItem.head.social.discord}
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
          {areaItem.interview.questions.map(({ question, awnser }) => (
            <>
              <Accordion defaultExpanded={true} style={inlineStyle}>
                <AccordionSummary
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                  key={question}
                >
                  <Typography variant="string" className={styles.question}>
                    {question}
                  </Typography>
                </AccordionSummary>
                <AccordionDetails
                  className={styles.AccordionDetails}
                  key={awnser}
                >
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
          Essa é a Equipe de {areaItem.title} da SouJunior
        </Heading>
        {areaItem.team.mentores.length > 0 ? (
          <div className={styles.titleDescripiton}>
            <Heading level={"h3"}>Mentores</Heading>
          </div>
        ) : (
          ""
        )}
        <div className={styles.headersContainer}>
          {[...areaItem.team.mentores]
            .sort((a, b) => (a.nome > b.nome ? 1 : -1))
            .map(({ id, nome, role, img, linkedin, discord }) => (
              <div key={nome} className={styles.headerWrapper}>
                <Image src={img} width={100} height={100} />
                <div className={styles.team}>
                  <p>{nome}</p>
                  <p>{role}</p>
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
        {areaItem.team.juninhos.length > 0 ? (
          <div className={styles.titleDescripiton}>
            <Heading level={"h3"}>Juninhos</Heading>
          </div>
        ) : (
          ""
        )}

        <div className={styles.headersContainer}>
          {[...areaItem.team.juninhos]
            .sort((a, b) => (a.nome > b.nome ? 1 : -1))
            .map(({ id, nome, role, img, linkedin, discord }) => (
              <div key={nome} className={styles.headerWrapper}>
                <Image src={img} width={100} height={100} />
                <div className={styles.team}>
                  <p>{nome}</p>
                  <p>{role}</p>
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
