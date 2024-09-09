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


let panelInfoArray = [

  {
    id: 0,
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

//let storedPanel = []
//let storedPanel1 = []
/*
let storedPanel = [



  {
    id: 0,
    name: "name3",
    imageUrl: require ("./test.png"),
    price: 7777,
    options: [{option:'option1' , checked: false}, {option:'option2' , checked: false}, {option:'option3' , checked: false}, {option:'option4' , checked: false}],
    category: "art2",
    amtstars: "none0"
  },

] 
  */


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
  
 



  const senfo = (id, amtountOfStars, product) => {

    let panelInformationListLeftElements = []

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
    //product has no stars
    else{
      
      //delete element, becuase no stars//
      //let PanelInformation = (storedPanel.filter((prod) =>  prod.id != product.id  ))
      //setPanelInformation(panelInformation, PanelInformation)
      console.log("1@: ", product.id)
      console.log("2@: ", panelArrayWithElementRemoved)
      console.log("sp1: ", storedPanel)

      //let pi = panelInformation.filter(panel => panel.id != product.id)
      panelInformationListLeftElements = (panelInformation.filter((prod) =>  prod.id === id  ))
      setPanelInformation(panelInformationListLeftElements)
      }
   
   //return  panelArrayWithElementRemoved

  }

  let panelInformation1 = []
  //change the amount of stars for component
  const setElement = (id, name, url, price, option1, option2, option3, option4, category, amountstars) =>{
    
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

    let panelInformation2 = []
    if(panelInformation.length === 0){
      setPanelInformation(panelInformationElementToAdd)
    }
    else{

    let index = id
    panelInformation2 = panelInformation.map((pan, i) => {

      console.log("ii: ", i)
      if (index === i){
        return panelInformationElementToAdd
      }
      else {
        return pan
      }

    })

    setPanelInformation(panelInformation2)
   
  }

  



    
     /* 
      panelInformation1 = (panelInformation.filter((prod) =>  prod.id != id  ))////
    //use two, and brackets
      panelInformation1 =  [
        
      //{

        ...panelInformation1
      //storedPanel[id] = {
      //id: 0,
      //name: nam e ,
      //imageUrl: url,
      //price: price,
      //options: [{option:'option1' , checked: option1}, {option:'option2' , checked: option2}, {option:'option3' , checked: option3}, {option:'option4' , checked: option4}],
      //category: category,
      //amtstars: amountstars
      //}
      ,{
      id: id,
      name: name ,
      imageUrl: url,
      price: price,
      options: [{option:'option1' , checked: option1}, {option:'option2' , checked: option2}, {option:'option3' , checked: option3}, {option:'option4' , checked: option4}],
      category: category,
      amtstars: amountstars
    }



  ]


  */
    //setPanelInformation(panelInformation2)
              
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
      let panelInfoArray = [...products]
      let checked = e.target.checked
      
    //id = id -1;
    let amtStars = 0;
    
    console.log("prod:", products )
  
    setHasRun(!hasrun)

    //index of four stars satring at zero
    index = index - 1
    id = id + 1

      //PanelInfoArray[0].options1[0].checked = true
      //index is which component element in aray
      //infoarray was set to products above, in this function
      if (index === 0) {
      if (infoArray[id-1].options[1].checked == true) {
        amtStars = 1;
        setCheckboxes(true,false,false,false,infoArray,id)
        } else if (infoArray[id - 1].options[0].checked == true) {
        amtStars = 0;
        setCheckboxes(false,false,false,false,infoArray,id)
        } else {
        amtStars = 1;
        setCheckboxes(true,false,false,false,infoArray,id)  
        } 
    }
    if (index === 1) {
      if (infoArray[id - 1].options[2].checked == true) {
         amtStars = 2;
        setCheckboxes(true,true,false,false,infoArray,id)
       } else if (infoArray[id - 1].options[1].checked == false) {
         amtStars = 2;
        setCheckboxes(true,true,false,false,infoArray,id)
       } else {
        amtStars = 0;
        setCheckboxes(false,false,false,false,infoArray,id)
         }
       }
    if (index === 2) {
      if (infoArray[id - 1].options[3].checked == true) {
            amtStars = 3;
        setCheckboxes(true,true,true,false,infoArray,id)
        } else if (infoArray[id - 1].options[2].checked == true) {
       amtStars = 0;
        setCheckboxes(false,false,false,false,infoArray,id)
       } else {
      amtStars = 3;
      setCheckboxes(true,true,true,false,infoArray,id)
      }
    }

    if (index === 3) {
      if (infoArray[id - 1].options[3].checked == true) {
        amtStars = 0;
        setCheckboxes(false,false,false,false,infoArray,id)
        } else {
        amtStars = 4;
        setCheckboxes(true,true,true,true,infoArray,id)
        }
      }
      //working - keeps track of both, correctly//
      setProducts(infoArray)

      setPanelInfo(id, amtStars, product)

      //localStorage.setItem(`panel`, JSON.stringify(panelArrayWithElementRemoved));
      //localStorage.setItem(`panel`, JSON.stringify(storedPanel));

      //setProducts(panelInfoArray)
      let stayHere = true
     
     
    
    //setProducts((products) => [...products, { id: 100, name:"name1b",   imageUrl: require ("./test.png") , price: 6, options: [{option:'option1' , checked: true}, {option:'option2' , checked: false}, {option:'option3' , checked: false}, {option:'option4' , checked: false}]}
    //localStorage.setItem(`products`, JSON.stringify(PanelInfoArray));
   };


   
   

   //let panelI = [...panelInformation]

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
                        showPanel  && <Panel
                        
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
  

