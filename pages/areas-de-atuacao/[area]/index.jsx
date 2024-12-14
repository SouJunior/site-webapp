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

var index = 0;

const AreaItem = () => {
  const [areaItem, setAreaItem] = useState(null);
  const [areaData, setAreaData] = useState(null);
  const [areaAtuacao, setAreaAtuacao] = useState(null);
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const { area } = router.query;

  var areaPath = router.asPath.substring(18);

  useEffect(() => {
    if (!router.isReady) {
      setLoading(true);
      return;
    }

    getArea();
    setLoading(false);
    setCurrentId();
  }, [area]);


  const getArea = async () => {
    const { data } = await apiArea.getArea();
    setAreaData(data);
    setAreaItem(...data.filter(({ url }) => url === area));
    return data;
  };  

  const setCurrentId = () => {
    switch(areaPath){
      case 'business' :
        index = 0;
        break;
      case 'tech-recruiter' :
        index = 1;
        break;
      case 'produtos' :
        index = 2;
        break;
      case 'agil' :
        index = 3;
        break;
      case 'social-media' :
        index = 4;
        break;
      case 'ui-ux-design' :
        index = 5;
        break;
      case 'front-end' :
        index = 6;
        break;
      case 'back-end' :
        index = 7;
        break;
      case 'data' :
        index = 8;
        break;
      case 'mobile' :
        index = 9;
        break;
      case 'qa' :
        index = 10;
        break;
      case 'devops' :
        index = 11;
        break;
      default:
        index = 0;
    }
  }

  const previewArea = () => {
    index = index - 1 < 0 ? areaData.length - 1 : index - 1; 
    router.push(`/areas-de-atuacao/${areaData[index].url}`);
  };

  const nextArea = () => {
    index = index + 1 > areaData.length - 1 ? 0 : index + 1;
    router.push(`/areas-de-atuacao/${areaData[index].url}`);
  };

  const inlineStyle = {
    backgroundColor: "transparent",
    color: "#FFF",
    borderBottom: "1px solid #FFF",
    borderShadow: "0px",
    padding: "2.6rem 0rem",
  };

  if (areaItem === null || areaItem === undefined) return null;

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
      {!loading && (
          <div className={styles.containerLoading}>
            <Loading />
          </div>
        ) && (
          <div>
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

            {(areaItem.head.name != "") &&(
              <>
                <section className={styles.InterviewSection}>
              
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
                            key={linkedin}
                            target="_blank"
                            rel="noreferrer"
                          >
                            <AiFillLinkedin />
                          </a>
                        </li>
                        <li>
                          <a
                            href={discord}
                            key={discord}
                            target="_blank"
                            rel="noreferrer"
                          >
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
                            key={nome}
                            target="_blank"
                            rel="noreferrer"
                          >
                            <AiFillLinkedin />
                          </a>
                        </li>
                        <li>
                          <a
                            href={discord}
                            key={id}
                            target="_blank"
                            rel="noreferrer"
                          >
                            <FaDiscord />
                          </a>
                        </li>
                      </ul>
                    </div>
                  ))}
              </div>
            </section>
              </>
            )}
          </div>
        )}
    </>
  );
};

export default AreaItem;
