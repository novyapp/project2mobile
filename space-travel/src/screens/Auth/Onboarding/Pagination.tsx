import React from "react";
import { Animated } from "react-native";
import { Box, SIZES } from "../../../constants";
import { planets } from "./planets";

interface PaginationProps {
  scrollX: Animated.Value;
}

const Pagination = ({ scrollX }: PaginationProps) => {
  console.log(scrollX);
  const { width } = SIZES;
  const dotPosition = Animated.divide(scrollX, width);

  return (
    <Box width={80} flexDirection="row" paddingHorizontal="xl" marginTop="l">
      {planets.map(({ color }, index) => {
        const inputRange = [index - 1, index, index + 1];
        const widthSize = dotPosition.interpolate({
          inputRange,
          outputRange: [10, 30, 10],
          extrapolate: "clamp",
        });

        return (
          <Animated.View
            key={`dot-${index}`}
            style={{
              width: widthSize,
              backgroundColor: color,
              height: 10,
              borderRadius: 4,
              margin: 4,
            }}
          />
        );
      })}
    </Box>
  );
};

export default Pagination;
