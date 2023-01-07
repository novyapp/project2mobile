import React from "react";
import { Box, SIZES, Text } from "../../../constants";

import { AuthNavigationProps } from "../../../@types/navigation";
import { Mars, Moon, Stars, planets } from "./planets";
import { LinearGradient } from "expo-linear-gradient";

export const assets = [
  require("../../../../assets/images/logo.png"),
  require("../../../../assets/images/name.png"),
];

const Onboarding = ({ navigation }: AuthNavigationProps<"Onboarding">) => {
  const { width, height } = SIZES;

  const mainPlanetSize = width * 0.9;
  const mainPlanetBottom = mainPlanetSize * 0.3;
  const mainPlanetRight = mainPlanetSize * 0.1;

  const bgPlanetSize = width * 0.5;
  const bgPlanetBottom = mainPlanetSize * -0.35;
  const bgPlanetRight = mainPlanetSize * 0.05;

  console.log(mainPlanetBottom, SIZES.width);

  return (
    <Box flex={1} backgroundColor="black">
      <LinearGradient
        style={{ flex: 1 }}
        start={{ x: 0.2, y: 0.5 }}
        end={{ x: 1, y: 1 }}
        locations={[0.0, 0.699, 0.999]}
        // Background Linear Gradient
        colors={["transparent", "rgba(204,82,14,0.4)", "rgba(204,82,14,0.7)"]}
      >
        <Box flex={0.5} alignItems="center" justifyContent="center">
          <Text variant="hero">SPACER</Text>
          <Text>Get There</Text>
          <Text>everything is possible with space</Text>
        </Box>

        <Box position="absolute" top={0} right={0} width={width} height={width}>
          <Stars />
        </Box>

        <Box
          position="absolute"
          bottom={-bgPlanetBottom}
          right={-bgPlanetRight}
          width={bgPlanetSize}
          height={bgPlanetSize}
        >
          <Mars />
        </Box>
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
