import { useState } from "react";
import { IoMdAdd, IoMdClose } from "react-icons/io";
import { Accordion, AccordionItem } from "@szhsin/react-accordion";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";

import styles from "./Faq.module.css";
import Title from "../commons/Title";
import Input from "../commons/Input";
import Textarea from "../commons/Textarea";
import { RadioButton } from "../commons/RadioButton";
import { souJunior, mentor, voluntario } from "../../utils/faqItems";

export const Faq = () => {
  const [souJr, setSouJr] = useState(false);
  const [icon, setIcon] = useState(IoMdAdd);
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

  function handleNameChange(event) {
    const newName = event.target.value;
    setName(newName);
    setNameTouched(true);
    setIsNameValid(validateName(newName));
  }

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
    }
  }

  function validateMessage(message) {
    return message.trim() !== "";
  }

  return (
    <>
      <div className={styles.textInner}>
        <p>Perguntas frequentes</p>
        <h2>Olá! Como podemos de ajudar?</h2>
      </div>
      <section className={styles.FaqSection}>
        <div className={styles.tabContainer}>
          <Tabs>
            <TabList className={styles.tabList}>
              <Tab className={styles.tab}>
                <Title> Sou Junior</Title>
              </Tab>
              <Tab>
                <Title>Voluntário</Title>
              </Tab>
              <Tab>
                <Title>Mentor/Apoiador</Title>
              </Tab>
            </TabList>
            <TabPanel className={styles.tabPanel}>
              <Accordion className={styles.accordion}>
                {souJunior.map(({ titulo, descricao, id }) => (
                  <AccordionItem
                    initialEntered
                    className={styles.accordionItem}
                    key={id}
                    header={<h2 className={styles.accordionTitle}>{titulo}</h2>}
                  >
                    <p className={styles.accordionP}>{descricao} </p>
                  </AccordionItem>
                ))}
              </Accordion>
            </TabPanel>
            <TabPanel>
              <Accordion className={styles.accordion}>
                {mentor.map(({ titulo, descricao, id }) => (
                  <AccordionItem
                    initialEntered
                    className={styles.accordionItem}
                    key={id}
                    header={<h2 className={styles.accordionTitle}>{titulo}</h2>}
                  >
                    <p className={styles.accordionP}>{descricao}</p>
                  </AccordionItem>
                ))}
              </Accordion>
            </TabPanel>
            <TabPanel>
              <Accordion className={styles.accordion}>
                {voluntario.map(({ titulo, descricao, id }) => (
                  <AccordionItem
                    initialEntered
                    className={styles.accordionItem}
                    key={id}
                    header={<h2 className={styles.accordionTitle}>{titulo}</h2>}
                    {...(
                      <img
                        className={styles.chevron}
                        src="../../public/assets/icons/chevron-down.svg"
                        alt="Chevron Down"
                      />
                    )}
                  >
                    <p className={styles.accordionP}>{descricao} </p>
                  </AccordionItem>
                ))}
              </Accordion>
            </TabPanel>
          </Tabs>
        </div>
      </section>
      <div className={styles.description}>
        <h2>Não encontrou sua dúvida, fale conosco! </h2>
        <h3>Preencha o formulário e entraremos em contato!</h3>
      </div>

      <section className={styles.formSection}>
        <form className={styles.form}>
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
              label="Nome"
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
              label="E-mail"
              value={email}
              onChange={handleEmailChange}
              isValid={!emailTouched || isEmailValid}
            />
          </div>

          <div className={styles.area}>
            <Textarea
              name="description"
              value={message}
              isValid={!messageTouched || validateMessage(message)}
              onChange={handleMessageChange}
              text="Fale-nos sobre sua dúvida*"
            />

            <button
              className={styles.button}
              type="submit"
              disabled={!isNameValid || !isEmailValid || !isTextValid}
            >
              Enviar
            </button>
          </div>
        </form>
      </section>
    </>
  );
};
