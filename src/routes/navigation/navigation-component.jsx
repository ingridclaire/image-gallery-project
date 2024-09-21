import { Outlet, Link } from "react-router-dom";
import { NavigationContainer, DropDown, NavLink } from "./navigation-styles";
import { useState } from "react";
import Panel from "../../components/panel/panel-component";

const Navigation = () => {
  // ICC: you can remove the func function since it is not used
  function func() {}
  // ICC: the showPanel state does not appear to ever be updated and is set to false, which means line 16 will always render false, not showing the , at least not from within the Navigation component.
  const [showPanel, setShowPanel] = useState(false);
  return (
    <NavigationContainer>
      <div className="photo">
        <Outlet />
      </div>
      {showPanel && <Panel />}
    </NavigationContainer>
  );
};

export default Navigation;
