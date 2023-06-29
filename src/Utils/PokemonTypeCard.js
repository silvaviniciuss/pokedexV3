import bug from "../assets/img/PokemonTypesImg/bug.png";
import dark from "../assets/img/PokemonTypesImg/dark.png";
import dragon from "../assets/img/PokemonTypesImg/dragon.png";
import electric from "../assets/img/PokemonTypesImg/electric.png";
import fairy from "../assets/img/PokemonTypesImg/fairy.png";
import fighting from "../assets/img/PokemonTypesImg/fighting.png";
import fire from "../assets/img/PokemonTypesImg/fire.png";
import flying from "../assets/img/PokemonTypesImg/flying.png";
import ghost from "../assets/img/PokemonTypesImg/ghost.png";
import grass from "../assets/img/PokemonTypesImg/grass.png";
import ground from "../assets/img/PokemonTypesImg/ground.png";
import ice from "../assets/img/PokemonTypesImg/ice.png";
import normal from "../assets/img/PokemonTypesImg/normal.png";
import poison from "../assets/img/PokemonTypesImg/poison.png";
import psychic from "../assets/img/PokemonTypesImg/psychic.png";
import rock from "../assets/img/PokemonTypesImg/rock.png";
import steel from "../assets/img/PokemonTypesImg/steel.png";
import water from "../assets/img/PokemonTypesImg/water.png";

export const pokemonTypeCards = (type) => {
    switch (type) {
        case "bug":
            return bug;
        case "dark":
            return dark;
        case "dragon":
            return dragon;
        case "electric":
            return electric;
        case "fairy":
            return fairy;
        case "fighting":
            return fighting;
        case "fire":
            return fire;
        case "flying":
            return flying;
        case "ghost":
            return ghost;
        case "grass":
            return grass;
        case "ground":
            return ground;
        case "ice":
            return ice;
        case "normal":
            return normal;
        case "poison":
            return poison;
        case "psychic":
            return psychic;
        case "rock":
            return rock;
        case "steel":
            return steel;
        case "water":
            return water;
        default:
            return water;
    }
}
