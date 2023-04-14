import { Outlet } from "react-router-dom";
import { NavigationContainer, button, DropDown } from "./navigation-styles"
import { useState } from 'react';
const Navigation = () => {

  function func() {
      let button = document.getElem
  }


  const [showPanel, setShowPanel] = useState(false);
  
    return (

      <NavigationContainer>
        
        
      <div>
        <h2>Photography Show</h2>
          <button className="buttonShow" onClick={() => { setShowPanel((showPanel) => !showPanel) }}>Show Panel</button>
          
            {showPanel && <DropDown/>}
            
        <Outlet/>
            
            
            
            
        
        </div>
        
            
        </NavigationContainer>
            

    );
};

export default Navigation;