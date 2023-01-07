import React from "react";
import { Box, SIZES } from "../../../constants";
import { Image } from "react-native";
import { Button } from "../../../components";
import { AuthNavigationProps } from "../../../@types/navigation";

export const assets = [
  require("../../../../assets/images/logo.png"),
  require("../../../../assets/images/name.png"),
];

const Onboarding = ({ navigation }: AuthNavigationProps<"Onboarding">) => {
  return (
    <Box
      justifyContent="center"
      alignItems="center"
      flex={1}
      backgroundColor="black"
    >
      <Box justifyContent="center" alignItems="center" flex={0.7}>
        <Image
          source={assets[0]}
          resizeMode="contain"
          style={{
            width: SIZES.width * 0.8,
            height: 300,
          }}
        />
        <Image
          source={assets[1]}
          resizeMode="contain"
          style={{
            width: SIZES.width * 0.5,
            height: 70,
          }}
        />
      </Box>
      <Button
        variant="default"
        label="Let's get startet!"
        onPress={() => navigation.navigate("Login")}
      />
    </Box>
  );
};

export default Onboarding;
