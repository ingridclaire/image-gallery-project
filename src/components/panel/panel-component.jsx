

import { createPortal } from 'react-dom'
import { DropDown } from "./panel-styles"
import Images1 from '../images/images-component'; 
import { CategoriesContext } from '../../contexts/categories-context';
import { createContext, useContext, useState, useEffect, Fragment } from 'react';
import { useParams } from 'react-router-dom';
import PhotoImages from '../../components/photoimages/photoimages-component'
import { CartContext } from '../../contexts/cart-context';
import { PanelContext } from '../../contexts/panel-context';



//const addItemToCart = (productToAdd) => {
//  setCartItems(addCartItem(cartItems, productToAdd));
//};






function UpdateObject() { 

  
}

//search button, call function
//want to do this with context

//for category derefernce
//Cookie cut each one with a button



//ONLY CALLED ONCE MAYBE FROM PHOTOIMAGE - context? ; call each time - category
function Panel({ category }) {

  
  
//make this right in  panel-context line 45 and 7
  const { cartItems, productToAdd, panelArray, addItemToCart, setpanelArray } = useContext(PanelContext);
  
 
//map category value to see if ?PANELARRAY/OR CATEGORY? equals the buttons' value, ?IF SO SET PANELARRAY  WHICH WILL CALL STATE?



  const addProductToCart = (value) => {
    console.log("v: ", value);
  }
  
  

  

  const { id, imageUrl, name } = category;

  const { imageUrl2 } = panelArray;


  
  

   

  


  
  
  
  useEffect(() => {
    
  
  }, []);

  //const {panelArray} = useContext(PanelContext);
  
  console.log("url: ", imageUrl2);
  console.log("panel: ", panelArray);
  console.log("cat: ", category);

  
  
 

  return (

    
    <div>
      <div>

        hhha
        
        
      
        <DropDown id="id1" >
          <div className="images">
      
      
            
           
            
           
            
            <img src={imageUrl} alt={``} width={90} />
        
            
            
            <h1></h1>

            <h1></h1>

            
             
            
           
             
        
      
      
        
          
          </div>
        </DropDown>
      
        <button type="button" onClick={addProductToCart({imageUrl})}>Button</button>
      
          
          
          
       
          
      </div>
      
      
        
        
    </div>
    
    
    
  )

  
  
}
    

const addCartItem = (panelArray, productToAdd) => {
  console.log(productToAdd);
  return(productToAdd);
};


      

    
  

 // const addItemToCart = (productToAdd) => {
 //   setCartItems(addCartItem(cartItems, productToAdd));
 // };


export default Panel;