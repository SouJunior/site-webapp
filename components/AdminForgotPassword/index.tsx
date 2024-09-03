import React from 'react';
import { ErrorMessage, Formik, Field, Form } from 'formik';
import * as Dialog from '@radix-ui/react-dialog'
import { initialValues, validationSchema } from './structure';

export const AdminForgotPassword = () => {
    const handleSubmit = async (values) => {
        // window.location.href = "/admin-login"
    };
      
    return (
        <Dialog.Root>
            <div className="h-screen w-screen bg-adminLogin grid grid-cols-2">
                <div  className='bg-admin-login bg-right-top'/>
                <Formik
                    initialValues={initialValues}
                    onSubmit={handleSubmit}
                    validateOnChange={true}
                    validationSchema={validationSchema}
                >
                    {({ errors, isValid, values }) => {
                        console.log(errors, values)
                        return (
                            <Form>
                                <div className="flex justify-center items-center h-screen m-auto text-start">
                                    <div className='flex flex-col w-[60%]'>
                                        <h1 className="text-primary text-6xl font-medium text-center mb-8">Redefinição de Senha</h1>
                                        <p className='text-primary text-xl w-[80%] m-auto text-center'>Para redefinir sua senha, nos informe o seu e-mail.</p>
                                        <p className='text-primary text-xl w-[80%] m-auto text-center mb-16'>Você irá receber um e-mail com as instruções necessárias.</p>
                                        <div className='mb-12'>
                                            <label htmlFor="email" className="text-primary font-semibold text-xl">E-MAIL</label>
                                            <Field
                                                id="email"
                                                name="email"
                                                type="email"
                                                className={`border-b-2 bg-transparent h-16 w-full text-slate-400 text-xl outline-none`}
                                            />
                                        </div>
                                        {
                                            errors.email &&
                                            <ul className='text-lg border-l-2 border-l-red-500  pl-4 flex flex-col mb-8'>
                                                <li
                                                    className='list-disc ml-4 text-red-500'
                                                >
                                                    {errors?.email as string}
                                                </li>
                                            </ul>
                                        }
                                        <button
                                            className={`flex items-center gap-2 h-16 mt-8 ${!isValid || values.email === '' ? "bg-slate-500": "bg-primary hover:bg-primaryHover"} rounded-lg px-24 w-fit text-2xl m-auto`}
                                            type="submit"
                                            disabled={!isValid || values.email === ''}
                                        >
                                            Enviar
                                        </button>
                                    </div>
                                </div>
                            </Form>
                        )
                    }
                    }
                </Formik>
            </div>
        </Dialog.Root>
    );
};
