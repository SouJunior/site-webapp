import React from "react";
import styles from "./Popup.module.css";

const Popup = ({ message, onClose }) => {
  return (
    <div className={styles.overlay}>
      <div className={styles.popup}>
        <p>{message}</p>

        <img src="/assets/popup.svg" alt="Imagem de sucesso" />
       
        <button onClick={onClose}>Fechar</button>
      </div>
    </div>
  );
};

export default Popup;