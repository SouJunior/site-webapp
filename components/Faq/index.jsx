import React, { useState } from "react";
import { IoMdAdd, IoMdClose } from "react-icons/io";
import Title from "../commons/Title";
import styles from "./Faq.module.css";
import { souJunior, mentor, voluntario } from "../../utils/faqItems";
import { Accordion, AccordionItem } from "@szhsin/react-accordion";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

export const Faq = () => {
  const [souJr, setSouJr] = useState(false);
  const [icon, setIcon] = useState(IoMdAdd);

  return (
    <section className={styles.faqContainer}>
      <div className={styles.tabContainer}>
        <Tabs>
          <TabList>
            <Tab>
              <Title>Sou Junior</Title>
              <h2></h2>
            </Tab>
            <Tab>
              <Title>Voluntário</Title>
            </Tab>
            <Tab>
              <Title>Mentor/Apoiador</Title>
            </Tab>
          </TabList>
          <TabPanel className={styles.tabPanel}>
            <Accordion>
              {souJunior.map(({ titulo, descricao, id }) => (
                <AccordionItem key={id} header={titulo}>
                  {descricao}
                </AccordionItem>
              ))}
            </Accordion>
          </TabPanel>
          <TabPanel>
            <Accordion>
              {mentor.map(({ titulo, descricao, id }) => (
                <AccordionItem key={id} header={titulo}>
                  {descricao}
                </AccordionItem>
              ))}
            </Accordion>
          </TabPanel>
          <TabPanel>
            <Accordion>
              {voluntario.map(({ titulo, descricao, id }) => (
                <AccordionItem key={id} header={titulo}>
                  {descricao}
                </AccordionItem>
              ))}
            </Accordion>
          </TabPanel>
        </Tabs>
      </div>
    </section>
  );
};
