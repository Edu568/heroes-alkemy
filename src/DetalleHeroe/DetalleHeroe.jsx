import axios from 'axios'
import React, {useState, useEffect} from 'react'

const DetalleHeroe = () => {
     
    const [heroData, setHeroData] = useState([])
    const [loading, setLoading] = useState("")
    useEffect(() => {
        axios.get('https://superheroapi.com/api/5644245112284225/character-id')
        .then(function(response){
            console.log(response)
        })
        .catch(function (error){
            console.log(error)
        })
    
    }, [])

    const loadHero = async (data) => {
        let heroData = await Promise.all(data.map(async hero => {
            let heroRecord = await getHero(hero)
            return heroRecord
        }))
    }



    return (
        <div>
            
        </div>
    )
}

export default DetalleHeroe