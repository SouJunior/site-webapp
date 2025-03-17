import React, { useState, useEffect } from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import { getValidationSchema, initialValues } from "./structure";

import styles from "./Apoiador.module.css";

import { Heading } from "../commons/Heading";
import { Paragraph } from "../commons/Paragraph";
import { Loading } from "../commons/Loading";
import Popup from "../commons/Popup/Popup";

import { api } from "../../services/api";
import AlertMessage from "../commons/AlertMessage/AlertMessage";
import DataConfirmationModal from "../DataConfirmationModal";

export const Apoiador = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [popupMessage, setPopupMessage] = useState(null);
  const [loading, setLoading] = useState(false);
  const [showAlertMessage, setShowAlertMessage] = useState(false);
  const [formDirty, setFormDirty] = useState(false);
  const [showDataModal, setShowDataModal] = useState(false);
  const [dataAccepted, setDataAccepted] = useState(false);

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
    
    {!dataAccepted && setShowDataModal(true)}
        
        setIsSubmitting(true);
        setLoading(true);
    
        if (isSubmitting && dataAccepted) {
          try {
            const response = await api.post(
              "/supporter", 
              {
                expertiseAreas: values.areasOfExperience,
                institution: values.companyName,
                contactAgreement: values.contactAgreement ? true : false,
                describeLinks:values.describeLinks,
                email: values.email,
                name: values.name,
                opportunitiesDescription: values.opportunityAvailable,
                otherSupport: values.otherSupport,
                personType: values.pessoa,
                phone:values.phone,
                suggestion: values.suggestion,
                supportOptions: values.supportOptions,
                volunteerMotivation: values.volunteerMotivation,
                volunteeringAgreement: values.volunteeringAgreement ? true : false,
                hasWhatsApp: values.whatsapp === "sim" ? true : false,
              },
              {headers: 
                {
                  'x-api-key':process.env.NEXT_PUBLIC_X_API_KEY,
                }
              }
            );
    
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

  const handleDataAcceptance = () => {
    setDataAccepted(true);
    setShowDataModal(false);
  };

  const handleDataNotAccept = () => {
    setDataAccepted(false);
    setShowDataModal(false);
  }

  const handleClearInput = (setFieldValue, nameInput) => {
    setFieldValue(nameInput, "");
  }

  return (
    <>
      <div className={styles.bannerContainer} id="apoiador">
        <img
          src="/assets/sou-apoiador-cover.svg"
          alt="Uma experiência real de trabalho em uma empresa de tecnologia."
        />
        <div className={styles.bannerText}>
          <Heading level={"h2"}>Quero ser Apoiador</Heading>
          <Paragraph>
            Para se tornar apoiador, preencha as informações do formulário abaixo e nosso time
            entrará em contato para te conhecer um pouco mais e entender como você gostaria de apoiar a SouJunior.
          </Paragraph>
        </div>
      </div>
      <section className={styles.formSection}>
        <div className={styles.container}>
          <div className={styles.form}>
            <Formik
              initialValues={initialValues}
              validationSchema={getValidationSchema()}
              onSubmit={onSubmit}
            >
              {({ isSubmitting, values, setFieldValue, isValid, dirty, handleBlur, handleChange }) => {
                if (dirty) {
                  setFormDirty(true)
                }
                return (
                  <Form>
                    <div
                      id="pessoaRadioGroup"
                      role="radioGroup"
                      name="radioGroup"
                      className={styles.fieldDiv}
                    >
                      <div
                        className={styles.pessoaRadioGroup}
                      >
                        <label
                          className={styles.turnoRadiolabel}
                          htmlFor="pessoa-juridica"
                        >
                          <Field
                            id="pessoa-juridica"
                            className={styles.customRadio}
                            type="radio"
                            name="pessoa"
                            value="pessoa-juridica"
                            onChange={(e) => {
                              handleClearInput(setFieldValue, "companyName");
                              handleChange(e);
                            }}
                          />
                          Pessoa Jurídica
                        </label>
                        <label
                          className={styles.turnoRadiolabel}
                          htmlFor="pessoa-fisica"
                        >
                          <Field
                            id="pessoa-fisica"
                            className={styles.customRadio}
                            type="radio"
                            name="pessoa"
                            value="pessoa-fisica"
                            onChange={(e) => {
                              handleClearInput(setFieldValue, "name");
                              handleChange(e);
                            }}
                          />
                          Pessoa Física
                        </label>
                      </div>
                    </div>
                    {values.pessoa == "pessoa-fisica" &&
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
                    }
                    {values.pessoa == "pessoa-juridica" &&
                        <div className={styles.fieldDiv}>
                          <label>Instituição/Afiliada *</label>
                          <Field
                            type="text"
                            name="companyName"
                            placeholder="Digite o nome da instituição ou empresa que você pertence"
                            maxLength={150}
                            className={styles.input}
                            onBlur={handleBlur}
                          />
                          <ErrorMessage
                            name="companyName"
                            component="div"
                            className={styles.errorMessage}
                          />
                        </div>
                    }
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
                      <label>Telefone *</label>
                      <Field
                        type="text"
                        name="phone"
                        placeholder="Digite seu número de telefone para contato"
                        className={styles.input}
                        maxLength={15}
                        onChange = {(e) => {
                          let value = e.target.value.replace(/\D/g, '');
                          value = value.replace(/(\d{2})(\d)/,"($1) $2")
                          value = value.replace(/(\d)(\d{4})$/,"$1-$2")
                          handleChange(e);
                          setFieldValue('phone', value);
                        }}
                      />
                      <ErrorMessage
                        name="phone"
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
                        Este número possui WhatsApp? *
                      </label>
                      <div
                        className={styles.turnoRadioGroup}
                      >
                        <label
                          className={styles.turnoRadiolabel}
                          htmlFor="is-whatsapp"
                        >
                          <Field
                            id="is-whatsapp"
                            className={styles.customRadio}
                            type="radio"
                            name="whatsapp"
                            value="sim"
                          />
                          Sim
                        </label>
                        <label
                          className={styles.turnoRadiolabel}
                          htmlFor="isnot-whatsapp"
                        >
                          <Field
                            id="isnot-whatsapp"
                            className={styles.customRadio}
                            type="radio"
                            name="whatsapp"
                            value="não"
                          />
                          Não
                        </label>
                      </div>
                    </div>
                    <div
                      role="radioGroup"
                      id="supportOptionsRadioGroup"
                      name="supportOptionsRadioGroup"
                      className={styles.fieldDiv}
                    >
                      <label>
                        Como você gostaria de apoiar o projeto SouJunior?
                        *
                      </label>
                      <label
                        className={styles.radioLabel}
                        htmlFor="financiador"
                      >
                        <Field
                          className={styles.customRadio}
                          type="radio"
                          name="supportOptions"
                          value="financiador"
                          id="financiador"
                        />
                        Financiador da iniciativa
                      </label>
                      <label
                        className={styles.radioLabel}
                        htmlFor="divulgador"
                      >
                        <Field
                          className={styles.customRadio}
                          type="radio"
                          name="supportOptions"
                          value="divulgador"
                          id="divulgador"
                          onChange={(e) => {
                            handleClearInput(setFieldValue, "describeLinks");
                            handleChange(e);
                          }}
                        />
                        Divulgador (Youtube, podcast, blog, etc)
                      </label>
                      <label
                        className={styles.radioLabel}
                        htmlFor="palestrador"
                      >
                        <Field
                          className={styles.customRadio}
                          type="radio"
                          name="supportOptions"
                          value="palestrador"
                          id="palestrador"
                          onChange={(e) => {
                            handleClearInput(setFieldValue, "areasOfExperience");
                            handleChange(e);
                          }}
                        />
                        Especialista disposto a palestar
                      </label>
                      <label
                        className={styles.radioLabel}
                        htmlFor="recrutador"
                      >
                        <Field
                          className={styles.customRadio}
                          type="radio"
                          name="supportOptions"
                          value="recrutador"
                          id="recrutador"
                          onChange={(e) => {
                            handleClearInput(setFieldValue, "opportunityAvailable");
                            handleChange(e);
                          }}
                        />
                        Recrutador
                      </label>
                      <label
                        className={styles.radioLabel}
                        htmlFor="contratante"
                      >
                        <Field
                          className={styles.customRadio}
                          type="radio"
                          name="supportOptions"
                          value="contratante"
                          id="contratante"
                          onChange={(e) => {
                            handleClearInput(setFieldValue, "opportunityAvailable");
                            handleChange(e);
                          }}
                        />
                        Empresa interessada em contratar
                      </label>
                      <label
                        className={styles.radioLabel}
                        htmlFor="outros"
                      >
                        <Field
                          className={styles.customRadio}
                          type="radio"
                          name="supportOptions"
                          value="outros"
                          id="outros"
                          onChange={(e) => {
                            handleClearInput(setFieldValue, "otherSupport");
                            handleChange(e);
                          }}
                        />
                        Outras formas de apoio
                      </label>
                    </div>
                    {values.supportOptions == "divulgador" && 
                      <div className={styles.fieldDiv}>
                        <label>
                          Informe os links para canal/plataforma onde você pode divulgar o projeto *
                        </label>
                        <Field
                          as="textarea"
                          name="describeLinks"
                          minLength={10}
                          maxLength={500}
                          className={styles.textarea}
                        />
                        <span className={styles.count}>
                          Caracteres restantes: {500 - values.describeLinks.length}
                        </span>
                        {values.describeLinks.length > 500 && (
                          <span className={styles.count} style={{ color: "red" }}>
                            Limite de caracteres excedido.
                          </span>
                        )}
                        <ErrorMessage
                          name="describeLinks"
                          component="div"
                          className={styles.errorMessage}
                        />
                      </div>
                    }
                    {values.supportOptions == "palestrador" && 
                      <div className={styles.fieldDiv}>
                        <label>
                          Informe quais áreas de expertise você pode palestrar *
                        </label>
                        <Field
                          as="textarea"
                          name="areasOfExperience"
                          minLength={10}
                          maxLength={500}
                          className={styles.textarea}
                        />
                        <span className={styles.count}>
                          Caracteres restantes: {500 - values.areasOfExperience.length}
                        </span>
                        {values.areasOfExperience.length > 500 && (
                          <span className={styles.count} style={{ color: "red" }}>
                            Limite de caracteres excedido.
                          </span>
                        )}
                        <ErrorMessage
                          name="areasOfExperience"
                          component="div"
                          className={styles.errorMessage}
                        />
                      </div>
                    }
                    {(values.supportOptions == "recrutador" || values.supportOptions == "contratante") && 
                      <div className={styles.fieldDiv}>
                        <label>
                          Descreva sobre as oportunidades disponíveis, programas de estágio, etc. *
                        </label>
                        <Field
                          as="textarea"
                          name="opportunityAvailable"
                          minLength={10}
                          maxLength={500}
                          className={styles.textarea}
                        />
                        <span className={styles.count}>
                          Caracteres restantes: {500 - values.opportunityAvailable.length}
                        </span>
                        {values.opportunityAvailable.length > 500 && (
                          <span className={styles.count} style={{ color: "red" }}>
                            Limite de caracteres excedido.
                          </span>
                        )}
                        <ErrorMessage
                          name="opportunityAvailable"
                          component="div"
                          className={styles.errorMessage}
                        />
                      </div>
                    }
                    {values.supportOptions == "outros" && 
                      <div className={styles.fieldDiv}>
                        <label>
                          Informe quais outras formas você gostaria de apoiar a SouJunior *
                        </label>
                        <Field
                          as="textarea"
                          name="otherSupport"
                          minLength={10}
                          maxLength={500}
                          className={styles.textarea}
                        />
                        <span className={styles.count}>
                          Caracteres restantes: {500 - values.otherSupport.length}
                        </span>
                        {values.otherSupport.length > 500 && (
                          <span className={styles.count} style={{ color: "red" }}>
                            Limite de caracteres excedido.
                          </span>
                        )}
                        <ErrorMessage
                          name="otherSupport"
                          component="div"
                          className={styles.errorMessage}
                        />
                      </div>
                    }
                    <div className={styles.fieldDiv}>
                      <label>
                        Você possui alguma sugestão ou ideia especifica para contribuir com a SouJunior? *
                      </label>
                      <Field
                        as="textarea"
                        name="suggestion"
                        minLength={200}
                        maxLength={500}
                        className={styles.textarea}
                        placeholder="Especifique aqui suas ideias."
                      />
                      <span className={styles.count}>
                        Caracteres restantes: {500 - values.suggestion.length}
                      </span>
                      {values.suggestion.length > 500 && (
                        <span className={styles.count} style={{ color: "red" }}>
                          Limite de caracteres excedido.
                        </span>
                      )}
                      <ErrorMessage
                        name="suggestion"
                        component="div"
                        className={styles.errorMessage}
                      />
                    </div>
                    <div className={styles.fieldDiv}>
                      <label>
                      Qual sua motivação principal para se juntar a SouJunior? *
                      </label>
                      <Field
                        as="textarea"
                        name="volunteerMotivation"
                        minLength={200}
                        maxLength={500}
                        className={styles.textarea}
                        placeholder="Conte-nos um pouco mais sobre o porquê deseja apoiar a SouJunior."
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
                    </div>
                    <DataConfirmationModal
                      show={showDataModal}
                      onAccept={handleDataAcceptance}
                      notAccept={handleDataNotAccept}
                      dataForm={[values]}
                    />
                    <div className={styles.buttons}>
                      <button
                        type="submit"
                        disabled={isSubmitting || !isValid || !dirty}>Enviar</button>
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
