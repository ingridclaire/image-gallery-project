//IMAGES/COMPONENTS NOW GET RENDERED.
//WRITE A FILTER AND REMOVE THE OLD COMPONENT SO THERE WILL ONLY BE ONE
//ALSO, SET COMPONENT WITH VARIABLES FOR THE SETPRODUCT
//USE A SORT ALGORITHM, BUBBLE SORT SHOULD BE FINE
//CLEAN UP CODE
//FIX CONTEXT
//STUDY USESTATE WITH CONTEXT

import { CategoriesContext } from "../../contexts/categories-context";
import { useContext, useState, useEffect, Fragment } from "react";
import { CategoryContainer } from "./category-styles";
import { useParams,  useNavigate } from "react-router-dom";
import Panel from "../../components/panel/panel-component";



let infoArray = [

  {
    id: 1,
    name: "name3",
    imageUrl: require ("./test.png"),
    price: 25,
    options: [{option:'option1' , checked: false}, {option:'option2' , checked: false}, {option:'option3' , checked: false}, {option:'option4' , checked: false}],
    category: "art2",
    amtstars: "none"
    //options: [{option:'option1' , checked: true}, {option:'option2' , checked: false}, {option:'option3' , checked: false}, {option:'option4' , checked: false}]

    //options: [ {checked: true,checked: true,checked: true,checked: true, }]/
    
  },

] 
let PHOTO = [
 // {
    //atitle: "Hats",
   // items: [
      {
        id: 1,
        name: "name1",
        imageUrl: require ("./test.png"),
        price: 25,
        options: [{option:'option1' , checked: false}, {option:'option2' , checked: false}, {option:'option3' , checked: false}, {option:'option4' , checked: false}],
        category: "art2",
        amtstars: "none"
        //options: [{option:'option1' , checked: true}, {option:'option2' , checked: false}, {option:'option3' , checked: false}, {option:'option4' , checked: false}]
  
        //options: [ {checked: true,checked: true,checked: true,checked: true, }]/
        
      },

      {
      id: 2,
      name: "name2",
      imageUrl:  require ("./test.png"),
      price: 180,
      options: [{option:'option1' , checked: false}, {option:'option2' , checked: false}, {option:'option3' , checked: false}, {option:'option4' , checked: false}],
      category: "art2",
      amtstars: "none"
      },

      
  //  ],
  //},
];

//used
var star1 = "++++";

export const getLatestStoredNotifications = () => {
  if (localStorage.getItem(`products`)) {
    let storedProducts = makeCopyOfProductsWithCustomData(
      JSON.parse(localStorage.getItem(`products`))
    );
    return storedProducts;
  } else {
    return [];
  }
};

// We add category as a secondary parameter in the function
export const makeCopyOfProductsWithCustomData = (arrayOfProducts, category) => {
  console.log("was in function: ",arrayOfProducts)
  return arrayOfProducts
  let index = 0;
  if (arrayOfProducts) {
    if (arrayOfProducts.length > 0) {
      
      return arrayOfProducts.map((prod) => {
        index++;
        
        return {
          ...prod,
          index,
          category: prod.category || category, // Adding the category as a backup property in our custom objects
          options: prod.options || [
            { option: `option1`, checked: false },
            { option: `option2`, checked: false },
            { option: `option3`, checked: false },
            { option: `option4`, checked: false },
          ],

         
        };
      });
    } else {
      return arrayOfProducts;
    }
  } else {
    return arrayOfProducts;
  }
};





//let setCheckBoxes = (chk0, chk1, chk2,chk3, PanelInfoArray) => {
//  PanelInfoArray[0].options[0].checked = chk0;
//  PanelInfoArray[0].options[1].checked = chk1;
//  PanelInfoArray[0].options[2].checked = chk2;
//  PanelInfoArray[0].options[3].checked = chk3;
//
//  return PanelInfoArray
//
//}



