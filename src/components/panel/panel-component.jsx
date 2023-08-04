
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

import {StarContext}  from '../../contexts/stars-context';



////////////////////////////////////////////////////////////////////////////////////////////////
//LOOK AT ONLY USING CHECK BOX, LOOK AT RETURN POSITIONED, LOOK AT ERROR ABOUT ONCNAAGEHANDLER
//FIX KEY PROBLEMS TOO
//https://react.dev/learn/updating-arrays-in-state
//https://www.bing.com/search?q=setting+state+for+an+object+of+an+array+functional&qs=n&form=QBRE&sp=-1&ghc=1&lq=0&pq=setting+state+for+an+object+of+an+array+functional&sc=1-50&sk=&cvid=17DFDA001F66409CAE81248076ACDB80&ghsh=0&ghacc=0&ghpl=
////////////////////////////////////////////////////////////////////////////////////


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








let imageCount = 0;
let show = null;



let filteredarray  = [{

  userID: 0,
  imageID: 9,
  imageUrl: "https://i.ibb.co/bLB646Z/red-beanie.png",
  star1: 1,
},
  
  {userID: 5,
    imageID: 5,
    imageUrl: "htps://i.ibb.co/bLB646Z/red-beanie.png",
    star1: 1,}


]





//  id name imageUrl price
function Panel({ category }) {

  

  console.log("category2: ", { category });
  //let string1 =  "hats" ;

  let string1 = "hats";

  let { cartItems, productToAdd, panelArray, addItemToCart, setpanelArray } = useContext(PanelContext);

  let { stars1, setStars } = useContext(StarContext);
  const { categoriesMap } = useContext(CategoriesContext);
  const [products, setProducts] = useState(categoriesMap[string1]);
  const [holder, setHolder] = useState('a')
  

  //const { items } = useContext(ExampleContext)

  
  


  


  

/*
  let obj = [{
    userID:1,
    imageID: 1,
    imageUrl: "https://i.ibb.co/ZYW3VTp/brown-brim.png",
    star1: 1,
    
  }]


  filteredarray = [...filteredarray, obj];
  
  */

  
  
  console.log("a: ", filteredarray);
  
  
  const Photo = () => {
    //setStars(99)

    
        
  
    
    //alert("here: ", stars1);
  
  
    //console.log("here!: ", stars1);
  }

  

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



  

  
  
  //const [fourStars, setFourStars] = useState({"a"})

  //console.log("img", categoriesMap["hats"][imageCount]);


  const [change, setChange] = useState(0);
  

  //https://codesandbox.io/s/bitter-meadow-rl8vx?file=/src/App.js:0-1002
  const deleteComponent = (product) => {

    console.log("** ", product)


   

    




    //alert("id1: ", imageUrl);

    // let { a }  = category.id 

    

    


    console.log("iU:  ", filteredarray);
    

    console.log("imageUrl!:  ", imageUrl);
    
    //beanie
    //remove one match
    

    //filteredarray = filteredarray.filter(filteredarray => filteredarray !== product);
    
    console.log("fA: ", filteredarray);
    
    console.log("prod: ", product)
    
    setChange(change + 1);
    
    //imageCount++;
  };
  
  
  
  //uses context
  const addProductToCart = (category) => {
    
    //setStars(8);


   

    ////////////////

    //amtStars = 5;
    
    //alert(fourStars);


    ///////////////
    //filteredarray = {
    //  id: "1",
    //  imageUrl: "imageUrl",
    //}


    //panelArray = [...panelArray, obj];
    
    setpanelArray(panelArray);


    console.log("pA: ", panelArray);
    
    const uid = 1;


    //let obj = {
    //  id: "1",
    //  imageUrl: "imageUrl"
    //}

    //setpanelArray([...panelArray, obj]);

    
    //const newState = setpanelArray [...panelArray, obj; 


    
    
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
    
    
    
    
    //filteredarray[imageCount] = imageUrl;
    //imageCount++;



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

 
  //const [stars, setStars] = useState(0)

  //const [checked, setChecked] = useState([])
  
  const [todos, setTodos] = useState(true, true, true, true);
  //setStars();
  
  

  useEffect(() => {

    

  }, [])


  
  

  useEffect(() => {


    setTodos((prevState) => ({ ...prevState, value1: false }))
    setTodos((prevState) => ({ ...prevState, value2: false }))
    setTodos((prevState) => ({ ...prevState, value3: false }))
    setTodos((prevState) => ({ ...prevState, value4: false }))
  
   


  }, [])


  console.log("td1: ", todos);
  console.log("td2: ", todos.value1);
  

  
  
  
  //let checked = true;
  
  
 
  
  //const {fourStars} = useContext(AmtProviderContext)
  
  
  //const fourStars = useContext(AmtProviderContext);
  
  //alert("called");
  
  
  
  const [fourStars, setFourStars] = useState(0)
  

  
  


  //const [stars, setStars] = useState([{
  //  userID: 0,
  //  imageID: 0,
  //  imageUrl: "",
  //  star1: 5}
  //]);

  
  let obj = [{
    userID:'5',
    imageID:'5',
    imageUrl: "https://i.ibb.co/ZYW3VTp/brown-brim.png",
    star1: '1',
    
  }]

  
  
  
  //let [stars, setStars] = useState(obj)



  //let data = [{name: ""}];
  let data = [{}];
//filteredarray = [{ ...filteredarray, obj }];
  function GetStars(event) {

    //let obj1 = [{
    //  userID:'3',
    //  imageID: '4',
    //  imageUrl: "https://i.ibb.co/ZYW3VTp/brown-brim.png",
    //  star1: '1',
      
    //}]

    data =[{name:"test1"},{name:"test2"}];

    alert("here");
    
    
    
    //const data =[{"name":"test1"},{"name":"test2"}];


    //function addStart() {
  
    /*
    stars = [
    
      {
      ...stars,
      
        
        
        userID: 1,
        imageID: 1,
        imageUrl: "",
        star1: 4
      }
  
    ];
    */

    stars1 = [ ...stars1, 4 ]
    setStars(stars1)
    console.log("ss: ", stars1 );
    
    panelArray = [...panelArray, obj];
    
setpanelArray(panelArray);


    console.log("panelarray: ", panelArray);
    //}






/*


    //filteredarray[imageCount] = imageUrl;
    imageCount++;



    let storedID = event.target.id;
    //console.log("5: ", id);
    let isChecked = event.target.checked;

    ///////







    //alert(":: ", todos.value1)
    if (storedID == 0) {
      if (todos.value1 == false) {



        setTodos((prevState) => ({ ...prevState, value1: true }))
        
        
        alert("1");
        //amtStars = amtStars + 1;
        
    
    
        filteredarray = [ ...filteredarray, obj ];
      
      //setpanelArray(filteredarray);
      console.log("PaArray: ", filteredarray)
        
      }
    
      else {
        setTodos((prevState) => ({ ...prevState, value1: false }))
        alert("2");
        
        //setFourStars[0](fourStars - 1)
        //amtStars = amtStars - 1;
        
        
        //filteredarray = [{
//
  //        userID: 1,
    //      imageID: id,
      //    imageUrl: "https://i.ibb.co/ZYW3VTp/brown-brim.png",
        //  star1: 1,
        //}]
    
    
        filteredarray = [{ ...filteredarray, obj }];
      
        //setpanelArray(filteredarray);
        console.log("PaArray: ", filteredarray)
       
      }





    
    }
    if (storedID === 1) {
  
      alert("ishere");
  if (todos.value2 == false) {
    setTodos((prevState) => ({ ...prevState, value2: true }))
    amtStars = amtStars + 1;
    setStars(amtStars);
  }

  else {
    setTodos((prevState) => ({ ...prevState, value2: false }))
    amtStars = amtStars - 1;
    setStars(amtStars);
  }

}


if (id === '2') {
  if (todos.value3 == false) {
    setTodos((prevState) => ({ ...prevState, value3: true }))
    amtStars = amtStars + 1;
    setStars(amtStars);
  }

  else {
    setTodos((prevState) => ({ ...prevState, value3: false }))
    amtStars = amtStars - 1;
    setStars(amtStars);
  }

}

if (id === '3') {
  if (todos.value4 == false) {
    setTodos((prevState) => ({ ...prevState, value4: true }))
    amtStars = amtStars + 1;
    setStars(amtStars);
  }

  else {
    setTodos((prevState) => ({ ...prevState, value4: false }))
    amtStars = amtStars - 1;
    setStars(amtStars);
  }
set 
+
}



    *//////
    
   


    console.log("pA: ", panelArray);
    


    setValue(!value);
    panelArray = [...panelArray, obj];
    
    setpanelArray(panelArray);
    
}
  

  const listItems = data.map((d) => <li key={d.userID}>{d.name}</li>);

  console.log("li: ", listItems);
  
  const { items } = useContext(ExampleContext)

  return (
    
    
   
      <div>

      <div>
        

       
      {show && <input id="0" checked={todos.value1} type="checkbox" name="1" onChange={(event) => GetStars(event)} />}
                    {show && <input id="1" checked={todos.value2} type="checkbox" name="2" onChange={(event) => GetStars(event)} />}
                    {show && <input id="2" checked={todos.value3} type="checkbox" name="3" onChange={(event) => GetStars(event)} />}
        {show && <input id="3" checked={todos.value4} type="checkbox" name="4" onChange={(event) => GetStars(event)} />}
        
        
        <DropDown id="id1">
          <div className="images">




            
          
        




            {count++}
            {count++}50

            testing
            <p>testing..</p>{stars1}
          
            {listItems}
          
            

          
           
            
      
            
            

            


              
        {items.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}

              
               
             
              
                
                
                
                
                
                
             
                
           
             
          
              
              
            
                
                
                
              
             
            
            
            
            




            <div>
          
            </div>
            
            
            
            
            

            <h1></h1>

            
            
            
<div>
              

</div>udemy  








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