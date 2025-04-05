import * as Yup from "yup";
import { pt } from 'yup-locale-pt';

Yup.setLocale(pt);

export const getValidationSchema = () => {
  return Yup.object().shape({
    pessoa: Yup.string().required("Campo obrigatório."),
    name: Yup.string()
      .when('pessoa', {
        is: 'pessoa-fisica',
        then: (schema) => schema.required("Campo Nome completo é obrigatório."),
        otherwise: (schema) => schema.nullable(),
      }),
    companyName: Yup.string()
      .when('pessoa', {
        is: 'pessoa-juridica',
        then: (schema) => schema.required("Campo Instituição/Afiliada é obrigatório."),
        otherwise: (schema) => schema.nullable(),
      }),
    email: Yup.string()
      .matches(/[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,"E-mail inválido.")
      .required("O campo E-mail é obrigatório."),
    phone: Yup.string()
    .matches(/^(?:(?:\+|00)?(55)\s?)?(?:(?:\(?[1-9][0-9]\)?)?\s?)?(?:((?:9\d|[2-9])\d{3})-?(\d{4}))$/,"Telefone inválido.")
      .max(15, "O campo deve ter no máximo 15 caracteres.")
      .required("O campo Telefone é obrigatório."),
    supportOptions: Yup.string().required("Campo obrigatório."),
    describeLinks: Yup.string()
      .when('supportOptions', {
        is: 'divulgador',
        then: (schema) => schema
          .min(10, "O campo deve ter no mínimo 10 caracteres.")
          .max(500, "O campo deve ter no máximo 500 caracteres.")
          .required("O campo é obrigatório."),
        otherwise: (schema) => schema.nullable(),
      }),
    areasOfExperience: Yup.string()
      .when('supportOptions', {
        is: 'palestrador',
        then: (schema) => schema
          .min(10, "O campo deve ter no mínimo 10 caracteres.")
          .max(500, "O campo deve ter no máximo 500 caracteres.")
          .required("O campo é obrigatório."),
        otherwise: (schema) => schema.nullable(),
      }),
    opportunityAvailable: Yup.string()
      .when('supportOptions', {
        is: (value) => (value === 'recrutador' || value === 'contratante'),
        then: (schema) => schema
          .min(10, "O campo deve ter no mínimo 10 caracteres.")
          .max(500, "O campo deve ter no máximo 500 caracteres.")
          .required("O campo é obrigatório."),
        otherwise: (schema) => schema.nullable(),
      }),
    otherSupport: Yup.string()
      .when('supportOptions', {
        is: 'outros',
        then: (schema) => schema
          .min(10, "O campo deve ter no mínimo 10 caracteres.")
          .max(500, "O campo deve ter no máximo 500 caracteres.")
          .required("O campo é obrigatório."),
        otherwise: (schema) => schema.nullable(),
      }),
    suggestion: Yup.string()
      .min(200, "O campo deve ter no mínimo 200 caracteres.")
      .max(500, "O campo deve ter no máximo 500 caracteres.")
      .required("O campo é obrigatório."),    
    volunteerMotivation: Yup.string()
      .min(200, "O campo deve ter no mínimo 200 caracteres.")
      .max(500, "O campo deve ter no máximo 500 caracteres.")
      .required("O campo é obrigatório."),
    contactAgreement: Yup.boolean().oneOf([true], "Você deve marcar esta opção."),
    volunteeringAgreement: Yup.boolean().oneOf([true], "Você deve marcar esta opção."),
  });
};

export const initialValues = {
  pessoa:"pessoa-fisica",
  name: "",
  companyName:"",
  email: "",
  phone: "",
  whatsapp:"sim",
  supportOptions:"financiador",
  describeLinks:"",
  areasOfExperience:"",
  opportunityAvailable:"",
  otherSupport:"",
  suggestion: "",
  volunteerMotivation: "",
  contactAgreement: false,
  volunteeringAgreement: false
}