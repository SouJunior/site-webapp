import * as Yup from "yup";
import { pt } from "yup-locale-pt";

Yup.setLocale(pt);

export const getValidationSchema = (hasSubareas, requiresDate) => {
  return Yup.object().shape({
    name: Yup.string()
      .min(3, "O campo Nome precisa ter no mínimo 3 caracteres.")
      .required("O campo Nome completo é obrigatório."),
    email: Yup.string()
      .matches(/[a-z0-9]+@[a-z]+\.[a-z]{2,3}/, "E-mail inválido.")
      .required("O campo E-mail é obrigatório."),
    phone: Yup.string()
      .matches(
        /^(?:(?:\+|00)?(55)\s?)?(?:(?:\(?[1-9][0-9]\)?)?\s?)?(?:((?:9\d|[2-9])\d{3})-?(\d{4}))$/,
        "Telefone inválido."
      )
      .max(15, "O campo deve ter no máximo 15 caracteres.")
      .required("O campo Telefone é obrigatório."),
    linkedin: Yup.string()
      .matches(
        /^(https?:\/\/)(www\.)?linkedin\.com\/in\/[\w-]{3,}(\/)?(\?.*)?(#.*)?$/,
        "Por favor, insira um link válido do LinkedIn (ex.: https://www.linkedin.com/in/seu-nome)."
      )
      .required("O campo LinkedIn é obrigatório."),
    indicationLinkedin: Yup.string().when("indication", {
      is: "sim",
      then: (schema) =>
        schema
          .matches(
            /((https:\/\/)((www|\w\w)\.)linkedin\.com\/)((([\w]{2,3}))|([^\/]+\/(([\w|\d-&#=])+\/){1,}))$/,
            "Linkedin inválido."
          )
          .required("O campo Linkedin é obrigatório."),
      otherwise: (schema) => schema.nullable(),
    }),
    area: Yup.string().required("* Escolha uma opção por favor."),
    subarea: hasSubareas
      ? Yup.string().required("* Escolha uma opção por favor.")
      : Yup.string().nullable(),
    availability: Yup.string().required(
      "Por favor assinale umas das opções pra prosseguir"
    ),
    startDate: requiresDate
      ? Yup.date()
          .min(
            new Date().toISOString().split("T")[0],
            "* A data não deve ser retroativa."
          )
          .required("Por favor, escolha uma data.")
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
    otherExperiences: Yup.string().max(
      500,
      "O campo deve ter no máximo 500 caracteres."
    ),
    contactAgreement: Yup.boolean().oneOf(
      [true],
      "Você deve marcar esta opção."
    ),
    volunteeringAgreement: Yup.boolean().oneOf(
      [true],
      "Você deve marcar esta opção."
    ),
    termsAgreement: Yup.boolean().oneOf([true], "Você deve marcar esta opção."),
  });
};

export const initialValues = {
  name: "",
  email: "",
  linkedin: "",
  indication: "não",
  indicationLinkedin: "",
  area: "",
  subarea: "",
  availability: "Até 5 horas semanais",
  turn: "turno-disponivel",
  startOption: "Imediato",
  toolsKnowledge: "",
  fieldKnowledge: "",
  volunteerMotivation: "",
  otherExperiences: "",
  contactAgreement: false,
  volunteeringAgreement: false,
  termsAgreement: false,
};
