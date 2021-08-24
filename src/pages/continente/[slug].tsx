import { Flex } from '@chakra-ui/react'
import BannerContinente from '../../components/BannerContinente'
import Cities from '../../components/Cities'
import Content from '../../components/Content'
import Header from '../../components/Header'

export default function Continente() {

    return(
        <Flex
            direction="column"
        >
            <Header />
            <BannerContinente />

            <Flex
                direction="column"
                maxW="1160px"
                mx="auto"
                mb="10"
                px="1rem"
            >
                <Content />
                <Cities />
            </Flex>
        </Flex>
    )
}