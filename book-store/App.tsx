import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { MainStackParamList } from "./src/@types/Stacks";
import tabs from "./src/components/Tabs";
import BookDetail from "./src/screens/BookDetails";

export default function App() {
  const Stack = createNativeStackNavigator<MainStackParamList>();
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{ headerShown: false }}
        initialRouteName={"HomeScreen"}
      >
        <Stack.Screen name="HomeScreen" component={tabs} />
        <Stack.Screen name="BookDetail" component={BookDetail} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
