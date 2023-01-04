import React from "react";
import { DrawerContentComponentProps } from "@react-navigation/drawer";
import { Box, RoundedIconButton, Text, useTheme } from "../../components";
import { Dimensions, Image, StyleSheet } from "react-native";
import DrawerItem, { DrawerItemProps } from "./DrawerItem";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const { width } = Dimensions.get("window");
export const DRAWER_WIDTH = width * 0.8;
const aspectRatio = 8000 / 12000;
const height = width * aspectRatio;

const items: DrawerItemProps[] = [
  {
    icon: "zap",
    label: "Outfit Ideas",
    screen: "OutfitIdeas",
    color: "primary",
  },
  {
    icon: "heart",
    label: "FavoritesOutfit",
    screen: "FavoritesOutfit",
    color: "orange",
  },
  {
    icon: "user",
    label: "Edit Profile",
    screen: "EditProfile",
    color: "yellow",
  },
  {
    icon: "clock",
    label: "Transaction History",
    screen: "TransactionHistory",
    color: "pink",
  },
  {
    icon: "settings",
    label: "Notifications Settings",
    screen: "NotificationsSettings",
    color: "violet",
  },
  {
    icon: "log-out",
    label: "Logout",
    screen: "Logout",
    color: "secondary",
  },
];

const DrawerContent = (props: DrawerContentComponentProps) => {
  const theme = useTheme();
  const insets = useSafeAreaInsets();

  return (
    <Box flex={1}>
      <Box backgroundColor="white" flex={0.2}>
        <Box
          position="absolute"
          top={0}
          bottom={0}
          left={0}
          right={0}
          borderBottomRightRadius="xl"
          backgroundColor="secondary"
          flexDirection="row"
          justifyContent="space-between"
          paddingHorizontal="m"
          style={{ paddingTop: insets.top }}
        >
          <RoundedIconButton
            size={24}
            name="x"
            color="white"
            backgroundColor="secondary"
            onPress={() => true}
          />
          <Text color="white">MY PROFILE</Text>
          <RoundedIconButton
            size={24}
            name="shopping-bag"
            color="white"
            backgroundColor="secondary"
            onPress={() => true}
          />
        </Box>
      </Box>
      <Box flex={0.8}>
        <Box flex={1} backgroundColor="secondary" />
        <Box flex={1} backgroundColor="primary" />
        <Box
          backgroundColor="white"
          position="absolute"
          top={0}
          bottom={0}
          left={0}
          right={0}
          borderTopLeftRadius="xl"
          borderBottomRightRadius="xl"
          justifyContent="center"
          padding="xl"
        >
          <Box
            position="absolute"
            top={-50}
            left={DRAWER_WIDTH / 2 - 50}
            alignSelf="center"
            backgroundColor="primary"
            width={100}
            height={100}
            style={{ borderRadius: 50 }}
          />
          <Box marginVertical="m">
            <Text variant="title1" textAlign="center">
              novyAPP
            </Text>
            <Text variant="body" textAlign="center">
              info@novyapp.com
            </Text>
          </Box>
          {items.map((item) => (
            <DrawerItem key={item.screen} {...item} />
          ))}
        </Box>
      </Box>
      <Box
        backgroundColor="white"
        width={DRAWER_WIDTH}
        height={height * 0.61}
        overflow="hidden"
      >
        <Image
          source={require("../../components/assets/patterns/1.png")}
          style={{
            ...StyleSheet.absoluteFillObject,
            width: DRAWER_WIDTH,
            height,
            position: "absolute",
            left: 0,
            right: 0,
            top: -height * (1 - 0.61),
            borderTopLeftRadius: theme.borderRadii.xl,
          }}
        />
      </Box>
    </Box>
  );
};

export default DrawerContent;
