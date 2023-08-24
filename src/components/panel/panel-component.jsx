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
import { prettyDOM } from '@testing-library/react';
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///  8/5/23 :  What seems to be the panel data to display is on github, try and get this working
///            Panel usecontext all set for general programming when function called from buttons :  function GetStars(event) {
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
let count = false;
let amtStars = 0;

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

const localKey = "checkedValues";




//  id name imageUrl price
function Panel({ category, productID }) {


  const [checkedProducts, setCheckedProducts] = useState([])
  const [checkedValues, setCheckedValues] = useState([])


  //function TodoList() {
  //  [checkedValues, setCheckedValues] = useState(JSON.parse(localStorage.getItem(localKey)) || []);
  //  return
  //}


  useEffect(() => {
    const savedValues = JSON.parse(localStorage.getItem(localKey));
    const savedProducts = JSON.parse(localStorage.getItem(`checkedProducts`));

    if (savedValues) {
      // console.log("prev-storage", savedValues);
      setCheckedValues(savedValues);
      setCheckedProducts(savedProducts);
      // console.log("post_storage", savedValues);
    }
  }, []);

  useEffect(() => {
    // console.log({checkedValues})
    // localStorage.setItem(localKey, JSON.stringify(checkedValues))
    if (checkedValues.length > 0) localStorage.setItem(localKey, JSON.stringify(checkedValues));
    if (checkedProducts && checkedProducts.length > 0) localStorage.setItem(`checkedProducts`, JSON.stringify(checkedProducts));
  }, [checkedValues]);


  // console.log("category2: ", { category });

  let string1 = "hats";

  let { cartItems, productToAdd, panelArray, addItemToCart, setpanelArray } = useContext(PanelContext);
  //let { stars1, setStars } = useContext(StarContext);
  const { categoriesMap } = useContext(CategoriesContext);
  const [products, setProducts] = useState(categoriesMap[string1]);
  const [holder, setHolder] = useState('a')
  let { items, setItems } = useContext(ExampleContext)

  // console.log("a: ", filteredarray);





  const Photo = () => {
  }

  let { imageUrl, price, name, id } = category;
  let index1 = 0;
  const [change, setChange] = useState(0);


  //https://codesandbox.io/s/bitter-meadow-rl8vx?file=/src/App.js:0-1002
  const deleteComponent = (product) => {
    // console.log("** ", product)
    // console.log("iU:  ", filteredarray);
    // console.log("imageUrl!:  ", imageUrl);
    // console.log("fA: ", filteredarray);
    // console.log("prod: ", product)
    setChange(change + 1);
  };



  const addProductToCart = (category) => {
    setpanelArray(panelArray);
    // console.log("pA: ", panelArray);
    const uid = 1;
    // console.log("v:", category);
    // console.log("p ", panelArray);
    // console.log("fa: ", filteredarray);
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



  // console.log("td1: ", todos);
  // console.log("td2: ", todos.value1);
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



  let data = [{}];

  let starFlag = true;

  window.onbeforeunload = function () { }


  //https://github.com/Josheir/image-gallery-project/blob/checkboxComponent/src/components/panel/panel-component.jsx
  function GetStars(event, category, test1) {


    let id1 = event.target.id;
    // console.log("5: ", id);
    let isChecked = event.target.checked;
    let star = 0;
    if (id1 === '0') {
      star = 1;
      if (todos.value1 == false) {
        setTodos((prevState) => ({ ...prevState, value1: true }))
        setTodos((prevState) => ({ ...prevState, value2: false }))
        setTodos((prevState) => ({ ...prevState, value3: false }))
        setTodos((prevState) => ({ ...prevState, value4: false }))

        amtStars = "1 Star";
        //alert("here1");

      }

      else if (todos.value2 == true) {
        starFlag = false;
        setTodos((prevState) => ({ ...prevState, value1: true }))
        setTodos((prevState) => ({ ...prevState, value2: false }))
        setTodos((prevState) => ({ ...prevState, value3: false }))
        setTodos((prevState) => ({ ...prevState, value4: false }))

        //alert("here2");
      }


      else {
        starFlag = false;
        setTodos((prevState) => ({ ...prevState, value1: false }))
        setTodos((prevState) => ({ ...prevState, value2: false }))
        setTodos((prevState) => ({ ...prevState, value3: false }))
        setTodos((prevState) => ({ ...prevState, value4: false }))

        //alert("here2");
      }
    }


    if (id1 === '1') {
      star = 2
      if (todos.value2 == false) {
        setTodos((prevState) => ({ ...prevState, value1: true }))
        setTodos((prevState) => ({ ...prevState, value2: true }))
        setTodos((prevState) => ({ ...prevState, value3: false }))
        setTodos((prevState) => ({ ...prevState, value4: false }))
        amtStars = "2 Stars";
        //alert("here1");

      }

      else if (todos.value3 == true) {
        starFlag = false;
        setTodos((prevState) => ({ ...prevState, value1: true }))
        setTodos((prevState) => ({ ...prevState, value2: true }))
        setTodos((prevState) => ({ ...prevState, value3: false }))
        setTodos((prevState) => ({ ...prevState, value4: false }))

        //alert("here2");
      }

      else {
        starFlag = false;
        setTodos((prevState) => ({ ...prevState, value1: false }))
        setTodos((prevState) => ({ ...prevState, value2: false }))
        setTodos((prevState) => ({ ...prevState, value3: false }))
        setTodos((prevState) => ({ ...prevState, value4: false }))

        //alert("here2");
      }




    }

    if (id1 === '2') {
      star = 3
      if (todos.value3 == false) {
        setTodos((prevState) => ({ ...prevState, value1: true }))
        setTodos((prevState) => ({ ...prevState, value2: true }))
        setTodos((prevState) => ({ ...prevState, value3: true }))
        setTodos((prevState) => ({ ...prevState, value4: false }))
        amtStars = "3 Stars";
        //alert("here1");

      }

      else if (todos.value4 == true) {
        starFlag = false;
        setTodos((prevState) => ({ ...prevState, value1: true }))
        setTodos((prevState) => ({ ...prevState, value2: true }))
        setTodos((prevState) => ({ ...prevState, value3: true }))
        setTodos((prevState) => ({ ...prevState, value4: false }))

        //alert("here2");
      }

      else {
        starFlag = false;
        setTodos((prevState) => ({ ...prevState, value1: false }))
        setTodos((prevState) => ({ ...prevState, value2: false }))
        setTodos((prevState) => ({ ...prevState, value3: false }))
        setTodos((prevState) => ({ ...prevState, value4: false }))

        //alert("here2");
      }

    }


    if (id1 === '3') {
      star = 4
      if (todos.value4 == false) {
        setTodos((prevState) => ({ ...prevState, value1: true }))
        setTodos((prevState) => ({ ...prevState, value2: true }))
        setTodos((prevState) => ({ ...prevState, value3: true }))
        setTodos((prevState) => ({ ...prevState, value4: true }))
        amtStars = "4 Stars";
        //alert("here1");

      }

      else {
        starFlag = false;
        setTodos((prevState) => ({ ...prevState, value1: false }))
        setTodos((prevState) => ({ ...prevState, value2: false }))
        setTodos((prevState) => ({ ...prevState, value3: false }))
        setTodos((prevState) => ({ ...prevState, value4: false }))

        //alert("here2");
      }
    }









    {


      const newStars = items.filter((contact) => contact.id !== Number(id));
      setItems(newStars);

    };





    let v = test1
    if (starFlag == true) {
      //let data1 = [{ id: { x }, name: "item99", }]
      setItems((items) => [...items, { star3: amtStars, id: category.id, name: category.name, imageCount: category.imageUrl }])
    }


  }


  //const listItems = data.map((d) => <li key={d.userID}>{d.name}</li>);
  //console.log("li: ", listItems);


  return (
    /////////////////////////////
    //!!!!!CONTENT WAS HERE  - 688 ... after {listItems}  !!!!!! PROBABLY FOR PANEL DISPLAY - couldnt comment out!
    /////////////////////////////
    <div>
      <div>



        {show && <input id={`${productID}-1`} checked={checkedProducts.map(product => product.id).includes(productID) && checkedProducts.map(product => product.option).includes("option1")} type="checkbox" value="option1" name="1" onChange={(event) => handleCheck(event, category, "1 Stars", productID)} />}
        {show && <input id={`${productID}-2`} checked={checkedProducts.map(product => product.id).includes(productID) && checkedProducts.map(product => product.option).includes("option2")} type="checkbox" value="option2" name="2" onChange={(event) => handleCheck(event, category, "2 Stars", productID)} />}
        {show && <input id={`${productID}-3`} checked={checkedProducts.map(product => product.id).includes(productID) && checkedProducts.map(product => product.option).includes("option3")} type="checkbox" value="option3" name="3" onChange={(event) => handleCheck(event, category, "3 Stars", productID)} />}
        {show && <input id={`${productID}-4`} checked={checkedProducts.map(product => product.id).includes(productID) && checkedProducts.map(product => product.option).includes("option4")} type="checkbox" value="option4" name="4" onChange={(event) => handleCheck(event, category, "4 Stars", productID)} />}






        <DropDown id="id1">
          <div className="images">
            {count++}



            {items.map((item) => (
              <p key={item.id}>{item.star3}</p>
            ))}


          </div>
        </DropDown>


      </div>
    </div>
  )

  function handleCheck(event, cat, string, id) {


    //const savedValues = JSON.parse(localStorage.getItem("checkedValues")) ;
    //if (savedValues) {
    //
    //    console.log("storage", savedValues);
    //    
    //    setCheckedValues(savedValues);
    //    console.log("storage", savedValues);

    // }
    const { value } = event.target;

    let id1 = event.target.id;
    // console.log("5: ", id);
    let isChecked = event.target.checked;
    let star = 0;

    let storedProducts = localStorage.getItem(`checkedProducts`);
    let updatedProducts = [];
    if (storedProducts) updatedProducts = JSON.parse(storedProducts);
    // console.log(`------------------------------------`)
    // console.log(`handleCheck`, id, );
    let optionNumber = parseInt(string.split(``)[0]);
    let prod = cat;
    localStorage.setItem(`checkedProducts`, JSON.stringify([...updatedProducts, {
      ...prod,
      options: prod.options.map(opt => {
        if (opt.option == `option${optionNumber}`) {
          opt.checked = !opt.checked;
          return opt;
        } else {
          return opt;
        }
      })
    }]));
    // setCheckedProducts([...newProductIDS, id]);
    if (id1 === '0') {
      star = 1;
      if (checkedValues.includes("option1") == false) {

        setCheckedValues(checkedValues.filter((v) => v === 1));
        setCheckedValues(["option1"]);

        //setCheckedValues([...checkedValues, value]);

        //setTodos((prevState) => ({ ...prevState, value1: true }))
        //setTodos((prevState) => ({ ...prevState, value2: false }))
        //setTodos((prevState) => ({ ...prevState, value3: false }))
        //setTodos((prevState) => ({ ...prevState, value4: false }))

        amtStars = "1 Star";
        alert("here1");

      }

      else if (checkedValues.includes("option2") === true) {
        starFlag = false;
        setCheckedValues(checkedValues.filter((v) => v === true));
        setCheckedValues(["option1"]);
        //setTodos((prevState) => ({ ...prevState, value1: true }))
        //setTodos((prevState) => ({ ...prevState, value2: false }))
        //setTodos((prevState) => ({ ...prevState, value3: false }))
        //setTodos((prevState) => ({ ...prevState, value4: false }))

        alert("here2");
      }


      else {
        starFlag = false;
        setCheckedValues(checkedValues.filter((v) => v === 1));
        //setTodos((prevState) => ({ ...prevState, value1: false }))
        //setTodos((prevState) => ({ ...prevState, value2: false }))
        //setTodos((prevState) => ({ ...prevState, value3: false }))
        //setTodos((prevState) => ({ ...prevState, value4: false }))

        alert("here3");
      }
    }

    if (id1 === '1') {
      star = 2
      if (checkedValues.includes("option2") == false) {
        setCheckedValues(checkedValues.filter((v) => v === 1));
        setCheckedValues(["option1", "option2"]);
        // setCheckedValues([...checkedValues, "option2"]);
        //setTodos((prevState) => ({ ...prevState, value1: true }))
        //setTodos((prevState) => ({ ...prevState, value2: true }))
        //setTodos((prevState) => ({ ...prevState, value3: false }))
        //setTodos((prevState) => ({ ...prevState, value4: false }))
        amtStars = "2 Stars";
        alert("here1a");

      }

      else if (checkedValues.includes("option3") == true) {
        starFlag = false;
        setCheckedValues(checkedValues.filter((v) => v === 1));
        setCheckedValues(["option1", "option2"]);

        //setTodos((prevState) => ({ ...prevState, value1: true }))
        //setTodos((prevState) => ({ ...prevState, value2: true }))
        //setTodos((prevState) => ({ ...prevState, value3: false }))
        //setTodos((prevState) => ({ ...prevState, value4: false }))

        alert("here2a");
      }

      else {
        starFlag = false;
        setCheckedValues(checkedValues.filter((v) => v === 1));
        //setTodos((prevState) => ({ ...prevState, value1: false }))
        //setTodos((prevState) => ({ ...prevState, value2: false }))
        //setTodos((prevState) => ({ ...prevState, value3: false }))
        //setTodos((prevState) => ({ ...prevState, value4: false }))

        alert("here3a");
      }


    }

    if (id1 === '2') {
      star = 3
      if (checkedValues.includes("option3") == false) {
        setCheckedValues(checkedValues.filter((v) => v === 1));
        setCheckedValues(["option1", "option2", "option3"]);
        //setTodos((prevState) => ({ ...prevState, value1: true }))
        //setTodos((prevState) => ({ ...prevState, value2: true }))
        //setTodos((prevState) => ({ ...prevState, value3: true }))
        //setTodos((prevState) => ({ ...prevState, value4: false }))
        amtStars = "3 Stars";
        alert("4a")
        //alert("here1");

      }

      else if (checkedValues.includes("option4") === true) {
        starFlag = false;
        setCheckedValues(checkedValues.filter((v) => v === 1));
        setCheckedValues(["option1", "option2", "option3"]);
        //setTodos((prevState) => ({ ...prevState, value1: true }))
        //setTodos((prevState) => ({ ...prevState, value2: true }))
        //setTodos((prevState) => ({ ...prevState, value3: true }))
        //setTodos((prevState) => ({ ...prevState, value4: false }))
        alert("4b")
        //alert("here2");
      }

      else {
        starFlag = false;
        setCheckedValues(checkedValues.filter((v) => v === 1));
        //setTodos((prevState) => ({ ...prevState, value1: false }))
        //setTodos((prevState) => ({ ...prevState, value2: false }))
        //setTodos((prevState) => ({ ...prevState, value3: false }))
        //setTodos((prevState) => ({ ...prevState, value4: false }))
        alert("4c")
        //alert("here2");
      }

    }


    if (id1 === '3') {
      star = 4
      if (checkedValues.includes("option4") == false) {
        setCheckedValues(checkedValues.filter((v) => v === 1));
        setCheckedValues(["option1", "option2", "option3", "option4"]);
        //setTodos((prevState) => ({ ...prevState, value1: true }))
        //setTodos((prevState) => ({ ...prevState, value2: true }))
        //setTodos((prevState) => ({ ...prevState, value3: true }))
        //setTodos((prevState) => ({ ...prevState, value4: true }))
        amtStars = "4 Stars";
        //alert("here1");
        alert("5a")

      }

      else {
        starFlag = false;
        setCheckedValues(checkedValues.filter((v) => v === 1));
        //setTodos((prevState) => ({ ...prevState, value1: false }))
        //setTodos((prevState) => ({ ...prevState, value2: false }))
        //setTodos((prevState) => ({ ...prevState, value3: false }))
        //setTodos((prevState) => ({ ...prevState, value4: false }))

        alert("here2z");
        alert("5b")
      }





    }


    /*
    //const { value } = event.target
  console.log("val ", value);
    if (checkedValues.includes(value) && checkedValues.includes("option2")) {

      alert("options");
      //setCheckedValues([...checkedValues, value]);
      //setCheckedValues(checkedValues.filter((v) => v !== value));
      setCheckedValues(checkedValues.filter((v) => v === value));
      //setCheckedValues([...checkedValues, value]);
      
    } else {

      

      
      alert("here");
      //alert("here ", value);
      setCheckedValues("test")
      //no check, add it to array
      console.log("1a ",checkedValues)
      //setCheckedValues([]);
      
      
      setCheckedValues([...checkedValues, value]);
      
      
      
      
      console.log("2a ", checkedValues)
      
    }
    
  */

  }





  const addCartItem = (panelArray, productToAdd) => {
    // console.log(productToAdd);
    return (productToAdd);
  };


  /*
  
  import React, { useState, useEffect } from 'react';
  
  function CheckboxGroup() {
    const [checkedValues, setCheckedValues] = useState([]);
  
    useEffect(() => {
      localStorage.setItem('checkedValues', JSON.stringify(checkedValues));
    }, [checkedValues]);
  
    useEffect(() => {
      const savedValues = JSON.parse(localStorage.getItem('checkedValues'));
      if (savedValues) {
        setCheckedValues(savedValues);
      }
    }, []);
  
    function handleCheckboxChange(event) {
      const { value } = event.target;
      if (checkedValues.includes(value)) {
        setCheckedValues(checkedValues.filter((v) => v !== value));
      } else {
        setCheckedValues([...checkedValues, value]);
      }
    }
  
    return (
      <div>
        <label>
          <input
            type="checkbox"
            value="option1"
            checked={checkedValues.includes('option1')}
            onChange={handleCheckboxChange}
          />
          Option 1
        </label>
        <label>
          <input
            type="checkbox"
            value="option2"
            checked={checkedValues.includes('option2')}
            onChange={handleCheckboxChange}
          />
          Option 2
        </label>
        <label>
          <input
            type="checkbox"
            value="option3"
            checked={checkedValues.includes('option3')}
            onChange={handleCheckboxChange}
          />
          Option 3
        </label>
      </div>
    );
  }
  
  
  */
}
export default Panel;