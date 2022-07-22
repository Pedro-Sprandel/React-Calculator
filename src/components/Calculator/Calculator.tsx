import React from "react";
import { Box, Flex } from "@chakra-ui/react";
import { Display } from '../Display';
import { Keyboard } from '../Keyboard'
import { colors } from "../../theme/colors";

export const Calculator: React.FC = () => {
  return (
    <Flex align="center" justifyContent="center" h="100vh">
      <Box bg={colors[200]} w="400px" h="600px" rounded="10px" p="16px">
        <Display />
        <Keyboard />
      </Box>
    </Flex>
  );
};
