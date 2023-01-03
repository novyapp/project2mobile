import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { ThemeProvider } from "@shopify/restyle";

import { Onboarding, Welcome, assets as authAssets } from "./src/Auth";
import { LoadAssets, theme, Routes } from "./src/components";

const assets = [...authAssets];

const fonts = {
  "SFProDisplay-Bold": require("./assets/fonts/SF-Pro-Display-Bold.otf"),
  "SFProDisplay-Semibold": require("./assets/fonts/SF-Pro-Display-Semibold.otf"),
  "SFProDisplay-Medium": require("./assets/fonts/SF-Pro-Display-Medium.otf"),
  "SFProDisplay-Regular": require("./assets/fonts/SF-Pro-Display-Regular.otf"),
};

const AuthStack = createStackNavigator<Routes>();
const AuthNavigator = () => {
  return (
    <AuthStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <AuthStack.Screen name="Onboarding" component={Onboarding} />
      <AuthStack.Screen name="Welcome" component={Welcome} />
    </AuthStack.Navigator>
  );
};

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <LoadAssets {...{ fonts, assets }}>
        <AuthNavigator />
      </LoadAssets>
    </ThemeProvider>
  );
}
