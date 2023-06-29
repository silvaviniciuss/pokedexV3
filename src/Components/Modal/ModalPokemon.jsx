import {
    Modal,
    ModalOverlay,
    ModalContent,
    Flex,
    ModalCloseButton,
} from '@chakra-ui/react'
import { useContext } from "react"
import { globalContext } from '../../Contexts/globalContext'
import { PModal, ContainerText, TitleModal } from './ModalPokemonStyle'

export const ModalPokemon = () => {
    const context = useContext(globalContext)
    const {isOpen, onClose, onOpen} = context
    return (
        <>
            <Modal 
            size={"md"}
            isOpen={isOpen} 
            onClose={()=> onClose(false)}>
                <ModalOverlay />
                <ModalContent>
                    <ModalCloseButton />
                    <Flex
                        style={{ borderRadius: "10rem" }}
                        height={"22.2rem"}
                        flexDirection={"column"}
                        justifyContent={"center"}
                        alignItems={"center"}
                    >
                        {onOpen === 0 ?
                            <ContainerText>
                                <TitleModal>Gotcha!</TitleModal>
                                <PModal>O pokemon foi adicionado a sua Pokedex</PModal>
                            </ContainerText>
                            :
                            <ContainerText>
                                <TitleModal>Oh, no!</TitleModal>
                                <PModal>O pokemon foi removido da sua Pokedex</PModal>
                            </ContainerText>
                        }

                    </Flex>

                </ModalContent>
            </Modal>
        </>
    )
}