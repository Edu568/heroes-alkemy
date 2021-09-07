import React, {useState, useEffect } from 'react'
import DetalleHeroe from '../DetalleHeroe/DetalleHeroe'
import axios from 'axios'

const Equipo = () => {

    

    const heroedata =  async () => {
        axios.get('https://superheroapi.com/api/5644245112284225/character-id')
        .then(function(response){
            console.log(response)
        })
        .catch(function (error){
            console.log(error)
        })
    }


    return (
        <div>
            <DetalleHeroe />
        </div>
    )
}

export default Equipo
