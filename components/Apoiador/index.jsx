import React, { useState } from "react";
import styles from "./Apoiador.module.css";
import { RadioButton } from "../commons/RadioButton";
import Input from "../commons/Input";
import Textarea from "../commons/Textarea";
import { Heading } from "../commons/Heading";
import { Paragraph } from "../commons/Paragraph";
import Popup from "../commons/Popup/Popup";

export const Apoiador = () => {
  const [radioOption, setRadioOption] = useState("Sou Pessoa Física");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [phone, setPhone] = useState("");
  const [surname, setSurname] = useState("");
  const [confirmEmail, setConfirmEmail] = useState("");
  const [confirmPhone, setConfirmPhone] = useState("");
  const [isNameValid, setIsNameValid] = useState(false);
  const [isEmailValid, setIsEmailValid] = useState(false);
  const [isTextValid, setIsTextValid] = useState(false);
  const [isPhoneValid, setIsPhoneValid] = useState(false);
  const [isSurnameValid, setIsSurnameValid] = useState(false);
  const [isConfirmEmailValid, setIsConfirmEmailValid] = useState(false);
  const [phoneTouched, setPhoneTouched] = useState(false);
  const [nameTouched, setNameTouched] = useState(false);
  const [emailTouched, setEmailTouched] = useState(false);
  const [messageTouched, setMessageTouched] = useState(false);
  const [surnameTouched, setSurnameTouched] = useState(false);
  const [confirmEmailTouched, setConfirmEmailTouched] = useState(false);
  const [confirmPhoneTouched, setConfirmPhoneTouched] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const imageUrl = "/assets/voluntario.png"; //imagem do popup

  function handleNameChange(event) {
    const newName = event.target.value;
    setName(newName);
    setNameTouched(true);
    setIsNameValid(validateName(newName));
  }

  function handleSurnameChange(event) {
    const newSurname = event.target.value;
    setSurname(newSurname);
    setSurnameTouched(true);
    setIsSurnameValid(validateSurname(newSurname));
  }

  function handleEmailChange(event) {
    const newEmail = event.target.value;
    setEmail(newEmail);
    setEmailTouched(true);
    setIsEmailValid(validateEmail(newEmail));
  }

  function handleConfirmEmailChange(event) {
    const newConfirmEmail = event.target.value;
    setConfirmEmail(newConfirmEmail);
    setConfirmEmailTouched(true);
    setIsConfirmEmailValid(validateConfirmEmail(newConfirmEmail));
  }

  function handlePhoneChange(event) {
    const newPhone = event.target.value;
    setPhone(newPhone);
    setPhoneTouched(true);
    setIsPhoneValid(validatePhone(newPhone));
  }

  function handleConfirmPhoneChange(event) {
    const newConfirmPhone = event.target.value;
    setConfirmPhone(newConfirmPhone);
    setConfirmPhoneTouched(validateConfirmPhone(newConfirmPhone));
  }

  function handleConfirmPhoneChange(event) {
    const newConfirmPhone = event.target.value;
    setConfirmPhone(newConfirmPhone);
    setConfirmPhoneTouched(true);
    setIsPhoneValid(validateConfirmPhone(newConfirmPhone));
  }

  function handleMessageChange(event) {
    const newText = event.target.value;
    setMessage(newText);
    setMessageTouched(true);
    setIsTextValid(validateMessage(newText));
  }

  function validateName(name) {
    const nameRegex = /^[A-Za-zÀ-ÖØ-öø-ÿ\s]+$/;
    return nameRegex.test(name);
  }

  function validateSurname(name) {
    const nameRegex = /^[A-Za-zÀ-ÖØ-öø-ÿ\s]*$/;
    return nameRegex.test(name);
  }

  function validateConfirmEmail(confirmEmail) {
    return confirmEmail === email;
  }

  function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  function validatePhone(phone) {
    const phoneRegex = /^\(*\d{2}\)*(\s)?\d{4,5}-*\d{4}$/;
    return phoneRegex.test(phone);
  }

  function validateConfirmPhone(confirmPhone) {
    return confirmPhone === phone;
  }

  // function handleSubmit(event) {
  //   event.preventDefault();
  //   if (isNameValid && isEmailValid && isTextValid && isPhoneValid) {
  //     console.log(`Nome: ${name}`);
  //     console.log(`Email: ${email}`);

  //   }
  // }

  function validateMessage(message) {
    return message.trim() !== "";
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (isNameValid && isEmailValid && isTextValid) {
      console.log(`Nome: ${name}`);
      console.log(`Email: ${email}`);
      openPopup();
      setRadioOption("Sou Pessoa Física");
      setName("");
      setEmail("");
      setMessage("");
      setPhone("");
      setSurname("");
      setConfirmEmail("");
      setConfirmPhone("");
      setIsNameValid("");
      setIsEmailValid("");
      setIsTextValid("");
      setIsPhoneValid("");
      setIsSurnameValid("");
      setIsConfirmEmailValid("");
      setPhoneTouched("");
      setNameTouched("");
      setEmailTouched("");
      setMessageTouched("");
      setSurnameTouched("");
      setConfirmEmailTouched("");
      setConfirmPhoneTouched("");
    }
  }

  function openPopup() {
    setShowPopup(true);
  }

  function closePopup() {
    setShowPopup(false);
  }

  return (
    <>
      <div className={styles.bannerContainer} id="apoiador">
        <img
          src="/assets/sou-apoiador-cover.svg"
          alt="Uma experiência real de trabalho em uma empresa de tecnologia."
        />
        <div>
          <Heading level={"h2"}>Sou Apoiador</Heading>
          <Paragraph>
            Olá! Preenchendo as informações abaixo, você receberá um contato do
            nosso time, para te conhecer um pouco mais e entender como você
            gostaria de apoiar a Sou Junior.
          </Paragraph>
        </div>
      </div>
      <section className={styles.ApoiadorSection}>
        <div className={styles.container}>
          <form className={styles.form} onSubmit={handleSubmit}>
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
                label={nameTouched ? "O campo nome é obrigatório." : "Nome"}
                value={name}
                onChange={handleNameChange}
                isValid={!nameTouched || isNameValid}
              />
            </div>
            <div className={styles.labelInput}>
              <Input
                type="text"
                text="Como prefere ser chamado?"
                placeholder="Como prefere ser chamado"
                label="Surname"
                value={surname}
                onChange={handleSurnameChange}
                isValid={!surnameTouched || isSurnameValid}
              />
            </div>

            <div className={styles.labelInput}>
              <Input
                type="text"
                text="Telefone*"
                placeholder="(xx) xxxxxxxxx"
                label={
                  phoneTouched
                    ? "O campo telefone com DDD é obrigatório."
                    : "Telefone (com DDD)"
                }
                value={phone}
                onChange={handlePhoneChange}
                isValid={!phoneTouched || validatePhone(phone)}
              />
            </div>

            <div className={styles.labelInput}>
              <Input
                text="Confirme seu telefone*"
                label="Confirmar Telefone"
                type="tel"
                placeholder="(xx) xxxxxxxxx"
                value={confirmPhone}
                onChange={handleConfirmPhoneChange}
                isValid={
                  confirmPhone === "" || validateConfirmPhone(confirmPhone)
                }
              />
            </div>

            <div>
              <Input
                type="email"
                text="Qual o seu e-mail?*"
                placeholder="Digite o seu e-mail"
                label={
                  emailTouched ? "O campo E-mail é obrigatório." : "E-mail"
                }
                value={email}
                onChange={handleEmailChange}
                isValid={!emailTouched || isEmailValid}
              />
            </div>

            <div>
              <Input
                type="email"
                text="Confirme seu e-mail.*"
                label="Confirmar Email"
                placeholder="Digite o seu e-mail"
                value={confirmEmail}
                onChange={handleConfirmEmailChange}
                isValid={!confirmEmailTouched || isConfirmEmailValid}
              />
            </div>

            <div className={styles.area}>
              <Textarea
                name="description"
                value={message}
                isValid={!messageTouched || validateMessage(message)}
                onChange={handleMessageChange}
                text="Como você gostaria de apoiar o Sou Junior?*"
              />

              <button
                className={styles.button}
                type="submit"
                disabled={
                  !isNameValid ||
                  !isEmailValid ||
                  !isTextValid ||
                  !isPhoneValid ||
                  // !isSurnameValid ||
                  !isConfirmEmailValid
                }
              >
                Enviar
              </button>
              {showPopup && (
                <Popup
                  onClose={closePopup}
                  message="Seu formulário foi enviado com sucesso!"
                  imageUrl={imageUrl}
                >
                  <button onClick={closePopup}>Fechar</button>
                </Popup>
              )}
            </div>
          </form>
        </div>
      </section>
    </>
  );
};
