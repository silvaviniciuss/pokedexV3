import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Header } from "../Components/Header/Header"
import { PokemonListPage } from "../Pages/PokemonListPage/PokemonListPage"
import { PokedexPage } from "../Pages/PokedexPage/PokedexPage"

export const Router = () => {
    return (
        <BrowserRouter>
        <Header/>
        <Routes>
            <Route index element={<PokemonListPage/>}/>
            <Route path="/pokedex/" element={<PokedexPage />}/>
        </Routes>
        </BrowserRouter>
    )
}
