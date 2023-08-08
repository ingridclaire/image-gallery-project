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
import { ExampleContext } from '../../contexts/stars-context';
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///  8/5/23 :  What seems to be the panel data to display is on github, try and get this working
///            Panel usecontext all set for general programming when function called from buttons :  function GetStars(event) {
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
let count = false;
let amtStars = 0;
/*{show && <input id="1" checked={checked} type="checkbox" name="1" onClick={(event) => getStars(event)} />} */

//search button, call function
//for category derefernce
//Cookie cut each one with a button

let imageCount = 0;
let show = null;

let filteredarray = [{
  userID: 0,
  imageID: 9,
  imageUrl: "https://i.ibb.co/bLB646Z/red-beanie.png",
  star1: 1,
},
{
  userID: 5,
  imageID: 5,
  imageUrl: "htps://i.ibb.co/bLB646Z/red-beanie.png",
  star1: 1,
}
]


//  id name imageUrl price
function Panel({ category }) {
  console.log("category2: ", { category });
  //let string1 =  "hats" ;
  let string1 = "hats";

  let { cartItems, productToAdd, panelArray, addItemToCart, setpanelArray } = useContext(PanelContext);
  //let { stars1, setStars } = useContext(StarContext);
  const { categoriesMap } = useContext(CategoriesContext);
  const [products, setProducts] = useState(categoriesMap[string1]);
  const [holder, setHolder] = useState('a')
  let { items, setItems } = useContext(ExampleContext)

  console.log("a: ", filteredarray);


  const Photo = () => {
  }
  let forceUpdate = useForceUpdate();
  let { imageUrl, price, name, id } = category;
  let index1 = 0;
  const [change, setChange] = useState(0);


  //https://codesandbox.io/s/bitter-meadow-rl8vx?file=/src/App.js:0-1002
  const deleteComponent = (product) => {
    console.log("** ", product)
    console.log("iU:  ", filteredarray);
    console.log("imageUrl!:  ", imageUrl);
    console.log("fA: ", filteredarray);
    console.log("prod: ", product)
    setChange(change + 1);
  };


  //uses context
  const addProductToCart = (category) => {
    setpanelArray(panelArray);
    console.log("pA: ", panelArray);
    const uid = 1;
    console.log("v:", category);
    console.log("p ", panelArray);
    console.log("fa: ", filteredarray);
  };
  useEffect(() => {
    show = true;
  }, [filteredarray]);
  ///////
  const array1 = ['a'];
  const [value, setValue] = useState(false)
  const [todos, setTodos] = useState(true, true, true, true);
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
  const [fourStars, setFourStars] = useState(0)
  let obj = [{
    userID: '5',
    imageID: '5',
    imageUrl: "https://i.ibb.co/ZYW3VTp/brown-brim.png",
    star1: '1',
  }]


  //let [stars, setStars] = useState(obj)
  const updateMyArray = (newName) => {
    setItems(
      items.map((item) =>
        item.id === item.id ? { ...item, name: "newName" } : item
      )
    );
  };
  //let data = [{name: ""}];


  let data = [{}];
  function GetStars(event) {
    {
      const newStars = items.filter((contact) => contact.id !== 1);
      setItems(newStars);
    };


    let x = 9;
    let v = "item1"
    let data1 = [{ id: { x }, name: "item99", }]
    setItems((items) => [...items, { id: 1, name: v }])
    panelArray = [...panelArray, obj];
    setpanelArray(panelArray);
    console.log("panelarray: ", panelArray);
    console.log("pA: ", panelArray);
    setValue(!value);
    panelArray = [...panelArray, obj];
    setpanelArray(panelArray);
  }


  const listItems = data.map((d) => <li key={d.userID}>{d.name}</li>);
  console.log("li: ", listItems);

  return (
    /////////////////////////////
    //!!!!!CONTENT WAS HERE  - 688 ... after {listItems}  !!!!!! PROBABLY FOR PANEL DISPLAY - couldnt comment out!
    /////////////////////////////
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
            <p>testing..</p>
            {listItems}

            {items.map((item) => (
              <li key={item.id}>{item.name}</li>
            ))}


          </div>
        </DropDown>

        <button onClick={() => addProductToCart(category)}>Button</button>
      </div>
    </div>
  )
}


const addCartItem = (panelArray, productToAdd) => {
  console.log(productToAdd);
  return (productToAdd);
};


export default Panel;