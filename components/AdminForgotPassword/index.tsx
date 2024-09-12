import React, { useEffect, useState } from 'react';
import { ErrorMessage, Formik, Field, Form } from 'formik';
import * as Dialog from '@radix-ui/react-dialog';
import { initialValues, validationSchema } from './structure';
import { Modal } from './components/Modal';

export const AdminForgotPassword = () => {
    const [open, setOpen] = useState(false);

    const handleSubmit = async (values) => {
        // window.location.href = "/admin-login"
    };

    return (
        <Dialog.Root open={open}>
            <div className="h-screen w-screen bg-adminLogin grid grid-cols-1 lg:grid-cols-2">
                {/* Div de background visível apenas em telas lg ou maiores */}
                <div className="hidden lg:block bg-admin-login bg-right-top" />
                <Formik
                    initialValues={initialValues}
                    onSubmit={handleSubmit}
                    validateOnChange={true}
                    validationSchema={validationSchema}
                >
                    {({ errors, isValid, values }) => {
                        return (
                            <Form>
                                <div className="flex justify-center items-center h-screen m-auto text-start bg-admin-login lg:bg-none">
                                    <div className="flex flex-col w-[90%] md:w-[70%] lg:w-[60%]">
                                        <h1 className="text-primary text-4xl lg:text-6xl font-medium text-center mb-8">
                                            Redefinição de Senha
                                        </h1>
                                        <p className="text-primary text-lg lg:text-xl w-[90%] lg:w-[80%] m-auto text-center">
                                            Para redefinir sua senha, nos informe o seu e-mail.
                                        </p>
                                        <p className="text-primary text-lg lg:text-xl w-[90%] lg:w-[80%] m-auto text-center mb-8 lg:mb-16">
                                            Você irá receber um e-mail com as instruções necessárias.
                                        </p>
                                        <div className="mb-8 lg:mb-12">
                                            <label htmlFor="email" className="text-primary font-semibold text-lg lg:text-xl">
                                                E-MAIL
                                            </label>
                                            <Field
                                                id="email"
                                                name="email"
                                                type="email"
                                                className="border-b-2 bg-transparent h-14 lg:h-16 w-full text-slate-400 text-lg lg:text-xl outline-none"
                                            />
                                        </div>
                                        {errors.email && (
                                            <ul className="text-base lg:text-lg border-l-2 border-l-red-500 pl-4 flex flex-col mb-6 lg:mb-8">
                                                <li className="list-disc ml-4 text-red-500">{errors?.email}</li>
                                            </ul>
                                        )}
                                        <button
                                            className={`flex items-center gap-2 h-14 lg:h-16 mt-8 ${
                                                !isValid || values.email === ''
                                                    ? 'bg-slate-500'
                                                    : 'bg-primary hover:bg-primaryHover'
                                            } rounded-lg px-12 lg:px-24 w-fit text-xl lg:text-2xl m-auto`}
                                            type="submit"
                                            disabled={!isValid || values.email === ''}
                                        >
                                            Enviar
                                        </button>
                                    </div>
                                </div>
                            </Form>
                        );
                    }}
                </Formik>
            </div>
            <Modal setOpen={setOpen} messages={["Limite de tentativas excedida.", "Tente novamente em algumas horas."]} />
        </Dialog.Root>
    );
};
