//CLEAN UP CODE
//FIX CONTEXT
//STUDY USESTATE WITH CONTEXT

//9/7/24 
//NEXT:  IF CATEGORY IS EQUAL TO I.E. ART1, THAN DISPLAY ONLY THOSE IMAGES, USE USENAVIGATE, GETPARAMS
//LOCAL STORAGE, PANEL AND PRODUCTS
//UNDERSTAND ROUTING
import { useContext, useState, useEffect, Fragment } from "react";
import { CategoryContainer } from "./category-styles";
import { useParams,  useNavigate } from "react-router-dom";
import Panel from "../../components/panel/panel-component";
import {after} from "underscore"
import  {NavLink}
 from "../navigation/navigation-styles";
//import {ART}  from "../../assets/IMAGE_DATA"


let storedPanel = []

let infoArray = [

  {
    id: 0,
    name: "name",
    imageUrl: require ("../../assets/1.png"),
    price: 25,
    options: [{option:'option1' , checked: false}, {option:'option2' , checked: false}, {option:'option3' , checked: false}, {option:'option4' , checked: false}],
    category: "art1",
    amtstars: "none"
  },

] 



























//used
var star1 = "++++";

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
let artPiecesOfCategoryArray = []
 
 
  //associated with image-component
  export default function Category() {
    
    const [loading, setLoading] = useState(true)
    let [oldArray, setOldArray] = useState(ART);
    let [hasrun, setHasRun] = useState(false) 
    //setCheckBoxes(true,true,true,true, PanelInfoArray)//
    const route = useParams()
    console.log("cp2: ", {route})
    //console.log("route: ", route)
    let imageCategoryToShow = route.category;
    //console.log("zzz: ", a)


    
//CHECK BOX NOT DISPALYING TRUE IN FIRST BOX, LOOK AT SETCHECKBOXES, BELOW!
//OLDARRAY IS NOT USESTATE YET
//LOCALSTORAGE HOLDS VALUES OF ALL PRODUCTS THAT SHOULD BE USED IN FILE, SOME HOW
//PRODUCT SHUOL HOLD ALL VALUES, EVEN AT START AND ONLY DISPLAY THOSE WITH CATEGORY////


let locallyStoredProducts = []
let [products, setProducts] = useState( ART) 



artPiecesOfCategoryArray  = products.filter((element) => element.category === imageCategoryToShow)
 

  console.log("route: ", artPiecesOfCategoryArray)
  
  useEffect(() => {
    console.log("here!")
    const productsArrayStored = JSON.parse(localStorage.getItem('products'))
    const panelsArrayStored = JSON.parse(localStorage.getItem('panel'))
    if  (productsArrayStored){
      setProducts( productsArrayStored)
    }
    if(panelsArrayStored){
      setPanelInformation(panelsArrayStored)
    }
  }, [])




  //!!!!!!!!!!!!!!!!!!setPanelInfo()



  /*
  //there is no stored values, so make default elements, with no checks
  if(locallyStoredProduct.length == 0){
    localStorage.setItem(`products`, JSON.stringify(artPiecesOfCategoryArray));
    setProducts(locallyStoredProduct)
  }else{
    //there is a stored array
    //localStorage.setItem(`products`, JSON.stringify(locallyStoredProduct));
    usetProducts(locallyStoredProduct)
  }
    */
  const onComplete = after(products.length, () => {
    setLoading(false)
    console.log("loaded")
  })
  







  //storedPanel = localStorage.getItem(`panel`)
  //const [state , setState] = useState([])   
  
  //Keeps record of starred components, in order
  //sets all products to photo (every product) and set stars and amtstars to use
  let [panelInformation, setPanelInformation] = useState([])

  console.log("PE2: " , panelInformation)
 

  //////////////////////////////////////////////RESUME THIS: ROUTING!!!//
  //console.log("cp1: ", categoryParam)
  //let artPiecesOfCategoryArray = []
  //artPiecesOfCategoryArray = ART.filter(function (element){
  //  console.log("cp: ", categoryParam)
    //keeps thi s
    //console.log("element:" , element.category)
    //console.log("route:" , route1)
    //return element.category == "art2"//route1.category
  //}) 

  //console.log("art:" , artPiecesOfCategoryArray)

  //products = [...artPiecesOfCategoryArray]
  //console.log("p1: ", products)
   
  ///////////////////////////////////////////////////////////////
  useEffect(() => {
  
    
  }, [])
  const [stars, setStars] = useState([]);
  let [showPanel, setShowPanel] = useState(false);
  //!!!!!!!!!!
  // And lets store the final generated array of products with everything we need back into our localstorage to sync it up//
  //setItem(`products`, JSON.stringify(null));//
  let count = 0;
  
 

  let IsElementSameID = false;

  //amount of stars is what was selected from that interface
  const setPanelInfo = (amtountOfChecks, product) => {

    let panelInformationListLeftElements = []
    let panelArrayWithDeletedElement = []
    //this is the passed in data that builds the new element
    if(amtountOfChecks == 1){
     setElement(product.id, product.name, product.imageUrl, product.price, true, false, false, false, product.category, "One Check") 
    }
    else if(amtountOfChecks == 2){
      setElement(product.id, product.name, product.imageUrl, product.price, true, false, false, false, product.category, "Two Checks") 
    }
     
    else if(amtountOfChecks == 3){
      setElement(product.id, product.name, product.imageUrl, product.price, true, false, false, false, product.category, "Three Checks") 
    }
      
    else if(amtountOfChecks == 4){
      setElement(product.id, product.name, product.imageUrl, product.price, true, false, false, false, product.category, "Four Checks") 
    }
    else{

      let arrayWithoutElement = (panelInformation.filter((panelElement) => panelElement.id != product.id))
      setPanelInformation(arrayWithoutElement)
      localStorage.setItem(`panel`, JSON.stringify(arrayWithoutElement));
      //setElement(product.id, product.name, product.imageUrl, product.price, false, false, false, false, product.category, "none1") //

    }
  }
 
  function redistributeTheIds(id, panelInformation){
   
    let currentid = -1
    let missingIDIndex = -1
    let arrayOfIDS = []
    for(let i = 0 ; i < panelInformation.length; i++){
    let IDVariable = panelInformation[i].id 
      arrayOfIDS[i] = IDVariable
    }
    return arrayOfIDS
    }

  const setElement = (id, name, url, price, option1, option2, option3, option4, category, amountstars) =>{
  
    //this is the element that is used in the map, it is the current element
    let panelInformationElementToAdd = 
    {
      id: id,
      name: name ,
      imageUrl: url,
      price: price,
      options: [{option:'option1' , checked: option1}, {option:'option2' , checked: option2}, {option:'option3' , checked: option3}, {option:'option4' , checked: option4}],
      category: category,
      amtstars: amountstars
    }

    let panelInformation2 = panelInformation.filter(panelElement => panelElement.id === id)
    //THERE ARE NO ELEMENTS IN ARRAY FOR PANEL WITH THIS NEW INFO
    if(panelInformation2.length == 0){
    let arrayFOrPanel = [...panelInformation, panelInformationElementToAdd]
    setPanelInformation(arrayFOrPanel)
    localStorage.setItem(`panel`, JSON.stringify(arrayFOrPanel));
    }else{
    ///THERE IS AN ELEMENT WITH THIS CHECK, and STARS HAVE CHANGED
    let arrayOfIDs = []
    const panelInformationChanged = panelInformation.map((pan, index) => {
      
      //put 
      arrayOfIDs = redistributeTheIds(id, panelInformation)
      let indexOfElement = arrayOfIDs[index]
      
      if (indexOfElement === id){
        
        return panelInformationElementToAdd
      }
      else {
        return pan
      }

    })

    setPanelInformation(panelInformationChanged)
    localStorage.setItem(`panel`, JSON.stringify(panelInformationChanged));
    
  }
    console.log("here!")
    
  }
  
  const setCheckboxes = (check1,check2,check3,check4,infoArray,id) => {
 
    infoArray[id-1].options[0].checked = check1
    infoArray[id-1].options[1].checked = check2
    infoArray[id-1].options[2].checked = check3
    infoArray[id-1].options[3].checked = check4
    
    return infoArray
  }

  const computeStars = (e, index, howManyChecked, id, product) => {

      let infoArray = [...products] 
     //localStorage.setItem(`products`, JSON.stringify(infoArray));
      console.log("1oldarray: ", oldArray)
      let checked = e.target.checked
    //id = id -1;
    let amtStars = 0;
    
    console.log("prod:", products )
  
    //old, to force a render
    setHasRun(!hasrun)

    //index of four stars satring at zero
    index = index - 1
    id = id + 1
    //index is which star, zero through three
    //infoarray was set to products above, in this function
    
    //HOW THE CHECK BOXES WORK:
    //FOR ANY CHECKED BOX, ALL BOXES BEFORE THIS BOX WILL BE CHECKED
    //RECLICKING ON A CHECKED BOX WILL RESULT IN THAT BOX AND ALL BOXES TO THE RIGHT TO BE UNCHECKED AND THE LEFT TO BE CHECKED.//
    
      

  //THESE ON FIRST CONDITION ARE MAKING IT RIGHT FOR SETCHECKBOXES, USED MOD
  //MOD HERE MIGHT BE NECESSARY TO BYPASSED ERRORS - CHECK WITHOUT MOD, FIORST
  //FIRST SCREEN WORKING, NOW SECOND SCREEN IS DISPLaYING (WASN'T BEFORE)
  //SEEMS TO LOOK ALRIGHT, NOW FIX AROUND 358


    //CHECK BOXES START ALL FALSE
    //APPPLY TO FIRST BOX
    if (index === 0) {
    //IF THERE IS a CHECK ON SECOND BOX AND THAN BOX ONE IS CHECKED, THE CHECK WILL RESULT IN BOX ONE BEING CHECKED
    if (infoArray[id-1].options[1].checked == true) {
    amtStars = 1;
    setCheckboxes(true,false,false,false,infoArray,(id))
    }
    //APPLY CHECK TO SECOND BOX
    //CHECK BOX ONE IS CHECKED AND THAN INDEX CHECKS ONE.  SO, RESULTS IN NO CHECKS
    else if (infoArray[id - 1].options[0].checked == true) {
    amtStars = 0;
    setCheckboxes(false,false,false,false,infoArray,(id))
    } 
    else {
    amtStars = 1;
    //APPLY CHECK TO SECOND BOX
    //NOTHING IS CHECKED SO IT WILL BE A SIMPLE CHECK ON FIRST BOX
    setCheckboxes(true,false,false,false,infoArray,(id))  
    } 
}

    //CHECK BOXES START ALL FALSE
    //APPLY CHECK TO SECOND BOX
    if (index === 1) {
   
    if (infoArray[id - 1].options[2].checked == true) {
        amtStars = 2;
      //ALL CHECK BOXES START AS FALSE
      //IF THIRD BOX IS TRUE AND BOX TWO IS THAN CHECKED THERE WILL BE TWO STARS 
        setCheckboxes(true,true,false,false,infoArray,id)
      } 
      //ALL CHECK BOXES START AS FALSE
      //IF SECOND BOX IS FALSE AND BOX TWO IS THAN STARRED, THERE WILL BE TWO STARS
      else if (infoArray[id - 1].options[1].checked == false) {
        amtStars = 2;
      setCheckboxes(true,true,false,false,infoArray,id)
      } 
      //ALL CHECK BOXES START AS FALSE
      //ISN'T CHECKED ON THIRD BOX AND IS CHECKED ON SECOND BOX (USING ELSE)
      //BOX TWO IS THAN CHANGED WITH INDEX THAT REVERTS BOX TWO TO FALSE
      else {
      amtStars = 0;
      setCheckboxes(false,false,false,false,infoArray,id)
        }
      }


    //ALL CHECK BOXES START AS FALSE
    //APPLY CHECK TO THIRD BOX   
    if (index === 2) {
      //ALL CHECK BOXES START AS FALSE  
      //IF BOX FOUR IS CHECKED, AND THREE IS CHECKED WITH INDEX, THERE WILL BE THREE CHECKS 
      if (infoArray[id - 1].options[3].checked == true) {
        amtStars = 3;
        setCheckboxes(true,true,true,false,infoArray,id)
        } 
       //ALL CHECK BOXES START AS FALSE  
       //IF BOX THREE IS CHECKED AND INDEX IS APPLIED WITH THIRD BOX, ALL FALSE
       else if (infoArray[id - 1].options[2].checked == true) {
       amtStars = 0;
        setCheckboxes(false,false,false,false,infoArray,id)
       } 
        else {  
      //ALL CHECK BOXES START AS FALSE 
      //NEGATE:  IF BOX IS CHECKED ON 4 AND IS CHECKED ON THREE RESULTS IN ALL FOR CHECKS
      //BY NEGATION USING ELSE, FOURTH STAR IS FALSE, AND AND THIRD CHECK IS FALSE
      //INDEX APPLIED, THREE TRUES AND A FALSE 
      amtStars = 3;
      setCheckboxes(true,true,true,false,infoArray,id)
      }
    }


    //ALL CHECK BOXES START AS FALSE
    //APPLY CHECK TO FOURTH BOX 
    if (index === 3) {
      //ALL CHECK BOXES START AS FALSE
      //INDEX IS THREE SO WILL BE ALL STARS, ALL STARS WITH LAST ELEMENT CHECKED WITH INDEX WILL BE ALL FALSE
      if (infoArray[id - 1].options[3].checked == true) {
        amtStars = 0;
        setCheckboxes(false,false,false,false,infoArray,id)
        }
         //ALL CHECK BOXES START AS FALSE
        //THERE IS NO STAR ON LAST BOX (DIFFERENT THAN FIRST CLAUSE), SO INDEX REVERTS TO ALL IS TRUE. 
        else {
        amtStars = 4;
        setCheckboxes(true,true,true,true,infoArray,id)
        }
      }

      setProducts(infoArray)
      

      let var1 =  JSON.parse(localStorage.getItem('products'))
      //setProducts(var1)
      //console.log("var1: ", var1)
      //setOldArray(infoArray)
      //console.log("2oldarray:", oldArray)
      //console.log("1products:", products)
     
      
      setPanelInfo(amtStars, product)
      localStorage.setItem(`products`, JSON.stringify(infoArray));
      

    //setProducts((products) => [...products, { id: 100, name:"name1b",   imageUrl: require ("./test.png") , price: 6, options: [{option:'option1' , checked: true}, {option:'option2' , checked: false}, {option:'option3' , checked: false}, {option:'option4' , checked: false}]}
    //localStorage.setItem(`products`, JSON.stringify(PanelInfoArray));
   };
  
   //console.log("pi: ", panelInformation)
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

      <h4>Rate a Work:</h4>
      <br></br>
      <NavLink to="/">Home Page</NavLink>
      <br></br><br></br><br></br>
      
      <Fragment>
        <CategoryContainer>
         
         
          {
            // Use filter to keep only the products with the matching category we want
            //.filter((prod) => prod.category === category)
            artPiecesOfCategoryArray.map((product) => {
                //{
                //  indexCount = indexCount + 1;
                //}
                let ID = product.id;
                let productID = `product-${product.id}`;
                let productDetailsID = `${productID}-details`;
                console.log("mapping products: ", product)
                
                return (
                  
                 <div id={productID} className={`product`} key={product.imageUrl}>
                    <div id={`drop`}>{product.id+1}</div>
                    <div id={productDetailsID}>
                      <h2>{product.name}</h2>
                      <h3>${product.price}.00</h3>
                      <div className={`images`}>
                        
                        <img
                          type="Image"
                          src = {product.imageUrl}
                          onLoad={onComplete}
                          onError={onComplete}
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
                          
                             }
                          />
                        );
                      })}

                      {
                        showPanel  &&  <Panel
                        
                        key={panelInformation.id} category={ panelInformation} />
                         
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
  

