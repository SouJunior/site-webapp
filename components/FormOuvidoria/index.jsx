import { useEffect, useState } from "react";
import styles from "./FormOuvidoria.module.css";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";

const OuvidoriaForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    const handleUnload = (event) => {
      if (!isSubmitting) {
        event.preventDefault();
        event.returnValue = "";
      }
    };

    window.onbeforeunload = handleUnload;

    return () => {
      window.onbeforeunload = null;
    };
  }, [isSubmitting]);

  // const handleSubmit = (values, { setSubmitting, resetForm }) => {
  //   setTimeout(() => {
  //     alert('Obrigado por ajudar a SouJunior a crescer');
  //     resetForm();
  //     setSubmitting(false);
  //     setIsSubmitting(true);
  //   }, 500);
  // };

  const handleSubmit = (values, { setSubmitting, resetForm }) => {
    setTimeout(() => {
      const popup = document.createElement("div");
      popup.textContent = "Obrigado por ajudar a SouJunior a crescer";

      const closeButton = document.createElement("button");
      closeButton.textContent = "Fechar";
      closeButton.addEventListener("click", () => {
        document.body.removeChild(popup);
        // window.location.href = '/Home'; // Redireciona para a página inicial
      });

      popup.appendChild(closeButton);
      popup.style.position = "fixed";
      popup.style.top = "50%";
      popup.style.left = "50%";
      popup.style.transform = "translate(-50%, -50%)";
      popup.style.backgroundColor = "#ffffff";
      popup.style.padding = "20px";
      popup.style.color = "#000000";
      popup.style.boxShadow = "0 2px 5px rgba(0, 0, 0, 0.3)";
      popup.style.zIndex = "9999";

      document.body.appendChild(popup);

      resetForm();
      setSubmitting(false);
      setIsSubmitting(true);
    }, 500);
  };

  const handleCancel = () => {
    const confirmed = window.confirm("Você deseja mesmo cancelar?");

    if (confirmed) {
      setIsSubmitting(true);
      // Redirecionar para a "home"
      window.location.href = "/";
    }
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
              <h1>Ouvidoria!</h1>

              <p>Seja bem-vindo(a) à nossa Ouvidoria!</p>

              <p>
                Estamos sempre buscando maneiras de melhorar nossos produtos e
                serviços, e sua opinião é extremamente importante. <br />
                Por isso, criamos um canal exclusivo para que você possa
                registrar suas reclamações e sugestões.
              </p>
            </div>

            <div className={styles.rigth}>
              {/* <div className={styles.imageContainer}> */}
              <img
                src="/assets/ouvidoria.png"
                alt="imagem de uma atendente ao telefone"
              />
              {/* </div> */}
            </div>
          </div>
        </div>
      </section>
      <section className={styles.formSection}>
        <div className={styles.container}>
          <h2>Conte sua opinião pra gente!</h2>
          <div className={styles.form}>
            <Formik
              initialValues={{
                nome: "",
                email: "",
                assunto: "",
                mensagem: "",
              }}
              validationSchema={validationSchema}
              onSubmit={handleSubmit}>
              {({ isSubmitting, values }) => (
                <Form>
                  <div>
                    <label>Nome completo:</label>
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
                    <label>E-mail:</label>
                    <Field type="email" name="email" className={styles.input} />
                    <ErrorMessage
                      name="email"
                      component="div"
                      className={styles.errorMessage}
                    />
                  </div>
                  <div className={styles.options}>
                    <Field as="select" name="assunto" className={styles.select}>
                      <option label="Seleciona o assunto" value="" disabled>
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
                    <label>Mensagem:</label>
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
                  <div>
                    <button type="submit">Enviar</button>
                  </div>
                </Form>
              )}
            </Formik>
          </div>
        </div>
      </section>
    </>
  );
};

export default OuvidoriaForm;
