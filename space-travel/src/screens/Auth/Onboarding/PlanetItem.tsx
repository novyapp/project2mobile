import { Animated, StyleSheet } from "react-native";
import React from "react";
import { Box, SIZES } from "../../../constants";
import { Stars } from "./planets";

type Planet = {
  id: number;
  color: string;
  bgColor: string;
  source: JSX.Element;
};

interface PlanetItemProps {
  index: number;
  scrollX: Animated.Value;
  item: Planet;
}

const PlanetItem = ({ index, item, scrollX }: PlanetItemProps) => {
  const { width, height } = SIZES;

  const mainPlanetSize = width * 0.9;
  const bgPlanetSize = width * 0.5;
  const bgPlanetBottom = mainPlanetSize * 0.25;
  const bgPlanetRight = mainPlanetSize * 0.05;

  const inputRange = [(index - 1) * width, index * width, (index + 1) * width];
  const scale = scrollX.interpolate({
    inputRange,
    outputRange: [0, 1, 0],
  });

  console.log(scrollX);
  return (
    <Box width={width} height={height}>
      <Box
        position="absolute"
        top={0}
        right={0}
        width={width}
        height={width}
        style={StyleSheet.absoluteFillObject}
      >
        <Stars color={item.color} />
      </Box>

      <Animated.View
        style={{
          width: bgPlanetSize,
          height: bgPlanetSize,
          position: "absolute",
          bottom: bgPlanetBottom,
          right: bgPlanetRight,
          transform: [{ scale }],
        }}
      >
        {item.source}
      </Animated.View>
    </Box>
  );
};

export default PlanetItem;
