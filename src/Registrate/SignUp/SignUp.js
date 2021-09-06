import { Formik, Form } from 'formik'
import React from 'react'
import TextField from './TextField'

const SignUp = () => {
    return (
        <Formik
            initialValues={{
                nombre: "",
                apellido:"",
                email:"",
                password:"",
                confirmPassword: ""
            }}
        
        
        >
            {formik => (
                <div>
                    <h1 className="my-4 font-weight-bold .display-4">Registrate</h1>
                    <Form>
                        <TextField label="Nombre" name="nombre" type="text" required />
                        <TextField label="Apellido" name="apellido" type="text" required />
                        <TextField label="Email" name="email" type="email" required />
                        <TextField label="password" name="password" type="password" required />
                        <TextField label="Confirmar Password" name="confirmPassword" type="password" />
                        <button className="btn btn-dark mt-3" type="submit">Confirmar</button>
                        
                    </Form>
                </div>
            )
                
            }

        </Formik>
    )
}

export default SignUp
