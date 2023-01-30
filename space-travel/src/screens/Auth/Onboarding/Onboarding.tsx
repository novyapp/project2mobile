import React, { useRef } from "react";
import { Box, SIZES, Text } from "../../../constants";

import { AuthNavigationProps } from "../../../@types/navigation";
import { Moon, planets } from "./planets";
import { LinearGradient } from "expo-linear-gradient";

import { Animated } from "react-native";
import PlanetItem from "./PlanetItem";
import Pagination from "./Pagination";

export const assets = [];

const Onboarding = ({ navigation }: AuthNavigationProps<"Onboarding">) => {
  const { width, height } = SIZES;

  const mainPlanetSize = width * 0.9;
  const mainPlanetBottom = mainPlanetSize * 0.3;
  const mainPlanetRight = mainPlanetSize * 0.1;

  const scrollX = useRef(new Animated.Value(0)).current;

  return (
    <Box flex={1} width={width} backgroundColor="black">
      <LinearGradient
        style={{ flex: 1 }}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        locations={[0.0, 0.899]}
        // Background Linear Gradient
        colors={["transparent", "rgba(37,37,37,1)"]}
      >
        <Animated.FlatList
          horizontal
          data={planets}
          scrollEventThrottle={16}
          snapToAlignment="start"
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item) => `Planet-${item.id}`}
          renderItem={({ item, index }) => (
            <PlanetItem item={item} index={index} scrollX={scrollX} />
          )}
          onScroll={Animated.event(
            [{ nativeEvent: { contentOffset: { x: scrollX } } }],
            { useNativeDriver: false }
          )}
        />

        {/* Header Section */}

        <Box position="absolute" top={height * 0.15}>
          {/* Logo */}
          <Box
            flexDirection="row"
            justifyContent="center"
            alignItems="center"
            width={width}
          >
            <Box>
              <Text variant="title" marginRight="m">
                SPACER
              </Text>
            </Box>
            <Box width={100}>
              <Moon />
            </Box>
          </Box>

          {/* Title Descripction */}
          <Box flexDirection="column" paddingHorizontal="xl" marginTop="xl">
            <Text variant="title">Get to </Text>
            <Text variant="text">everything is possible with spacer</Text>
          </Box>

          {/* Pagination */}
          <Pagination scrollX={scrollX} />
        </Box>

        {/* Moon position */}
        <Box
          position="absolute"
          bottom={-mainPlanetBottom}
          right={-mainPlanetRight}
          width={mainPlanetSize}
          height={mainPlanetSize}
        >
          <Moon />
        </Box>
      </LinearGradient>
    </Box>
  );
};

export default Onboarding;
