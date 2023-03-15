import React from "react";
import {souJunior} from "../../utils/dataSocial";

const Faq = () => {
  
  const souJr = souJunior.filter(souJunior.titulo)

  return (
    <div>
      <h1>{souJr}</h1>
    </div>
   

  );
};


export default Faq;