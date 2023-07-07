import React from "react";
import styles from "./Popup.module.css";

const Popup = ({ children, onClose, imageUrl }) => {
  return (
    <div className={styles.overlay}>
      <div className={styles.popup}>
        <img src={imageUrl} width={70} height={70} alt="Imagem" />
        {children}

        <button onClick={onClose}>Fechar</button>
      </div>
    </div>
  );
};

export default Popup;
