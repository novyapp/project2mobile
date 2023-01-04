import React from "react";

import { Feather as Icon } from "@expo/vector-icons";
import { Routes, StackNavigationProps } from "../components/Navigation";
import {
  Box,
  Button,
  Container,
  RoundedIcon,
  RoundedIconButton,
  Text,
} from "../components";

export const assets = [];
const SIZE = 80;

const PasswordChanged = ({
  navigation,
}: StackNavigationProps<Routes, "PasswordChanged">) => {
  const footer = (
    <Box flexDirection="row" justifyContent="center" marginBottom="m">
      <RoundedIconButton
        backgroundColor="white"
        color="secondary"
        name="x"
        size={60}
        onPress={() => navigation.pop()}
      />
    </Box>
  );
  return (
    <Container pattern={0} {...{ footer }}>
      <Box
        padding="xl"
        justifyContent="center"
        flex={1}
        alignItems="center"
        marginBottom="l"
      >
        <RoundedIcon
          name="check"
          size={SIZE}
          backgroundColor="primaryLight"
          color="primary"
        />

        <Text variant="title1" textAlign="center" marginVertical="l">
          Yoour password was successfully changed
        </Text>
        <Text variant="body" textAlign="center" marginBottom="l">
          Close this windows and login again
        </Text>

        <Box>
          <Box alignItems="center" marginTop="m">
            <Button
              variant="primary"
              label="Login"
              onPress={() => navigation.navigate("Login")}
            ></Button>
          </Box>
        </Box>
      </Box>
    </Container>
  );
};

export default PasswordChanged;
