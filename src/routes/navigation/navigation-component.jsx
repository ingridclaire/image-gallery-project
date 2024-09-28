import { Outlet} from "react-router-dom";
import { NavigationContainer} from "./navigation-styles";
import { useState } from "react";
const Navigation = () => {
 return (
    <NavigationContainer>
       <Outlet />
    </NavigationContainer>
  );
};
export default Navigation;
