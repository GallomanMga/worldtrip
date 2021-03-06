import { Flex, Grid, GridItem } from "@chakra-ui/layout";
import Categoria from "./categoria";

export default function Categorias() {
  return (
    <Grid
      templateColumns={["1fr 1fr","1fr 1fr","1fr 1fr","repeat(5, 1fr)"]}
      w="100%"
      justify="space-between"
      align="center"
      mt={["10","32"]}
      mx="auto"
      maxW="1160px"
      flexWrap="wrap"
      gap={[1,5]}
    >
      
    <GridItem>
      <Categoria icon="cocktail" text="vida noturna" />
    </GridItem>
    <GridItem>
      <Categoria icon="surf" text="praia" />
    </GridItem>
    <GridItem>
      <Categoria icon="building" text="moderno" />
    </GridItem>
    <GridItem>
      <Categoria icon="museum" text="clássico" />
      </GridItem>
    <GridItem 
        colSpan={[2, 2, 2, 1]}
        >
      <Categoria icon="earth" text="e mais..." />
      </GridItem>
    </Grid>
  )
}