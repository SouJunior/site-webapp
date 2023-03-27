import { useState } from "react";
import styles from "./Faq.module.css";
import Title from "../Title";
import { souJunior, mentor, voluntario } from "../../utils/faqItems";
import { IoMdAdd, IoMdClose } from "react-icons/io";

export const Faq = () => {
  const [souJr, setSouJr] = useState(true);
  const [icon, setIcon] = useState(IoMdAdd);

  return (
    <section className={styles.sectionContainer}>
      <div className={styles.divs}>
        <Title texto="Sou Junior" />
        <div className={styles.souJr}>
          {souJunior.map(({ id, titulo, descricao }) => (
            <button onclick={() => setSouJr(!souJr) && setIcon(IoMdClose)}>
              <h2 className={styles.h2}>{titulo}</h2>
              <p className={styles.p}>{descricao}</p>
              {souJr ? <IoMdAdd /> : <IoMdClose />}
            </button>

            // {souJr && (

            // )}
          ))}
        </div>
      </div>

      <div className={styles.divs}>
        <Title texto="Mentor" />
        {mentor.map((item) => (
          <>
            <h2>{item.titulo}</h2>
            <p className={styles.p}>{item.descricao}</p>
          </>
        ))}
      </div>

      <div className={styles.divs}>
        <Title texto="Voluntáio" />
        {voluntario.map((nome2) => (
          <>
            <h2>{nome2.titulo}</h2>
            <p className={styles.p}>{nome2.descricao}</p>
          </>
        ))}
      </div>
    </section>
  );
};
