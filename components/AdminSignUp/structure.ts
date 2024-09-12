import * as Yup from 'yup';
import YupPassword from 'yup-password';

YupPassword(Yup);
const emailExemplo = 'teste@gmail.com'

const formatEmail = (email) => {
    const emailArray = email.split("@")
    const emailName = emailArray[0].slice(0, 3) + "****"

    return emailName + emailArray[1]
}

export const validationSchema = Yup.object().shape({
    password: Yup.string()
        .min(8, 'Senha precisa ter no mínimo 8 caracteres')
        .minLowercase(1, 'Senha precisa ter no mínimo uma letra minúscula')
        .minUppercase(1, 'Senha precisa ter no mínimo uma letra maiúscula')
        .minNumbers(1, 'Senha precisa ter no mínimo um número')
        .minSymbols(1, 'Senha precisa ter no mínimo um caractere especial')
        .required('Senha é obrigatória'),
    password_confirmation: Yup.string()
        .oneOf([Yup.ref('password')], 'As senhas precisam ser iguais')
        .required('Confirmação de senha é obrigatória'),
    terms: Yup.boolean()
        .oneOf([true], 'Você precisa aceitar os termos para prosseguir')
        .required('Você precisa aceitar os termos para prosseguir')
    });

export const initialValues = {
    email: formatEmail(emailExemplo),
    password: '',
    password_confirmation: '',
    terms: false,
};