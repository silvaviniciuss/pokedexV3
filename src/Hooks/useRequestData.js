import { useEffect, useState } from "react"
import axios from "axios"

export const useRequestData = (url ,initialState) => {
    const [data, setData] = useState(initialState)
    const [isLoading, setIsLoading] = useState(false)

    useEffect(()=>{
        setIsLoading(true)
        getAllPokemons()
    },[])
    
    const getAllPokemons = async () => {
        try {
            let getPokemons = []
            for (let i = 1; i<12; i++) {
                getPokemons.push(url + i)
            }
            const res = await axios.all(
                getPokemons.map((poke)=>
                axios.get(poke)) 
            )
            setIsLoading(false)
            setData(res)
        } catch (error) {
            setIsLoading(false)
            console.log(error.response)
        }
    }

    return [data, setData, isLoading]
}
