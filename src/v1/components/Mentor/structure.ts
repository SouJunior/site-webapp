import * as Yup from "yup";

export const areasOption = [
    {
        name: "Agilidade",
        value: "agility"
    },
    {
      name: "Business",
      value: "business",
      sub: [
        {
          name: "Análise de Negócios",
          value: "businessAnalist",
        },
        {
          name: "Análise de Processos",
          value: "processAnalist",
        },
      ],
    },
    {
      name: "Desenvolvimento",
      value: "development",
      sub: [
        {
          name: "Back-end",
          value: "backend",
        },
        {
          name: "Front-end",
          value: "frontend",
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
            name: "UX/UI",
            value: "uxui",
          },
          {
            name: "Design OPS",
            value: "designOps",
          }
        ],
    },
    {
        name: "DevOps",
        value: "devops"
    },
    {
      name: "Produto",
      value: "product",
      sub: [
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
        {
          name: "Social Media",
          value: "socialMedia",
        },
        {
          name: "APM - Associate Product Manager",
          value: "apm",
        },
      ],
    },
    {
      name: "QA - Quality Assurance",
      value: "qa"
    },
    {
      name: "Social Media",
      value: "sm"
    },
    {
      name: "Tech Recruiter",
      value: "recruiter"
    },
];

export const getValidationSchema = (hasSubareas, requiresDate) => {
  return Yup.object().shape({
    name: Yup.string()
      .min(3, "O campo Nome precisa ter no mínimo 3 caracteres.")
      .required("O campo Nome completo é obrigatório."),
    email: Yup.string()
      .email("E-mail inválido.")
      .required("O campo E-mail é obrigatório."),
    confirmEmail: Yup.string()
      .oneOf([Yup.ref("email")], "O email deve ser o mesmo")
      .required("O campo Confirmar e-mail é obrigatório."),
    linkedin: Yup.string()
      .url("Link inválido.")
      .required("O campo Linkedin é obrigatório."),
    area: Yup.string()
      .required("* Escolha um opção por favor."),
    subarea: hasSubareas
      ? Yup.string().required("* Escolha uma subárea por favor.")
      : Yup.string().nullable(),
    availability: Yup.string()
      .required("Por favor assinale umas das opções pra prosseguir"),
    turn: Yup.string()
      .required("Por favor assinale umas das opções pra prosseguir"),
    startOption: requiresDate
      ? Yup.date().required("Por favor, escolha uma data.")
      : Yup.date().nullable(),
    jobExperience: Yup.string()
      .min(200, "O campo deve ter no mínimo 200 caracteres.")
      .max(500, "O campo deve ter no máximo 500 caracteres.")
      .required("O campo é obrigatório."),
    mentorExperience: Yup.string()
      .min(200, "O campo deve ter no mínimo 200 caracteres.")
      .max(500, "O campo deve ter no máximo 500 caracteres.")
      .required("O campo é obrigatório."),
    volunteerMotivation: Yup.string()
      .min(200, "O campo deve ter no mínimo 200 caracteres.")
      .max(500, "O campo deve ter no máximo 500 caracteres.")
      .required("O campo é obrigatório."),
      contactAgreement: Yup.boolean().oneOf([true], "Você deve marcar esta opção."),
      termsAgreement: Yup.boolean().oneOf([true], "Você deve marcar esta opção."),
  });
};

export const initialValues = {
  name: "",
  email: "",
  confirmEmail: "",
  linkedin: "",
  area: "",
  subarea: "",
  availability: "Até 5 horas semanais",
  turn: "turno-disponivel",
  startOption: "",
  jobExperience: "",
  mentorExperience: "",
  volunteerMotivation: "",
  contactAgreement: false,
  termsAgreement: false
}