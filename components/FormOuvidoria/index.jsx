import { useState } from "react";
import styles from "./FormOuvidoria.module.css";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Heading } from "../commons/Heading";
import { Paragraph } from "../commons/Paragraph";
import Popup from "../commons/Popup/Popup";
import { Loading } from "../commons/Loading";
import { api } from "../../services/api";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const ouvidoriaFaq = [
  {
    id: "faq-ouvidoria-1",
    question: "Ouvidoria é só para quem já participa da iniciativa?",
    answer: `Não. Este canal está aberto a qualquer pessoa que tenha tido contato com a nossa iniciativa, mesmo que ainda não faça parte oficialmente.
    Se você é uma pessoa interessada, já participou de alguma atividade, ou quer relatar algo que viveu ao interagir conosco este espaço é seu também.`,
  },
  {
    id: "faq-ouvidoria-2",
    question: "Quando devo utilizar a ouvidoria?",
    answer: `Use a ouvidoria sempre que sentir que precisa:
        • Sugerir melhorias para a iniciativa;
        • Relatar dificuldades ou situações desconfortáveis que tenha vivenciado;
        • Compartilhar alguma experiência positiva que queira registrar;
        • Fazer denúncias de condutas inadequadas ou desrespeitosas.`,
  },
  {
    id: "faq-ouvidoria-3",
    question: "Meu relato é confidencial?",
    answer:
      "Sim. Todas as mensagens enviadas por aqui são tratadas com sigilo. Se desejar, você pode se identificar ou permanecer anônima(o). Nosso compromisso é escutar com respeito e responsabilidade.",
  },
  {
    id: "faq-ouvidoria-4",
    question: "Como a iniciativa utiliza as informações recebidas?",
    answer:
      "As informações nos ajudam a identificar melhorias, corrigir falhas e criar um ambiente de aprendizado mais justo e transparente. Nenhuma ação será tomada sem análise prévia e, sempre que possível, buscamos dar retorno aos envolvidos.",
  },
  {
    id: "faq-ouvidoria-5",
    question: "O que acontece depois que eu envio o formulário?",
    answer:
      "Após o envio, a equipe responsável pela ouvidoria irá analisar cuidadosamente o conteúdo e tomar as providências necessárias, dentro de um prazo razoável. Caso você tenha deixado um e-mail, poderemos entrar em contato para atualizações ou esclarecimentos.",
  },
];

const inlineStyle = {
  backgroundColor: "transparent",
  color: "#FFF",
  borderBottom: "1px solid #FFF",
  borderShadow: "0px",
  padding: "2.6rem 1.5rem",
};

