

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
//const UpdateObject = () => addCartItem();
  //alert("1");
  //console.log("1: ", {imageUrl});
  //const [panelArray, setpanelArray] = useState([]);
  //setpanelArray('https://i.ibb.co/ypkgK0X/blue-beanie.png');
  
//}





function Panel({ category }) {

  //const  addItemToCart = useContext(PanelContext);
  
  const { cartItems, productToAdd, panelArray,addItemToCart  } = useContext(PanelContext);

  const { id, imageUrl, name } = category;

  const { imageUrl2 } = panelArray;

  const addProductToCart = () => addItemToCart({imageUrl}); 

  


  
  //console.log("4", category);
  



  
  //let imageUrl = 'https://i.ibb.co/QdJwgmp/brown-cowboy.png';

  
  //console.log("pA: ", panelArray);

  //const [addItemToCart] = useState([]);
  
  useEffect(() => {
    //alert("3");
    //setpanelArray(imageUrl);
  
  }, []);

  //const {panelArray} = useContext(PanelContext);
  
  console.log("url: ", imageUrl);
  console.log("panel: ", panelArray);

  
  //const { id, imageUrl, name} = category;
  //console.log("$$",{category});
  //const { imageUrl } = panelArray;
  
  //const [object, setObject] = useState({
  //console.log("2. : ", category); 

  //});

  //function updateObject(category){
    
  //  let link = 'https://i.ibb.co/X2VJP2W/blue-snapback.png';
    

  //}
  
  

  //useEffect(() => {
 // 
 // }, [object, setObject]);
  
 

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
      
        <button type="button" onClick = {addProductToCart}>Button</button>
      
          
          
          
       
          
      </div>
      
      
        
        
    </div>
    
    
    
  )

  
  
}
    

const addCartItem = (cartItems, productToAdd) => {
  console.log(productToAdd);
  return(productToAdd);
};


      

    
  

 // const addItemToCart = (productToAdd) => {
 //   setCartItems(addCartItem(cartItems, productToAdd));
 // };


export default Panel;