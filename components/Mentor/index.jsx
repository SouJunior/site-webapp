import React, { useState } from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";

import styles from "./Mentor.module.css";

import { Heading } from "../commons/Heading";
import { Paragraph } from "../commons/Paragraph";
import { Loading } from "../commons/Loading";
import Popup from "../commons/Popup/Popup";

import { api } from "../../services/api";

export const Mentor = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [popupMessage, setPopupMessage] = useState(null);
  const [loading, setLoading] = useState(false);

  const imageUrl = "/assets/popup.svg";

  const areasOption = [
    "Back End",
    "Business",
    "Dados",
    "Devops",
    "Front End",
    "Mobile",
    "Produtos",
    "Q&A",
    "Scrum Master",
    "Tech Recruiting",
    "UX",
  ];

  const openPopup = () => setShowPopup(true);
  const closePopup = () => setShowPopup(false);

  const onSubmit = async (values, { resetForm }) => {
    setLoading(true);
    setIsSubmitting(true);

    if (isSubmitting) {
      openPopup();
      setLoading(true);
      try {
        const response = await api.sendMailAdmin("/mail/collaborator", {
          subject: "Quero ser Mentor",
          ...values,
        });

        if (response.status !== 200) {
          throw new Error("Não foi possível enviar a requisição");
        }
        setPopupMessage("Obrigado por ajudar a SouJunior a crescer!");

        resetForm();
      } catch (error) {
        openPopup();
        setPopupMessage("Erro inesperado, tente novamente mais tarde");
      }
      setLoading(false);
    }
  };

  const handleClear = (resetForm) => {
    resetForm();
  };

  const validationSchema = Yup.object().shape({
    nome: Yup.string().required("O campo Nome completo é obrigatório."),
    email: Yup.string()
      .email("E-mail inválido.")
      .required("O campo E-mail é obrigatório."),
    confirmarEmail: Yup.string()
      .oneOf([Yup.ref("email")], "O email deve ser o mesmo")
      .required("O campo Confirmar e-mail é obrigatório."),
    linkedin: Yup.string()
      .url("Link inválido.")
      .required("O campo Linkedin é obrigatório."),
    areas: Yup.string()
      .oneOf([...areasOption], "")
      .required("* Escolha um opção por favor."),
    mensagem: Yup.string().required("O campo Mensagem é obrigatório."),
  });

  return (
    <>
      <div className={styles.bannerContainer} id="mentor">
        <img
          src="/assets/sou-mentor-cover.svg"
          alt="Uma experiência real de trabalho em uma empresa de tecnologia."
        />
        <div className={styles.bannerText}>
          <Heading level={"h2"}>Quero ser Mentor</Heading>
          <Paragraph>
            Para se candidatar como mentor preencha as informações abaixo. Nosso
            time entrará em contato para te conhecer um pouco mais e entender de
            que forma você poderá contribuir com os projetos e iniciativas da
            SouJunior.
          </Paragraph>
        </div>
      </div>

      <section className={styles.formSection}>
        <div className={styles.container}>
          <div className={styles.form}>
            <Formik
              initialValues={{
                nome: "",
                email: "",
                areas: "",
                linkedin: "",
                mensagem: "",
              }}
              validationSchema={validationSchema}
              onSubmit={onSubmit}
            >
              {({ isSubmitting, values, resetForm }) => (
                <Form>
                  <div>
                    <label>Nome completo: *</label>
                    <Field
                      type="text"
                      name="nome"
                      maxLength={100}
                      className={styles.input}
                    />
                    <ErrorMessage
                      name="nome"
                      component="div"
                      className={styles.errorMessage}
                    />
                  </div>
                  <div>
                    <label>Em que área gostaria de atuar? *</label>
                    <Field as="select" name="areas" className={styles.select}>
                      <option
                        label="Selecione a área de atuação"
                        value=""
                        disabled
                      >
                        Selecione a área de atuação
                      </option>
                      {areasOption.map((areaOption) => (
                        <option
                          label={areaOption}
                          value={areaOption}
                          key={areaOption}
                        >
                          {areaOption}
                        </option>
                      ))}
                    </Field>
                  </div>
                  <div>
                    <label>E-mail: *</label>
                    <Field type="email" name="email" className={styles.input} />
                    <ErrorMessage
                      name="email"
                      component="div"
                      className={styles.errorMessage}
                    />
                  </div>
                  <div>
                    <label>Confirmar e-mail: *</label>
                    <Field
                      type="email"
                      name="confirmarEmail"
                      className={styles.input}
                    />
                    <ErrorMessage
                      name="confirmarEmail"
                      component="div"
                      className={styles.errorMessage}
                    />
                  </div>
                  <div>
                    <label>Linkedin: *</label>
                    <Field
                      type="text"
                      name="linkedin"
                      className={styles.input}
                    />
                    <ErrorMessage
                      name="linkedin"
                      component="div"
                      className={styles.errorMessage}
                    />
                  </div>

                  <div>
                    <label>
                      Nos conte um pouco sobre você e por que gostaria de fazer
                      parte da SouJunior: *
                    </label>
                    <Field
                      as="textarea"
                      name="mensagem"
                      maxLength={500}
                      className={styles.textarea}
                      placeholder="Escreva sobre você aqui."
                    />
                    <span className={styles.count}>
                      Caracteres restantes: {500 - values.mensagem.length}
                    </span>
                    {values.mensagem.length > 500 && (
                      <span className={styles.count} style={{ color: "red" }}>
                        Limite de caracteres excedido.
                      </span>
                    )}
                    <ErrorMessage
                      name="mensagem"
                      component="div"
                      className={styles.errorMessage}
                    />
                  </div>
                  <div className={styles.buttons}>
                    <button type="submit">Enviar</button>
                  </div>
                </Form>
              )}
            </Formik>
          </div>
          {showPopup && (
            <Popup onClose={closePopup} imageUrl={imageUrl}>
              {loading && <Loading />}
              {!loading && popupMessage !== null && (
                <>
                  <Paragraph>{popupMessage}</Paragraph>
                </>
              )}
            </Popup>
          )}
        </div>
      </section>
    </>
  );
};
