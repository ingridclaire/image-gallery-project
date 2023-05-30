

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



//<button onClick={this.addProductToCart} value={imageUrl}>Button2</button>


function UpdateObject() { 

  
}

//search button, call function
//want to do this with context

//for category derefernce
//Cookie cut each one with a button



//ONLY CALLED ONCE MAYBE FROM PHOTOIMAGE - context? ; call each time - category
function Panel({ category }) {

  

  

  let { cartItems, productToAdd, panelArray, addItemToCart, setpanelArray } = useContext(PanelContext);
  
 



  //dereference first write using category as prop, then chnage it to usecontext

  //Each call using category is an instance that can have a button pressed
  //if button ia pressed than currwnt category is the one chosen
  //change category prop to context


  const imageUrl = { category };
  
  console.log("i", category);
  console.log(category.imageUrl);
  //let value = category.imageUrl;
  const addProductToCart = () => {
    
    console.log("v:", category.imageUrl);

    alert("v",  category.imageUrl );
    const newState = [...panelArray,  category.imageUrl ];
      
      setpanelArray(newState);

    console.log("p ", panelArray);
    console.log("a ", addProductToCart);
    
    //imageUrl = "https://i.ibb.co/1f2nWMM/wolf-cap.png";
  }
  
  
  


  

  
 console.log("URL: ", imageUrl);

  
  
  
  useEffect(() => {

    
    
  
  }, [panelArray]);

  
  
  console.log("url: ", imageUrl);
  console.log("panel: ", panelArray);
  console.log("cat: ", category);

  
  
 

  return (

    
      <div>

      <div>
        hhha



        <DropDown id="id1">
          <div className="images">







            <img src={imageUrl} alt={``} width={90} />



            <h1>1</h1>

            <h1></h1>











          </div>
        </DropDown>

        

        <button onClick={() => addProductToCart()}>Button</button>
        
        





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