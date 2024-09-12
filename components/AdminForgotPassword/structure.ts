import * as Yup from 'yup';

export const validationSchema = Yup.object().shape({
    email: Yup.string().email('Email digitado não é válido').required('Email é obrigatório'),
});

export const initialValues = {
    email: ''
};