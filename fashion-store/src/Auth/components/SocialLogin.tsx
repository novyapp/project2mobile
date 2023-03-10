import React, { ReactNode } from "react";
import Svg, { Path } from "react-native-svg";
import { Box, useTheme } from "../../components";

const Facebook = () => (
  <Svg height={24} width={12} viewBox="88.428 12.828 107.543 207.085">
    <Path
      d="M158.232 219.912v-94.461h31.707l4.747-36.813h-36.454V65.134c0-10.658 2.96-17.922 18.245-17.922l19.494-.009V14.278c-3.373-.447-14.944-1.449-28.406-1.449-28.106 0-47.348 17.155-47.348 48.661v27.149H88.428v36.813h31.788v94.461l38.016-.001z"
      fill="#3c5a9a"
    />
  </Svg>
);

const Apple = () => (
  <Svg width={34} height={40} viewBox="0 0 1280 1280">
    <Path
      fill="#000000"
      d="M798.3 204.1c-40.7 4.7-98.3 40.6-126.9 79-16.5 22-26.2 43-34.6 74.6l-4.2 15.8.2 16.8c.2 9.2.7 17.8 1.2 19.2 1.3 3.3 3.8 3.8 21.4 3.9 14.6.1 15.5 0 28-3.7 33.4-9.7 57.9-24.3 75.3-45 4.2-5.1 10.5-11.9 13.8-15.3 11-10.8 25.1-34.8 32.9-55.6 7.8-20.9 11.3-40.3 12.3-67.9l.6-17.7-2.6-2.6c-2.9-2.9-4.5-3-17.4-1.5z"
    />
    <Path
      fill="#000000"
      d="M789 410.8c-19.8 1-73.1 15.8-111.4 30.8-23.2 9.1-23.2 9.1-27.8 9.9-8 1.3-27.6-4.4-61.3-18-17.9-7.1-36.3-12.5-63.5-18.7-11.4-2.5-30.3-2.8-38.5-.5-3.3.9-13.7 3-23.1 4.6-20.2 3.6-31.6 7.1-46.8 14.6-45.9 22.4-77.2 54.6-102 105-11 22.2-19.1 43.9-25.1 67-8.9 34.3-9.1 100.1-.4 140 1 4.9 1.9 10.7 1.9 13 0 4.8.9 8.4 9.3 41.5 7.8 30.6 7 28.1 21.9 65.5 20.9 52.5 27.5 64.1 70.2 123 17.5 24.1 26.4 35.1 39.3 48.2 13.5 13.8 24.4 21.8 39.8 29.4 17.4 8.5 25 10.4 41 10.3 20.5 0 37-4.2 68.4-17.4 19.8-8.3 21.1-8.7 57.1-16.1 10.8-2.3 20.8-2.1 36 .4 5.2.8 13 2 17.2 2.6 8.5 1.2 17.1 4 39.3 12.9 26.8 10.8 45.7 15.6 65.5 16.8 28.8 1.8 56.6-11 86.3-39.5 30.3-29.3 58.6-69.4 87.2-123.5 7.7-14.6 20-44.5 22.1-53.5.9-3.6 2.4-8.1 3.5-9.9 1-1.8 1.9-4.3 1.9-5.4 0-3.6-7.3-9.3-20.2-15.8-24.3-12.5-48.2-33.9-64.3-58-11.5-17.3-23.1-43.2-26-58.5-4.9-25.2-6.3-52.8-3.5-72 .7-5 3.2-15.5 5.6-23.5 10.3-34.7 17.4-48.6 33.5-65.8 4.9-5.1 8.9-9.8 8.9-10.2 0-1.7 24.5-22.2 30.5-25.5 3.3-1.9 7.5-4.8 9.3-6.6 5.5-5.4 4.7-7.5-9.1-23.7-18.5-21.7-41.8-39.5-69.2-52.8-17.1-8.3-28.9-12.4-45.4-15.8-16.9-3.6-42.1-5.7-58.1-4.8z"
    />
  </Svg>
);

const Google = () => (
  <Svg height={24} width={24}>
    <Path
      d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
      fill="#4285F4"
    />
    <Path
      d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
      fill="#34A853"
    />
    <Path
      d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
      fill="#FBBC05"
    />
    <Path
      d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
      fill="#EA4335"
    />
    <Path d="M1 1h22v22H1z" fill="none" />
  </Svg>
);

interface SocialIconProps {
  children: ReactNode;
}

const SocialIcon = ({ children }: SocialIconProps) => {
  const theme = useTheme();
  const SIZE = theme.borderRadii.l * 2;
  return (
    <Box
      backgroundColor="white"
      width={SIZE}
      height={SIZE}
      borderRadius="l"
      justifyContent="center"
      alignItems="center"
      marginHorizontal="s"
    >
      {children}
    </Box>
  );
};

const SocialLogin = () => {
  return (
    <Box flexDirection="row" justifyContent="center">
      <SocialIcon>
        <Google />
      </SocialIcon>
      <SocialIcon>
        <Facebook />
      </SocialIcon>
      <SocialIcon>
        <Apple />
      </SocialIcon>
    </Box>
  );
};

export default SocialLogin;
