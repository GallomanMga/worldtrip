import { Flex, Heading } from '@chakra-ui/react'
import Banner from '../components/Banner'
import Categorias from '../components/Categorias'
import Divisor from '../components/divisor'
import Header from '../components/Header'
import Slides from '../components/Slides'



export default function Home() {
  return (
    <Flex direction = "column">
      <Header />
      <Banner />
      <Categorias />

      <Divisor />

      <Heading
        textAlign="center"
        fontWeight="500"
        mb={[ "5", "14" ]}
        fontSize={[ "lg", "3xl", "4xl"]}
      >
        Vamos nessa?<br />
        Então escolha seu continente
      </Heading>

      <Slides />
    </Flex>
  )
}
