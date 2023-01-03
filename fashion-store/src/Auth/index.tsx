import { createStackNavigator } from "@react-navigation/stack";
import { Routes } from "../components/Navigation";

import Login, { assets as LoginAssets } from "./Login";
import Onboarding, { assets as OnboardingAssets } from "./Onboarding";
import Welcome, { assets as WelcomeAssets } from "./Welcome";
export { default as Onboarding } from "./Onboarding";
export { default as Welcome } from "./Welcome";
export const assets = [OnboardingAssets, WelcomeAssets, LoginAssets];

const AuthStack = createStackNavigator<Routes>();
export const AuthNavigator = () => {
  return (
    <AuthStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <AuthStack.Screen name="Onboarding" component={Onboarding} />
      <AuthStack.Screen name="Welcome" component={Welcome} />
      <AuthStack.Screen name="Login" component={Login} />
    </AuthStack.Navigator>
  );
};
