import {Navbar} from "../Navbar";
import {MenuMobile} from "../MenuMobile";
import styles from "./Header.module.css";
import Image from "next/image";


export const Header = () => {
  return (
    <header className={styles.header}>
      {/* <div className={styles.backgroud}></div> */}
      <div className={styles.front}>
        <div className={styles.navbar}>
          <div className={styles.logo}>
            <Image
              src="/assets/icons/Logo.svg"
              alt="logo SouJunior"
              width={216}
              height={33}
            />
          </div>
          <div className={styles.menu}>
            <Navbar />
          </div>
          <div className={styles.menuHamburger}>
            {/* <Image src="/assets/icons/menu.svg" alt="menu hamburguer" width={40} height={40}/> */}
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
            <article>
            Uma experiência real de trabalho em uma empresa de tecnologia.
            </article>
            <p>O Junior de hoje é o Sênior do amanhã!</p>
          </div>
        </div>
        </div>
      </div>
    </header>
  );
};
