import { Image, StyleSheet, Dimensions, Platform } from "react-native";
import React, { ReactNode } from "react";
import { Box, useTheme } from "./theme";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import Constants from "expo-constants";

interface ContainerProps {
  children: ReactNode;
  footer: ReactNode;
  pattern: 0 | 1 | 2;
}

const { width, height: wHeight } = Dimensions.get("window");
const aspectRatio = 8000 / 12000;
const height = width * aspectRatio;

export const assets = [
  require("./assets/patterns/1.png"),
  require("./assets/patterns/2.png"),
  require("./assets/patterns/3.png"),
] as const;

const Container = ({ children, footer, pattern }: ContainerProps) => {
  const insests = useSafeAreaInsets();
  const theme = useTheme();
  const asset = assets[pattern];

  return (
    <KeyboardAwareScrollView scrollEnabled={false}>
      <Box
        height={
          wHeight + (Platform.OS === "android" ? Constants.statusBarHeight : 0)
        }
        backgroundColor="secondary"
      >
        {/* Header */}

        <Box backgroundColor="white">
          <Box
            borderBottomLeftRadius="xl"
            overflow="hidden"
            height={height * 0.61}
          >
            <Image
              source={asset}
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
            source={asset}
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
            paddingBottom="m"
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
    </KeyboardAwareScrollView>
  );
};

export default Container;
