import React from "react";
import { Grid } from "@chakra-ui/react";
import { Button } from "../Button";

export const Keyboard: React.FC = () => {
  const symbols = [
    "7",
    "8",
    "9",
    "÷",
    "4",
    "5",
    "6",
    "X",
    "1",
    "2",
    "3",
    "-",
    "0",
    ".",
    "=",
    "+",
  ];

  return (
    <Grid templateColumns="repeat(4, 1fr)" templateRows="repeat(4, 1fr)" gap="16px" h="75%" pt="16px">
      {symbols.map((symbol, index) => (
        <Button key={index} symbol={symbol} />
      ))}
    </Grid>
  );
};
