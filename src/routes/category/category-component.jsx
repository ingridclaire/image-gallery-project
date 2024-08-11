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

let PanelInfoArray = [] // [{ options: [ {checked: true},{checked: true} ,{checked: true} ,{checked: true}]}]

//const [intialProduct, setIntialProducts] = useState(initialProducts);
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

      {
        id: 55,
        name: "name3",
          imageUrl:  require ("./brown-brim.f8a895734ce2f9dc6679.png"),
          price: 180,
          options: [{option:'option1' , checked: true}, {option:'option2' , checked: false}, {option:'option3' , checked: false}, {option:'option4' , checked: false}]
        }

      /*
      {
        id: 3,
        name: "Brown Cowboy",
        imageUrl: "https://i.ibb.co/QdJwgmp/brown-cowboy.png",
        price: 35,
      },
      {
        id: 4,
        name: "Grey Brim",
        imageUrl: "https://i.ibb.co/RjBLWxB/grey-brim.png",
        price: 25,
      },
      {
        id: 5,
        name: "Green Beanie",
        imageUrl: "https://i.ibb.co/YTjW3vF/green-beanie.png",
        price: 18,
      },
      {
        id: 6,
        name: "Palm Tree Cap",
        imageUrl: "https://i.ibb.co/rKBDvJX/palm-tree-cap.png",
        price: 14,
      },
      {
        id: 7,
        name: "Red Beanie",
        imageUrl: "https://i.ibb.co/bLB646Z/red-beanie.png",
        price: 18,
      },
      {
        id: 8,
        name: "Wolf Cap",
        imageUrl: "https://i.ibb.co/1f2nWMM/wolf-cap.png",
        price: 14,
      },
      {
        id: 9,
        name: "Blue Snapback",
        imageUrl: "https://i.ibb.co/X2VJP2W/blue-snapback.png",
        price: 16,
      }
        */
  //0  ],
  //},
];

console.log("PHOTO!!!")
///


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



//let PanelInfoArray[{
//  options:1
//}
//]//

//let PanelInfoArray = [{ options: `option1`, checked: false }, ]
//let PanelInfoArray = []
//  { options: `option2`, checked: false },
//  { options: `option3`, checked: false },
//  { options: `option4`, checked: false },]

 // PanelInfoArray[1 - 1].options[0].checked = true;
//let PanelInfoArray = []
//let PanelInfoArray = [0].options[0].checked = true
//PanelInfoArray = [0].options[0].checked = true;
let setCheckBoxes = (chk0, chk1, chk2,chk3, PanelInfoArray, id) => {
  PanelInfoArray[id - 1].options[0].checked = chk0;
  PanelInfoArray[id - 1].options[1].checked = chk1;
  PanelInfoArray[id - 1].options[2].checked = chk2;
  PanelInfoArray[id - 1].options[3].checked = chk3;

  return PanelInfoArray

}



//setCheckBoxes(false,false,false,false, PanelInfoArray, 1)//



//let PanelInfoArray[0].options[0].checked = true
//let PanelInfoArray = [ { options: [ {checked: true,checked: true,checked: true,checked: true, }]}]

//PanelInfoArray[1 - 1].options[0].checked = true;
//PanelInfoArray[1 - 1].options[1].checked = true;
//PanelInfoArray[1 - 1].options[2].checked = true;
//PanelInfoArray[1 - 1].options[3].checked = true;


console.log("+: ", PanelInfoArray)

let initialProducts = []



