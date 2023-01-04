import { Dimensions, Image, StyleSheet } from "react-native";
import React from "react";
import { Box, useTheme } from "../../components";

interface BackgroundProps {}

const { width, height: wHeight } = Dimensions.get("window");
const aspectRatio = 8000 / 12000;
const height = width * aspectRatio;

const Background = (props: BackgroundProps) => {
  const theme = useTheme();

  return (
    <Box style={StyleSheet.absoluteFill}>
      <Box flex={1 / 3} backgroundColor="black">
        <Box
          flex={1}
          backgroundColor="white"
          borderBottomRightRadius="xl"
        ></Box>
      </Box>
      <Box flex={1 / 3}>
        <Box backgroundColor="white" flex={1} />
        <Box backgroundColor="secondary" flex={1} />
        <Image
          source={require("./assets/1.png")}
          style={{
            ...StyleSheet.absoluteFillObject,
            width: undefined,
            height: undefined,
            borderTopLeftRadius: theme.borderRadii.xl,
            borderBottomRightRadius: theme.borderRadii.xl,
          }}
        />
      </Box>
      <Box flex={1 / 3} backgroundColor="black">
        <Box
          flex={1}
          backgroundColor="secondary"
          borderTopLeftRadius="xl"
        ></Box>
      </Box>
    </Box>
  );
};

export default Background;
