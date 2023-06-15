import React, { useState } from 'react';
import style from "./PrivacyPolicy.module.css"

const PrivacyPolicy = () => {
  const [accepted, setAccepted] = useState(false);

  const handleAccept = () => {
    setAccepted(true);
  };

  return (
    <div className={style.container}>
      {!accepted && (
        <div className={style.privacyNotice}>
          <p className={style.text}>
          "A sua segurança é importante para nós. É política da SouJunior respeitar a sua privacidade em relação a qualquer informação que possamos coletar."{' '}
                    
            <a href="https://docs.google.com/document/d/1IH69ZlH71jCCqoG9Rd3buue5Xp3n53bs6hjO3eaRjA0/edit#heading=h.yckw8flpbuzs" target="_blank" rel="noopener noreferrer">
              "Políticas de Privacidade"
            </a>
            </p>
          <button onClick={handleAccept}>Aceitar políticas</button>
        </div>
      )}
      {accepted && (
        <div className={style.privacyContent}>
          
        </div>
      )}
    </div>
  );
};

export default PrivacyPolicy;