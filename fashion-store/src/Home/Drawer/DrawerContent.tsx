import React from "react";
import { Box, Header, Text, useTheme } from "../../components";
import { Dimensions, Image } from "react-native";
import DrawerItem, { DrawerItemProps } from "./DrawerItem";
import { DrawerActions, useNavigation } from "@react-navigation/native";

export const assets = [require("../../components/assets/patterns/1.png")];

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
    label: "Favorites Outfit",
    screen: "FavoriteOutfits",
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

const DrawerContent = () => {
  const navigation = useNavigation();
  const theme = useTheme();

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
          backgroundColor="drewer"
        >
          <Header
            title="menue"
            left={{
              icon: "x",
              onPress: () => navigation.dispatch(DrawerActions.closeDrawer()),
            }}
            right={{ icon: "shopping-bag", onPress: () => true }}
            dark
          />
        </Box>
      </Box>
      <Box flex={0.8}>
        <Box flex={1} backgroundColor="drewer" />

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
          source={assets[0]}
          style={{
            width: DRAWER_WIDTH,
            height,

            borderTopLeftRadius: theme.borderRadii.xl,
          }}
        />
      </Box>
    </Box>
  );
};

export default DrawerContent;
