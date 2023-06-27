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
import { body } from '../../components/image/image-styles';
//import { Stars } from '../stars/stars-styles';
import Stars from '../../components/stars/stars.component'

let count = false;
let amtStars = 0;

/*{show && <input id="1" checked={checked} type="checkbox" name="1" onClick={(event) => getStars(event)} />} */
function useForceUpdate() { 

  //alert("useforce");
  //const [value, setValue] = useState(false)

  

  //return () => setValue(!value);
}


//search button, call function
//for category derefernce
//Cookie cut each one with a button


let filteredarray = [null];


let imageCount = 0;
let show = null;

//  id name imageUrl price
function Panel({ category }) {


  console.log("category2: ", { category });
  //let string1 =  "hats" ;

  let string1 = "hats";

  let { cartItems, productToAdd, panelArray, addItemToCart, setpanelArray } = useContext(PanelContext);
  ;
  const { categoriesMap } = useContext(CategoriesContext);
  const [products, setProducts] = useState(categoriesMap[string1]);
  const [holder, setHolder] = useState('a')
  

  
  
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
  const deleteComponent = (product) => {

    console.log("** ", product)

    //alert("id1: ", imageUrl);

    // let { a }  = category.id 

    

    for (let i = 0; i < 2; i++) {
      console.log("1z ", filteredarray[1]);
      console.log("2z ", id);
      console.log("3z ", imageUrl);

      if (filteredarray[0].id === i) {
        alert("jackpot!");
      }
        

    }


    console.log("iU:  ", filteredarray);
    

    console.log("imageUrl!:  ", imageUrl);
    
    //beanie 
    //remove one match
    filteredarray = filteredarray.filter(filteredarray => filteredarray !== product);
    
    console.log("fA: ", filteredarray);
    
  console.log("prod: ", product )  
    
    setChange(change + 1);
    
    //imageCount++;
  };
  
  
  
  //uses context
  const addProductToCart = (category) => {
    


    const newState = [...panelArray, 'hello'];
    
    setpanelArray(newState);


    
    const uid = 1;


    //let obj = {
    //  id: "1",
    //  imageUrl: "imageUrl"
    //}

    //setpanelArray([...panelArray, obj]);

    
    //const newState = setpanelArray [...panelArray, obj; 


    console.log("pA: ", panelArray);
    
    //setpanelArray(newState);
      
      
    
    //console.log("x: ", newState);


    

    console.log("v:", category);
    //alert("z: ", imageUrl);
    //let image = category.imageUrl;
    
    //const image = categoriesMap[string1][imageCount].imageUrl;

    ////const updated = [...panelArray, imageUrl];

    
    //setpanelArray(previous => [...previous, imageUrl])
    console.log("p ", panelArray);
    
    
    //filteredarray = panelArray.filter(x => categoriesMap['hats'].indexOf(x) < 0);
    
    //check for duplicate, if found remove original 
    // category id with 
    filteredarray[imageCount] = imageUrl;
    imageCount++;



    console.log("fa: ", filteredarray);
    
    
  };


  
  

  
  useEffect(() => {

    show = true;
    
    //const [holder, setHolder] = useState([array1])
    

    //forceUpdate();
    
  
  }, [filteredarray]);

 

  ///////

  const array1 = ['a'];


  const [value, setValue] = useState(false)

 
  const [stars, setStars] = useState([])

  //const [checked, setChecked] = useState([])
  
  const [todos, setTodos] = useState(true,true,true,true);
  //setStars();
  
  

  useEffect(() => {

    

  }, [todos])


  
  

  useEffect(() => {


    setTodos((prevState) => ({ ...prevState, value1: false }))
    setTodos((prevState) => ({ ...prevState, value2: false }))
    setTodos((prevState) => ({ ...prevState, value3: false }))
  setTodos((prevState) => ({ ...prevState, value4: false }))
  
   


  }, [])


    console.log("td1: ", todos);
    console.log("td2: ", todos.value1);
  

  
  
  
  //let checked = true;
  
  
 
  
      //alert("called");
  function getStars(event) {

   
    //let myArray = [test, test2];
    //myArray[1].married = true;


    //setChecked(false);
    console.log("td2: ", todos.value1);
   
  
    //handleAdd()
    //setstate handleAdd('b')
    
    //this.setHolder(hold => ({ arrayvar: [...hold.arrayvar, "true"] }))

    
    let id = event.target.id;
    console.log("5: ", id);
    let isChecked = event.target.checked;

    //setHolder('d');

    //if (id == 0) {
    if (id === '0') {
      if (todos.value1 == false) {
        setTodos((prevState) => ({ ...prevState, value1: true }))
        amtStars = amtStars + 1;
        //alert("here1");
        
      }
    
      else {
        setTodos((prevState) => ({ ...prevState, value1: false }))
        amtStars = amtStars - 1;
        //alert("here2");
      }
    
    }

    if (id === '1') {
      if (todos.value2 == false) {
        setTodos((prevState) => ({ ...prevState, value2: true }))
        amtStars = amtStars + 1;
      }
    
      else {
        setTodos((prevState) => ({ ...prevState, value2: false }))
        amtStars = amtStars - 1;
      }
    
    }


    if (id === '2') {
      if (todos.value3 == false) {
        setTodos((prevState) => ({ ...prevState, value3: true }))
        amtStars = amtStars + 1;
      }
    
      else {
        setTodos((prevState) => ({ ...prevState, value3: false }))
        amtStars = amtStars - 1;
      }
    
    }

    if (id === '3') {
      if (todos.value4 == false) {
        setTodos((prevState) => ({ ...prevState, value4: true }))
        amtStars = amtStars + 1;
      }
    
      else {
        setTodos((prevState) => ({ ...prevState, value4: false }))
        amtStars = amtStars - 1;
      }
    
    }

    
    alert("made it!");

    setValue(!value);
    


    //console.log("v1: ", todos.value1);


    
 
  
  }

 
    
  
  
  return (
    
   
      <div>

      <div>
        

        
      {show && <input id="0" checked={todos.value1} type="checkbox" name="1" onClick={(event) => getStars(event)} />}
                    {show && <input id="1" checked={todos.value2} type="checkbox" name="2" onClick={(event) => getStars(event)} />}
                    {show && <input id="2" checked={todos.value3} type="checkbox" name="3" onClick={(event) => getStars(event)} />}
        {show && <input id="3" checked={todos.value4} type="checkbox" name="4" onClick={(event) => getStars(event)} />}
        
        
        <DropDown id="id1">
          <div className="images">




            
          
        




          {count++}

          
            

          
      
            {filteredarray &&
              filteredarray.map((product) => (
            
                

             
              <div>
                  <Image key={product} imageUrl={product} />
                  <Stars key={product} amtStars={amtStars} />
              
                  
                  
                  <div>
              
                    
                    {show && <p>this is a test </p>}{amtStars}
                    




             </div>
            
            
            

              
              {show && <button className="buttonDelete" onClick={() =>  deleteComponent(product)}>Delete Component</button>}
              

                  
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