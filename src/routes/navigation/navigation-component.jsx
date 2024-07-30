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
        <h2>Veiw these Photographs:</h2>
        
        <div className="visited">
          <NavLink to="/">Home Page</NavLink>
        </div>
       
        <Outlet />
      </div>
      {showPanel && <Panel/>}
    </NavigationContainer>
  );
};

export default Navigation;
