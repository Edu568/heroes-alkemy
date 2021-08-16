import React from 'react'
import { useField } from 'formik'

const TextField = ({ label,...props }) => {

const [field, meta] = useField(props)

    return (
        <div className="mb-2">
            <label htmlFor={field.email}>{label}</label>
            <input className="form-control" autoComplete="off"/>
            
        </div>
    )
}

export default TextField
