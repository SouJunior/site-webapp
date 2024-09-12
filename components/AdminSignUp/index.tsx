import React, { useState } from 'react';
import { ErrorMessage, Formik, Field, Form } from 'formik';
import * as Dialog from '@radix-ui/react-dialog'
import { Politicas } from "../Politicas"
import { X, Eye, EyeOff, ArrowRight  } from 'lucide-react'
import { initialValues, validationSchema } from './structure';
import { PoliticasModal } from './components/PoliticasModal';

export const AdminSignUp = () => {
    const [showPassword, setShowPassword] = useState(false)
    const [showPasswordConfimation, setShowPasswordConfimation] = useState(false)
    const [bottom, setBottom] = useState(false);

    const handleScroll = (e) => {
        const bottom = e.target.scrollHeight - e.target.scrollTop - 50 <= e.target.clientHeight;
        setBottom(bottom)
    };

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const togglePasswordConfimationVisibility = () => {
        setShowPasswordConfimation(!showPasswordConfimation);
    };

    const signUp = async (values) => {
        console.log(values)
        window.location.href = "/admin-login"
    };
      
    return (
        <Dialog.Root>
            <div className="h-screen w-screen bg-adminLogin flex flex-col bg-admin-login">
                <Formik
                    initialValues={initialValues}
                    onSubmit={signUp}
                    validateOnMount={true}
                    validationSchema={validationSchema}
                >
                    {({ touched, errors, values, isValid, setFieldValue }) =>
                        <Form>
                            <div className="flex justify-center items-center h-screen m-auto text-start">
                                <div className='flex flex-col w-[30%]'>
                                    <h1 className="text-primary text-8xl font-bold text-center mb-16">CRIAR SENHA</h1>
                                    <div className='mb-12'>
                                        <label htmlFor="email" className="text-primary font-semibold text-xl">E-MAIL</label>
                                        <Field
                                            id="email"
                                            name="email"
                                            type="email"
                                            readOnly={true}
                                            disabled={true}
                                            className={`border-b-2 bg-transparent h-16 w-full text-slate-400 text-xl outline-none`}
                                        />
                                    </div>
                                    <div className='mb-12'>
                                        <label htmlFor="password" className="text-primary font-semibold text-xl">SENHA</label>
                                        <div
                                            className="border-b-2 bg-transparent h-16 w-full relative"
                                        >
                                            <Field
                                                id="password"
                                                name="password"
                                                type={showPassword ? "text" : "password"}
                                                className={ `size-full bg-transparent ${touched.password && errors.password && "border-red-500 text-red-500"} text-black text-xl outline-none`} 
                                            />
                                            <button
                                                className="absolute top-0 right-0 text-slate-400"
                                                onClick={togglePasswordVisibility}
                                            >
                                                {
                                                    showPassword? 
                                                    <EyeOff />
                                                    :
                                                    <Eye />
                                                }
                                            </button>
                                        </div>
                                        {
                                            errors.password && <ErrorMessage name="password" component="p" className="list-disc text-red-500 text-lg mt-2" />
                                        }
                                    </div>
                                    <div className='mb-8'>
                                        <label htmlFor="password_confirmation" className="text-primary font-semibold text-xl">CONFIRME A SENHA</label>
                                        <div
                                            className="border-b-2 bg-transparent h-16 w-full relative"
                                        >
                                            <Field
                                                id="password_confirmation"
                                                name="password_confirmation"
                                                type={showPasswordConfimation ? "text" : "password"}
                                                className={ `size-full bg-transparent ${touched.password_confirmation && errors.password_confirmation && "border-red-500 text-red-500"} text-black text-xl outline-none`} 
                                            />
                                            <button
                                                className="absolute top-0 right-0 text-slate-400"
                                                onClick={togglePasswordConfimationVisibility}
                                            >
                                                {
                                                    showPasswordConfimation ? 
                                                    <EyeOff />
                                                    :
                                                    <Eye />
                                                }
                                            </button>
                                        </div>
                                        {
                                            errors.password_confirmation &&
                                            <p className='list-disc text-red-500 text-lg mt-2'>
                                                <ErrorMessage name="password_confirmation" />
                                            </p>
                                        }
                                    </div>
                                    <ul className={`text-correct text-lg border-l-2 ${errors.password ? 'border-l-red-500':'border-l-correct' }  pl-4 flex flex-col mb-8`}>
                                        <span>A senha deve ter:</span>
                                        <li
                                            className={`list-disc ml-4 ${values.password.length >= 8 ? 'text-correct' : 'text-red-500'}`}
                                        >
                                            Pelo menos 8 caracteres
                                        </li>
                                        <li
                                            className={`list-disc ml-4 ${/\d/.test(values.password) ? 'text-correct' : 'text-red-500'}`}
                                        >
                                            Pelo menos um número
                                        </li>
                                        <li
                                            className={`list-disc ml-4 ${/[A-Z]/.test(values.password) ? 'text-correct' : 'text-red-500'}`}
                                        >
                                            Pelo menos uma letra maiúscula
                                        </li>
                                        <li
                                            className={`list-disc ml-4 ${/[a-z]/.test(values.password) ? 'text-correct' : 'text-red-500'}`}
                                        >
                                            Pelo menos uma letra minúscula
                                        </li>
                                        <li
                                            className={`list-disc ml-4 ${/[\W_]/.test(values.password) ? 'text-correct' : 'text-red-500'}`}
                                        >
                                            Pelo menos um caractere especial (por exemplot: !@#$%)
                                        </li>
                                    </ul>
                                    <Dialog.Trigger className="flex text-black text-start items-center gap-2">
                                        <Field
                                            id="terms"
                                            name="terms"
                                            type="checkbox"
                                            className="size-6"
                                            disabled={!bottom}
                                        />
                                        Eu concordo com os <span className='underline text-blue-500 text-end text-lg'>Termos de uso e Política de Privacidade</span>
                                    </Dialog.Trigger>
                                    <PoliticasModal bottom={bottom} handleScroll={handleScroll} setFieldValue={setFieldValue} />
                                    <button
                                        className={`flex items-center gap-2 h-16 mt-8 ${!isValid ? "bg-slate-500": "bg-primary hover:bg-primaryHover"} rounded-lg px-24 w-fit text-2xl m-auto`}
                                        type="submit"
                                        disabled={!isValid}
                                    >
                                        CRIAR SENHA
                                        <ArrowRight className='size-8'/>
                                    </button>
                                </div>
                            </div>
                        </Form>
                    }
                </Formik>
            </div>
        </Dialog.Root>
    );
};
