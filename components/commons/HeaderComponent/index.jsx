import Image from "next/image";
import Head from "next/head";
import Link from "next/link";

import { Navbar } from "../Navbar";
import { MenuMobile } from "../MenuMobile";
import styles from "./HeaderComponent.module.css";
import { keyWords } from "../../../utils/keyWords";

const HeaderComponent = ({ img = "/assets/BannerV2.svg" }) => {
  const getKeywords = () => keyWords.map(({ title }) => ` ${title}`);

  return (
    <header className={styles.HeaderContainer}>
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
        <div className={styles.heroBanner}>
          <div className={styles.stars}>
            <img src="/assets/left-stars.svg" alt="" />
            <img src="/assets/right-stars.svg" alt="" />
          </div>
          <img src={img} alt="" />
        </div>
        {/* <div className={styles.frontBottom}>
          <div className={styles.bannerArea}>
            <div className={styles.banner}></div>
            <div className={styles.stars}>
              <div className={styles.starOne}></div>
              <div className={styles.starTwo}></div>
            </div>
          </div>
        </div> */}
      </div>
      {/* <div className={styles.textArea}>
        <div className={styles.textInner}>
          <article>{tittle}</article>
          <p>{subtitle}</p>
        </div>
      </div> */}
    </header>
  );
};

export default HeaderComponent;
