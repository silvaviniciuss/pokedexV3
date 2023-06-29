import { useContext } from "react"
import { PokemonListContainer, PokemonListPageStyle } from "../PokemonListPage/PokemonListPageStyle"
import { globalContext } from "../../Contexts/globalContext"
import {PokemonCard} from "../../Components/PokemonCard/PokemonCard"

export const PokedexPage = () => {
    const {pokedex} = useContext(globalContext)
    
    return (
        <PokemonListPageStyle>
            <h1>Meus Pokemons</h1>
            <PokemonListContainer>
            {pokedex
            .sort((a, b)=>{
                return a.data.id - b.data.id
            })
            .map((pokemon)=>{
                return<PokemonCard
                key={pokemon.id}
                pokemon={pokemon}
                />
            })}
            </PokemonListContainer>
        </PokemonListPageStyle>
    )
}
