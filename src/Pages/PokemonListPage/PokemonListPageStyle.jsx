import styled from "styled-components";

export const PokemonListPageStyle = styled.main`
    background-color: #5E5E5E;
    color: #FFFFFF;
    height: 100vh;
    font-size: 1.5rem;
    display: flex;
    flex-direction: column;
    h1 {
        margin-left: 2rem;
        margin-top: 1rem;
    }
   
`
export const PokemonListContainer = styled.div`
   display: flex;
   flex-direction: row;
   flex-wrap: wrap;
   justify-content: space-evenly;
   column-gap: 5rem;
   row-gap: 5rem;
   width: 100%;
   margin-top: 2rem;
   background-color: #5E5E5E;
`