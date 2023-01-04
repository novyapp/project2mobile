import { createStackNavigator } from "@react-navigation/stack";
import { Routes } from "../components/Navigation";

import Login, { assets as LoginAssets } from "./Login";
import Onboarding, { assets as OnboardingAssets } from "./Onboarding";
import Welcome, { assets as WelcomeAssets } from "./Welcome";
import SignUp, { assets as SignUpAssets } from "./SignUp";
import ForgotPassword, {
  assets as ForgotPasswordAssets,
} from "./ForgotPassword";
import PasswordChanged, {
  assets as PasswordChangedAssets,
} from "./PasswordChanged";

export const assets = [
  OnboardingAssets,
  WelcomeAssets,
  LoginAssets,
  SignUpAssets,
  ForgotPasswordAssets,
  PasswordChangedAssets,
];

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
      <AuthStack.Screen name="SignUp" component={SignUp} />
      <AuthStack.Screen name="ForgotPassword" component={ForgotPassword} />
      <AuthStack.Screen name="PasswordChanged" component={PasswordChanged} />
    </AuthStack.Navigator>
  );
};
