import React, {useState, useEffect} from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import { getValidationSchema, initialValues } from "./structure";

import styles from "./Junior.module.css";

import { Heading } from "../commons/Heading";
import { Paragraph } from "../commons/Paragraph";
import { Loading } from "../commons/Loading";
import Popup from "../commons/Popup/Popup";

import { api } from "../../services/api";
import AlertMessage from "../commons/AlertMessage/AlertMessage";
import TermsModal from "../TermsModal";

export const Junior = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [popupMessage, setPopupMessage] = useState(null);
  const [loading, setLoading] = useState(false);
  const [areas, setAreas] = useState([]);
  const [subareas, setSubareas] = useState([]);
  const [requiresDate, setRequiresDate] = useState(false);
  const [showAlertMessage, setShowAlertMessage] = useState(false);
  const [formDirty, setFormDirty] = useState(false);
  const [showTermsModal, setShowTermsModal] = useState(false);
  const [termsAccepted, setTermsAccepted] = useState(false);

  useEffect(() => {
    (async () => {
      const res = await api.get("/area")

      setAreas(res.data)
    })()
    
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
    setIsSubmitting(true);
    setLoading(true);

    const { confirmarEmail, ...data } = values;

    const startDate = values.startOption === "imediato" ?
      new Date()
      : values.startOption === "em até 1 mês" ?
        new Date(new Date().setMonth(new Date().getMonth() + 1))
          : new Date(values.startDate)
  
    if (isSubmitting) {
      try {
        const response = await api.post("/juniors",
          {
            name: values.name,
            email: values.email,
            linkedin: values.linkedin,
            turn: values.turn === "turno-disponivel" ? true : false,
            start_option: values.startOption,
            availability: values.availability,
            tools_knowledge: values.toolsKnowledge,
            field_knowledge: values.fieldKnowledge,
            volunteer_motivation: values.volunteerMotivation,
            contact_agreement: values.contactAgreement ? true : false,
            terms_agreement: values.termsAgreement ? true : false,
            start_date: startDate,
            id_area: Number(values.area),
            id_subarea: Number(values.subarea),
          }
        )

        if (response.status !== 201) {
          throw new Error("Não foi possível enviar a requisição");
        }

        setShowAlertMessage(true);
        resetForm();
      } catch (error) {
        openPopup();
        setPopupMessage("Erro inesperado, tente novamente mais tarde");
      } finally {
        setLoading(false);
      }
    }
  };

  const handleAreaChange = (setFieldValue, id) => {
    setFieldValue("area", id);
    const selectedArea = areas.find(option => option.id === Number(id));

    if (selectedArea && selectedArea.subareas) {
      setSubareas(selectedArea.subareas);
      setFieldValue("subarea", "");
    } else {
      setSubareas([]);
      setFieldValue("subarea", "");
    }
  };

  const handleInicioChange = (setFieldValue, value) => {
    setFieldValue("startOption", value);
    if (value === "Em uma data específica") {
      setRequiresDate(true);
    } else {
      setRequiresDate(false);
    }
  };

  const handleTermsAcceptance = () => {
    setTermsAccepted(true);
    setShowTermsModal(false);
};

  
const handleCheckboxChange = (e, setFieldValue) => {
  if (e.target.checked) {
      setShowTermsModal(true);
      setFieldValue('termsAgreement', true); 
  } else {
      setShowTermsModal(false); 
      setTermsAccepted(false); 
      setFieldValue('termsAgreement', false);
  }
};

  return (
    <>
      <div className={styles.bannerContainer} id="junior">
        <img
          src="/assets/sou-junior-cover.svg"
          alt="Uma experiência real de trabalho em uma empresa de tecnologia."
        />
        <div className={styles.bannerText}>
          <Heading level={"h2"}>Quero ser Junior</Heading>
          <Paragraph>
            Para se candidatar como junior, preencha as informações abaixo.
          </Paragraph>
          <Paragraph>
            Nosso time entrará em contato para te conhecer um pouco mais e
            entender de que forma você poderá contribuir com os projetos e
            iniciativas da SouJunior.
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
              {({ isSubmitting, values, setFieldValue, isValid, dirty, errors }) => {
                if (dirty) {
                  setFormDirty(true)
                }
                return (
                  <Form>
                    <div className={styles.fieldDiv}>
                      <label>Nome completo: *</label>
                      <Field
                        type="text"
                        name="name"
                        placeholder="Escrever o nome aqui"
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
                    <div className={styles.fieldDiv}>
                      <label>E-mail: *</label>
                      <Field
                        type="email"
                        name="email"
                        placeholder="email@email.com"
                        className={styles.input}
                      />
                      <ErrorMessage
                        name="email"
                        component="div"
                        className={styles.errorMessage}
                      />
                    </div>
                    <div className={styles.fieldDiv}>
                      <label>Confirmar e-mail: *</label>
                      <Field
                        type="email"
                        name="confirmEmail"
                        placeholder="email@email.com"
                        className={styles.input}
                      />
                      <ErrorMessage
                        name="confirmEmail"
                        component="div"
                        className={styles.errorMessage}
                      />
                    </div>
                    <div className={styles.fieldDiv}>
                      <label>Linkedin: *</label>
                      <Field
                        type="text"
                        name="linkedin"
                        placeholder="https://www.linkedin.com/in/"
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
                        {areas
                          .map((areaOption) => (
                            <option
                              label={areaOption.name}
                              value={areaOption.id}
                              key={areaOption.id}
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
                              value={subarea.id}
                              key={subarea.id}
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
                        Você tem conhecimento/experiência com ferramentas e tecnologias na área em que deseja atuar?*
                      </label>
                      <Field
                        as="textarea"
                        name="toolsKnowledge"
                        minLength={200}
                        maxLength={500}
                        className={styles.textarea}
                        placeholder="Fale um pouco sobre seus conhecimentos com ferramentas nessa área."
                      />
                      <span className={styles.count}>
                        Caracteres restantes: {500 - values.toolsKnowledge.length}
                      </span>
                      {values.toolsKnowledge.length > 500 && (
                        <span className={styles.count} style={{ color: "red" }}>
                          Limite de caracteres excedido.
                        </span>
                      )}
                      <ErrorMessage
                        name="toolsKnowledge"
                        component="div"
                        className={styles.errorMessage}
                      />
                    </div>
                    <div className={styles.fieldDiv}>
                      <label>
                        Você já possui algum conhecimento prévio sobre os conceitos teóricos da área em que deseja atuar?*
                      </label>
                      <Field
                        as="textarea"
                        name="fieldKnowledge"
                        minLength={200}
                        maxLength={500}
                        className={styles.textarea}
                        placeholder="Fale um pouco sobre seus conhecimentos nessa área."
                      />
                      <span className={styles.count}>
                        Caracteres restantes: {500 - values.fieldKnowledge.length}
                      </span>
                      {values.fieldKnowledge.length > 500 && (
                        <span className={styles.count} style={{ color: "red" }}>
                          Limite de caracteres excedido.
                        </span>
                      )}
                      <ErrorMessage
                        name="fieldKnowledge"
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
                            id="terms"
                            checked={termsAccepted}
                            onChange={(e) => handleCheckboxChange(e, setFieldValue)}
                          />
                          Estou de acordo com os{' '} <a><strong> Termos e Condições</strong></a>
                        </label>
                        <ErrorMessage
                          name="termsAgreement"
                          component="div"
                          className={styles.errorMessage}
                        />
                        <TermsModal
                          show={showTermsModal}
                          onAccept={handleTermsAcceptance}
                        />
                      </div>
                    </div>
                    <div className={styles.buttons}>
                    <div className={styles.buttons}>
                      <button 
                      type="submit" 
                      disabled={isSubmitting || !isValid || !dirty || !termsAccepted}>Enviar</button>
                    </div>
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
        {
          showAlertMessage &&
          <AlertMessage
            message={`Inscrição concluída. Você receberá um e-mail de confirmação em breve.`}
            onClose={() => {
              setShowAlertMessage(false)
            }}
          />
        }
      </section>
    </>
  );
};
