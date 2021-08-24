import { Flex, Heading, Popover, PopoverTrigger, Text, Icon, PopoverContent, PopoverArrow, PopoverCloseButton, PopoverBody } from "@chakra-ui/react"
import { RiInformationLine } from "react-icons/ri"

export default function Kpis() {
    return (

        <Flex
            align="center"
            justify="space-between"        
        >
            <Flex
                direction="column"
                justify="center"
                align={[ "flex-start", "flex-start", "center"]}
            >
                <Heading fontSize={[ "2xl", "5xl" ]} color="yellow.400" fontWeight="500">50</Heading>
                <Text fontSize={[ "md", "xl" ]} color="gray.700" fontWeight="500" >países</Text>
            </Flex>

            <Flex
                direction="column"
                justify="center"
                align={[ "flex-start", "flex-start", "center"]}
            >
                <Heading fontSize={[ "2xl", "5xl" ]} color="yellow.400" fontWeight="500">60</Heading>
                <Text fontSize={[ "md", "xl" ]} color="gray.700" fontWeight="500" >línguas</Text>
            </Flex>

            <Flex
                direction="column"
                justify="center"
                align={[ "flex-start", "flex-start", "center"]}
            >
                <Heading fontSize={[ "2xl", "5xl" ]} color="yellow.400" fontWeight="500">27</Heading>
                <Text fontSize={[ "md", "xl" ]} color="gray.700" fontWeight="500" >
                    cidades +100

                    <Popover>
                        <PopoverTrigger>
                            <span>
                                <Icon 
                                    cursor="pointer" 
                                    as={RiInformationLine} 
                                    ml="1" 
                                    color="gray.400"
                                    w={["10px", "16px"]}
                                    h={["10px", "16px"]}
                                />
                            </span>
                        </PopoverTrigger>
                        <PopoverContent>
                            <PopoverArrow bg="gray.700" />
                            <PopoverCloseButton />
                            <PopoverBody
                                fontWidth="400"
                                fontSize="lg"
                            >
                                Brasil, Peru, Chile, Coreia do Sul
                            </PopoverBody>
                        </PopoverContent>
                    </Popover>
                    
                </Text>
            </Flex>

        </Flex>
    )
}