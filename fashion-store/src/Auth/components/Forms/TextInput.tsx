import {
  TextInput as RNTextInput,
  TextInputProps as RNTextInputProps,
} from "react-native";
import React, { forwardRef } from "react";
import { Box, useTheme } from "../../../components";
import { Feather as Icon } from "@expo/vector-icons";

interface TextInputProps extends RNTextInputProps {
  icon: keyof typeof Icon.glyphMap;
  touched?: boolean;
  error?: string;
}

const TextInput = forwardRef<RNTextInput, TextInputProps>(
  ({ icon, touched, error, ...props }, ref) => {
    const theme = useTheme();
    const SIZE = theme.borderRadii.m * 2.5;

    const reColor = !touched ? "text" : error ? "danger" : "primary";
    const color = theme.colors[reColor];

    return (
      <Box
        flexDirection="row"
        height={48}
        alignItems="center"
        borderRadius="s"
        padding="s"
        borderWidth={1}
        borderColor={reColor}
      >
        <Box padding="s">
          <Icon name={icon} size={15} {...{ color }} />
        </Box>
        <Box flex={1}>
          <RNTextInput
            underlineColorAndroid="transparent"
            placeholderTextColor={color}
            {...props}
            {...{ ref }}
          />
        </Box>

        {touched && (
          <Box
            height={SIZE}
            width={SIZE}
            justifyContent="center"
            alignItems="center"
            backgroundColor={!error ? "primary" : "danger"}
            style={{ borderRadius: SIZE / 2 }}
          >
            <Icon name={!error ? "check" : "x"} size={12} color="white" />
          </Box>
        )}
      </Box>
    );
  }
);

export default TextInput;
