import React, { useState } from "react";
import style from "./PrivacyPolicy.module.css";

const PrivacyPolicy = () => {
  const [accepted, setAccepted] = useState(false);

  const handleAccept = () => {
    setAccepted(true);
  };

  return (
    <div>
      {!accepted && (
        <div className={style.container}>
          <div className={style.privacyNotice}>
            <p className={style.text}>
              "A sua segurança é importante para nós. É política da SouJunior respeitar a sua privacidade em relação a qualquer informação que possamos coletar."{' '}
              <a href="/politica-de-privacidade" target="_blank" rel="noopener noreferrer">
                "Políticas de Privacidade"
              </a>
            </p>
            <button onClick={handleAccept}>Aceitar políticas</button>
          </div>
        </div>
      )}
      
    </div>
  );
};

export default PrivacyPolicy;
