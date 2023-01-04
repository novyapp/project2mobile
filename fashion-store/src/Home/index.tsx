import { createDrawerNavigator } from "@react-navigation/drawer";
import { HomeRoutes } from "../components/Navigation";

import OutfitIdeas from "./OutfitIdeas";
import DrawerContent, { DRAWER_WIDTH } from "./Drawer/DrawerContent";

const Drawer = createDrawerNavigator<HomeRoutes>();
export const HomeNavigator = () => {
  return (
    <Drawer.Navigator
      drawerContent={DrawerContent}
      screenOptions={{
        headerShown: false,
        drawerStyle: { width: DRAWER_WIDTH },
      }}
    >
      <Drawer.Screen name="OutfitIdeas" component={OutfitIdeas} />
    </Drawer.Navigator>
  );
};
