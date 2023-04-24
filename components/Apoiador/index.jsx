import React, { useState } from "react";
import styles from "./Apoiador.module.css";
import { RadioButton } from "../commons/RadioButton";
import Input from "../commons/Input";
import Textarea from "../commons/Textarea";

export const Apoiador = () => {
  const [radioOption, setRadioOption] = useState("Sou Pessoa Física");
  return (
    <>
      <section className={styles.ApoiadorSection}>
        <section className={styles.formSection}>
          <form className={styles.form}>
            <div className={styles.radios}>
              <RadioButton
                options={["Sou Pessoa Física", "Sou Pessoa Jurídica"]}
                value={radioOption}
                setValue={setRadioOption}
              />
            </div>
            <div className={styles.labelInput}>
              <Input
                type="text"
                text="Nome/Instituição*"
                placeholder="Digite seu nome completo"
                name="name"
              />
            </div>
            <div className={styles.labelInput}>
              <Input
                type="text"
                text="Como prefere ser chamado?*"
                placeholder="Digite seu nome completo"
                name="name"
              />
            </div>

            <div className={styles.labelInput}>
              <Input
                type="text"
                text="Telefone/Whats*"
                placeholder="(xx) xxxxxxxxx"
                name="name"
              />
            </div>

            <div className={styles.labelInput}>
              <Input
                type="text"
                text="Confirme seu telefone/whats*"
                placeholder="(xx) xxxxxxxxx"
                name="name"
              />
            </div>

            <div>
              <Input
                type="email"
                text="Qual o seu e-mail?*"
                placeholder="Digite o seu e-mail"
                name="email"
              />
            </div>

            <div>
              <Input
                type="email"
                text="Confirme seu e-mail?*"
                placeholder="Digite novamente seu e-mail"
                name="email"
              />
            </div>

            <div className={styles.area}>
              <Textarea
                name="description"
                text="Como você gostaria de apoiar o Sou Junior?*"
              />

              <button className={styles.button} type="submit">
                Enviar
              </button>
            </div>
          </form>
        </section>
      </section>
    </>
  );
};