let initialProducts = []



  //associated with image-component
  export default function Category() {

    
    let [hasrun, setHasRun] = useState(false) 
  

    //setCheckBoxes(true,true,true,true, PanelInfoArray, 1)
    const route1 = useParams()
    console.log("cp2: ", {route1})
    console.log("route1: ", route1)
    
  let [products, setProducts] = useState(PHOTO) 
  
  
  
 
  const [state , setState] = useState([])     
 

  //////////////////////////////////////////////RESUME THIS: ROUTING!!!
  //console.log("cp1: ", categoryParam)
  //let artPiecesOfCategoryArray = []
  //artPiecesOfCategoryArray = PHOTO.filter(function (element){
  //  console.log("cp: ", categoryParam)
    //keeps thi s
    //console.log("element:" , element.category)
    //console.log("route:" , route1)
    //return element.category == "art2"//route1.category
  //}) 

  //console.log("art:" , artPiecesOfCategoryArray)

  //products = [...artPiecesOfCategoryArray]
  //console.log("p1: ", products)
   
  /////////////////////////////////////////////////////////////
  useEffect(() => {
  
    
  }, [])

  

//  useEffect(() => {
//  console.log( "state: " , products) 
//  }, [products])

  
  const [stars, setStars] = useState([]);
  const [showPanel, setShowPanel] = useState(false);
  //!!!!!!!!!!

  // And lets store the final generated array of products with everything we need back into our localstorage to sync it up//
  //localStorage.setItem(`products`, JSON.stringify(null));
  let count = 0;
  
  const setCheckBoxes = (check1,check2,check3,check4,infoArray,id) => {
 
    infoArray[id-1].options[0].checked = check1
    infoArray[id-1].options[1].checked = check2
    infoArray[id-1].options[2].checked = check3
    infoArray[id-1].options[3].checked = check4

    return infoArray

  }

 
  const computeStars = (e, index, howManyChecked, id, product) => {

      infoArray = [...products]
      let checked = e.target.checked
      
    id = id -1;
    let amtStars = 0;
    //options1[0].checked = true
  

  
   


    //setProducts(artPiecesOfCategoryArray)
    console.log("prod:", products )
  
    //if (showPanel){
      //setShowPanel(false)
      //setShowPanel(false)
      //setShowPanel(true)
      //setShowPanel((showPanel) => false);
      //setShowPanel((showPanel) => true);
    //}

    setHasRun(!hasrun)

    //////////////

    //let infoArray = [...products]
       

    //three stars is giving for arrayRemove, 2 starts - check index!
    //id = 1


    //id = id - 1 
    //index of four stars satring at zero
    index = index - 1
    id = id + 1

      //PanelInfoArray[0].options1[0].checked = true
      if (index === 0) {
      if (infoArray[id-1].options[1].checked == true) {
        setCheckBoxes(true,false,false,false,infoArray,id)
        amtStars = 1;
      } else if (infoArray[id - 1].options[0].checked == true) {
        setCheckBoxes(false,false,false,false,infoArray,id)
        amtStars = 0;
      } else {
        setCheckBoxes(true,false,false,false,infoArray,id)
        amtStars = 1;
      }
    }

    if (index === 1) {
      if (infoArray[id - 1].options[2].checked == true) {
        setCheckBoxes(true,true,false,false,infoArray,id)
        amtStars = 2;
      } else if (infoArray[id - 1].options[1].checked == false) {
        setCheckBoxes(true,true,false,false,infoArray,id)
        amtStars = 2;
      } else {
        setCheckBoxes(false,false,false,false,infoArray,id)
        amtStars = 0;
      }
    }
    
    if (index === 2) {
      if (infoArray[id - 1].options[3].checked == true) {
        setCheckBoxes(true,true,true,false,infoArray,id)
        amtStars = 3;
      } else if (infoArray[id - 1].options[2].checked == true) {
        setCheckBoxes(false,false,false,false,infoArray,id)
        amtStars = 0;
      } else {
        setCheckBoxes(true,true,true,false,infoArray,id)
        amtStars = 3;
      }
    }
    if (index === 3) {
      if (infoArray[id - 1].options[3].checked == true) {
        setCheckBoxes(false,false,false,false,infoArray,id)
        
        amtStars = 0;
      } else {
        setCheckBoxes(true,true,true,true,infoArray,id)
        amtStars = 4;
      }
    }


    //////////////
          //UNCOMMENT THESE WITH A FILTER, TO CHANGEE TO NEW DATA
          //setProducts((products) => [...products,{ id: 7, name:"name4" ,  imageUrl: require ("./test.png"),  price: 6, options: [{option:'option1' , checked: false}, {option:'option2' , checked: true}, {option:'option3' , checked: false}, {option:'option4' , checked: false}]   }
          //]);
         
          ////setProducts((products) => [...products, { id: 100, name:"name1b",   imageUrl: require ("./test.png") , price: 6, options: [{option:'option1' , checked: true}, {option:'option2' , checked: false}, {option:'option3' , checked: false}, {option:'option4' , checked: false}]   }
          ////]);
   
    //localStorage.setItem(`products`, JSON.stringify(PanelInfoArray));
    //console.log("pan: ", PanelInfoArray)
    handleCheck(true, product, howManyChecked, infoArray);
    
  };
  
  let panelArray2 = [];

  //!!!
  
  let indexCount = 0;
  //!!!

  let panelArrayWithSameIDsChanged = []
  let storedPanel = []
  

  
  const handleCheck = (option, product, amtStars, optionsArray) => {
    console.log("IA :", infoArray  )
    let check1 = false
    let check2 = false
    let check3 = false
    let check4 = false
    let amtString = "";
    switch (amtStars) {
      case 1:
        check1 = true
        amtString = "One Star";
        break;
      case 2:
        check1 = true
        check2 = true
        amtString = "Two Stars";
        break;
      case 3:
        check1 = true
        check2 = true
        check3 = true
         amtString = "Three Stars";
        break;
      case 4:
        check1 = true
        check2 = true
        check3 = true
        check4 = true
        amtString = "Four Stars";
        break;
      default:
        amtString = "none";
    }

   
//////////////////////////THIS ISNT WORKING - RERENDER WITH THIS PRODUCT
//DOESN'T UPDATE OR REPLACE - WITH ARRAY OR ELEMENT
//usestate 180
//PHOTO at top
//USESTATE SETS DEFAULT AS PHOTO (2 ELEMENTS)
//setProducts :  set with array of objects!



  var panelElement = {

  id:product.id,
  name: "name100",
  //imageUrl: require ("./test.png"),
  imageUrl: product.imageUrl,
  price:  product.price,
  options: [{option:'option1' , checked: check1}, {option:'option2' , checked: check2}, {option:'option3' , checked: false}, {option:'option4' , checked: false}],
  category: "art2",
  amtstars: amtString
};


///optionsarray holds correct data


//let completeProductElement = [panelElement, optionsArray]

//let oneElment = completeProductElement[0]
//  var anotherPanel = [...products]
//
//  let panelArrayWithSameIDsChanged = anotherPanel.map(element => element.id !== product.id ? element : oneElment)
//  //var update = [...products,panelElement]
  setProducts(optionsArray)


    

    /////////////////////////////////////////////////////////
    let update = []

    ///THIS IS FOR DISPLAYING PANEL///////////

    //asynchronous
    //var anotherPanel = [...products]
    let anotherPanel = [...update]
    //add an element to array
    panelArrayWithSameIDsChanged = anotherPanel.map(element => element.id !== product.id ? element : panelElement)
    console.log("products: ", products)
    localStorage.clear()
    localStorage.setItem(`panel`, JSON.stringify(panelArrayWithSameIDsChanged));
    storedPanel = localStorage.getItem("panel")


    /////////////////////////////////////////


    console.log("sp: ", storedPanel)
    
  }
  
  console.log("pr*: ", products)

   
  return (
    <div>
      <br></br><br></br>

        <button
          className="buttonShow"
          onClick={() => {
        //
            setShowPanel((showPanel) => !showPanel);
          }}
        >
          Show Panel
        </button>

      <h4>Rate an image:</h4>
      <Fragment>
        <CategoryContainer>
         
         
          {
            // Use filter to keep only the products with the matching category we want
            //.filter((prod) => prod.category === category)
               products.map((product) => {
                //{
                //  indexCount = indexCount + 1;
                //}
                let ID = product.id;
                let productID = `product-${product.id}`;
                let productDetailsID = `${productID}-details`;
                console.log("mapping products: ", product)
                
                return (
                  
                 <div id={productID} className={`product`} key={product.name}>
                    <div id={`drop`}>{product.id}</div>
                    <div id={productDetailsID}>
                      <h2>{product.name}</h2>
                      <h3>${product.price}.00</h3>
                      <div className={`images`}>
                        <img
                          type="Image"
                          src = {product.imageUrl}
                          alt={product.name}
                          width={90}
                        />
                      </div>
                      
                    </div>
                     <div className="optionsContainer">
                      
                     {product.options.map((opt, optIndex) => {
                        let newOptIndex = optIndex + 1;
                        let productOptionValue = `option${newOptIndex}`;
                        let productOptionID = `${productID}-option-${newOptIndex}`;
                        
                        return (
                          <input
                            key={optIndex}
                            id={productOptionID}
                            checked={opt.checked}
                            type={`checkbox`}
                            value={productOptionValue}
                            name={newOptIndex}
                            onChange={e => computeStars(e,  newOptIndex, newOptIndex, ID, product)
                           //(options1, product, index, id)
                             }
                          />
                        );
                      })}

                      {
                        showPanel  && <Panel
                        
                        key={storedPanel.name} category={storedPanel} />
                          //stars={panelArrayWithSameIDsChanged.amtstars}
                          //key={product.id}
                          //category={product}
                          //productID={productID}
                        ///>
                      }
                    </div>
                  </div>
                );
              })}
        </CategoryContainer>
      </Fragment>
    </div>
  );
}
  

