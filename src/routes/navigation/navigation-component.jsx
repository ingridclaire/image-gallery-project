import { Outlet, Link } from "react-router-dom";
import { NavigationContainer, button, DropDown, NavLink } from "./navigation-styles"
import { useState } from 'react';
import { createPortal } from 'react-dom';

const Navigation = () => {

  function func() {
    let button = document.getElem
  }

  const [showPanel, setShowPanel] = useState(false);

  return (
    <NavigationContainer>
      <div className="photo">
        <h2>Veiw these Photographs:</h2>
        <button className="buttonShow" onClick={() => { setShowPanel((showPanel) => !showPanel) }}>Show Panel</button>
        <div className="visited">
          <NavLink to="/"  >Home Page</NavLink>
        </div>
        {showPanel && <DropDown />}
        <Outlet />
      </div>
    </NavigationContainer>
  );
};
export default Navigation;