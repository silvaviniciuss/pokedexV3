import { PokemonCardContainer, PokemonDetail, PokemonId, PokemonName, PokemonType, TypesContainer, PokemonCardImage, PokeballImage, CardButton } from "./PokemonCardStyle"
import { pokemonCardColor } from "../../Utils/PokemonCardColor"
import { pokemonTypeCards } from "../../Utils/PokemonTypeCard"
import PokeballCardImage from "../../assets/Img/pngwing2.png"
import { useContext } from "react"
import { globalContext } from "../../Contexts/globalContext"
import { useLocation } from "react-router-dom"

export const PokemonCard = ({ pokemon }) => {
    const { addPokemonToPokedex, removePokemonFromPokedex } = useContext(globalContext)

    const locate = useLocation()

    const cardButton = (poke) => {
        if (locate.pathname === '/') {
            return <CardButton
                buttonBackgroundColor={'#FFFFFF'}
                buttonColor={'black'}
                onClick={() => addPokemonToPokedex(poke)}
            >
                Capturar
            </CardButton>
        } else {
            return <CardButton
                buttonBackgroundColor={'#FF6262'}
                buttonColor={'#FFFFFF'}
                onClick={() => removePokemonFromPokedex(poke)}
            >
                Excluir
            </CardButton>
        }
    }
    return (
        <PokemonCardContainer
            cardColor={pokemonCardColor(pokemon.data.types[0].type.name)}
        >
            <div>
                <PokemonId>
                    {pokemon.data.id < 10 ?
                        '#0' + pokemon.data.id
                        : '#' + pokemon.data.id
                    }
                </PokemonId>
                <PokemonName>{pokemon.data.name}</PokemonName>
                <TypesContainer>
                    {pokemon.data.types.map((type) => {
                        return <PokemonType
                            key={type.id}
                            src={pokemonTypeCards(type.type.name)}
                        />
                    })}
                </TypesContainer>
                <PokemonDetail> Detalhes</PokemonDetail>
            </div>
            <div>
                <PokemonCardImage
                    src={pokemon.data.sprites.other["official-artwork"].front_default}
                />
            </div>
            <PokeballImage src={PokeballCardImage} />
            {cardButton(pokemon)}
        </PokemonCardContainer>
    )
}
