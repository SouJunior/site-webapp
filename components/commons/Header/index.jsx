import Image from "next/image";
import Head from "next/head";
import Link from "next/link";
import Script from "next/script";

import { Navbar } from "../../commons/Navbar";
import { MenuMobile } from "../../commons/MenuMobile";
import { keyWords } from "../../../utils/keyWords";
import styles from "./Header.module.css";
import ButtonApoiar from "../Button/Button";

export const Header = () => {
  const getKeywords = () => keyWords.map(({ title }) => ` ${title}`);

  return (
    <header className={styles.header}>
      <Head>
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
        <meta
          name="google-adsense-account"
          content="ca-pub-7597091185548852"
        ></meta>
      </Head>
      <div className={styles.container}>
        <Link href="/" passHref>
          <Image
            className={styles.logo}
            src="/assets/icons/Logo.svg"
            alt="logo SouJunior"
            width={216}
            height={33}
          />
        </Link>

        <div className={styles.menu}>
          <Navbar />
        </div>
        <div className={styles.mobileMenu}>
          <MenuMobile />
        </div>
        <div className={styles.buttonApoiar}>
          <ButtonApoiar title="Apoie a SouJunior" path="#apoie-a-soujunior"/>
        </div>
      </div>
    </header>
  );
};
