import Image from "next/image";
import Head from "next/head";
import Link from "next/link";

import { Navbar } from "../../commons/Navbar";
import { MenuMobile } from "../../commons/MenuMobile";
import styles from "./HeaderC.module.css";
import { keyWords } from "../../../utils/keyWords";

const HeaderComponent = ({ tittle }) => {
  const getKeywords = () => keyWords.map(({ title }) => ` ${title}`);

  return (
    <header className={styles.header}>
      <Head>
        <title>
          Sou Junior | Experiência real de trabalho em projetos construída por
          uma empresa de tecnologia!
        </title>
        <meta
          name="description"
          content="Experiência real de trabalho em projetos construída por uma empresa de tecnologia"
        />
        <meta name="keywords" content={getKeywords()} />
        <meta
          name="google-site-verification"
          content="bGguO_xpzk5qMD1itVipsY4J5FGDjMekPTHP_ZyU-D8"
        />
        <meta name="robots" content="index, follow" />
      </Head>
      <div className={styles.front}>
        <div className={styles.navbar}>
          <div className={styles.logo}>
            <Link href="/">
              <a>
                <Image
                  src="/assets/icons/Logo.svg"
                  alt="logo SouJunior"
                  width={216}
                  height={33}
                />
              </a>
            </Link>
          </div>
          <div className={styles.menu}>
            <Navbar />
          </div>
          <div className={styles.menuHamburger}>
            <MenuMobile />
          </div>
        </div>
        <div className={styles.frontBottom}>
          <div className={styles.bannerArea}>
            <div className={styles.banner}></div>
            <div className={styles.stars}>
              <div className={styles.starOne}></div>
              <div className={styles.starTwo}></div>
            </div>
          </div>
          <div className={styles.textArea}>
            <div className={styles.textInner}>
              <article>{tittle}</article>
              <p>O Junior de hoje é o Sênior do amanhã!</p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default HeaderComponent;
