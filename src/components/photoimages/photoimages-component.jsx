import { useNavigate } from 'react-router-dom';
import { PhotoContainer, DropDown} from "./photoimages-styles";
import  Panel  from "../panel/panel-component";

import { createPortalcreate } from 'react-dom';
import { usePortal } from "react-dom";
import { createPortal } from 'react-dom';
//import  Stars from "../stars/stars.component"



//react onclick event in functional coomponent
// on line 33 :  <Stars></Stars>
const PhotoImages1 = ({ category }) => {
  
  const { id, imageUrl, name, price} = category;
    const navigate = useNavigate();

   
  
  
    return (
        
        <div>
      <div id='drop'>

      
          {id}
      
        
        </div>
        
        
        
        

        
        <div>
          
          <h2>{name}</h2>
          <h3>${price}.00</h3>
          <div className="images">
            
         
        
            
          <img src={imageUrl} alt={``} width={90} />
          
        </div>
          
        
        
          
        
        
        </div>
        

        
        
          </div>
     
      
      
                
          
            
            


            
        
    );



}

export default PhotoImages1;