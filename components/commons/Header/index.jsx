import Image from "next/image";
import Head from "next/head";
import Link from "next/link";

import { Navbar } from "../../commons/Navbar";
import { MenuMobile } from "../../commons/MenuMobile";
import { keyWords } from "../../../utils/keyWords";
import styles from "./Header.module.css";

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
      </Head>
      <div className={styles.container}>
        <Link href="/" className={styles.logo}>
          <Image
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
      </div>
    </header>
  );
};
