import { View, Text, TouchableOpacity } from "react-native";
import React from "react";

const TextButton = ({
  contentContainerStyle,
  disabled,
  label,
  labelStyle,
  onPress,
}) => {
  return (
    <TouchableOpacity
      className="items-center justify-center bg-brand-primary"
      style={{ ...contentContainerStyle }}
      disabled={disabled}
      onPress={onPress}
    >
      <Text className="text-white font-semibold" style={{ ...labelStyle }}>
        {label}
      </Text>
    </TouchableOpacity>
  );
};

export default TextButton;
