import React from 'react'
import {Formik, Form } from 'formik';
import CampoDeTexto from './CampoDeTexto';
import 'bootstrap/dist/css/bootstrap.min.css';
import * as Yup from 'yup'
import { Link } from 'react-router-dom';


const Signin = () => {
    const validate = Yup.object({
        email: Yup.string()
        .required("Ingresar Correo Eletronico"),
        password: Yup.string()
        .required("Ingresar contraseña"),
    })
    
    return (
        <Formik
            initialValues={{
                email:'',
                password:''
            }}
            validationSchema={validate}
            onSubmit={values => {
                console.log(values)
            }}
        > 
            {formik => (
                <div>
                    <h1 className="my-4-font-weight-bold-display-4">Ingresar</h1>
                    {console.log(formik.values)}
                    <Form>
                        <CampoDeTexto label="Email" name="email" type="email"  />
                        <CampoDeTexto label="Password" name="passwprd" type="password" />
                        <button className="btn btn-dark mt-3" type="submit">Enviar</button>
                        <Link to={`Registrate`}><button className="btn btn-danger mt-3">Registrate</button></Link>
                        
                        
                    </Form>
                </div>
            )}
        </Formik>
    )
}

export default Signin;
