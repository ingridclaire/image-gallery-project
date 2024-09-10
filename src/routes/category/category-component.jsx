//const [artists, setArtists] = useState(intialArtistsreact arrayu works without usestate)
//setartists(artists.filter(a => a.id !== atrtist.id)

//IMAGES/COMPONENTS NOW GET RENDERED.
//WRITE A FILTER AND REMOVE THE OLD COMPONENT SO THERE WILL ONLY BE ONE
//ALSO, SET COMPONENT WITH VARIABLES FOR THE SETPRODUCT
//USE A SORT ALGORITHM, BUBBLE SORT SHOULD BE FINE
//CLEAN UP CODE
//FIX CONTEXT
//STUDY USESTATE WITH CONTEXT

//9/7/24 :  CHANGING STARS TO ANOTHER AMOUNT OR ZERO WORKING!
//NEXT:  IF CATEGORY IS EQUAL TO I.E. ART1, THAN DISPLAY ONLY THOSE IMAGES.
//USE USENAVIGATE, GETPARAMS
//CHECK ORDER WHEN MOR THAN TWO COMPONENTS DISPLAYED
//LOCAL STORAGE, PANEL AND PRODUCTS
//UNDERSTAND ROUTING

//9/8/24 :  DONT DRAW TO PANEL WHEN NO CHECK MARKS
import { CategoriesContext } from "../../contexts/categories-context";
import { useContext, useState, useEffect, Fragment } from "react";
import { CategoryContainer } from "./category-styles";
import { useParams,  useNavigate } from "react-router-dom";
import Panel from "../../components/panel/panel-component";


let storedPanel = []

let infoArray = [

  {
    id: 0,
    name: "name3",
    imageUrl: require ("./test.png"),
    price: 25,
    options: [{option:'option1' , checked: false}, {option:'option2' , checked: false}, {option:'option3' , checked: false}, {option:'option4' , checked: false}],
    category: "art2",
    amtstars: "none"
  },

] 


let PHOTO = [
 // {
    //atitle: "Hats",
   // items: [
      {
        id: 0,
        name: "name1",
        imageUrl: require ("./test.png"),
        price: 100,
        options: [{option:'option1' , checked: false}, {option:'option2' , checked: false}, {option:'option3' , checked: false}, {option:'option4' , checked: false}],
        category: "art1",
        amtstars: "none"
       
        
      },

      {
      id: 1,
      name: "name2_start",
      imageUrl:  require ("./test.png"),
      price: 200,
      options: [{option:'option1' , checked: false}, {option:'option2' , checked: false}, {option:'option3' , checked: false}, {option:'option4' , checked: false}],
      category: "art2",
      amtstars: "none"
      },

];


