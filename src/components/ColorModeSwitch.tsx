import { HStack, Switch, Text, useColorMode } from "@chakra-ui/react";
import React from "react";

const ColorModeSwitch = () => {
  const { toggleColorMode, colorMode } = useColorMode();

  return (
    <HStack>
      <Switch
        isChecked={colorMode === "dark"}
        onChange={toggleColorMode}
      ></Switch>
      <Text whiteSpace="nowrap">Dark Mode</Text>
    </HStack>
  );
};

export default ColorModeSwitch;
