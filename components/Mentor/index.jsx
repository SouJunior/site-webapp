import React, { useEffect, useState } from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";

import styles from "./Mentor.module.css";
import { areasOption, getValidationSchema, initialValues } from "./structure";

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
  const [subareas, setSubareas] = useState([]);
  const [requiresDate, setRequiresDate] = useState(false);
  const [formDirty, setFormDirty] = useState(false);

  useEffect(() => {
    setIsSubmitting(true);

    const confirmExit = (e) => {
      if (formDirty) {
        const message =
          "Tem certeza que deseja sair? As informações não salvas serão perdidas.";
        e.returnValue = message;
        return message;
      }
    };

    window.addEventListener("beforeunload", confirmExit);

    return () => {
      window.removeEventListener("beforeunload", confirmExit);
    };
  }, [formDirty]);

  const imageUrl = "/assets/popup.svg";

  const openPopup = () => setShowPopup(true);
  const closePopup = () => setShowPopup(false);

  const onSubmit = async (values, { resetForm }) => {
    setLoading(true);
    setIsSubmitting(true);

    const { confirmarEmail, ...data } = values;

    if (isSubmitting) {
      openPopup();
      setLoading(true);
      try {
        const response = await api.sendMailAdmin("/mail/collaborator", {
          subject: "Quero ser Mentor",
          data: { ...data },
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

  const handleInicioChange = (setFieldValue, value) => {
    setFieldValue("inicio", value);
    if (value === "Em uma data específica") {
      setRequiresDate(true);
    } else {
      setRequiresDate(false);
    }
  };

  const handleAreaChange = (setFieldValue, area) => {
    setFieldValue("area", area);
    const selectedArea = areasOption.find(option => option.value === area);

    if (selectedArea && selectedArea.sub) {
      setSubareas(selectedArea.sub);
      setFieldValue("subarea", "");
    } else {
      setSubareas([]);
      setFieldValue("subarea", "");
    }
  };

  const handleClear = (resetForm) => {
    resetForm();
  };

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
              initialValues={initialValues}
              validationSchema={getValidationSchema(subareas.length > 0, requiresDate)}
              onSubmit={onSubmit}
            >
              {({ isSubmitting, values, setFieldValue, resetForm, isValid, dirty }) => {
                if (dirty) {
                  setFormDirty(true)
                }
                return (                  
                  <Form>
                    <div>
                      <label>Nome completo: *</label>
                      <Field
                        type="text"
                        name="name"
                        maxLength={100}
                        className={styles.input}
                        onBlur={() => setFormDirty(true)}
                      />
                      <ErrorMessage
                        name="name"
                        component="div"
                        className={styles.errorMessage}
                      />
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
                        name="confirmEmail"
                        className={styles.input}
                      />
                      <ErrorMessage
                        name="confirmEmail"
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
                    <div
                      id="radioGroup"
                      role="radioGroup"
                      name="radioGroup"
                      className={styles.fieldDiv}
                    >
                      <label>
                        A SouJunior realiza reuniões e atividades no período noturno. Você tem disponibilidade para atuar nesse turno? *
                      </label>
                      <div
                        className={styles.turnoRadioGroup}
                      >
                        <label
                          className={styles.turnoRadiolabel}
                          htmlFor="turno-disponivel"
                        >
                          <Field
                            id="turno-disponivel"
                            className={styles.customRadio}
                            type="radio"
                            name="turn"
                            value="disponivel"
                            checked
                          />
                          Sim
                        </label>
                        <label
                          className={styles.turnoRadiolabel}
                          htmlFor="turno-indisponivel"
                        >
                          <Field
                            id="turno-indisponivel"
                            className={styles.customRadio}
                            type="radio"
                            name="turn"
                            value="indisponivel"
                          />
                          Não
                        </label>
                      </div>
                    </div>
                    <div
                      role="radioGroup"
                      id="radioGroup"
                      name="radioGroup"
                      className={styles.fieldDiv}
                    >
                      <label>
                        Quanto tempo você tem disponível para atual na Sou Junior?
                        *
                      </label>
                      <label
                        className={styles.radioLabel}
                        htmlFor="Até 5 horas semanais"
                      >
                        <Field
                          className={styles.customRadio}
                          type="radio"
                          name="availability"
                          value="Até 5 horas semanais"
                          id="Até 5 horas semanais"
                          checked
                        />
                        Até 5 horas semanais
                      </label>
                      <label
                        className={styles.radioLabel}
                        htmlFor="5 a 10 horas semanais"
                      >
                        <Field
                          className={styles.customRadio}
                          type="radio"
                          name="availability"
                          value="5 a 10 horas semanais"
                          id="5 a 10 horas semanais"
                        />
                        5 a 10 horas semanais
                      </label>
                      <label
                        className={styles.radioLabel}
                        htmlFor="10 a 15 horas semanais"
                      >
                        <Field
                          className={styles.customRadio}
                          type="radio"
                          name="availability"
                          value="10 a 15 horas semanais"
                          id="10 a 15 horas semanais"
                        />
                        10 a 15 horas semanais
                      </label>
                      <label
                        className={styles.radioLabel}
                        htmlFor="Mais de 15 horas semanais"
                      >
                        <Field
                          className={styles.customRadio}
                          type="radio"
                          name="availability"
                          value="Mais de 15 horas semanais"
                          id="Mais de 15 horas semanais"
                        />
                        Mais de 15 horas semanais
                      </label>
                    </div>
                    <div
                      role="radioGroup"
                      id="radioGroup"
                      name="radioGroup"
                      className={styles.fieldDiv}
                    >
                      <label>
                        Qual a sua disponibilidade para início?*
                      </label>
                      <div className={styles.turnoRadioGroup}>
                        <label
                          className={styles.radioLabel}
                          htmlFor="Imediato"
                        >
                          <Field
                            className={styles.customRadio}
                            type="radio"
                            name="startOption"
                            onChange={() => handleInicioChange(setFieldValue, "Imediato")}
                            value="Imediato"
                            id="Imediato"
                            checked
                          />
                          Imediato
                        </label>
                        <label
                          className={styles.radioLabel}
                          htmlFor="Em até 1 mês"
                        >
                          <Field
                            className={styles.customRadio}
                            type="radio"
                            name="startOption"
                            onChange={() => handleInicioChange(setFieldValue, "Em até 1 mês")}
                            value="Em até 1 mês"
                            id="Em até 1 mês"
                          />
                          Em até 1 mês
                        </label>
                        <label
                          className={styles.radioLabel}
                          htmlFor="Em uma data específica"
                        >
                          <Field
                            className={styles.customRadio}
                            type="radio"
                            name="startOption"
                            onChange={() => handleInicioChange(setFieldValue, "Em uma data específica")}
                            value="Em uma data específica"
                            id="Em uma data específica"
                          />
                          Em uma data específica:
                          <Field
                            className={styles.customSelectDate}
                            type="date"
                            name="startDate"
                            id="startDate"
                            disabled={values.startOption !== "Em uma data específica"}
                          />
                          <ErrorMessage
                            name="startDate"
                            component="div"
                            className={styles.errorMessage}
                          />
                        </label>
                      </div>
                    </div>
                    <div className={styles.fieldDiv}>
                      <label>
                        Qual das opções abaixo seria sua área de interesse?*
                      </label>
                      <Field
                        as="select"
                        name="area"
                        className={styles.select}
                        onChange={(e) => handleAreaChange(setFieldValue, e.target.value)}
                      >
                        <option
                          label="Selecione a área de atuação"
                          value=""
                          disabled
                        >
                          Selecione a área de atuação
                        </option>
                        {areasOption
                          .map((areaOption) => (
                            <option
                              label={areaOption.name}
                              value={areaOption.value}
                              key={areaOption.value}
                            >
                              {areaOption.name}
                            </option>
                          ))}
                      </Field>
                      <ErrorMessage
                        name="area"
                        component="div"
                        className={styles.errorMessage}
                      />
                    </div>
                    {subareas.length > 0 && (
                      <div className={styles.fieldDiv}>
                        <label>
                          Qual das opções abaixo seria sua subárea de interesse?*
                        </label>
                        <Field as="select" name="subarea" className={styles.select}>
                          <option
                            label="Selecione a subárea de atuação"
                            value=""
                            disabled
                          >
                            Selecione a subárea de atuação
                          </option>
                          {subareas.map((subarea) => (
                            <option
                              label={subarea.name}
                              value={subarea.value}
                              key={subarea.value}
                            >
                              {subarea.name}
                            </option>
                          ))}
                        </Field>
                        <ErrorMessage
                          name="subarea"
                          component="div"
                          className={styles.errorMessage}
                        />
                      </div>
                    )}
                    <div className={styles.fieldDiv}>
                      <label>
                        Compartilhe um pouco mais sobre sua experiência no mercado.*
                      </label>
                      <Field
                        as="textarea"
                        name="jobExperience"
                        minLength={200}
                        maxLength={500}
                        className={styles.textarea}
                        placeholder="Inclua qualquer outra informação que julgue relevante para sua inscrição"
                      />
                      <span className={styles.count}>
                        Caracteres restantes: {500 - values.jobExperience.length}
                      </span>
                      {values.jobExperience.length > 500 && (
                        <span className={styles.count} style={{ color: "red" }}>
                          Limite de caracteres excedido.
                        </span>
                      )}
                      <ErrorMessage
                        name="jobExperience"
                        component="div"
                        className={styles.errorMessage}
                      />
                    </div>
                    <div className={styles.fieldDiv}>
                      <label>
                        Você já possui experiência anterior em mentoria?*
                      </label>
                      <Field
                        as="textarea"
                        name="mentorExperience"
                        minLength={200}
                        maxLength={500}
                        className={styles.textarea}
                        placeholder="Descreva brevemente sua experiência, se aplicável"
                      />
                      <span className={styles.count}>
                        Caracteres restantes: {500 - values.mentorExperience.length}
                      </span>
                      {values.mentorExperience.length > 500 && (
                        <span className={styles.count} style={{ color: "red" }}>
                          Limite de caracteres excedido.
                        </span>
                      )}
                      <ErrorMessage
                        name="mentorExperience"
                        component="div"
                        className={styles.errorMessage}
                      />
                    </div>
                    <div className={styles.fieldDiv}>
                      <label>
                        Antes de finalizarmos sua candidatura, há algum aspecto importante sobre sua motivação para se tornar voluntário na SouJunior?*
                      </label>
                      <Field
                        as="textarea"
                        name="volunteerMotivation"
                        minLength={200}
                        maxLength={500}
                        className={styles.textarea}
                        placeholder="Compartilhe um pouco mais sobre sua motivação para ser voluntário na SouJunior."
                      />
                      <span className={styles.count}>
                        Caracteres restantes: {500 - values.volunteerMotivation.length}
                      </span>
                      {values.volunteerMotivation.length > 500 && (
                        <span className={styles.count} style={{ color: "red" }}>
                          Limite de caracteres excedido.
                        </span>
                      )}
                      <ErrorMessage
                        name="volunteerMotivation"
                        component="div"
                        className={styles.errorMessage}
                      />
                    </div>
                    <div className={styles.fieldCheckbox}>
                      <div className={styles.fieldDiv}>
                        <label
                          className={styles.radioLabel}
                          htmlFor="contactAgreement"
                        >
                          <Field
                            type="checkbox"
                            name="contactAgreement"
                          />
                          Declaro as informações fornecidas corretas e autorizo a SouJunior a me contatar
                        </label>
                        <ErrorMessage
                          name="contactAgreement"
                          component="div"
                          className={styles.errorMessage}
                        />
                      </div>
                      <div className={styles.fieldDiv}>
                        <label
                          className={styles.radioLabel}
                          htmlFor="termsAgreement"
                        >
                          <Field
                            type="checkbox"
                            name="termsAgreement"
                          />
                          Estou de acordo com os Termos e Condições
                        </label>
                        <ErrorMessage
                          name="termsAgreement"
                          component="div"
                          className={styles.errorMessage}
                        />
                      </div>
                    </div>
                    <div className={styles.buttons}>
                      <button type="submit" disabled={isSubmitting || !isValid || !dirty}>Enviar</button>
                    </div>
                  </Form>
                )
              }}
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
