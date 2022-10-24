import React from "react";

import styles from "./Footer.module.css";
import {dataSocial} from "../../utils/dataSocial";

export const Footer = () => {
  return (
    <section className={styles.footerContainer}>
      <h2 className={styles.title}>Faça parte da nossa comunidade!</h2>
      <div className={styles.icons}>
        {dataSocial.map(({name, icon, path, id}) => (
          <a
            href={path}
            target="_blank"
            className={styles.socialBtn}
            id={id}
            key={name}
          >
            {icon}
          </a>
        ))}
      </div>
    </section>
  );
};
