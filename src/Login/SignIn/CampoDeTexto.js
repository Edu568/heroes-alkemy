import React from 'react'
import { useField } from 'formik'

const CampoDeTexto = ({ label,...props }) => {

const [field, meta] = useField(props)
    console.log(meta)

    return (
        <div className="mb-2">  
            <label htmlFor={field.email}>{label}</label>
            <input className="form-control shadow-none" {...props} autoComplete="off"/>
            
            
        </div>
    )
}

export default CampoDeTexto
