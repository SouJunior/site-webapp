import React, { useState } from 'react';

const App = () => {
  const [accepted, setAccepted] = useState(false);

  const handleAccept = () => {
    setAccepted(true);
  };

  return (
    <div>
      {!accepted ? (
        <div>
          <h1>www.soujunior.tech</h1>
          <p>
            A sua segurança é importante para nós. É política da SouJunior respeitar a sua privacidade em relação a qualquer informação que possamos coletar.
          </p>
          <button onClick={handleAccept}>Aceitar Políticas</button>
        </div>
      ) : (
        <div>
          <h1>Bem-vindo ao site da SouJunior!</h1>
          <p>
            Aqui está o conteúdo da página...
          </p>
          <a href="https://docs.google.com/document/d/1IH69ZlH71jCCqoG9Rd3buue5Xp3n53bs6hjO3eaRjA0/edit#heading=h.yckw8flpbuzs">
            Políticas de Privacidade
          </a>
        </div>
      )}
    </div>
  );
};

export default App;