

import { createPortal } from 'react-dom'
import { DropDown } from "./panel-styles"

import { CategoriesContext } from '../../contexts/categories-context';
import { createContext, useContext, useState, useEffect, Fragment, useReducer } from 'react';
import { useParams } from 'react-router-dom';
import PhotoImages from '../../components/photoimages/photoimages-component'
import { CartContext } from '../../contexts/cart-context';
import { PanelContext } from '../../contexts/panel-context';
import PhotoImages1 from '../../components/photoimages/photoimages-component'
import Image from '../../components/image/image-component'; 

let count = false;


function useForceUpdate() { 

  //alert("useforce");
  const [value, setValue] = useState(false)

  

  return () => setValue(!value);
}

//search button, call function
//for category derefernce
//Cookie cut each one with a button


let filteredarray = [null];


let imageCount = 0;


function Panel({  category}) {


  

  let { cartItems, productToAdd, panelArray, addItemToCart, setpanelArray} = useContext(PanelContext);
;
  const { categoriesMap } = useContext(CategoriesContext);
  const [products, setProducts] = useState(categoriesMap['hats']);

  

  
  
  const { change, setChange } = useState;



  //dereference first write using category as prop, then chnage it to usecontext

  //Each call using category is an instance that can have a button pressed
  //if button ia pressed than currwnt category is the one chosen
  //change category prop to context see category-componentwhat size font for mo

  

  const imageUrl = { category };
  
  console.log("i", category);
  console.log(category.imageUrl);



  //let value = category.imageUrl;
  
  
  let forceUpdate = useForceUpdate(); 






  const addProductToCart = (category) => {
    
    console.log("v:", category.imageUrl);
    let image = category.imageUrl;
    
    const updated = [...panelArray, image];

    
      setpanelArray(previous => [...previous, image]) 
    console.log("p ", panelArray);
    
    
    //filteredarray = panelArray.filter(x => categoriesMap['hats'].indexOf(x) < 0);
    
    filteredarray[imageCount] = image;
    imageCount++;
    console.log("fa: ", filteredarray);
    
    
  }
  
  
  


  

  
 console.log("URL: ", imageUrl);

  
  
  
  useEffect(() => {

    
    console.log("xx: ", panelArray);
    
      
 
    forceUpdate();
    
  
  }, [panelArray]);

  
  
  console.log("url: ", imageUrl);
  console.log("panel: ", panelArray);
  console.log("cat: ", category);

  console.log("*: ", category.imageUrl);
  
  //{panelArray.filter(person => person.includes(category.imageUrl)).map((person) => (
  //  <Image imageUrl={person} />
  //
  //  ))}
 

  
  
  return (

    
      <div>

      <div>
        hhha

changing props to 

        
        <DropDown id="id1">
          <div className="images">







            aaa{count++}  times clicked

            

            <h1>1</h1>
      
            {filteredarray &&
          filteredarray.map((product) => (
             
              <div>
              <Image key={product} imageUrl = {product} />
                  
                  </div>
           
             
          ))}
            

            <div>
          
            </div>
            
            
            
            
            

            <h1></h1>

            
            
            
<div>
              

</div>








          </div>
        </DropDown>

        

        <button onClick={() => addProductToCart(category)}>Button</button>
        
        





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