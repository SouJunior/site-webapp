import * as Yup from "yup";

export const areasOption = [
    {
      name: "Agilista",
      value: "agilist"
    },
    {
      name: "Business",
      value: "business",
      sub: [
        {
          name: "Análise de negócios",
          value: "businessAnalysis"
        },
        {
          name: "Análise de processos",
          value: "processAnalysis"
        },
      ],
    },
    {
      name: "Desenvolvimento",
      value: "development",
      sub: [
        {
          name: "Back-end",
          value: "back"
        },
        {
          name: "Front-end",
          value: "front"
        },
      ],
    },
    {
      name: "Dados",
      value: "data"
    },
    {
      name: "Design",
      value: "design",
      sub: [
        {
          name: "Design OPS",
          value: "designOps",
        },
        {
          name: "UX/UI",
          value: "uxui",
        },       
      ],
    },
    {
      name: "DevOps",
      value: "devops",
    },
    {
      name: "Produto",
      value: "product",
      sub: [
        {
          name: "APM - Associate Product Manager",
          value: "apm",
        },
        {
          name: "Product Growth",
          value: "productGrowth",
        },
        {
          name: "Product OPS",
          value: "productOps",
        },
        {
          name: "Product Marketing Manager",
          value: "productMarketingManager",
        },
      ],
    },
    {
      name: "QA - Quality Assurance",
      value: "qa",
    },
    {
      name: "Social Media",
      value: "socialMedia",
      sub: [
        {
          name: "Criação de conteúdo - Redação",
          value: "contentWriting"
        },
        {
          name: "Criação de peças - Design",
          value: "designPieces"
        },
      ],
    },
    {
      name: "Tech Recruiter",
      value: "techRecruiter"
    },
];

export const getValidationSchema = (hasSubareas, requiresDate) => {
  return Yup.object().shape({
    nome: Yup.string()
      .min(3, "O campo Nome precisa ter no mínimo 3 caracteres.")
      .required("O campo Nome completo é obrigatório."),
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
      .required("* Escolha um opção por favor."),
    subarea: hasSubareas
      ? Yup.string().required("* Escolha uma subárea por favor.")
      : Yup.string().nullable(),
    disponibilidade: Yup.string()
      .required("Por favor assinale umas das opções pra prosseguir"),
    inicioDate: requiresDate
      ? Yup.date().required("Por favor, escolha uma data.")
      : Yup.date().nullable(),
    toolsKnowledge: Yup.string()
      .min(200, "O campo deve ter no mínimo 200 caracteres.")
      .max(500, "O campo deve ter no máximo 500 caracteres.")
      .required("O campo é obrigatório."),
    fieldKnowledge: Yup.string()
      .min(200, "O campo deve ter no mínimo 200 caracteres.")
      .max(500, "O campo deve ter no máximo 500 caracteres.")
      .required("O campo é obrigatório."),
    volunteerMotivation: Yup.string()
      .min(200, "O campo deve ter no mínimo 200 caracteres.")
      .max(500, "O campo deve ter no máximo 500 caracteres.")
      .required("O campo é obrigatório."),
      infos: Yup.boolean().oneOf([true], "Você deve marcar esta opção."),
      terms: Yup.boolean().oneOf([true], "Você deve marcar esta opção."),
  });
};

export const initialValues = {
  nome: "",
  email: "",
  confirmarEmail: "",
  linkedin: "",
  areas: "",
  subarea: "",
  disponibilidade: "Até 5 horas semanais",
  turno: "turno-disponivel",
  inicioDate: "",
  toolsKnowledge: "",
  fieldKnowledge: "",
  volunteerMotivation: "",
  infos: false,
  terms: false
}