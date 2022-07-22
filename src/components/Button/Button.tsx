import React from "react";
import { GridItem, Text } from "@chakra-ui/react";
import { colors } from "../../theme/colors";

interface ButtonProps {
  symbol: string;
}

export const Button: React.FC<ButtonProps> = (props) => {
  const { symbol } = props;

  return (
    <GridItem
      bg={colors[100]}
      rounded="6px"
      display="flex"
      alignItems="center"
      justifyContent="center"
      as="button"
    >
      <Text fontSize="32px" color={colors[400]}>{symbol}</Text>
    </GridItem>
  );
};
