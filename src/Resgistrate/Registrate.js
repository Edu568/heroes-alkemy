import React from 'react'
import '../App.css';
import heroesImg from '../img/heroesFondo.png';
import SignUp from './SignUp/SignUp'

const Registrate = () => {
    return (
        <div className="container mt-3">
            <div className="row">
                <div className="col-md-5">
                    <SignUp />
                </div>
                <div className="col-md-7">
                    <img className="img-fluid w-100" src={heroesImg} alt="heroes signup"/>
                </div>
            </div>

        </div>
    )
}

export default Registrate
