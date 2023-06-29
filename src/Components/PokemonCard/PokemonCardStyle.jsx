import styled from "styled-components";

export const PokemonCardContainer = styled.main`
  display: flex;
  background-color: ${({ cardColor }) => cardColor};
  min-width: 28vw;
  max-width: 28vw;
  min-height: 20vh;
  max-height: 20vh;
  border-radius: 1rem;
  color: #ffffff;
  position: relative;
`

export const PokemonId = styled.p`
  width: 3rem;
  font-size: 1.8rem;
  text-align: left;
  font-weight: 560;
  margin: 1rem 0 0 1rem;
`

export const PokemonName = styled.h2`
  font-size: 3rem;
  font-family: 'Inter';
  font-weight: 700;
  margin: 0 1rem 0 1rem;
  text-transform: capitalize;
`
export const TypesContainer = styled.div`
  margin: 1rem 0 2rem .8rem;
  display: flex;
  flex-direction: row;
`

export const PokemonType = styled.img`
  max-width: 3vw;
  min-width: 6vw;
  min-height: 2.5vh;
  max-height: 2.8vh;
  margin-right: 0.8rem;
  `

export const PokemonDetail = styled.p`
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 700;
  font-size: 2rem;
  text-decoration-line: underline;
  margin: 0 0 0 1.2rem;
  color: #FFFFFF;
  cursor: pointer;
`

export const PokemonCardImage = styled.img`
  position: absolute;
  width: 11.8vw;
  height: 15vh;
  top: -4rem;
  right: 0;
  z-index: 2;
`

export const PokeballImage = styled.img`
  position: absolute;
  top: 0;
  right: 0;
  height: 110%;
  width: 60%;
`

export const CardButton = styled.button`
  font-size: 1.5rem;
  padding: .4rem .4rem;
  width: 7.4vw;
  height: 3.3vh;
  border-radius: 0.8rem;
  position: absolute;
  bottom: 2.2vh;
  right: 3vw;    
  z-index: 1;
  background-color: ${({buttonBackgroundColor}) => buttonBackgroundColor};
  color: ${({buttonColor})=> buttonColor};
`
