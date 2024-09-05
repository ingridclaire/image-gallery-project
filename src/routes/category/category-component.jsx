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
        price: 26,
        options: [{option:'option1' , checked: false}, {option:'option2' , checked: false}, {option:'option3' , checked: false}, {option:'option4' , checked: false}],
        category: "art1",
        amtstars: "none"
       
        
      },

      {
      id: 2,
      name: "name2",
      imageUrl:  require ("./test.png"),
      price: 190,
      options: [{option:'option1' , checked: false}, {option:'option2' , checked: false}, {option:'option3' , checked: false}, {option:'option4' , checked: false}],
      category: "art2",
      amtstars: "none"
      },

];


let storedPanel = []
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


let initialProducts = []
  
  //associated with image-component
  export default function Category() {
    let [hasrun, setHasRun] = useState(false) 
    //setCheckBoxes(true,true,true,true, PanelInfoArray, 1)//
    const route1 = useParams()
    console.log("cp2: ", {route1})
    console.log("route1: ", route1)
    
  let [products, setProducts] = useState(PHOTO) 
  storedPanel = localStorage.getItem(`panel`)
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
  const [stars, setStars] = useState([]);
  const [showPanel, setShowPanel] = useState(false);
  //!!!!!!!!!!
  // And lets store the final generated array of products with everything we need back into our localstorage to sync it up//
  //localStorage.setItem(`products`, JSON.stringify(null));//
  let count = 0;
  
  const setCheckBoxesAndStars = (check1,check2,check3,check4,infoArray,id, amtountOfStars) => {
 
    infoArray[id-1].options[0].checked = check1
    infoArray[id-1].options[1].checked = check2
    infoArray[id-1].options[2].checked = check3
    infoArray[id-1].options[3].checked = check4
    if(amtountOfStars == 1){
      infoArray[id-1].amtstars = "One Star"
    }
    if(amtountOfStars == 2){
       infoArray[id-1].amtstars = "Two Stars"
      }
    if(amtountOfStars == 3){
       infoArray[id-1].amtstars = "Three Stars"
      }
    if(amtountOfStars == 4){
       infoArray[id-1].amtstars = "Four Stars"
      }
   return infoArray
  }

  const computeStars = (e, index, howManyChecked, id, product) => {

      infoArray = [...products]
      let checked = e.target.checked
      
    id = id -1;
    let amtStars = 0;
    
    console.log("prod:", products )
  
    setHasRun(!hasrun)

    //index of four stars satring at zero
    index = index - 1
    id = id + 1

      //PanelInfoArray[0].options1[0].checked = true
      if (index === 0) {
      if (infoArray[id-1].options[1].checked == true) {
        amtStars = 1;
        setCheckBoxesAndStars(true,false,false,false,infoArray,id,amtStars)
        } else if (infoArray[id - 1].options[0].checked == true) {
        amtStars = 0;
        setCheckBoxesAndStars(false,false,false,false,infoArray,id,amtStars)
        } else {
        amtStars = 1;
        setCheckBoxesAndStars(true,false,false,false,infoArray,id,amtStars)  
        } 
    }
    if (index === 1) {
      if (infoArray[id - 1].options[2].checked == true) {
         amtStars = 2;
        setCheckBoxesAndStars(true,true,false,false,infoArray,id,amtStars)
       } else if (infoArray[id - 1].options[1].checked == false) {
         amtStars = 2;
        setCheckBoxesAndStars(true,true,false,false,infoArray,id,amtStars)
       } else {
        amtStars = 0;
        setCheckBoxesAndStars(false,false,false,false,infoArray,id,amtStars)
         }
       }
    if (index === 2) {
      if (infoArray[id - 1].options[3].checked == true) {
            amtStars = 3;
        setCheckBoxesAndStars(true,true,true,false,infoArray,id,amtStars)
        } else if (infoArray[id - 1].options[2].checked == true) {
       amtStars = 0;
        setCheckBoxesAndStars(false,false,false,false,infoArray,id,amtStars)
       } else {
      amtStars = 3;
      setCheckBoxesAndStars(true,true,true,false,infoArray,id,amtStars)
      }
    }

    if (index === 3) {
      if (infoArray[id - 1].options[3].checked == true) {
        amtStars = 0;
        setCheckBoxesAndStars(false,false,false,false,infoArray,id,amtStars)
        } else {
        amtStars = 4;
        setCheckBoxesAndStars(true,true,true,true,infoArray,id,amtStars)
        }
      }
      setProducts(infoArray)
     
      localStorage.setItem(`panel`, JSON.stringify(infoArray));
      
      storedPanel = localStorage.getItem(`panel`)
    
    //setProducts((products) => [...products, { id: 100, name:"name1b",   imageUrl: require ("./test.png") , price: 6, options: [{option:'option1' , checked: true}, {option:'option2' , checked: false}, {option:'option3' , checked: false}, {option:'option4' , checked: false}]}
    //localStorage.setItem(`products`, JSON.stringify(PanelInfoArray));
   };
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
  

