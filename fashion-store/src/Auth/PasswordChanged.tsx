import React from "react";

import { Feather as Icon } from "@expo/vector-icons";
import { Routes, StackNavigationProps } from "../components/Navigation";
import { Box, Button, CloseButton, Container, Text } from "../components";

export const assets = [];
const SIZE = 80;

const PasswordChanged = ({
  navigation,
}: StackNavigationProps<Routes, "PasswordChanged">) => {
  const footer = (
    <Box flexDirection="row" justifyContent="center">
      <CloseButton onPress={() => navigation.pop()} />
    </Box>
  );
  return (
    <Container pattern={0} {...{ footer }}>
      <Box padding="xl" justifyContent="center" flex={1} alignItems="center">
        <Box
          height={SIZE}
          width={SIZE}
          borderRadius="xl"
          backgroundColor="primaryLight"
          justifyContent="center"
          marginBottom="l"
        >
          <Text color="primary" lineHeight={60} textAlign="center">
            <Icon name="check" size={45} />
          </Text>
        </Box>
        <Text variant="title1" textAlign="center" marginBottom="l">
          Yoour password was successfully changed
        </Text>
        <Text variant="body" textAlign="center" marginBottom="l">
          Enter the email address associated with your account
        </Text>

        <Box>
          <Box alignItems="center" marginTop="m">
            <Button
              variant="primary"
              label="Reset password"
              onPress={() => navigation.navigate("Login")}
            ></Button>
          </Box>
        </Box>
      </Box>
    </Container>
  );
};

export default PasswordChanged;
