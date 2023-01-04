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
}

const Header = ({ title, left, right }: HeaderProps) => {
  const insets = useSafeAreaInsets();

  return (
    <Box
      position="absolute"
      top={0}
      bottom={0}
      left={0}
      right={0}
      borderBottomRightRadius="xl"
      backgroundColor="drewer"
      flexDirection="row"
      justifyContent="space-between"
      paddingHorizontal="m"
      style={{ paddingTop: insets.top }}
    >
      <RoundedIconButton
        iconRatio={0.5}
        size={24}
        name={left.icon}
        color="white"
        backgroundColor="secondary"
        onPress={left.onPress}
      />
      <Text variant="header" color="secondary">
        {title.toUpperCase()}
      </Text>
      <RoundedIconButton
        iconRatio={0.5}
        size={24}
        name={right.icon}
        color="white"
        backgroundColor="secondary"
        onPress={right.onPress}
      />
    </Box>
  );
};

export default Header;
