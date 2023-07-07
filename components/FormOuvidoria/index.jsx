import { useEffect, useState } from "react";
import styles from "./FormOuvidoria.module.css";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Heading } from "../commons/Heading";
import { Paragraph } from "../commons/Paragraph";
import Popup from "../commons/Popup/Popup";
import { Loading } from "../commons/Loading";
import { api } from "../../services/api";

const OuvidoriaForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [popupMessage, setPopupMessage] = useState(null);
  const [loading, setLoading] = useState(false);

  const imageUrl = "/assets/popup.svg";

  const openPopup = () => setShowPopup(true);
  const closePopup = () => setShowPopup(false);

  const onSubmit = async (values, { resetForm }) => {
    console.log(values);
    setLoading(true);
    setIsSubmitting(true);

    if (isSubmitting) {
      console.log(isSubmitting);
      openPopup();
      setLoading(true);
      try {
        const response = await api.sendMailAdmin("/mail/collaborator", {
          subject: "Ouvidoria",
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

    // resetForm();

    // setIsSubmitting(true);
  };

  //Função para o botão limpar

  const handleClear = (resetForm) => {
    resetForm();
  };

  const handleCancel = () => {
    const confirmed = window.confirm("Você deseja mesmo cancelar?");

    // if (confirmed) {
    //   setIsSubmitting(true);
    //   // Redirecionar para a "home"
    //   // window.location.href = "/";
    // }
  };

  const validationSchema = Yup.object().shape({
    nome: Yup.string().required("O campo Nome completo é obrigatório."),
    email: Yup.string()
      .email("E-mail inválido.")
      .required("O campo E-mail é obrigatório."),
    assunto: Yup.string()
      .oneOf(["Sugestão", "Reclamação", "Elogio"], "")
      .required("*Escolha um opção por favor."),
    mensagem: Yup.string().required("O campo Mensagem é obrigatório."),
  });

  return (
    <>
      <section className={styles.bannerContainer}>
        <div className={styles.container}>
          <div className={styles.content}>
            <div className={styles.left}>
              <Heading level={"h1"}>Ouvidoria!</Heading>

              <Paragraph>Seja bem-vindo(a) à nossa Ouvidoria!</Paragraph>

              <Paragraph>
                Estamos sempre buscando maneiras de melhorar nossos produtos e
                serviços, e sua opinião é extremamente importante. <br />
                Por isso, criamos um canal exclusivo para que você possa
                registrar suas reclamações e sugestões.
              </Paragraph>
            </div>

            <div className={styles.rigth}>
              <img
                src="/assets/ouvidoria.png"
                alt="imagem de uma atendente ao telefone"
              />
            </div>
          </div>
        </div>
      </section>
      <section className={styles.formSection}>
        <div className={styles.container}>
          <Heading level={"h2"}>Conte sua opinião pra gente!</Heading>

          <div className={styles.form}>
            <Formik
              initialValues={{
                nome: "",
                email: "",
                assunto: "",
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
                    <label>E-mail: *</label>
                    <Field type="email" name="email" className={styles.input} />
                    <ErrorMessage
                      name="email"
                      component="div"
                      className={styles.errorMessage}
                    />
                  </div>
                  <div className={styles.options}>
                    <Field as="select" name="assunto" className={styles.select}>
                      <option label="Selecione o assunto" value="" disabled>
                        Selecione o assunto
                      </option>
                      <option label="Sugestão" value="Sugestão">
                        Sugestão
                      </option>
                      <option label="Reclamação" value="Reclamação">
                        Reclamação
                      </option>
                      <option label="Elogio" value="Elogio">
                        Elogio
                      </option>
                    </Field>
                    <ErrorMessage
                      name="assunto"
                      component="div"
                      className={styles.errorMessage}
                    />
                  </div>
                  <div>
                    <label>Mensagem: *</label>
                    <Field
                      as="textarea"
                      name="mensagem"
                      maxLength={3200}
                      className={styles.textarea}
                    />
                    <span className={styles.count}>
                      Caracteres restantes: {3200 - values.mensagem.length}
                    </span>
                    {values.mensagem.length > 3200 && (
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
                    <button
                      type="button"
                      onClick={() => handleClear(resetForm)}
                    >
                      Limpar
                    </button>
                    <button type="submit">Enviar</button>
                  </div>
                </Form>
              )}
            </Formik>
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
        </div>
      </section>
    </>
  );
};

export default OuvidoriaForm;
