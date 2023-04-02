import { Outlet } from "react-router-dom";
import {NavigationContainer, button} from "./navigation-styles"
const Navigation = () => {

    
    return (

      <NavigationContainer>
        
        
      <div>
        <h2>Photography Show</h2>
        <button >Dropdown Menu</button>
        <Outlet/>
            
            
            
            
        
        </div>
        
            
        </NavigationContainer>
            

    );
};

export default Navigation;