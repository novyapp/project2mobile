import React from "react";
import { Feather as Icon } from "@expo/vector-icons";
import { Box, Text, Theme } from "./theme";

export interface RoundedIconProps {
  name: keyof typeof Icon.glyphMap;
  size: number;
  color: keyof Theme["colors"];
  backgroundColor: keyof Theme["colors"];
  iconRatio: number;
}

const RoundedIcon = ({
  name,
  size,
  color,
  backgroundColor,
  iconRatio,
}: RoundedIconProps) => {
  const iconSize = size * iconRatio;

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
        <Icon size={iconSize} {...{ name }} />
      </Text>
    </Box>
  );
};

RoundedIcon.defaultProps = { iconRatio: 0.7 };

export default RoundedIcon;