const OuvidoriaForm = () => {
  // const [isSubmitting, setIsSubmitting] = useState(false);
  // const [showPopup, setShowPopup] = useState(false);
  // const [popupMessage, setPopupMessage] = useState(null);
  const [expandedPanels, setExpandedPanels] = useState(new Set());
  const [loading, setLoading] = useState(false);
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [pendingFormData, setPendingFormData] = useState(null);
  const [pendingFormActions, setPendingFormActions] = useState(null)

  const handleAccordionChange = (panelId) => (event, isExpanded) => {
    const newExpanded = new Set(expandedPanels);
    if (isExpanded) {
      newExpanded.add(panelId);
    } else {
      newExpanded.delete(panelId);
    }
    setExpandedPanels(newExpanded);
  };

  const authorizationMessage = `
    Ao enviar este formulário, você concorda que as informações compartilhadas
    poderão ser utilizadas de forma confidencial e responsável pela equipe da ouvidoria,
    com o único objetivo de melhorar a sua experiência na iniciativa.

    Seus dados serão tratados com respeito, sigilo e cuidado. Você pode optar por
    se identificar ou permanecer anônima(o), e isso não afetará a atenção que seu relato receberá.
    Estamos aqui para escutar você com empatia e agir com responsabilidade.
  `;

  const onSubmit = async (values, actions) => {
    setPendingFormData(values);
    setPendingFormActions(actions);
    setShowAuthModal(true);
  };

  const handleConfirmSubmit = async (values) => {
    setLoading(true);
    setShowAuthModal(false);
    pendingFormActions.setSubmitting(false);

    try {
      const response = await api.sendMailAdmin("/mail/collaborator", {
        subject: "Ouvidoria",
        data: { ...values },
      });

      if (response.status !== 200) {
        throw new Error("Não foi possível enviar a requisição");
      }
    } catch (error) {
      // setPopupMessage("Erro inesperado, tente novamente mais tarde");
    } finally {
      setLoading(false);
      setPendingFormData(null);
      setPendingFormActions(null);
    }
  };

  const handleCancelSubmit = () => {
    setShowAuthModal(false);
    setPendingFormData(null);
    setPendingFormActions(null);
  }

  const validationSchema = Yup.object().shape({
    nome: Yup.string(),
    email: Yup.string()
      .email("E-mail inválido.")
      .required("O campo E-mail é obrigatório."),
    confirmarEmail: Yup.string()
      .oneOf([Yup.ref("email")], "O email deve ser o mesmo")
      .required("O campo Confirmar e-mail é obrigatório."),
    assunto: Yup.string()
      .oneOf(["Sugestão", "Reclamação", "Elogio", "Denúncia"], "")
      .required("*Escolha um opção por favor."),
    mensagem: Yup.string().required("O campo Mensagem é obrigatório."),
    arquivo: Yup.mixed().nullable().notRequired()
      .test("fileSize", "O arquivo deve ter no máximo 5MB", (value) => {
        if (!value) return true;
        return value.size <= 5 * 1024 * 1024; // 5MB
      })
      .test(
        "fileType",
        "Apenas imagens são permitidas (JPG, PNG, GIF)",
        (value) => {
          if (!value) return true;
          const allowedTypes = [
            "image/jpeg",
            "image/jpg",
            "image/png",
            "image/gif",
          ];
          return allowedTypes.includes(value.type);
        }
      ),
  });

  return (
    <>
      <section className={styles.bannerContainer}>
        <div className={styles.container}>
          <div className={styles.content}>
            <div className={styles.left}>
              <Heading level={"h1"}>Ouvidoria SouJunior</Heading>

              <Paragraph>Seja bem-vindo(a) à nossa Ouvidoria!</Paragraph>

              <Paragraph>
                A ouvidoria é um canal confidencial criado para escutar você.
                Aqui, você pode enviar sugestões, críticas, elogios ou relatar
                situações que precisam de atenção. O objetivo é melhorar sua
                experiência na SouJunior.
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
          <Heading level={"h2"}>Perguntas Frequentes</Heading>
          <div style={{ marginBottom: "2rem" }}>
            {ouvidoriaFaq.map((faq) => (
              <Accordion
                style={inlineStyle}
                key={faq.id}
                expanded={expandedPanels.has(faq.id)}
                onChange={handleAccordionChange(faq.id)}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls={`${faq.id}-content`}
                  id={`${faq.id}-header`}>
                  <Typography variant="string" className={styles.question}>
                    {faq.question}
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography variant="string">
                    <Paragraph>{faq.answer}</Paragraph>
                  </Typography>
                </AccordionDetails>
              </Accordion>
            ))}
          </div>

          <Heading level={"h2"}>Conte sua opinião pra gente!</Heading>

          <div className={styles.form}>
            <Formik
              initialValues={{
                nome: "",
                email: "",
                confirmarEmail: "",
                assunto: "",
                mensagem: "",
                arquivo: undefined,
              }}
              validationSchema={validationSchema}
              onSubmit={onSubmit}>
              {({ values, resetForm, setFieldValue }) => (
                <Form>
                  <div>
                    <label htmlFor="nome">Nome completo:</label>
                    <Field
                      type="text"
                      name="nome"
                      id="nome"
                      maxLength={100}
                      className={styles.input}
                    />
                    <span style={{ fontSize: "1.25rem", color: "gray" }}>
                      Preencha apenas se quiser se identificar. Seu relato será
                      acolhido mesmo se for anônimo.
                    </span>
                  </div>
                  <div>
                    <label htmlFor="email">E-mail: *</label>
                    <Field
                      type="email"
                      name="email"
                      id="email"
                      className={styles.input}
                    />
                    <ErrorMessage
                      name="email"
                      component="div"
                      className={styles.errorMessage}
                    />
                  </div>
                  <div>
                    <label htmlFor="confirmarEmail">Confirmar e-mail: *</label>
                    <Field
                      type="email"
                      name="confirmarEmail"
                      id="confirmarEmail"
                      className={styles.input}
                    />
                    <ErrorMessage
                      name="confirmarEmail"
                      component="div"
                      className={styles.errorMessage}
                    />
                  </div>

                  <div style={{ display: "flex", flexDirection: "row" }}>
                    <label htmlFor="assunto">Assunto: *</label>
                    <div className={styles.checkboxGroup}>
                      {["Sugestão", "Reclamação", "Elogio", "Denúncia"].map(
                        (option) => (
                          <div key={option} className={styles.checkboxItem}>
                            <Field
                              type="radio"
                              name="assunto"
                              value={option}
                              id={`assunto-${option}`}
                              className={styles.checkbox}
                            />
                            <label
                              htmlFor={`assunto-${option}`}
                              className={styles.checkboxLabel}>
                              {option}
                            </label>
                          </div>
                        )
                      )}
                    </div>
                    <ErrorMessage
                      name="assunto"
                      component="div"
                      className={styles.errorMessage}
                    />
                  </div>

                  <div>
                    <label htmlFor="mensagem">Mensagem: *</label>
                    <Field
                      as="textarea"
                      name="mensagem"
                      id="mensagem"
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
                    <label htmlFor="arquivo">Anexar arquivo:</label>
                    <input
                      type="file"
                      name="arquivo"
                      id="arquivo"
                      accept=".jpg, .jpeg, .png, .gif, image/*"
                      className={styles.fileInput}
                      onChange={(event) => {
                        const file = event.target.files[0];
                        setFieldValue("arquivo", file || null);
                      }}
                    />
                      <small className={styles.fileInfo}>
                        Formatos aceitos: .jpg, .jpeg, .png, .gif (máximo 5MB)
                      </small>
                    <ErrorMessage
                      name="arquivo"
                      component="div"
                      className={styles.errorMessage}
                    />
                  </div>

                  <div className={styles.buttons}>
                    <button
                      type="button"
                      onClick={() => {
                        resetForm();
                        setFieldValue("arquivo", undefined);
                        const fileInput = document.getElementById("arquivo");
                        if (fileInput) fileInput.value = null;
                      }}>
                      Limpar
                    </button>
                    <button type="submit">Enviar</button>
                  </div>
                </Form>
              )}
            </Formik>
          </div>

          {showAuthModal && (
            <div className={styles.modalOverlay}>
              <div className={styles.modalContent}>
                <h3 className={styles.modalTitle}>Autorização</h3>
                <div className={styles.modalText}>
                  <p>{authorizationMessage}</p>
                </div>
                <div className={styles.modalButtons}>
                  <button
                    className={styles.cancelButton}
                    onClick={handleCancelSubmit}>
                    Cancelar
                  </button>
                  <button
                    className={styles.confirmButton}
                    onClick={() =>
                      handleConfirmSubmit(pendingFormData, pendingFormActions.resetForm)
                    }>
                    Aceitar e enviar
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default OuvidoriaForm;
