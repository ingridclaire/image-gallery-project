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
import { useParams } from "react-router-dom";
import Panel from "../../components/panel/panel-component";

///

let PanelInfoArray = [] 
let PHOTO = [
 // {
    //atitle: "Hats",
   // items: [
      {
        id: 5,
        name: "name1a",
        imageUrl: require ("./test.png"),
        price: 25,
        options: [{option:'option1' , checked: false}, {option:'option2' , checked: false}, {option:'option3' , checked: false}, {option:'option4' , checked: false}]
        //options: [{option:'option1' , checked: true}, {option:'option2' , checked: false}, {option:'option3' , checked: false}, {option:'option4' , checked: false}]
  
        //options: [ {checked: true,checked: true,checked: true,checked: true, }]/
        
      },

      {
      id: 50,
      name: "name2",
        imageUrl:  require ("./brown-brim.f8a895734ce2f9dc6679.png"),
        price: 180,
        options: [{option:'option1' , checked: true}, {option:'option2' , checked: false}, {option:'option3' , checked: false}, {option:'option4' , checked: false}]
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

let setCheckBoxes = (chk0, chk1, chk2,chk3, PanelInfoArray, id) => {
  PanelInfoArray[id - 1].options[0].checked = chk0;
  PanelInfoArray[id - 1].options[1].checked = chk1;
  PanelInfoArray[id - 1].options[2].checked = chk2;
  PanelInfoArray[id - 1].options[3].checked = chk3;

  return PanelInfoArray

}
let initialProducts = []
  export default function Category() {
  let [products, setProducts] = useState(PHOTO) 
  let [hasrun, setHasRun] = useState(false) 
  const [state , setState] = useState([])     
 
  useEffect(() => {
  console.log( "state: " , products) 
  }, [products])
const [stars, setStars] = useState([]);
//!!!!!!!!!!
let { category } = useParams();

  // And lets store the final generated array of products with everything we need back into our localstorage to sync it up//
  localStorage.setItem(`products`, JSON.stringify(null));
  let count = 0;
  
    const computeStars = (e, index, two, id, product) => {

      
      let checked = e.target.checked
      
    index = index -1;
    let amtStars = 0;
    //options1[0].checked = true
    let checksArray = []

    checksArray = "a"
   



          
          setProducts((products) => [...products,{ id: 7, name:"name4" ,  imageUrl: require ("./test.png"),  price: 6, options: [{option:'option1' , checked: false}, {option:'option2' , checked: true}, {option:'option3' , checked: false}, {option:'option4' , checked: false}]   }
          ]);
         
          setProducts((products) => [...products, { id: 100, name:"name1a",   imageUrl: require ("./test.png") , price: 6, options: [{option:'option1' , checked: true}, {option:'option2' , checked: false}, {option:'option3' , checked: false}, {option:'option4' , checked: false}]   }
          ]);
   
    localStorage.setItem(`products`, JSON.stringify(PanelInfoArray));
    handleCheck(true, product, amtStars);
    
  };
  
  let panelArray2 = [];

  

  
  const handleCheck = (option, product, amtStars) => {
    
    let amtString = "";
    switch (amtStars) {
      case 1:
        amtString = "One Star";
        break;
      case 2:
        amtString = "Two Stars";
        break;
      case 3:
        amtString = "Three Stars";
        break;
      case 4:
        amtString = "Four Stars";
        break;
      default:
        amtString = "Zero Stars";
    }




    let amtstars = 1;


   
    //!!!!!!!!!!!!!!!!!!
    //localStorage.setItem(`products`, JSON.stringify(updatedProducts));
    ////////////

    var panelArray = JSON.parse(localStorage.getItem("panel") || "[]");
    var panel = {
      amtstars: amtString,
      id: product.id,
      name1: product.name,
      url: product.imageUrl,
      price: product.price,
    };
    panelArray2 = panelArray.filter((panel) => panel.id !== product.id);
    if (amtString != "Zero Stars") {
      panelArray2.push(panel);
    }
   
    localStorage.setItem("panel", JSON.stringify(panelArray2));
   
    
  };

  let indexCount = 0;
  const [showPanel, setShowPanel] = useState(false);
  
  
  
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
                        
                          stars={star1}
                          key={product.id}
                          category={product}
                          productID={productID}
                        />
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
