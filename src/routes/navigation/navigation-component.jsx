import { Outlet, Link } from "react-router-dom";
import { NavigationContainer, DropDown, NavLink } from "./navigation-styles";
import { useState } from "react";
import Panel from "../../components/panel/panel-component";

const Navigation = () => {
  function func() {
   
  }
  const [showPanel, setShowPanel] = useState(false);
  
  return (
    <NavigationContainer>
      <div className="photo">
        <h2>Meet The Artists:</h2>
        
        
       
        <Outlet />
      </div>
      {showPanel && <Panel/>}
    </NavigationContainer>
  );
};

export default Navigation;
