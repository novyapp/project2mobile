import { StackNavigationProp } from "@react-navigation/stack";
import { RouteProp } from "@react-navigation/native";

export interface AuthNavigationProps<RouteName extends keyof AuthRoutes> {
  navigation: StackNavigationProp<AuthRoutes, RouteName>;

  route: RouteProp<AuthRoutes, RouteName>;
}

export type AppRoutes = {
  Auth: undefined;
};

export type AuthRoutes = {
  Onboarding: undefined;
  Login: undefined;
};
