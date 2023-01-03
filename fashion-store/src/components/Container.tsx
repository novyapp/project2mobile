import { Image, StyleSheet, Dimensions } from "react-native";
import React, { ReactNode } from "react";
import theme, { Box } from "./theme";
import { useSafeAreaInsets } from "react-native-safe-area-context";

interface ContainerProps {
  children: ReactNode;
  footer: ReactNode;
}

const { width } = Dimensions.get("window");
const aspectRatio = 8000 / 12000;
const height = width * aspectRatio;

export const assets = [require("./assets/patterns/1.png")];

const Container = ({ children, footer }: ContainerProps) => {
  const insests = useSafeAreaInsets();

  return (
    <Box flex={1} backgroundColor="secondary">
      {/* Header */}
      {/* <StatusBar barStyle="light-content" /> */}
      <Box backgroundColor="white">
        <Box
          borderBottomLeftRadius="xl"
          overflow="hidden"
          height={height * 0.61}
        >
          <Image
            source={assets[0]}
            style={{
              width,
              height,
              borderBottomLeftRadius: theme.borderRadii.xl,
            }}
          />
        </Box>
      </Box>
      <Box flex={1} overflow="hidden">
        <Image
          source={assets[0]}
          style={{
            ...StyleSheet.absoluteFillObject,
            width,
            height,
            top: -height * 0.61,
          }}
        />
        {/* Content */}
        <Box
          borderRadius="xl"
          borderTopLeftRadius="o"
          backgroundColor="white"
          flex={1}
        >
          {children}
        </Box>
        {/* Footer */}
        <Box backgroundColor="secondary" paddingTop="m">
          {footer}
          <Box height={insests.bottom}></Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Container;
