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
        
        
      <div className= "photo">
        <h2>Photography Show</h2>
          <button className="buttonShow" onClick={() => { setShowPanel((showPanel) => !showPanel) }}>Show Panel</button>
          
          <div class = "visited">
            <NavLink to="/" linkStyle={{ color: 'yellow' }} >Home Page</NavLink>
          </div>
            {showPanel && <DropDown/>}
            
        <Outlet/>
            
        {createPortal(
        <p>testing portal.</p>,
        document.body
        )}
            
            
        
        </div>
        
            
        </NavigationContainer>
            

    );
};

export default Navigation;