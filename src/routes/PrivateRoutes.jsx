import { createStackNavigator, StackNavigationOptions } from "@react-navigation/stack";
import { Home } from "../screens/Home";

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();
const RootRoutes = () => {
  return (
    <Drawer.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: true,
        headerTitleAlign: "center",
        headerTitleStyle: {
          color: "#fff",
          fontSize: 18,
        },
        headerStyle: {
          backgroundColor: "#000",
        },
        headerTintColor: "#fff",
      }}
      
    >
      <Drawer.Screen
        name="Home"
        component={Home}
        options={{
          title: "Mesas",
          headerShown: false,
        }}
      />
    </Drawer.Navigator>
  );
};
export const PrivateRoutes = () => {
  const { currentTableIndex } = useCart();
  return (
    <Stack.Navigator screenOptions={screenOptions}>
      <Stack.Group>
        <Stack.Screen
          name="Root"
          component={RootRoutes}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Group>
    </Stack.Navigator>
  );
};