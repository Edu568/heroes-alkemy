import { Formik, Form } from 'formik'
import React from 'react'
import TextField from './TextField'

const SignUp = () => {
    return (
        <Formik
            initialValues={{
            email:'',
            password:'',
            confirmPassword:''
            }}
        >
            {formik =>(
                
                <div>
                     <h1 className="my-4-font-weight-bold-display-4">Registrarse</h1>
                    <Form>
                        <TextField label="Email" name="Email" type="email" />
                        <TextField label="Password" name="Password" type="password" />
                        <TextField label="Confirm Password" name="confirmPassword" type="password" />
                        <button className="btn btn-danger mt-3 ml-3" type="submit">Registrarse</button>
                    </Form>
                </div>
            )}

        </Formik>
    )
}

export default SignUp
