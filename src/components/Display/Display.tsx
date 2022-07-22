import React from 'react';
import { Flex, Text } from '@chakra-ui/react';
import { colors } from "../../theme/colors"

export const Display: React.FC = () => {

    return (
        <Flex direction="column" justifyContent="space-around" bg={colors[400]} w="full" h="25%" rounded="9px" textAlign="right" p="16px">
            <Text color={colors[300]} fontSize="20px">1 + 1 = 2</Text>
            <Text color={colors[100]} fontSize="36px">2 + 2 = 4</Text>
        </Flex>
    )
}