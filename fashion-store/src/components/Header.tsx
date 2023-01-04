import React from "react";
import { Feather as Icon } from "@expo/vector-icons";
import RoundedIconButton from "./RoundedIconButton";
import { Box, Text } from "./theme";
import { useSafeAreaInsets } from "react-native-safe-area-context";

interface HeaderProps {
  left: {
    icon: keyof typeof Icon.glyphMap;
    onPress: () => void;
  };
  title: string;
  right: {
    icon: keyof typeof Icon.glyphMap;
    onPress: () => void;
  };
  dark: boolean;
}

const Header = ({ title, left, right, dark }: HeaderProps) => {
  const insets = useSafeAreaInsets();
  const color = dark ? "white" : "secondary";
  const backgroundColor = dark ? "secondary" : "lightGrey";

  return (
    <Box
      flexDirection="row"
      justifyContent="space-between"
      alignItems="center"
      paddingHorizontal="m"
      {...{ color }}
      style={{ paddingTop: insets.top }}
    >
      <RoundedIconButton
        iconRatio={0.5}
        size={44}
        name={left.icon}
        {...{ color, backgroundColor }}
        onPress={left.onPress}
      />
      <Text variant="header" color="secondary">
        {title.toUpperCase()}
      </Text>
      <RoundedIconButton
        iconRatio={0.5}
        size={44}
        name={right.icon}
        onPress={right.onPress}
        {...{ color, backgroundColor }}
      />
    </Box>
  );
};

Header.defaultProps = {
  dark: false,
};

export default Header;
