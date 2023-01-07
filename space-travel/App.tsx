import * as React from "react";
import { ThemeProvider } from "@shopify/restyle";

import { assets as authAssets, AuthNavigator } from "./src/screens/Auth";
import { theme } from "./src/constants/theme";

import { createStackNavigator } from "@react-navigation/stack";

import { AppRoutes } from "./src/@types/navigation";
import { LoadAssets } from "./src/services";

const assets = [...authAssets];

const fonts = {
  "Helvetica-Bold": require("./assets/fonts/Helvetica-Bold.otf"),
  "Helvetica-Regular": require("./assets/fonts/Helvetica-Regular.ttf"),
};

const AppStack = createStackNavigator<AppRoutes>();

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <LoadAssets {...{ fonts, assets }}>
        <AppStack.Navigator
          screenOptions={{
            headerShown: false,
          }}
        >
          <AppStack.Screen name="Auth" component={AuthNavigator} />
        </AppStack.Navigator>
      </LoadAssets>
    </ThemeProvider>
  );
}
