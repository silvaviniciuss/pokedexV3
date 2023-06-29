import { useEffect, useState } from "react"
import { baseUrl } from "../Constants/baseUrl"
import { useRequestData } from "../Hooks/useRequestData"
import {globalContext} from "./globalContext"

export const GlobalState = ({children}) => {
    const [pokemons, setPokemons, isLoading] = useRequestData(baseUrl, [])
    const [pokedex, setPokedex] = useState([])
    const [isOpen, onClose] = useState(false)
    const [onOpen, setOnOpen] = useState(0)

    const addPokemonToPokedex = (poke) => {
        const updatePokemonListPage = pokemons.filter((pokemon)=>{
            if(poke.data.id === pokemon.data.id) {
                return poke.data.id !== pokemon.data.id
            } else {
                return poke
            }
        })
        onClose(true)
        setOnOpen(0)
        setPokedex([...pokedex, poke])
        setPokemons(updatePokemonListPage)
    }

    const removePokemonFromPokedex = (poke) => {
        const addBackPokemonInPokemonList = pokedex.find((pokemon) => {
            return pokemon.data.id === poke.data.id
        })
        const updatePokedexList = pokedex.filter((pokemon) => {
            if (poke.data.id === pokemon.data.id) {
                return poke.data.id !== pokemon.data.id
            } else {
                return poke
            }
        })
        onClose(true)
        setOnOpen(1)
        setPokemons([...pokemons, addBackPokemonInPokemonList])
        setPokedex(updatePokedexList)
    }

    const context = {
        pokemons,
        setPokemons,
        isLoading,
        pokedex,
        setPokedex,
        addPokemonToPokedex,
        isOpen,
        onClose,
        onOpen,
        setOnOpen,
        removePokemonFromPokedex
    }

    return (
        <globalContext.Provider value = {context}> 
            {children}
        </globalContext.Provider>
    )

}
