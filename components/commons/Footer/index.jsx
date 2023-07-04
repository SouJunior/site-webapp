import React from "react";
import Link from "next/link";
import styles from "./Footer.module.css";
import { dataSocial } from "../../../utils/dataSocial";
import { Heading } from "../../commons/Heading";

export const Footer = () => {
  return (
    <>
      <footer className={styles.Footer} id={"redes-sociais"}>
        <div className={styles.container}>
          <div className={styles.logoWrapper}>
            <img
              className={styles.image}
              src="/assets/icons/Logo.svg"
              alt="#"
            />
          </div>
          <div className={styles.footerContent}>
            <div className={styles.about}>
              <Heading level={"h4"}>Conheça a SouJunior</Heading>
              <ul className={styles.list}>
                <li className={styles.link}>
                  <Link href={"/sobre-nos"}>Sobre nós</Link>
                </li>
                <li className={styles.link}>
                  <Link href={"/"}>Missão visão e valores</Link>
                </li>
                <li className={styles.link}>
                  <Link href={"/#iniciativas"}>Nossas iniciativas</Link>
                </li>
              </ul>
            </div>

            <div className={styles.contact}>
              <Heading level={"h4"}>Fale conosco</Heading>
              <ul className={styles.list}>
                <li className={styles.link}>
                  <Link href={"/faq"}>FAQ</Link>
                </li>
                <li className={styles.link}>
                  <Link href={"/ouvidoria"}>Ouvidoria</Link>
                </li>
                <li className={styles.link}>
                  <Link href={"/apoiar"}>Faça parte</Link>
                </li>
              </ul>
            </div>

            <div className={styles.social}>
              <Heading level={"h4"}>Faça parte da nossa comunidade!</Heading>
              <div className={styles.icons}>
                {dataSocial.map(({ name, icon, path, id }) => (
                  <a
                    href={path}
                    className={styles.socialBtn}
                    id={id}
                    key={name}
                    target="_blank"
                    rel="noreferrer">
                    {icon}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};
