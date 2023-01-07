import { createStackNavigator } from "@react-navigation/stack";
import { AuthRoutes } from "../../@types/navigation";

import Onboarding, { assets as OnboardingAssets } from "./Onboarding";

export const assets = [OnboardingAssets];

const AuthStack = createStackNavigator<AuthRoutes>();
export const AuthNavigator = () => {
  return (
    <AuthStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <AuthStack.Screen name="Onboarding" component={Onboarding} />
    </AuthStack.Navigator>
  );
};
