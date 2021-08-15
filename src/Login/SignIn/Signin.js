import React from 'react'
import {Formik, Form } from 'formik';
import CampoDeTexto from './CampoDeTexto';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom'


const Signin = () => {
    return (
        <Formik
            initialValues={{
                email:'',
                password:''
            }}
        >
            {formik => (
                <div>
                    <h1 className="my-4-font-weight-bold-display-4">Ingresar</h1>
                    <Form>
                        <CampoDeTexto label="Email" name="email" type="email"  />
                        <CampoDeTexto label="Password" name="passwprd" type="password" />
                        <button className="btn btn-dark mt-3" type="submit">Ingresar</button>
                        <Link to={`/SingUp`}><button className="btn btn-danger mt-3 ml-3" type="reset">Registrarse</button></Link>
                        
                    </Form>
                </div>
            )}
        </Formik>
    )
}

export default Signin;
