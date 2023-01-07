import React from "react";
import { Box, Text } from "../constants";
import {
  TextInput as RNTextInput,
  TextInputProps as RNTextInputProps,
} from "react-native";

type Props = {};

const TextInput = (props: Props) => {
  return (
    <Box borderBottomWidth={2} borderColor="secondary">
      <Text padding="s" variant="button">
        test
      </Text>
      <RNTextInput underlineColorAndroid="transparent" {...props} />
    </Box>
  );
};

export default TextInput;
