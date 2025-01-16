import React, {useState, useEffect} from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import { getValidationSchema, initialValues } from "./structure";

import styles from "./Mentor.module.css";

import { Heading } from "../commons/Heading";
import { Paragraph } from "../commons/Paragraph";
import { Loading } from "../commons/Loading";
import Popup from "../commons/Popup/Popup";

import { api } from "../../services/api";
import AlertMessage from "../commons/AlertMessage/AlertMessage";
import TermsModal from "../TermsModal";

export const Mentor = () => {
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
  const [selectedArea, setSelectedArea] = useState({});

  useEffect(() => {
    setAreas([
      {name: "Agilidade", id: 1},
      {name: "Back-End", id: 2},
      {name: "Front-End", id: 3},
      {name: "Business",  id: 4},
      {name: "Dados", id: 5},
      {name: "Design", id: 6},
      {name: "DevOps", id: 7},
      {name: "Produto", id: 8},
      {name: "QA - Quality Assurance", id: 9},
      {name: "Tech Recruitment", id: 10},
      {name: "Social Media", id: 11}
    ]);

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

  const handleAreaChange = (setFieldValue, id) => {
    setFieldValue("area", id);
    const selectedArea = areas.find(option => option.id === Number(id));
    setSelectedArea(selectedArea);

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
      <div className={styles.bannerContainer} id="mentor">
        <img
          src="/assets/sou-mentor-cover.svg"
          alt="Uma experiência real de trabalho em uma empresa de tecnologia."
        />
        <div className={styles.bannerText}>
          <Heading level={"h2"}>Quero ser Mentor</Heading>
          <Paragraph>
            Para se candidatar como mentor preencha as informações do formulário abaixo e nosso
            time entrará em contato para te conhecer um pouco mais e entender de
            que forma você poderá contribuir com os projetos e iniciativas da SouJunior.
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
              {({ isSubmitting, values, setFieldValue, isValid, dirty, errors, handleBlur, handleChange }) => {
                if (dirty) {
                  setFormDirty(true)
                }
                return (
                  <Form>
                    <div className={styles.fieldDiv}>
                      <label>Nome completo *</label>
                      <Field
                        type="text"
                        name="name"
                        placeholder="Digite seu nome completo"
                        maxLength={150}
                        className={styles.input}
                        onBlur={handleBlur}
                      />
                      <ErrorMessage
                        name="name"
                        component="div"
                        className={styles.errorMessage}
                      />
                    </div>
                    <div className={styles.fieldDiv}>
                      <label>CPF *</label>
                      <Field
                        type="text"
                        name="cpf"
                        maxLength={11}
                        placeholder="Digite seu CPF (somente números)"
                        className={styles.input}
                        onChange = {(e) => {
                          const value = e.target.value.replace(/\D/g, '');
                          handleChange(e);
                          setFieldValue('cpf', value);
                        }}
                      />
                      <ErrorMessage
                        name="cpf"
                        component="div"
                        className={styles.errorMessage}
                      />
                    </div>
                    <div className={styles.fieldDiv}>
                      <label>E-mail *</label>
                      <Field
                        type="email"
                        name="email"
                        placeholder="Digite seu endereço de e-mail"
                        className={styles.input}
                      />
                      <ErrorMessage
                        name="email"
                        component="div"
                        className={styles.errorMessage}
                      />
                    </div>
                    <div className={styles.fieldDiv}>
                      <label>Linkedin *</label>
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
                        A SouJunior realiza reuniões e atividades no período noturno. Você possui disponibilidade para participar das cerimônias e atividades neste turno? *
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
                            value="turno-disponivel"
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
                            value="turno-indisponivel"
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
                        Quanto tempo por semana você poderia se dedicar ao voluntariado na SouJunior?
                        *
                      </label>
                      <label
                        className={styles.radioLabel}
                        htmlFor="5 horas"
                      >
                        <Field
                          className={styles.customRadio}
                          type="radio"
                          name="availability"
                          value="5 horas"
                          id="5 horas"
                          checked
                        />
                        5 horas
                      </label>
                      <label
                        className={styles.radioLabel}
                        htmlFor="5 a 10 horas"
                      >
                        <Field
                          className={styles.customRadio}
                          type="radio"
                          name="availability"
                          value="5 a 10 horas"
                          id="5 a 10 horas"
                        />
                        5 a 10 horas
                      </label>
                      <label
                        className={styles.radioLabel}
                        htmlFor="10 a 15 horas"
                      >
                        <Field
                          className={styles.customRadio}
                          type="radio"
                          name="availability"
                          value="10 a 15 horas"
                          id="10 a 15 horas"
                        />
                        10 a 15 horas
                      </label>
                      <label
                        className={styles.radioLabel}
                        htmlFor="Mais de 15 horas"
                      >
                        <Field
                          className={styles.customRadio}
                          type="radio"
                          name="availability"
                          value="Mais de 15 horas"
                          id="Mais de 15 horas"
                        />
                        Mais de 15 horas
                      </label>
                    </div>
                    <div
                      role="radioGroup"
                      id="radioGroup"
                      name="radioGroup"
                      className={styles.fieldDiv}
                    >
                      <label>
                        Você possui disponibilidade imediata para iniciar no voluntariado? Se não, quando poderia iniciar? *
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
                          />
                          Sim
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
                          Não, somente a partir de: 
                          <Field
                            className={styles.customSelectDate}
                            type="date"
                            name="startDate"
                            placeholder="informe aqui sua disponibilidade"
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
                        Qual das áreas de atuação da SouJunior você possui interesse?*
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
                          {`Em qual área de ${selectedArea.name} você gostaria de atuar? *`}
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
                    <div
                      role="radioGroup"
                      id="radioGroup"
                      name="radioGroup"
                      className={styles.fieldDiv}
                    >
                      <label>
                        Há quanto tempo você já atua no mercado de trabalho na área selecionada? *
                      </label>
                      <label
                        className={styles.radioLabel}
                        htmlFor="1 ano"
                      >
                        <Field
                          className={styles.customRadio}
                          type="radio"
                          name="experienceTime"
                          value="1 ano"
                          id="1 ano"
                          checked
                        />
                        1 ano
                      </label>
                      <label
                        className={styles.radioLabel}
                        htmlFor="1 a 3 anos"
                      >
                        <Field
                          className={styles.customRadio}
                          type="radio"
                          name="experienceTime"
                          value="1 a 3 anos"
                          id="1 a 3 anos"
                        />
                        1 a 3 anos
                      </label>
                      <label
                        className={styles.radioLabel}
                        htmlFor="3 a 6 anos"
                      >
                        <Field
                          className={styles.customRadio}
                          type="radio"
                          name="experienceTime"
                          value="3 a 6 anos"
                          id="3 a 6 anos"
                        />
                        3 a 6 anos
                      </label>
                      <label
                        className={styles.radioLabel}
                        htmlFor="Acima de 6 anos"
                      >
                        <Field
                          className={styles.customRadio}
                          type="radio"
                          name="experienceTime"
                          value="Acima de 6 anos"
                          id="Acima de 6 anos"
                        />
                        Acima de 6 anos
                      </label>
                    </div>       
                    <div className={styles.fieldDiv}>
                      <label>
                        Conte-nos um pouco sobre sua experiência na área selecionada e possíveis
                        papéis de liderança e/ou mentoria que tenha participado.*
                      </label>
                      <Field
                        as="textarea"
                        name="jobExperience"
                        minLength={200}
                        maxLength={500}
                        className={styles.textarea}
                        placeholder="Conte-nos um pouco sobre sua experiência!"
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
                        Conte-nos qual sua motivação para se tornar um Mentor na SouJunior. *
                      </label>
                      <Field
                        as="textarea"
                        name="volunteerMotivation"
                        minLength={200}
                        maxLength={500}
                        className={styles.textarea}
                        placeholder="Qual é a sua motivação para se tornar um Mentor na Sou Junior?"
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
                    <div className={styles.fieldDiv}>
                      <label>
                        Algo mais que você gostaria de nos informar ou compartilhar sobre você ou sua experiência 
                        que possa ser relevante como um Mentor na SouJunior?
                      </label>
                      <Field
                        as="textarea"
                        name="otherExperiences"
                        maxLength={500}
                        className={styles.textarea}
                        placeholder="Compartilhe um pouco mais sobre sua motivação para ser voluntário na SouJunior."
                      />
                      <span className={styles.count}>
                        Caracteres restantes: {500 - values.otherExperiences.length}
                      </span>
                      {values.otherExperiences.length > 500 && (
                        <span className={styles.count} style={{ color: "red" }}>
                          Limite de caracteres excedido.
                        </span>
                      )}
                      <ErrorMessage
                        name="otherExperiences"
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
                          Declaro que as informações fornecidas são verídicas e autorizo a SouJunior a me contatar.
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
                          htmlFor="volunteeringAgreement"
                        >
                          <Field
                            type="checkbox"
                            name="volunteeringAgreement"
                          />
                          Declaro que compreendo e concordo com o fato da SouJunior ser um projeto de voluntariado sem fins lucrativos.
                        </label>
                        <ErrorMessage
                          name="volunteeringAgreement"
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
                          Declaro ter lido e estar de acordo com os{' '} <a><strong> Termos e Condições</strong></a>
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
            message={`Inscrição realizada com sucesso! Vamos analisar seus dados e entraremos em contato.`}
            onClose={() => {
              setShowAlertMessage(false)
            }}
          />
        }
      </section>
    </>
  );
};
