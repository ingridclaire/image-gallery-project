

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
let show = null;

//  id name imageUrl price
function Panel({  category}) {


  console.log("category2: ", { category });
  //let string1 =  "hats" ;

  let string1 = "hats";

  let { cartItems, productToAdd, panelArray, addItemToCart, setpanelArray} = useContext(PanelContext);
;
  const { categoriesMap } = useContext(CategoriesContext);
  const [products, setProducts] = useState(categoriesMap[string1]);

  
  
  console.log("a: ", category);
  
  

  

  //dereference first write using category as prop, then chnage it to usecontext

  //Each call using category is an instance that can have a button pressed
  //if button ia pressed than currwnt category is the one chosen
  //change category prop to context see category-componentwhat size font for mo

  

 // const imageUrl = { category };
  
  //console.log("i", category);
  //console.log(category.imageUrl);



  //let value = category.imageUrl;
  
  
  let forceUpdate = useForceUpdate(); 


  let { imageUrl, price, name, id } = category;
  let index1 = 0;

  //console.log("img", categoriesMap["hats"][imageCount]);


  const [change, setChange] = useState(0);
  

  //https://codesandbox.io/s/bitter-meadow-rl8vx?file=/src/App.js:0-1002
  const deleteComponent = (category) =>{

    

    alert("id1: ", imageUrl);

   // let { a }  = category.id 

    console.log("xx: ", id);

  
    alert("id2: ",id );

    

    filteredarray[0] = "";
   // map

   // {
   //   filteredarray &&
   //   filteredarray.map((product) => (
   //     filteredarray[0] = ""
  //))}

    
    filteredarray[0] = null;
    //filteredarray[imageCount] = imageUrl;
    setChange(change+1);
    
    //imageCount++;
  };
  
  
  
  //uses context
  const addProductToCart = (category) => {
    
    console.log("v:", category.imageUrl);
    alert("z: ", imageUrl);
    //let image = category.imageUrl;
    
    //const image = categoriesMap[string1][imageCount].imageUrl;

    const updated = [...panelArray, imageUrl];

    
      setpanelArray(previous => [...previous, imageUrl]) 
    console.log("p ", panelArray);
    
    
    //filteredarray = panelArray.filter(x => categoriesMap['hats'].indexOf(x) < 0);
    
    filteredarray[imageCount] = imageUrl;
    imageCount++;
    console.log("fa: ", filteredarray);
    
    
  }
  


  


  

  
 console.log("URL: ", imageUrl);

  
  
  
  useEffect(() => {

    show = true;
    
 
    //forceUpdate();
    
  
  }, [filteredarray]);

  
  
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

            

            <h1>{category.id}</h1>
      
            {filteredarray &&
              filteredarray.map((product) => (
            

             
              <div>how 
              <Image key={product} imageUrl={product} />
              
              

              
              {show && <button className="buttonDelete" onClick={() =>  deleteComponent(category)}>Delete Component</button>}
              

                  
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
        <button onClick={() => deleteComponent(category)}>Button- delete</button>
        
        





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