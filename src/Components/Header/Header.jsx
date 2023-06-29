import { HeaderButon, HeaderContainer, ImageLogo } from "./HeaderStyle"
import PokemonLogo from "../../assets/Img/PokemonLogo.png"
import { useNavigate } from "react-router-dom"
import {goToPokedexPage} from "../../Router/Coordinator"

export const Header = () => {
    const navigate = useNavigate()
    
    return (
        <HeaderContainer>
            <ImageLogo src={PokemonLogo}/>
            <HeaderButon
            onClick={() => goToPokedexPage(navigate)}
            >Pokedex</HeaderButon>
        </HeaderContainer>
    )
}

