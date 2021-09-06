import React from 'react'
import '../App.css';
import heroesImg from '../img/heroesFondo.png';
import Signin from '../Login/SignIn/Signin';
import SignUp from './SignUp/SignUp';


const Registrate = () => {
    return (
        <div className="container mt-3">
            <div className="row">
                <div className="col-md-5">
                    <SignUp />
                </div>
                <div className="col-md-7">
                    <img className="img-fluid w-100" src={heroesImg} alt="heroes registro"/>
                </div>
            </div>
            
        </div>
    )
}

export default Registrate
