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
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [radioOption, setRadioOption] = useState("Sou Junior");

  return (
    <>
      <div className={styles.textInner}>
        <p>Perguntas frequentes</p>
        <article>Olá! Como podemos de ajudar?</article>
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
                    initialEntered
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
                    )}>
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

          <div className={styles.area}>
            <Textarea name="description" text="Fale-nos sobre sua dúvida*" />

            <button className={styles.button} type="submit">
              Enviar
            </button>
          </div>
        </form>
      </section>
    </>
  );
};
