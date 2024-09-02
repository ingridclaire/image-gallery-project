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



let PanelInfoArray = [

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
        options: [{option:'option1' , checked: true}, {option:'option2' , checked: false}, {option:'option3' , checked: false}, {option:'option4' , checked: false}],
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


PHOTO = [
  // {
     //atitle: "Hats",
    // items: [
       {
         id: 1,
         name: "name",
         imageUrl: require ("./test.png"),
         price: 25,
         options: [{option:'option1' , checked: true}, {option:'option2' , checked: false}, {option:'option3' , checked: false}, {option:'option4' , checked: false}],
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
  let artPiecesOfCategoryArray = []
  artPiecesOfCategoryArray = PHOTO.filter(function (element){
  //  console.log("cp: ", categoryParam)
    //keeps this
    console.log("element:" , element.category)
    console.log("route:" , route1)
    return element.category == "art2"//route1.category
  }) 

  console.log("art:" , artPiecesOfCategoryArray)

  products = [...artPiecesOfCategoryArray]
  console.log("p1: ", products)
   
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
  
    const computeStars = (e, index, howManyChecked, id, product) => {

      
      let checked = e.target.checked
      
    index = index -1;
    let amtStars = 0;
    //options1[0].checked = true
    let checksArray = []

    checksArray = "a"
   


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
          //UNCOMMENT THESE WITH A FILTER, TO CHANGEE TO NEW DATA
          //setProducts((products) => [...products,{ id: 7, name:"name4" ,  imageUrl: require ("./test.png"),  price: 6, options: [{option:'option1' , checked: false}, {option:'option2' , checked: true}, {option:'option3' , checked: false}, {option:'option4' , checked: false}]   }
          //]);
         
          ////setProducts((products) => [...products, { id: 100, name:"name1b",   imageUrl: require ("./test.png") , price: 6, options: [{option:'option1' , checked: true}, {option:'option2' , checked: false}, {option:'option3' , checked: false}, {option:'option4' , checked: false}]   }
          ////]);
   
    localStorage.setItem(`products`, JSON.stringify(PanelInfoArray));
    console.log("pan: ", PanelInfoArray)
    handleCheck(true, product, howManyChecked);
    
  };
  
  let panelArray2 = [];

  //!!!
  
  let indexCount = 0;
  //!!!

  let panelArrayWithSameIDsChanged = []
  let storedPanel = []
  
  const handleCheck = (option, product, amtStars) => {
    
    let check1 = false
    let check2 = false
    let amtString = "";
    switch (amtStars) {
      case 1:
        amtString = "One Star";
        break;
      case 2:
        amtString = "Two Stars";
        check1 = true
        check2 = true
        break;
      case 3:
        amtString = "Three Stars";
        break;
      case 4:
        amtString = "Four Stars";
        break;
      default:
        amtString = "none";
    }

   
//////////////////////////THIS ISNT WORKING - RERENDER WITH THIS PRODUCT
//usestate 180
//PHOTO at top


    var update = [

      ...products,

       {

        id:3,
        name: "aaa",
        imageUrl: require ("./test.png"),
        price:  2599,
        options: [{option:'option1' , checked: check1}, {option:'option2' , checked: check2}, {option:'option3' , checked: false}, {option:'option4' , checked: false}],
        category: "art2",
        amtstars: amtString
      }

    ]

    

    var panelElement = {

      id:product.id,
      name: "aaa",
      imageUrl: require ("./test.png"),
      price:  2599,
      options: [{option:'option1' , checked: check1}, {option:'option2' , checked: check2}, {option:'option3' , checked: false}, {option:'option4' , checked: false}],
      category: "art2",
      amtstars: amtString
    };

    setProducts(...products, panelElement)

    /////////////////////////////////////////////////////////
    

    ///THIS IS FOR DISPLAYING PANEL///////////

    var anotherPanel = [...products]
    //add an element to array
    panelArrayWithSameIDsChanged = anotherPanel.map(element => element.id !== product.id ? element : panelElement)
    console.log("products: ", products)
    
    let a = products
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
         
         
          { products &&
            // Use filter to keep only the products with the matching category we want
            //.filter((prod) => prod.category === category)
               products.map((product) => {
                {
                  indexCount = indexCount + 1;
                }
                let ID = product.id;
                let productID = `product-${product.id}`;
                let productDetailsID = `${productID}-details`;
                
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
  