export default function Category() {
  let [products, setProducts] = useState(PHOTO) 
  //let [products1, setProducts1] = useState([object]) 

  let [hasrun, setHasRun] = useState(false) 
  
  let object = [
    
    {
      id: 1,
      name: "zBrown Brim",
      imageUrl: require ("./brown-brim.f8a895734ce2f9dc6679.png"),
      price: 25,
      options: [{option:'option1' , checked: false}, {option:'option2' , checked: false}, {option:'option3' , checked: false}, {option:'option4' , checked: false}]
      //options: [{option:'option1' , checked: true}, {option:'option2' , checked: false}, {option:'option3' , checked: false}, {option:'option4' , checked: false}]

      //options: [ {checked: true,checked: true,checked: true,checked: true, }]
      
    },
   ]

   
  

 
 
        
  const [state , setState] = useState([])     
  //const [state , setState] = useState({
  //  id: 1,
  //  name: "Brown Brim",
  //  imageUrl: require ("./brown-brim.png"),
  //  price: 25,
  //  //options: [{option:'option1' , checked: false}, {option:'option2' , checked: false}, {option:'option3' , checked: false}, {option:'option4' , checked: false}]
  /// 
  //  
  //})


let a = 1
  //options: [ {checked: true}
  //const [products1, setProducts1] = useState([{options: [{checked: false, option1:  1}, {checked1: false, option2:  1},  {checked: false, option1:  1},  {checked: false, option1: 1}],}])
  //  et object1 = ([{options: [{ option: "option1", checked: false}, {option: 'option2', checked: false},  {option: 'option3', checked: false},  {option: 'option4' ,checkedl: false}],}])
  //const [products1, setProducts1] = useState([{options: [{ option: "", checked: false},]     }])//([{options: [{ option: "", checked: true}, {option: "", checked: false},  {option: "", checked: false},  {option: "" ,checked: false}],}])
  useEffect(() => {
    
    //handleCheck(true, product, amtStars);
    //products = PHOTO
  //setCheckBoxes(false,false,false,false, PanelInfoArray, 1)
  a++
  
  } , [products] )

  useEffect(() => {
    
  console.log( "state: " , products) 
  }, [products])


console.log("just used effect")

 
  
  
/*
  <DirectoryContainer>
        {PHOTO_DATA.map((category) => (
          <Images1 key={category.name} category={category} />
        ))}
  </DirectoryContainer>
*/


const [stars, setStars] = useState([]);

  
let { category } = useParams();

 

console.log("photo1: ", initialProducts)



console.log("was here...")

/////////////
//creates array instead of one product
//for each through photo, setproducts with
//products = makeCopyOfProductsWithCustomData(
//      PHOTO,
      
      
console.log("before function: ", products )
      
///////////////////////////////////////////////////////////////
//EITHER OF THESE TWO WORK, I'M NOT UNDERSTANDING WHY.  I.E.  WHY KEEP CALLING PHOTO, AND HOW DO THE OPTIONS STAY SET, SEEING THAT IT SHOULD BE RESET TO THE PHOTO ARRAY?
//THIS ONE JUST RETURNS THE ARRAY, RIGHT NOW, AND WORKS!

///products = makeCopyOfProductsWithCustomData(
//  PHOTO, category)

//THIS CAUSES THE PROGRAM TO WORK TOO?
//products = PHOTO




////////////////////////////////////////////////////////////////


//products1 = PHOTO

     console.log("after function: ", products )

  
console.log("at photo")


///products = makeCopyOfProductsWithCustomData(
//  PHOTO, category)

//products = PHOTO



console.log("at photo2")

  //setinitialProducts(initialProducts)

  console.log("set===========: ", products)
  
  //setProducts(products => ({
  //  ...PHOTO_DATA
  //}))
  
  console.log("photos", PHOTO)
  // And lets store the final generated array of products with everything we need back into our localstorage to sync it up//
  localStorage.setItem(`products`, JSON.stringify(null));
  let count = 0;
    //const computeStars = (options1, product, index, id, event) => {
    


      


    //omputeStars(e, product.index, newOptIndex, ID)
    const computeStars = (e, index, two, id, product) => {

      console.log("i am at the breakpoint");
     console.log("in funct")
      /*
     
      let object1 = [
    
        {
          id: 1,
          name: "Brown Brim2",
          imageUrl: require ("./brown-brim.png"),
          price: 25,
          options: [{option:'option1' , checked: false}, {option:'option2' , checked: false}, {option:'option3' , checked: false}, {option:'option4' , checked: false}]
          
          
        },
       ]
      setState([{
        id: 1,
        name: "Brown Brim2",
        imageUrl: require ("./brown-brim.png"),
        price: 25,
        options: [{option:'option1' , checked: false}, {option:'option2' , checked: false}, {option:'option3' , checked: false}, {option:'option4' , checked: false}]
        //options: [{option:'option1' , checked: true}, {option:'option2' , checked: false}, {option:'option3' , checked: false}, {option:'option4' , checked: false}]
    
        //options: [ {checked: true,checked: true,checked: true,checked: true, }]
        
    }],)

      
      setState({

        ...state,
        id: 2,
        name: "Brown Brim3",
        imageUrl: require ("./brown-brim.png"),
        price: 25,
        options: [{option:'option1' , checked: false}, {option:'option2' , checked: false}, {option:'option3' , checked: false}, {option:'option4' , checked: false}]
        //options: [{option:'option1' , checked: true}, {option:'option2' , checked: false}, {option:'option3' , checked: false}, {option:'option4' , checked: false}]
    
        //options: [ {checked: true,checked: true,checked: true,checked: true, }]//
        
      })
        */

      let id1 = 0
      let name1 = "josh"
      //setState("id:", id1)

      let a = state
      
      //let object1 = ([[{ option: "option1", checked: false}, {option: 'option2', checked: false},  {option: 'option3', checked: false},  {option: 'option4' ,checkedl: false}],])
      
      //setProducts1([{options: [{ option: "option1a", checked: false}],}])//,    { option: "optionb", checked: false}],}])//, {option: 'option2', checked: false},  {option: 'option3', checked: false},  {option: 'option4' ,checkedl: false}],}])
      
      //let a = products1
      
      let checked = e.target.checked
      
      console.log("checked: ", checked)
      console.log("index: ", index)
      
      console.log("id: ", id)

      
      
      ////////
      
      //console.log("product: ", product)

      //if (PanelInfoArray[0].options[0].checked == true) {
      //  console.log("entered")
      //}

    index = index -1;
    let amtStars = 0;
    //options1[0].checked = true
    let checksArray = []

   



    /*
    //is there already a product in products, filter it
    let  productsWithProductRrmoved = products.filter(function (prod){
      return prod.id != id 
    })
    
    if (index === 0) {

      //SET PRODUCTS INSTEAD OF THIS, AND HANDLE CHECKS RESETS VALUES TO FALSE
      //PANEL INFO ARRAY TURNS TO NULL
      //products[0].options[0].checked = checked//
      if (products[product.id - 1].options[0].checked == true) {
        checksArray = setCheckBoxes(true,false,false,false,products,id)
        amtStars = 1;
        

      } else if (products[product.id - 1].options[0].checked == true) {
        checksArray = setCheckBoxes(false,false,false,false,products,id)
        amtStars = 0;
      
      } else {
        setCheckBoxes(true,true,false,false,products,id)
        amtStars = 1;
      }
    }




    ////////


    
    else if (index === 1) {
      if (PanelInfoArray[id - 1].options[2].checked == true) {
        checksArray = setCheckBoxes(true,true,false,false,products,id)
        amtStars = 2;
      } else if (PanelInfoArray[id - 1].options[1].checked == false) {
        checksArray = setCheckBoxes(true,true,false,false,products,id)
        amtStars = 2;
      } else {
        checksArray =setCheckBoxes(false,false,false,false,products,id)
        amtStars = 0;
      }
    }

    */
    
    
   // let object = ([
   //   ...products,
   //   { id: 1, name:"name" , imageUrl: "", price: 6, options: [{option:'option1' , checked: false}, {option:'option2' , checked: false}, {option:'option3' , checked: false}, {option:'option4' , checked: false}]   }
   // ]);

    
          //!!!!!!!!!!!!!!!!!  
          //OK, understand how one star is working, then setproducts with this, stgart with name and than try options!!!!!!!!!!!
          //can products be set first, with photo data?
          //!!!!!!!!!!!!!!!!

            //setArtists([
            //  ...artists,
            //  { id: nextId++, name:"name" , imageUrl: "", price: 6, options: [{option:'option1' , checked: false}, {option:'option2' , checked: false}, {option:'option3' , checked: false}, {option:'option4' , checked: false}]   }
            //]);


            /////

          console.log("at set: ",)
          
          setProducts((products) => [...products,{ id: 7, name:"name4" ,  imageUrl: require ("./test.png"),  price: 6, options: [{option:'option1' , checked: false}, {option:'option2' , checked: true}, {option:'option3' , checked: false}, {option:'option4' , checked: false}]   }
          ]);
          //for(let i = 0; i++; i == 100000){}
          setProducts((products) => [...products, { id: 100, name:"name1a",   imageUrl: require ("./test.png") , price: 6, options: [{option:'option1' , checked: true}, {option:'option2' , checked: false}, {option:'option3' , checked: false}, {option:'option4' , checked: false}]   }
          ]);
          
          

   //         let aa = products1
          //setProducts (products => ([...products, ...object]))
          console.log("here:", products);
    
    //let addThisProduct = [checksArray]

    //setProducts(addThisProduct)


    //let a1 = addThisProduct
    
    
    
    
    //let a2 = products
    /*
    if (index === 2) {
      if (PanelInfoArray[id - 1].options[3].checked == true) {
        setCheckBoxes(true,true,true,false,PanelInfoArray,id)
        amtStars = 3;
      } else if (PanelInfoArray[id - 1].options[2].checked == true) {
        setCheckBoxes(false,false,false,false,PanelInfoArray,id)
        amtStars = 0;
      } else {
        setCheckBoxes(true,true,true,false,PanelInfoArray,id)
        amtStars = 3;
      }
    }
    if (index === 3) {
      if (PanelInfoArray[id - 1].options[3].checked == true) {
        setCheckBoxes(true,true,true,true,PanelInfoArray,id)
        
        amtStars = 0;
      } else {
        setCheckBoxes(false,false,false,false,PanelInfoArray,id)
        amtStars = 4;
      }
    }

    */
      
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


    //////////////

    //let updatedProducts = [];
   

    //    first set of any check box for first image - works -
    //    getLatestStoredNotifications might be needed later
    //    X - set up setUpdateProducts as a use state
    //    X - perhaps, replace products with updatedproducts, in render, so that options will be newest.  Replace product in render with this, so that 
    //    X - option values will be newest.
    //    in computestares replace panelinfoarray with its product parameter which is from onchange: products  
    //    so, change updatedProducts with products...just prior to "hat"

    //updatedProducts = getLatestStoredNotifications()

    //product is set as initialproducts in global code
    //let updatedProducts = makeCopyOfProductsWithCustomData(products, "hat")
    


    //!!!!!!!!!!!!!!!!!!
    //localStorage.setItem(`products`, JSON.stringify(updatedProducts));
    



    //see if this is being set or not, probably isn't so make a definition 
    //- look at mid code initialproduct...
    //setProducts(updatedProducts);

    //has most recent options - doess this need to be structured with a datastructure definition
    //setUpdateProducts(updatedProducts)

    
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




  //let star = "stars+";
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
                              //computeStars(
                              //  
                              //  opt.checked,
                              //  opt.checked,
                              //  optIndex,
                              //  ID
                                //indexCount,
                                //product.index
                              //)
                            }
                          />
                        );
                      })}

                      
                      <ul>
                        {/*panelArray2.map(product2 => { return (<li>{product2.url}</li>) })*/}
                      </ul>
                      {/* <Panel key={id} category={product} productID={productID} /> */}
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
