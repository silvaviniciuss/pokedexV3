import { GlobalState } from "./Contexts/GlobalState"
import { GlobalStyle } from "./GlobalStyle"
import { Router } from "./Router/Router"
import { ChakraProvider } from "@chakra-ui/react"
import {ModalPokemon} from "./Components/Modal/ModalPokemon"

function App() {

  return (
    <GlobalState>
      <GlobalStyle />
      <ChakraProvider>
        <ModalPokemon/>
        <Router />
      </ChakraProvider>
    </GlobalState>
  )
}

export default App
