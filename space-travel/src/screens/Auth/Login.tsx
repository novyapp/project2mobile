import { Image } from "react-native";
import React from "react";
import { Box, SIZES } from "../../constants";
import { LinearGradient } from "expo-linear-gradient";
import { TextInput } from "../../components";

type Props = {};

export const assets = [
  require("../../../assets/images/logo.png"),
  require("../../../assets/images/name.png"),
];

const Login = (props: Props) => {
  return (
    <Box backgroundColor="black" flex={1}>
      <LinearGradient
        style={{ flex: 1 }}
        // Background Linear Gradient
        colors={["transparent", "rgba(0,26,43,1)"]}
      >
        <Box justifyContent="center" alignItems="center">
          <Image
            source={assets[0]}
            resizeMode="contain"
            style={{
              width: SIZES.width * 0.7,
              height: 300,
            }}
          />
          <Image
            source={assets[1]}
            resizeMode="contain"
            style={{
              width: SIZES.width * 0.7,
              height: 100,
            }}
          />
        </Box>
        <Box>
          <TextInput placeholder="" icon="mail" />
          <TextInput placeholder="" icon="lock" />
        </Box>
      </LinearGradient>
    </Box>
  );
};

export default Login;
