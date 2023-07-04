import React from "react";
import styles from "./Popup.module.css";
import { Paragraph } from "../Paragraph";

const Popup = ({ message, onClose, imageUrl }) => {
  return (
    <div className={styles.overlay}>
      <div className={styles.popup}>
        <img src={imageUrl} width={70} height={70} alt="Imagem" />
        <Paragraph>{message}</Paragraph>

        <button onClick={onClose}>Fechar</button>
      </div>
    </div>
  );
};

export default Popup;
