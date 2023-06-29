import React from "react";
import styles from "./Popup.module.css";
import { Paragraph } from "../Paragraph";

const Popup = ({ message, onClose }) => {
  return (
    <div className={styles.overlay}>
      <div className={styles.popup}>
        <Paragraph>{message}</Paragraph>
        <img src="/assets/popup.svg" alt="Imagem de sucesso" />

        <button onClick={onClose}>Fechar</button>
      </div>
    </div>
  );
};

export default Popup;
