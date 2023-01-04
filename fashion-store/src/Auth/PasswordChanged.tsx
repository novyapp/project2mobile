import React from "react";
import { AuthNavigationProps } from "../components/Navigation";
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
}: AuthNavigationProps<"PasswordChanged">) => {
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
      <Box alignSelf="center">
        <RoundedIcon
          name="check"
          size={SIZE}
          backgroundColor="primaryLight"
          color="primary"
        />
      </Box>

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
    </Container>
  );
};

export default PasswordChanged;
