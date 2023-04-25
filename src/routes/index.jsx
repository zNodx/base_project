import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { PublicRoutes } from "./PublicRoutes";

export const Routes = () => {
  return (
    <NavigationContainer>
      {signed ? <PrivateRoutes /> : <PublicRoutes />}
    </NavigationContainer>
  );
};