let panelArrayWithElementRemoved = [

  {
    id: 0,
    name: "nameX",
    imageUrl: require ("./test.png"),
    price: 100,
    options: [{option:'option1' , checked: false}, {option:'option2' , checked: false}, {option:'option3' , checked: false}, {option:'option4' , checked: false}],
    category: "art1",
    amtstars: "none"
   
    
  },


]

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
    //setCheckBoxes(true,true,true,true, PanelInfoArray)//
    const route1 = useParams()
    console.log("cp2: ", {route1})
    console.log("route1: ", route1)
    
  let [products, setProducts] = useState(PHOTO) 
  //storedPanel = localStorage.getItem(`panel`)
  const [state , setState] = useState([])   
  
  //Keeps record of starred components, in order
  //sets all products to photo (every product) and set stars and amtstars to use
  let [panelInformation, setPanelInformation] = useState(PHOTO)
 

  //////////////////////////////////////////////RESUME THIS: ROUTING!!!//
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
  let [showPanel, setShowPanel] = useState(false);
  //!!!!!!!!!!
  // And lets store the final generated array of products with everything we need back into our localstorage to sync it up//
  //localStorage.setItem(`products`, JSON.stringify(null));//
  let count = 0;
  
 

  let IsElementSameID = false;

  //amount of stars is what was selected from that interface
  const setPanelInfo = (id, amtountOfStars, product) => {

    let panelInformationListLeftElements = []

    //this is the passed in data that builds the new element
    if(amtountOfStars == 1){
     setElement(product.id, product.name, product.imageUrl, product.price, true, false, false, false, product.category, "One Star") 
    }
    else if(amtountOfStars == 2){
      setElement(product.id, product.name, product.imageUrl, product.price, true, false, false, false, product.category, "Two Stars") 
    }
     
    else if(amtountOfStars == 3){
      setElement(product.id, product.name, product.imageUrl, product.price, true, false, false, false, product.category, "Three Stars") 
    }
      
    else if(amtountOfStars == 4){
      setElement(product.id, product.name, product.imageUrl, product.price, true, false, false, false, product.category, "Four Stars") 
    }
    //product has no stars - remove element from panel list

    else{
      let panelArrayWithDeletedElement = []
      //this is not complete, check all ids of panelinformation, if that id not found than create with setpanelinformation and leave 
      console.log("1@: ", product.id)
      console.log("2@: ", panelArrayWithElementRemoved)
      console.log("sp1: ", storedPanel)
      panelArrayWithElementRemoved.forEach(function(id, item, index){
        insertElement(product, item, index)
      })
      if (IsElementSameID === true){


        panelArrayWithDeletedElement = panelInformation.filter(panelElement => panelElement.id !== product.id)

      //   //this is the element that is used in the map, it is the current element
      //let elementToAdd = 
      //{
      //  id: product.id,
      //  name: product.name ,
      //  imageUrl: product.url,
      //  price: product,
      //  options: [{option:'option1' , checked: product.option1}, {option:'option2' , checked: product.option2}, {option:'option3' , checked: product.option3}, {option:'option4' , checked: product.option4}],
      //  category: product.category,
      //  amtstars: product.amountstars
      }

      //I think this is no longer possible, remove.
      //let panelInformationChanged = []
      //if(panelInformation.length === 0){
      setPanelInformation(panelArrayWithDeletedElement)
      return
      //}
      }
      }
   
   //return  panelArrayWithElementRemoved

  

  //change this
  function insertElement(product, item, index){

    if(index == product.id){
      IsElementSameID = true
      return

    }

  }



  let panelInformation1 = []
  
  //
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

    //I think this is no longer possible, remove.
    let panelInformationChanged = []
    if(panelInformation.length === 0){
      setPanelInformation(panelInformationElementToAdd)
    }

    else{

    let index = id
    //pan is element and i is index
    panelInformationChanged = panelInformation.map((pan, i) => {
      //change the element that shares the id, if none don't change, just return same thing
      //map builds a new array in this way
      if (index === i){
        return panelInformationElementToAdd
      }
      else {
        return pan
      }

    })

    setPanelInformation(panelInformationChanged)
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


  //9/4/24 : 10:33 pm
  //MESSING AROUND WITH PANELINFOARRAY FOR PANEL LOCAL STORAGE : SETPANELINFO, SET FROM PRODUCTS, SET LOCAL STORAGE//
  //PERHAPS MAKE A PRODUCTS-LIKE PANEL USESTATE



  //ON STAR PRESS PRODUCTS GETS RERENDERED AND ALL NULL STARS GET PRINTED
  ///FILTER THROUGH PRODUCTS, REMOVE ANY WITH NO STARS FROM PANEL AS VARIABLE
  //?PANEL
  const computeStars = (e, index, howManyChecked, id, product) => {

      let infoArray = [...products]
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
    //RECLICKING ON A CHECKED BOX WILL RESULT IN THAT BOX AND ALL BOXES TO THe RIGHT TO BE UNCHECKED.
    
      
    //CHECK BOXES START ALL FALSE
    //APPPLY TO FIRST BOX
    if (index === 0) {
    //IF THERE IS a CHECK ON SECOND BOX AND THAN BOX ONE IS CHECKED, THE CHECK WILL RESULT IN BOX ONE BEING CHECKED
    if (infoArray[id-1].options[1].checked == true) {
    amtStars = 1;
    setCheckboxes(true,false,false,false,infoArray,id)
    }
    //APPLY CHECK TO SECOND BOX
    //CHECK BOX ONE IS CHECKED AND THAN INDEX CHECKS ONE.  SO, RESULTS IN NO CHECKS
    else if (infoArray[id - 1].options[0].checked == true) {
    amtStars = 0;
    setCheckboxes(false,false,false,false,infoArray,id)
    } 
    else {
    amtStars = 1;
    //APPLY CHECK TO SECOND BOX
    //NOTHING IS CHECKED SO IT WILL BE A SIMPLE CHECK ON FIRST BOX
    setCheckboxes(true,false,false,false,infoArray,id)  
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


      //working - keeps track of both, correctly//
      setProducts(infoArray)

      setPanelInfo(id, amtStars, product)

    //localStorage.setItem(`panel`, JSON.stringify(panelArrayWithElementRemoved));
    let stayHere = true
    //setProducts((products) => [...products, { id: 100, name:"name1b",   imageUrl: require ("./test.png") , price: 6, options: [{option:'option1' , checked: true}, {option:'option2' , checked: false}, {option:'option3' , checked: false}, {option:'option4' , checked: false}]}
    //localStorage.setItem(`products`, JSON.stringify(PanelInfoArray));
   };
  
   console.log("pi: ", panelInformation)
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
                        showPanel  &&  panelInformation && <Panel
                        
                        key={panelInformation.id} category={ panelInformation} />
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
  

