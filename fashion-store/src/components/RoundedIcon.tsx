import React from "react";
import { Feather as Icon } from "@expo/vector-icons";
import { Box, Text, Theme } from "./theme";

interface RoundedIconProps {
  name: keyof typeof Icon.glyphMap;
  size: number;
  color: keyof Theme["colors"];
  backgroundColor: keyof Theme["colors"];
}

const RoundedIcon = ({
  name,
  size,
  color,
  backgroundColor,
}: RoundedIconProps) => {
  const iconSize = size * 0.7;

  return (
    <Box
      height={size}
      width={size}
      justifyContent="center"
      alignItems="center"
      {...{ backgroundColor }}
      style={{ borderRadius: size / 2 }}
    >
      <Text
        {...{ color }}
        style={{
          width: iconSize,
          height: iconSize,
          lineHeight: iconSize,
        }}
      >
        <Icon
          {...{ name }}
          size={iconSize}
          color="white"
          style={{ textAlign: "center" }}
        />
      </Text>
    </Box>
  );
};

export default RoundedIcon;
