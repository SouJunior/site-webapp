import React, { useEffect, useState } from 'react';
import { ErrorMessage, Formik, Field, Form } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import Cookies from 'js-cookie';

export const AdminLogin = () => {
    const [error, setError] = useState(false)

    useEffect(() => {
        if (Cookies.get("name")) {
            window.location.href = "/admin"
        }
    })

    const initialValues = {
        email: '',
        password: ''
    };
      
    const validationSchema = Yup.object().shape({
        email: Yup.string()
            .required('Email é obrigatório'),
        password: Yup.string()
            .required('Senha é obrigatória')
    });

    // Login Mock com JSON Server
    const login = async (values) => {
        window.location.href = "/admin"
        
        // try {
        //     const users = await axios.get("http://localhost:5000/users")
        //     const user = users.data.find(user =>
        //         user.email === values.email &&
        //         user.password === values.password
        //     )
            
            
        //     if (user) {
        //         Cookies.set('name', user.name, {
        //             secure: true,
        //             sameSite: 'strict'
        //         });
        //         Cookies.set('email', user.email, {
        //             secure: true,
        //             sameSite: 'strict'
        //         });

        //         window.location.href = "/admin"
        //     } else {
        //         setError(true)
        //         setTimeout(() => {
        //             setError(false)
        //         }, 3000)
        //     }
        // } catch (e) {
        //     console.error(e)
        //     setError(true)
        //     setTimeout(() => {
        //         setError(false)
        //     }, 3000)
        // }
    }
      
  return (
    <div className="h-screen w-screen bg-adminLogin flex flex-col bg-admin-login">
        <Formik
          onSubmit={login}
          initialValues={initialValues}
          validationSchema={validationSchema}
          validateOnBlur={true}
        >
          {({ touched, errors }) => (
            <Form>
                <div className="flex justify-center items-center h-screen m-auto text-start">
                    <div className='flex flex-col w-[30%]'>
                        <h1 className="text-primary text-8xl font-bold text-center mb-2">INICIAR SESSÃO</h1>
                        <h2 className="text-primary text-6xl font-semibold text-center mb-16">ADMINISTRAÇÃO</h2>
                        <div className='mb-8'>
                            <label htmlFor="email" className="text-primary font-semibold text-xl">E-MAIL</label>
                            <Field
                                id="email"
                                name="email"
                                type="email"
                                className={`border-b-2 bg-transparent ${touched.email && errors.email && "border-red-500 text-red-500"} h-16 w-full text-black text-xl outline-none`}
                            />
                        </div>
                        <div className='mb-8'>
                            <label htmlFor="password" className="text-primary font-semibold text-xl">SENHA</label>
                            <Field
                                id="password"
                                name="password"
                                type="password"
                                className={`border-b-2 bg-transparent ${touched.password && errors.password && "border-red-500 text-red-500"} h-16 w-full text-black text-xl outline-none`}
                            />
                        </div>
                        <a href="#" className="underline text-blue-500 text-end text-lg">Esqueceu a senha?</a>
                        <ul className='text-red-500 text-lg border-l-2 border-l-red-400 pl-4 flex flex-col'>
                            {
                                errors.email &&
                                <ErrorMessage name="email" component="li" className='list-disc ml-4' />
                            }
                            {
                                errors.password &&
                                <ErrorMessage name="password" component="li" className='list-disc ml-4' />
                            }
                            {
                                error &&
                                <li className='list-disc ml-4'>
                                    E-mail ou senha incorreto
                                </li>
                            }
                        </ul>
                        <button type="submit" className="h-16 mt-8 bg-primary rounded-lg px-24 w-fit text-xl m-auto hover:bg-primaryHover">
                            ENTRAR
                        </button>
                    </div>
                </div>
            </Form>
          )}
        </Formik>
    </div>
  );
};
