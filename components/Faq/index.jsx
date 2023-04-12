import { useState } from "react";
import emailjs from "@emailjs/browser";
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
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  function sendEmail(e) {
    e.preventDefault();

    const templateParams = {
      from_name: name,
      message: message,
      email: email,
    };

    emailjs
      .send(
        "service_k47b2cj",
        "template_a9xnen5",
        templateParams,
        "BeY4OuM8WvMaH_COp"
      )
      .then(
        (response) => {
          alert("E-mail enviado com sucesso!");
          console.log("email enviado", response.status, response.text);
          setName("");
          setEmail("");
          setMessage("");
        },
        (err) => {
          console.log("Erro", err);
        }
      );
  }

  return (
    <>
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
                    className={styles.accordionItem}
                    key={id}
                    header={
                      <h2 className={styles.accordionTitle}>{titulo}</h2>
                    }>
                    <p className={styles.accordionP}>{descricao} </p>
                  </AccordionItem>
                ))}
              </Accordion>
            </TabPanel>
            <TabPanel>
              <Accordion className={styles.accordion}>
                {mentor.map(({ titulo, descricao, id }) => (
                  <AccordionItem
                    className={styles.accordionItem}
                    key={id}
                    header={
                      <h2 className={styles.accordionTitle}>{titulo}</h2>
                    }>
                    <p className={styles.accordionP}>{descricao}</p>
                  </AccordionItem>
                ))}
              </Accordion>
            </TabPanel>
            <TabPanel>
              <Accordion className={styles.accordion}>
                {voluntario.map(({ titulo, descricao, id }) => (
                  <AccordionItem
                    className={styles.accordionItem}
                    key={id}
                    header={
                      <h2 className={styles.accordionTitle}>{titulo}</h2>
                    }>
                    <p className={styles.accordionP}>{descricao} </p>
                  </AccordionItem>
                ))}
              </Accordion>
            </TabPanel>
          </Tabs>
        </div>
      </section>
      <div className={styles.description}>
        <h2>Não encontrou sua dúvida, fale conosco!</h2>
        <h3>Preencha o formulário e entraremos em contato!</h3>
      </div>

      <section className={styles.formSection}>
        <form className={styles.form} onSubmit={sendEmail}>
          <div className={styles.radios}>
            <RadioButton
              id="soujunior"
              name="soujunior"
              titleFor="soujunior"
              title="Rádio Person"
              defaultChecked
            />
            <RadioButton
              id="teste"
              name="teste"
              titleFor="teste"
              title="Outro teste"
            />
            <div className={styles.radiosContainer}>
              <input type="radio" name="soujunior" id="soujunior" />
              <label htmlFor="soujunior">Sou Junior</label>
            </div>
            <div className={styles.radiosContainer}>
              <input type="radio" name="soujunior" id="voluntario" />
              <label htmlFor="voluntario">Voluntário</label>
            </div>
            <div className={styles.radiosContainer}>
              <input type="radio" name="soujunior" id="mentor/apoiador" />
              <label htmlFor="mentor/apoiador">Mentor/Apoiador</label>
            </div>
            <div className={styles.radiosContainer}>
              <input type="radio" name="soujunior" id="outros" />
              <label htmlFor="outros">Outros</label>
            </div>
          </div>

          <div className={styles.labelInput}>
            <Input
              type="text"
              text="Qual o seu nome?*"
              placeholder="Digite seu nome completo"
              //onChange={(e) => setName(e.target.value)}
              //value={name}
            />
          </div>

          <div>
            <Input
              type="email"
              text="Qual o seu e-mail?*"
              placeholder="Digite o seu e-mail"
              // onChange={(e) => setEmail(e.target.value)}
              // value={email}
            />
          </div>

          <div className={styles.area}>
            <Textarea
              name="Fale-nos sobre sua dúvida*"
              text="Fale-nos sobre sua dúvida*"
              // onChange={(e) => setMessage(e.target.value)}
              value={message}
            />
            <button className={styles.button} type="submit">
              Enviar
            </button>
          </div>
        </form>
      </section>
    </>
  );
};
