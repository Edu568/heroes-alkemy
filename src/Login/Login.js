import React from 'react'
import '../App.css';
import heroesImg from '../img/heroesFondo.png';
import Signin from './SignIn/Signin';
import 'bootstrap/dist/css/bootstrap.min.css';




const Login = () => {
    return (
        <div className="container mt-3">
            <div className="row">
                <div className="col-md-5">
                    <Signin />
                </div>
                <div className="col-md-7">
                    <img className="img-fluid w-100" src={heroesImg} alt="heroes login"/>
                </div>
            </div>
        </div>
    )
}

export default Login
