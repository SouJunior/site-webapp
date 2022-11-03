import React from "react";

import styles from "./Footer.module.css";
import {dataSocial} from "../../utils/dataSocial";

export const Footer = () => {
  return (
    <>
    <section className={styles.footerContainer}>
      <div className={styles.align}>
      <h2 className={styles.title}>Faça parte da nossa comunidade!</h2>
      <div className={styles.icons}>
        {dataSocial.map(({name, icon, path, id}) => (
          <a href={path}  className={styles.socialBtn} id={id} key={name} >
                       {icon}
          </a>
        ))}
      </div>
      </div>
    </section>
    </>
  );
};
