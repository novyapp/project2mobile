import React from "react";
import SocialLogin from "./SocialLogin";
import { Box, Text } from "../../components";

import { BorderlessButton } from "react-native-gesture-handler";

interface FooterProps {
  onPress: () => void;
  title: string;
  action: string;
}

const Footer = ({ onPress, title, action }: FooterProps) => {
  return (
    <>
      <SocialLogin />
      <Box alignItems="center" marginVertical="m">
        <BorderlessButton {...{ onPress }}>
          <Text variant="button">
            <Text color="white">{`${title} `}</Text>
            <Text color="primary" marginLeft="xs">
              {action}
            </Text>
          </Text>
        </BorderlessButton>
      </Box>
    </>
  );
};

export default Footer;
