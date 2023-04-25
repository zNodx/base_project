import { createStackNavigator } from "@react-navigation/stack";
import { Welcome } from "../screens/Welcome";

const { Navigator, Screen } = createStackNavigator()


export const PublicRoutes = () => {
  return (
    <Navigator screenOptions={{
      headerShown: false,
    }}
    initialRouteName="Welcome"
    >
      <Stack.Screen
        name="Welcome"
        component={Welcome}
        options={{
          headerShown: false,
        }}
      />
    </Navigator>
  );
};