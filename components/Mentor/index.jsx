import React, { useState } from "react";
import styles from "./Mentor.module.css";
import { RadioButton } from "../commons/RadioButton";
import { Heading } from "../commons/Heading";
import { Paragraph } from "../commons/Paragraph";
import { Loading } from "../commons/Loading";
import Textarea from "../commons/Textarea";
import Input from "../commons/Input";
import Popup from "../commons/Popup/Popup";

import { api } from "../../services/api";

export const Mentor = () => {
  return (
    <>
      <div className={styles.bannerContainer} id="mentor">
        <img
          src="/assets/sou-apoiador-cover.svg"
          alt="Uma experiência real de trabalho em uma empresa de tecnologia."
        />
        <div>
          <Heading level={"h2"}>Quero ser Mentor</Heading>
          <Paragraph>
            Olá! Preenchendo as informações abaixo, você receberá um contato do
            nosso time, para te conhecer um pouco mais e entender como você
            gostaria de apoiar a Sou Junior.
          </Paragraph>
        </div>
      </div>
    </>
  );
};
