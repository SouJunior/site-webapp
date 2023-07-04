import { useState } from "react";
import { Accordion, AccordionItem } from "@szhsin/react-accordion";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";

import styles from "./Faq.module.css";
import { Heading } from "../commons/Heading";
import { Paragraph } from "../commons/Paragraph";
import Input from "../commons/Input";
import Textarea from "../commons/Textarea";
import { RadioButton } from "../commons/RadioButton";
import { souJunior, mentor, voluntario } from "../../utils/faqItems";
import Popup from "../commons/Popup/Popup";

export const Faq = () => {
  const [radioOption, setRadioOption] = useState("Sou Junior");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isNameValid, setIsNameValid] = useState(false);
  const [isEmailValid, setIsEmailValid] = useState(false);
  const [isTextValid, setIsTextValid] = useState(false);
  const [nameTouched, setNameTouched] = useState(false);
  const [emailTouched, setEmailTouched] = useState(false);
  const [messageTouched, setMessageTouched] = useState(false);

  const [showPopup, setShowPopup] = useState(false);

  const imageUrl = "/assets/faq.png";

  function openPopup() {
    setShowPopup(true);
  }

  function closePopup() {
    setShowPopup(false);
    setName("");
    setEmail("");
    setMessage("");
  }

  const handleNameChange = (event) => {
    const newName = event.target.value;
    setName(newName);
    setNameTouched(true);
    setIsNameValid(validateName(newName));
  };

  function handleEmailChange(event) {
    const newEmail = event.target.value;
    setEmail(newEmail);
    setEmailTouched(true);
    setIsEmailValid(validateEmail(newEmail));
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

  function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (isNameValid && isEmailValid && isTextValid) {
      console.log(`Nome: ${name}`);
      console.log(`Email: ${email}`);
      console.log(`Message: ${message}`);
      openPopup();
      setName(""); // Limpa o campo de nome
      setEmail(""); // Limpa o campo de email
      setMessage(""); // Limpa o campo de mensagem
    }
  }

  function validateMessage(message) {
    return message.trim() !== "";
  }

  return (
    <>
      <div className={styles.bannerContainer}>
        <picture>
          <source
            alt="Uma experiência real de trabalho em uma empresa de tecnologia."
            srcSet="/assets/hero-faq.svg 1280w"
            sizes="1440px"
          />

          <img
            src="/assets/hero-faq.svg"
            alt="Uma experiência real de trabalho em uma empresa de tecnologia."
          />
        </picture>
        <Paragraph>Perguntas frequentes</Paragraph>
        <Heading level={"h2"}>Olá! Como podemos te ajudar?</Heading>
      </div>
      <section className={styles.FaqSection}>
        <div className={styles.container}>
          <Tabs>
            <TabList className={styles.tabList}>
              <Tab className={styles.tab}>
                <Heading level={"h3"}> Sou Junior</Heading>
              </Tab>
              <Tab>
                <Heading level={"h3"}>Voluntário</Heading>
              </Tab>
              <Tab>
                <Heading level={"h3"}>Mentor/Apoiador</Heading>
              </Tab>
            </TabList>
            <TabPanel className={styles.tabPanel}>
              <Accordion className={styles.accordion} allowMultiple>
                {souJunior.map(({ titulo, descricao, id }) => (
                  <AccordionItem
                    initialEntered
                    className={styles.accordionItem}
                    key={id}
                    header={
                      <div className={styles.headerTitle}>
                        <Heading level={'h4'}>{titulo}</Heading>
                        <img src="../assets/icons/chevron-up.svg" alt="" />
                      </div>
                    }
                  >
                    <Paragraph>{descricao}</Paragraph>
                  </AccordionItem>
                ))}
              </Accordion>
            </TabPanel>
            <TabPanel>
              <Accordion className={styles.accordion} allowMultiple>
                {mentor.map(({ titulo, descricao, id }) => (
                  <AccordionItem
                    initialEntered
                    className={styles.accordionItem}
                    key={id}
                    header={
                      <div className={styles.headerTitle}>
                        <Heading level={"h4"}>{titulo}</Heading>
                        <img src="../assets/icons/chevron-up.svg" alt="" />
                      </div>
                    }
                  >
                    <Paragraph>{descricao}</Paragraph>
                  </AccordionItem>
                ))}
              </Accordion>
            </TabPanel>
            <TabPanel>
              <Accordion className={styles.accordion} allowMultiple>
                {voluntario.map(({ titulo, descricao, id }) => (
                  <AccordionItem
                    initialEntered
                    className={styles.accordionItem}
                    key={id}
                    header={
                      <div className={styles.headerTitle}>
                        <Heading level={"h4"}>{titulo}</Heading>
                        <img src="../assets/icons/chevron-up.svg" alt="" />
                      </div>
                    }
                  >
                    <Paragraph>{descricao}</Paragraph>
                  </AccordionItem>
                ))}
              </Accordion>
            </TabPanel>
          </Tabs>
        </div>
      </section>
      <div className={styles.description}>
        <div className={styles.container}>
          <Heading level={"h2"}>
            Não encontrou sua dúvida, fale conosco!{" "}
          </Heading>
          <Heading level={"h3"}>
            Preencha o formulário e entraremos em contato!
          </Heading>
        </div>
      </div>

      <section className={styles.formSection}>
        <div className={styles.container}>
          <form className={styles.form} onSubmit={handleSubmit}>
            <div className={styles.radios}>
              <RadioButton
                options={[
                  "Sou Junior",
                  "Voluntário",
                  "Mentor/Apoiador",
                  "Outros",
                ]}
                value={radioOption}
                setValue={setRadioOption}
              />
            </div>

            <div className={styles.labelInput}>
              <Input
                type="text"
                text="Qual o seu nome?*"
                placeholder="Digite seu nome completo"
                label={nameTouched ? "O campo nome é obrigatório." : "Nome"}
                value={name}
                onChange={handleNameChange}
                isValid={!nameTouched || isNameValid}
              />
            </div>

            <div>
              <Input
                type="email"
                text="Qual o seu e-mail?*"
                placeholder="Digite o seu e-mail"
                label={emailTouched ? "O campo E-mail é obrigatório." : "E-mail"}
                value={email}
                onChange={handleEmailChange}
                isValid={!emailTouched || isEmailValid}
              />
            </div>

            <div className={styles.area}>
              <Textarea
                name="description"
                value={message}
                isValid={!messageTouched || isTextValid}
                onChange={handleMessageChange}
                text="Fale-nos sobre sua dúvida*"
              />

              <button
                className={styles.button}
                type="submit"
                disabled={!isNameValid && !isEmailValid && !isTextValid}
              >
                Enviar
              </button>
            </div>
          </form>
          {showPopup && (
            <Popup
              onClose={closePopup}
              message="Pergunta enviada com sucesso!"
              imageUrl={imageUrl}
            >
              <button onClick={closePopup}>Fechar</button>
            </Popup>
          )}
        </div>
      </section>
    </>
  );
};
