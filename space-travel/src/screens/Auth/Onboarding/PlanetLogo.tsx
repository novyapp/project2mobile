import React from "react";
import { Animated } from "react-native";
import { Box, SIZES, Text } from "../../../constants";
import { Moon, planets } from "./planets";

interface PlanetLogoProps {
  scrollX: Animated.Value;
}

const PlanetLogo = ({ scrollX }: PlanetLogoProps) => {
  console.log(scrollX);
  const { width } = SIZES;
  const dotPosition = Animated.divide(scrollX, width);

  const inputRange = [-width, 0, width];
  const translateY = scrollX.interpolate({
    inputRange,
    outputRange: [100, 0, -100],
  });
  const opacity = scrollX.interpolate({
    inputRange,
    outputRange: [0.5, 1, 0.5],
  });

  return (
    <Box
      flexDirection="row"
      justifyContent="center"
      alignItems="center"
      width={width}
      height={width * 0.2}
    >
      <Box>
        <Text variant="title" marginRight="m">
          SPACER
        </Text>
      </Box>
      <Box
        style={{
          position: "absolute",
          top: 0,
          right: 30,
          // backgroundColor: "#FFCC00",
          height: 100,
          overflow: "hidden",
        }}
      >
        {planets.map((planet) => {
          return (
            <Animated.View
              style={{
                width: 100,
                height: 100,
                transform: [{ translateY }],
                opacity,
              }}
            >
              {planet.source}
            </Animated.View>
          );
        })}
      </Box>
    </Box>
  );
};

export default PlanetLogo;
