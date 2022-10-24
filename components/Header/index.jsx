import React from "react";
import {Navbar} from "../Navbar";
import styles from "./Header.module.css";
import Image from "next/image";

export const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.bg}></div>
      <div className={styles.text}>
        <div>
          <div className={styles.navbar}>
            <div>
              <Image
                src="/assets/soujuniot-logo-light.svg"
                alt="logo SouJunior"
                width={216}
                height={33}
              />
            </div>
            <Navbar />
          </div>
          <div className={styles.textArea}>
            <div className={styles.textInner}>
              <h1>SouJunior</h1>
              <article>
                Uma experiência real de trabalho em um projeto de uma empresa de
                tecnologia
              </article>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
            <div className={styles.strip}></div>
          </div>
        </div>
      </div>
    </header>
  );
};
