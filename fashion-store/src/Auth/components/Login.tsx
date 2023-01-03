import { View } from "react-native";
import React from "react";
import { Routes, StackNavigationProps } from "../../components/Navigation";

import { Box, Button, Container, Text } from "../../components";
import SocialLogin from "../Login/SocialLogin";

export const assets = [];

const Login = ({ navigation }: StackNavigationProps<Routes, "Login">) => {
  const footer = (
    <>
      <SocialLogin />
      <Box alignItems="center">
        <Button variant="transparent" onPress={() => alert("SignUp")}>
          <Box flexDirection="row" justifyContent="center">
            <Text variant="button" color="white">
              Don't have an account?
            </Text>
            <Text variant="button" color="primary" marginLeft="xs">
              Sign up here
            </Text>
          </Box>
        </Button>
      </Box>
    </>
  );

  return (
    <Container {...{ footer }}>
      <View />
    </Container>
  );
};

export default Login;
