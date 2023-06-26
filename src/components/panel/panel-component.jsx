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

    

    for (let i = 0; i < 2; i++)
    {
      console.log("1z ",filteredarray[1]);
      console.log("2z ", id);
      console.log("3z ", imageUrl);

      if (filteredarray[0].id === i)
      {
        alert("jackpot!");
        }
        

    }


    console.log("iU:  ", filteredarray);
    

    console.log("imageUrl!:  ", imageUrl);
    
    //beanie 
    //remove one match
  filteredarray = filteredarray.filter(filteredarray => filteredarray !== product);
    
    console.log("fA: ", filteredarray);
    
    setChange(change+1);
    
    //imageCount++;
  };
  
  
  
  //uses context
  const addProductToCart = (category) => {
    
    //console.log("h: ", hold);

    console.log("v:", category.imageUrl);
    //alert("z: ", imageUrl);
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


  const [data , setData] = useState([
    {
      id: 0,
      checked: false,
      
    },
    {
      id: 1,
      checked: false,
    },

    {
      id: 2,
      checked: false,
    },

    {
      id: 3,
      checked: false,
    },

    {
      id: 4,
      checked: false,
    }



  ]);
  
  

  useEffect(() => {

   


  }, [])

  useEffect(() => {

    show = true;
    
    //const [holder, setHolder] = useState([array1])
    

    //forceUpdate();
    
  
  }, [filteredarray]);

 

  ///////

  const array1 = ['a'];


  const [value, setValue] = useState(false)

 
  const [stars, setStars] = useState([])

  const [check, setChecked] = useState([])
  
  const [todos, setTodos] = useState({});
  //setStars();
  
  

    console.log("td1: ", todos);
    console.log("td2: ", todos.value1);
  

  
  
  
  let checked = false;
  
  
 
      //alert("called");
  function getStars(event) {

    setTodos((prevState) => ({ ...prevState, value1: "new1" }))
    setTodos((prevState) => ({ ...prevState, value2: "new2" }))
    setTodos((prevState) => ({ ...prevState, value3: "new3" }))

   
  
    //handleAdd()
    //setstate handleAdd('b')
    
    //this.setHolder(hold => ({ arrayvar: [...hold.arrayvar, "true"] }))

    //checked = true;
    //let id = event.target.id;
    
    //let isChecked = event.target.checked;

    //setHolder('d');

    


    

    //setHold(hold => [...hold, "foo"])
    //
    //setHolder(pervious => [...pervious, "foo"])

    //const newState = [...hold, 'hello'];
    
    //setHold([...hold , "foo"]); 
    //console.log("ho: ", holder);

    
    //console.log("co: ", isChecked);
    //console.log("id: ", id);
    //amtStars = 0;
    //for (let i = 0; i < 4; i++){
      //if (holdsStars[i] === true) {
       
        //console.log("hs: ", holdsStars);

       
      //  amtStars = amtStars + 1;
      //}
    
      //console.log("h: ", holder);
  
  }

    
    //amtStars = 2;
    //alert("a");
    

    //set checked true to a value

    //data[isChecked] = isChecked;
  

    //is true
    //console.log("is: ",isChecked);

    

    //if (isChecked == true) {
    //  setData([isChecked], true); 
    //}

    //if (isChecked == true) {
  
    //setData([{ id: 0, checked: true }]); 
    //console.log("dataq ", data);

    

    //console.log("array: ", array1);
   
    //setChecked(!check);




    //setData((data) => [...data,
    //{
    //  id: 5,
    //  checked: true,
    //},
    //]);
    
    
      
    
    
    
    //setData([{ id: 6, checked: 'true' }])
    // const theString = [{id: 5, isChecked: 'C'}]

    //console.log("data: ", data);
    

    //console.log("data: ", theString);


    
   // console.log("data: ",  data);
   
      

    //this.setState({
    //  data: this.state.data.map(el => (el.id === id ? Object.assign({}, el, { amtStars }) : el))
    //});
    
  //}
  ////////
  
  
  return (
    
   
      <div>

      <div>
        

        
      
        
        <DropDown id="id1">
          <div className="images">




            
          
        




          {count++}

          
            

           
      
            {filteredarray &&
              filteredarray.map((product) => (
            

             
              <div>
                  <Image key={product} imageUrl={product} />
                  <Stars key={product} amtStars={amtStars} />
              
                  
                  <div>
              
                    {show && <input id="0" checked={checked} type="checkbox" name="1" onClick={getStars} />}
                    {show && <input id="1" checked={checked} type="checkbox" name="2" onClick={(event) => getStars(event)} />}
                    {show && <input id="2" checked={checked} type="checkbox" name="3" onClick={(event) => getStars(event)} />}
                    {show && <input id="3" checked={checked} type="checkbox" name="4" onClick={(event) => getStars(event)} />}
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