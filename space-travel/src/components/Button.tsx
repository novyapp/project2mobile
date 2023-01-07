import React from "react";
import { Pressable } from "react-native";
import { Box, Text, useTheme } from "../constants";

interface ButtonProps {
  label: string;
  variant: "default" | "outline";
  onPress?: () => void;
}

const Button = ({ label, variant, onPress }: ButtonProps) => {
  const theme = useTheme();
  const backgroundColor = variant === "default" ? theme.colors.primary : null;
  const outline = variant === "outline" ? theme.colors.secondary : null;
  const radius =
    variant === "default" ? theme.borderRadii.m : theme.borderRadii.l;

  return (
    <Pressable {...{ onPress }}>
      <Box
        style={{
          backgroundColor: backgroundColor,
          borderRadius: radius,
          borderColor: outline,
          borderWidth: 1,
        }}
        paddingVertical="s"
        paddingHorizontal="m"
      >
        <Text variant="button">{label}</Text>
      </Box>
    </Pressable>
  );
};

export default Button;
