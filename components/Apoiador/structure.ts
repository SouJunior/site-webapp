import * as Yup from "yup";
import { pt } from 'yup-locale-pt';

Yup.setLocale(pt);

export const getValidationSchema = () => {
  return Yup.object().shape({
    pessoa: Yup.string().required("Campo obrigatório."),
    name: Yup.string()
      .when('pessoa', {
        is: 'pessoa-fisica',
        then: Yup.string().required("Campo Nome completo é obrigatório."),
        otherwise: Yup.string().nullable(),
      }),
    companyName: Yup.string()
      .when('pessoa', {
        is: 'pessoa-juridica',
        then: Yup.string().required("Campo Instituição/Afiliada é obrigatório."),
        otherwise: Yup.string().nullable(),
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
        then: Yup.string()
          .min(10, "O campo deve ter no mínimo 10 caracteres.")
          .max(500, "O campo deve ter no máximo 500 caracteres.")
          .required("O campo é obrigatório."),
        otherwise: Yup.string().nullable(),
      }),
    areasOfExperience: Yup.string()
      .when('supportOptions', {
        is: 'palestrador',
        then: Yup.string()
          .min(10, "O campo deve ter no mínimo 10 caracteres.")
          .max(500, "O campo deve ter no máximo 500 caracteres.")
          .required("O campo é obrigatório."),
        otherwise: Yup.string().nullable(),
      }),
    opportunityAvailable: Yup.string()
      .when('supportOptions', {
        is: (value) => (value === 'recrutador' || value === 'contratante'),
        then: Yup.string()
          .min(10, "O campo deve ter no mínimo 10 caracteres.")
          .max(500, "O campo deve ter no máximo 500 caracteres.")
          .required("O campo é obrigatório."),
        otherwise: Yup.string().nullable(),
      }),
    otherSupport: Yup.string()
      .when('supportOptions', {
        is: 'outros',
        then: Yup.string()
          .min(10, "O campo deve ter no mínimo 10 caracteres.")
          .max(500, "O campo deve ter no máximo 500 caracteres.")
          .required("O campo é obrigatório."),
        otherwise: Yup.string().nullable(),
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
    termsAgreement: Yup.boolean().oneOf([true], "Você deve marcar esta opção."), 
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
  volunteeringAgreement: false,
  termsAgreement: false
}