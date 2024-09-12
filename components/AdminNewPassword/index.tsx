import React, { useState } from 'react';
import { ErrorMessage, Formik, Field, Form } from 'formik';
import * as Dialog from '@radix-ui/react-dialog';
import { Eye, EyeOff } from 'lucide-react';
import { initialValues, validationSchema } from './structure';
import { Modal } from '../AdminForgotPassword/components/Modal';

export const AdminNewPassword = () => {
    const [open, setOpen] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const [showPasswordConfimation, setShowPasswordConfimation] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const togglePasswordConfimationVisibility = () => {
        setShowPasswordConfimation(!showPasswordConfimation);
    };

    const handleSubmit = async (values) => {
        window.location.href = "/admin-login";
    };

    return (
        <Dialog.Root open={open}>
            <div className="h-screen w-screen bg-adminLogin grid grid-cols-1 lg:grid-cols-2">
                <div className="hidden lg:block bg-admin-login bg-right-top" />
                <Formik
                    initialValues={initialValues}
                    onSubmit={handleSubmit}
                    validateOnMount={true}
                    validationSchema={validationSchema}
                >
                    {({ touched, errors, values, isValid }) => (
                        <Form>
                            <div className="flex justify-center items-center h-screen m-auto text-start bg-admin-login lg:bg-none">
                                <div className="flex flex-col w-[90%] md:w-[70%] lg:w-[60%]">
                                    <h1 className="text-primary text-4xl lg:text-6xl font-medium text-center mb-8">
                                        Redefinição de Senha
                                    </h1>
                                    <div className="mb-8 lg:mb-12">
                                        <label htmlFor="email" className="text-primary font-semibold text-lg lg:text-xl">
                                            E-MAIL
                                        </label>
                                        <Field
                                            id="email"
                                            name="email"
                                            type="email"
                                            readOnly={true}
                                            disabled={true}
                                            className="border-b-2 bg-transparent h-14 lg:h-16 w-full text-slate-400 text-lg lg:text-xl outline-none"
                                        />
                                    </div>
                                    <div className="mb-8 lg:mb-12">
                                        <label htmlFor="password" className="text-primary font-semibold text-lg lg:text-xl">
                                            SENHA
                                        </label>
                                        <div className="border-b-2 bg-transparent h-14 lg:h-16 w-full relative">
                                            <Field
                                                id="password"
                                                name="password"
                                                type={showPassword ? "text" : "password"}
                                                className={`size-full bg-transparent ${
                                                    touched.password && errors.password && "border-red-500 text-red-500"
                                                } text-black text-lg lg:text-xl outline-none`}
                                            />
                                            <button
                                                className="absolute top-0 right-0 text-slate-400"
                                                onClick={togglePasswordVisibility}
                                                type="button"
                                            >
                                                {showPassword ? <EyeOff /> : <Eye />}
                                            </button>
                                        </div>
                                        {errors.password && (
                                            <ErrorMessage name="password" component="p" className="list-disc text-red-500 text-sm lg:text-lg mt-2" />
                                        )}
                                    </div>
                                    <div className="mb-6 lg:mb-8">
                                        <label htmlFor="password_confirmation" className="text-primary font-semibold text-lg lg:text-xl">
                                            CONFIRME A SENHA
                                        </label>
                                        <div className="border-b-2 bg-transparent h-14 lg:h-16 w-full relative">
                                            <Field
                                                id="password_confirmation"
                                                name="password_confirmation"
                                                type={showPasswordConfimation ? "text" : "password"}
                                                className={`size-full bg-transparent ${
                                                    touched.password_confirmation && errors.password_confirmation && "border-red-500 text-red-500"
                                                } text-black text-lg lg:text-xl outline-none`}
                                            />
                                            <button
                                                className="absolute top-0 right-0 text-slate-400"
                                                onClick={togglePasswordConfimationVisibility}
                                                type="button"
                                            >
                                                {showPasswordConfimation ? <EyeOff /> : <Eye />}
                                            </button>
                                        </div>
                                        {errors.password_confirmation && (
                                            <p className="list-disc text-red-500 text-sm lg:text-lg mt-2">
                                                <ErrorMessage name="password_confirmation" />
                                            </p>
                                        )}
                                    </div>
                                    <ul className={`text-correct text-sm lg:text-lg border-l-2 ${
                                        errors.password ? 'border-l-red-500' : 'border-l-correct'
                                    } pl-4 flex flex-col mb-6 lg:mb-8`}>
                                        <span>A senha deve ter:</span>
                                        <li className={`list-disc ml-4 ${values.password.length >= 8 ? 'text-correct' : 'text-red-500'}`}>
                                            Pelo menos 8 caracteres
                                        </li>
                                        <li className={`list-disc ml-4 ${/\d/.test(values.password) ? 'text-correct' : 'text-red-500'}`}>
                                            Pelo menos um número
                                        </li>
                                        <li className={`list-disc ml-4 ${/[A-Z]/.test(values.password) ? 'text-correct' : 'text-red-500'}`}>
                                            Pelo menos uma letra maiúscula
                                        </li>
                                        <li className={`list-disc ml-4 ${/[a-z]/.test(values.password) ? 'text-correct' : 'text-red-500'}`}>
                                            Pelo menos uma letra minúscula
                                        </li>
                                        <li className={`list-disc ml-4 ${/[\W_]/.test(values.password) ? 'text-correct' : 'text-red-500'}`}>
                                            Pelo menos um caractere especial (por exemplo: !@#$%)
                                        </li>
                                    </ul>
                                    <button
                                        className={`flex items-center gap-2 h-14 lg:h-16 mt-8 ${
                                            !isValid ? "bg-slate-500" : "bg-primary hover:bg-primaryHover"
                                        } rounded-lg px-12 lg:px-24 w-fit text-xl lg:text-2xl m-auto`}
                                        type="submit"
                                        disabled={!isValid}
                                    >
                                        Enviar
                                    </button>
                                </div>
                            </div>
                        </Form>
                    )}
                </Formik>
            </div>
            <Modal setOpen={setOpen} messages={["Limite de tentativas excedida.", "Tente novamente em algumas horas."]} />
        </Dialog.Root>
    );
};
