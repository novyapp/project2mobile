import { Image, StyleSheet, Dimensions, Platform } from "react-native";
import React, { ReactNode } from "react";
import { Box, useTheme } from "./theme";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import Constants from "expo-constants";

interface ContainerProps {
  children: ReactNode;
  footer: ReactNode;
}

const { width, height: wHeight } = Dimensions.get("window");
const aspectRatio = 8000 / 12000;
const height = width * aspectRatio;

export const assets = [require("./assets/patterns/1.png")];

const Container = ({ children, footer }: ContainerProps) => {
  const insests = useSafeAreaInsets();
  const theme = useTheme();

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
