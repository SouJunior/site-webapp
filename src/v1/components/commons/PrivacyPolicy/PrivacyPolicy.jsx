import React, { useState,useEffect } from "react";
import style from "./PrivacyPolicy.module.css";

const PrivacyPolicy = () => {
  const [accepted, setAccepted] = useState(false);

  const handleAccept = () => {
    setCookie("privacy_accepted", true, 7); // Define o cookie de aceite de privacidade com valor "true" e expiração de 7 dias
    setAccepted(true);
  };

  useEffect(() => {
    const privacyAccepted = getCookie("privacy_accepted");
    if (privacyAccepted) {
      setAccepted(true);
    }
  }, []);

  // Função para definir um cookie
  const setCookie = (name, value, days) => {
    const expires = new Date();
    expires.setTime(expires.getTime() + days * 24 * 60 * 60 * 1000);
    document.cookie = `${name}=${value};expires=${expires.toUTCString()};path=/`;
  };

  // Função para obter o valor de um cookie
  const getCookie = (name) => {
    const cookies = document.cookie.split("; ");
    for (let i = 0; i < cookies.length; i++) {
      const cookie = cookies[i].split("=");
      if (cookie[0] === name) {
        return cookie[1];
      }
    }
    return null;
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
