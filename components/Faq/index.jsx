import React, { useState } from "react";
import { IoMdAdd, IoMdClose } from "react-icons/io";
import Title from "../commons/Title";
import styles from "./Faq.module.css";
import emailjs from '@emailjs/browser'

import { souJunior, mentor, voluntario } from "../../utils/faqItems";
import { Accordion, AccordionItem } from "@szhsin/react-accordion";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import Input from "../Inputs/Input";
import Textarea from "../Textarea/Textarea";

export const Faq = () => {
  const [souJr, setSouJr] = useState(false);
  const [icon, setIcon] = useState(IoMdAdd);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('')

  function sendEmail(e){
    e.preventDefault();

      const templateParams ={
      from_name: name,
      message: message,
      email: email
    }
    
    emailjs.send("service_k47b2cj", "template_a9xnen5", templateParams, "BeY4OuM8WvMaH_COp").then((response) =>
    {
      console.log("email enviado", response.satatus, response.text);
      setName('')
      setEmail('')
      setMessage('')
     
    },(err) =>
    {
      console.log("Erro", err)
    }
    )
    
  }

  return (
    <>
    <section className={styles.faqContainer}>
      <div className={styles.tabContainer}>
        <Tabs>
          <TabList  className={styles.tabList
            }>
            <Tab  >
              <Title > Sou Junior</Title>
              
            </Tab>
            <Tab>
              <Title>
              Voluntário</Title>
            </Tab>
            <Tab>
              <Title>Mentor/Apoiador</Title>
            </Tab>
          </TabList>
          <TabPanel className={styles.tabPanel}>

            <Accordion>
              {souJunior.map(({ titulo, descricao, id }) => (
                <AccordionItem className={styles.accordionItem} key={id} header=<h1 className={styles.accordionh1}>{titulo}</h1>>
                   <p className={styles.accordionP}>{descricao} </p> 
                                   </AccordionItem>
              ))}
            </Accordion>
          </TabPanel>

          <TabPanel>
            <Accordion>
              {mentor.map(({ titulo, descricao, id }) => (
                <AccordionItem  className={styles.accordionItem} key={id} header=<h1 className={styles.accordionh1}>{titulo}</h1>>
                 <p className={styles.accordionP}>{descricao}</p> 
                </AccordionItem>
              ))}
            </Accordion>
          </TabPanel>
          <TabPanel>
            <Accordion >
              {voluntario.map(({ titulo, descricao, id }) => (
                <AccordionItem className={styles.accordionItem} key={id} header=<h1 className={styles.accordionh1}>{titulo}</h1>>
                  <p className={styles.accordionP}>{descricao} </p>
                  
                </AccordionItem>
              ))}
            </Accordion>/
          </TabPanel>/
        </Tabs>
      </div>
    </section>

    <section className={styles.formSection}>
      <h1>Não encontrou sua dúvida, fale conosco!</h1>
      <h3>Preencha o formulário e entraremos em contato!</h3>

      <form className={styles.form} onSubmit={sendEmail}>
     
       

           <div className={styles.checkbox}>
            
              

              <input
                  type="radio"
                  name="sou junior" />
                                  
                  <label >Sou Junior</label>     
                

                
                  <input
                  type="radio"
                  name="Voluntário" />
                                  
                  <label >Voluntário</label> 
                

                
                  <input
                  type="radio"
                  name="Mentor/Apoiador" />
                                  
                  <label >Mentor/Apoiador</label>  
                

                

                  <input
                  type="radio"
                  name="Outros" />
                                  
                  <label >Outros</label>
              </div>
              
       

        
        

        <div className={styles.labelInput} >
          
        <Input
          type="text" text="Qual o seu nome?*"
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
          //onChange={(e) => setEmail(e.target.value)}
          //value={email}
          
        />
                
        </div>

        <div className={styles.area} >
        <Textarea 
        name="Fale-nos sobre sua dúvida*" 
        text="Fale-nos sobre sua dúvida*" 
        ///onChange={(e) => setMessage(e.target.value)}
        //value={message}
       
        />
        <button className={styles.button} type="submit" >Enviar</button>
        </div>
      
      <div>
        
      
      

      </div>
       
      
                
      </form>
    </section>

   </>
  );

};
