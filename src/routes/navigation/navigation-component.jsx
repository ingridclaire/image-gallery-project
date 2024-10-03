import { Outlet } from "react-router-dom";
import { NavigationContainer } from "./navigation-styles";
// ICC remove the following line as state is not used
import { useState } from "react";
const Navigation = () => {
  return (
    <NavigationContainer>
      <Outlet />
    </NavigationContainer>
  );
};
export default Navigation;
