

import { createPortal } from 'react-dom'
import { DropDown } from "./panel-styles"
import Images1 from '../images/images-component'; 
import { CategoriesContext } from '../../contexts/categories-context';
import { useContext, useState, useEffect, Fragment } from 'react';
import { useParams } from 'react-router-dom';
import PhotoImages from '../../components/photoimages/photoimages-component'
import { CartContext } from '../../contexts/cart-context';
import { PanelContext } from '../../contexts/panel-context';

const addCartItem = (cartItems, productToAdd) => {
  return;
};

const UpdateObject = () => {
  alert("1");
  
  //const [panelArray, setpanelArray] = useState([]);
  //setpanelArray('https://i.ibb.co/ypkgK0X/blue-beanie.png');
  
}

const PHOTO_DATA = [
  {
      title: 'Hats',
      items: [
          {
              id: 1,
              name: 'Brown Brim',
              imageUrl: 'https://i.ibb.co/ZYW3VTp/brown-brim.png',
              price: 25,
          },
          {
              id: 2,
              name: 'Blue Beanie',
              imageUrl: 'https://i.ibb.co/ypkgK0X/blue-beanie.png',
              price: 18,
          },
          {
              id: 3,
              name: 'Brown Cowboy',
              imageUrl: 'https://i.ibb.co/QdJwgmp/brown-cowboy.png',
              price: 35,
          },
          {
              id: 4,
              name: 'Grey Brim',
              imageUrl: 'https://i.ibb.co/RjBLWxB/grey-brim.png',
              price: 25,
          },
          {
              id: 5,
              name: 'Green Beanie',
              imageUrl: 'https://i.ibb.co/YTjW3vF/green-beanie.png',
              price: 18,
          },
          {
              id: 6,
              name: 'Palm Tree Cap',
              imageUrl: 'https://i.ibb.co/rKBDvJX/palm-tree-cap.png',
              price: 14,
          },
          {
              id: 7,
              name: 'Red Beanie',
              imageUrl: 'https://i.ibb.co/bLB646Z/red-beanie.png',
              price: 18,
          },
          {
              id: 8,
              name: 'Wolf Cap',
              imageUrl: 'https://i.ibb.co/1f2nWMM/wolf-cap.png',
              price: 14,
          },
          {
              id: 9,
              name: 'Blue Snapback',
              imageUrl: 'https://i.ibb.co/X2VJP2W/blue-snapback.png',
              price: 16,
          },
      ],
  },
];


function Panel({ category } ) {

  console.log("4", category);



  const { panelArray, setpanelArray,  } = useContext(PanelContext);
  //let imageUrl = 'https://i.ibb.co/QdJwgmp/brown-cowboy.png'; 



  const [addItemToCart] = useState([]);
  
  useEffect(() => {
    //alert("3");
    //setpanelArray(imageUrl);
  
  }, []);

  //const {panelArray} = useContext(PanelContext);
  
  console.log("panel: ", panelArray);

  
  //const { id, imageUrl1, name} = category;
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
      
      
            
           
            a
           
            
            <img src={panelArray} alt={``} width={90} />
        
            
            
            <h1></h1>

            <h1></h1>

            
             
            
           
             
        
      
      
        
          
          </div>
        </DropDown>
      
        <button type="button" onClick = {UpdateObject}>Button</button>
      
          
          
          
       
          
      </div>
      
      
        
        
    </div>
    
    
    
  )
  
}
    





      
function updateObject() {
  
  let a = "a";
  alert("here");
  //setCartItems(a);
}
    
  

 // const addItemToCart = (productToAdd) => {
 //   setCartItems(addCartItem(cartItems, productToAdd));
 // };


export default Panel;