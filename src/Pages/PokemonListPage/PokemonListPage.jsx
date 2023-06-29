import { PokemonListContainer, PokemonListPageStyle } from "./PokemonListPageStyle"
import { PokemonCard } from "../../Components/PokemonCard/PokemonCard"
import { useContext } from "react"
import { globalContext } from "../../Contexts/globalContext"

export const PokemonListPage = () => {
    const {pokemons, isLoading} = useContext(globalContext)

    return (
        <PokemonListPageStyle>
            <h1>Todos os Pokémons</h1>
            {isLoading && <img src="https://media.tenor.com/_3R8EL8_DQYAAAAi/pokeball-pokemon.gif"/>}
            <PokemonListContainer>
            {!isLoading && pokemons
            .sort((a, b)=>{
                return a.data.id - b.data.id
            })
            .map((poke)=>{
                return <PokemonCard
                id={poke.data.id}
                pokemon={poke}
                />
            })}
            </PokemonListContainer>
        </PokemonListPageStyle>
    )
}
