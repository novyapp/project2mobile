import { StyleSheet } from "react-native";
import React from "react";
import { RectButton } from "react-native-gesture-handler";
import { useTheme } from "@shopify/restyle";

import { Text } from "./theme";

const styles = StyleSheet.create({
  container: {
    borderRadius: 25,
    height: 50,
    width: 245,
    justifyContent: "center",
    alignItems: "center",
  },
  label: {
    fontSize: 15,
    fontFamily: "SFProText-Regular",
  },
});

interface ButtonProps {
  variant: "default" | "primary";
  label?: string;
  onPress: () => void;
}

const Button = ({ label, variant, onPress }: ButtonProps) => {
  const theme = useTheme();
  const backgroundColor =
    variant === "primary" ? theme.colors.primary : theme.colors.grey;
  const color =
    variant === "primary" ? theme.colors.white : theme.colors.secondary;

  return (
    <RectButton
      style={[styles.container, { backgroundColor }]}
      {...{ onPress }}
    >
      <Text variant="button" style={{ color }}>
        {label}
      </Text>
    </RectButton>
  );
};

Button.defaultProps = { variant: "default" };

export default Button;
