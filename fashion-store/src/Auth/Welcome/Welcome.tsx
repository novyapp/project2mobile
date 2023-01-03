import { Image, Dimensions } from "react-native";
import React from "react";
import { Box, Button, Text, theme } from "../../components";

const { width } = Dimensions.get("window");

const picture = {
  src: require("../assets/4.png"),
  width: 408,
  height: 612,
};

export const assets = [picture.src];

const Welcome = () => {
  return (
    <Box flex={1} backgroundColor="white">
      <Box
        flex={1}
        borderBottomRightRadius="xl"
        backgroundColor="grey"
        alignContent="center"
        justifyContent="flex-end"
      >
        <Image
          source={picture.src}
          style={{
            width: width - theme.borderRadii.xl,
            height:
              ((width - theme.borderRadii.xl) * picture.height) / picture.width,
          }}
        />
      </Box>
      <Box flex={1} borderTopLeftRadius="xl">
        <Box
          backgroundColor="grey"
          position="absolute"
          top={0}
          left={0}
          right={0}
          bottom={0}
        >
          <Box
            backgroundColor="white"
            justifyContent="space-evenly"
            alignItems="center"
            borderTopLeftRadius="xl"
            flex={1}
            padding="xl"
          >
            <Text variant="title2">Let's get Started</Text>
            <Text variant="body" textAlign="center">
              Login to your account below or signuo fir an amazing experience
            </Text>
            <Button variant="primary" label="Hae an account? Login" />
            <Button label="Join us its Free" />
            <Button variant="transparent" label="Forgot password?" />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Welcome;
