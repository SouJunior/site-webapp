import React from "react";
import { Navbar } from "../Navbar";
import styles from "./Header.module.css"
import Image from "next/image";

export const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.backgroud}></div>
      <div className={styles.front}>
        <div className={styles.text}>
          <div className={styles.navbar}>
            <div>
              <Image src="/assets/icons/Logo.svg" alt="logo SouJunior" width={216} height={33} />
            </div>
            <Navbar />
          </div>
          <div className={styles.textArea}>
            <div className={styles.textInner}>
              <article>Uma experiência real de trabalho em um projeto de uma empresa de tecnologia.</article>
              <p>O Junior de hoje é o Sênior do amanhã!</p>
            </div>
            <div className={styles.banner}>
              <Image src="/assets/image-header-dark-desktop.png" alt="modelo" width={499} height={593} />
            </div>
          </div> 
        </div>
      </div>
    </header>
  )
}
