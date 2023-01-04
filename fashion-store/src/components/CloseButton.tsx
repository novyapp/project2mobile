import React from "react";
import { Feather as Icon } from "@expo/vector-icons";
import { Box, Text } from "./theme";
import { RectButton } from "react-native-gesture-handler";

interface CloseButtonProps {
  onPress: () => void;
}
const SIZE = 60;

const CloseButton = ({ onPress }: CloseButtonProps) => {
  return (
    <RectButton {...{ onPress }}>
      <Box
        height={SIZE}
        width={SIZE}
        borderRadius="xl"
        backgroundColor="white"
        justifyContent="center"
        alignItems="center"
        marginBottom="m"
      >
        <Text color="secondary">
          <Icon name="x" size={25} />
        </Text>
      </Box>
    </RectButton>
  );
};

export default CloseButton;
