import * as React from "react";
import { ThemeProvider } from "@shopify/restyle";

import { assets as authAssets, AuthNavigator } from "./src/Auth";
import { LoadAssets } from "./src/components";
import { theme } from "./src/components/theme";

import { SafeAreaProvider } from "react-native-safe-area-context";

const assets = [...authAssets];

const fonts = {
  "SFProDisplay-Bold": require("./assets/fonts/SF-Pro-Display-Bold.otf"),
  "SFProDisplay-Semibold": require("./assets/fonts/SF-Pro-Display-Semibold.otf"),
  "SFProDisplay-Medium": require("./assets/fonts/SF-Pro-Display-Medium.otf"),
  "SFProDisplay-Regular": require("./assets/fonts/SF-Pro-Display-Regular.otf"),
};

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <LoadAssets {...{ fonts, assets }}>
        <SafeAreaProvider>
          <AuthNavigator />
        </SafeAreaProvider>
      </LoadAssets>
    </ThemeProvider>
  );
}
