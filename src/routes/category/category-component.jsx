import { CategoriesContext } from "../../contexts/categories-context";
import { useContext, useState, useEffect, Fragment } from "react";
import { CategoryContainer } from "./category-styles";
import { useParams } from "react-router-dom";
import Panel from "../../components/panel/panel-component";

///

//let PanelInfoArray = [ { options: [ {checked: true,checked: true,checked: true,checked: true, }]}]

//const [intialProduct, setIntialProducts] = useState(initialProducts);
const PHOTO = [
 // {
    //atitle: "Hats",
   // items: [
      {
        id: 1,
        name: "Brown Brim",
        imageUrl: require ("./brown-brim.png"),
        price: 25,
  
        //options: [ {checked: true,checked: true,checked: true,checked: true, }]
        
      },

      /*
      {
        id: 2,
        name: "Blue Beanie",
        imageUrl",
        price: 18,
      },
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
  //PanelInfoArray[id - 1].options[0].checked = chk0;
  //PanelInfoArray[id - 1].options[1].checked = chk1;
  //PanelInfoArray[id - 1].options[2].checked = chk2;
  //PanelInfoArray[id - 1].options[3].checked = chk3;

}



//setCheckBoxes(false,false,false,false, PanelInfoArray, 1)//



//let PanelInfoArray[0].options[0].checked = true
let PanelInfoArray = [ { options: [ {checked: true,checked: true,checked: true,checked: true, }]}]

//PanelInfoArray[1 - 1].options[0].checked = true;
//PanelInfoArray[1 - 1].options[1].checked = true;
//PanelInfoArray[1 - 1].options[2].checked = true;
//PanelInfoArray[1 - 1].options[3].checked = true;


console.log("+: ", PanelInfoArray)

let initialProducts = []
export default function Category() {
 
  useEffect(() => {
    
      
  //setCheckBoxes(false,false,false,false, PanelInfoArray, 1)
  
  }, [] )
  
  const [stars, setStars] = useState([]);

  
  let { category } = useParams();

/*
  <DirectoryContainer>
        {PHOTO_DATA.map((category) => (
          <Images1 key={category.name} category={category} />
        ))}
  </DirectoryContainer>
*/

/*
  const { categoriesMap } = useContext(CategoriesContext);
  const productsForCategoryFromDB = categoriesMap[category];
  let storedProducts = getLatestStoredNotifications();
  // Create an array of only the IDs of products
  let storedProductIDs = [];
  if (storedProducts.length > 0)
    storedProductIDs = storedProducts.map(
      (productInStoredProducts) => productInStoredProducts.id
    );
  // We need to take the generated products from the database and push them into a new array
  if (productsForCategoryFromDB && productsForCategoryFromDB.length > 0) {
    productsForCategoryFromDB.forEach((productForCategoryFromDB) => {
      // If the product already exists in our array, we don't want it
      if (
        storedProductIDs.length > 0 &&
        storedProductIDs.includes(productForCategoryFromDB.id)
      ) {
        return; // So just return to do nothing
      } else {
        // But if the id is not in our storage, let's push it in so we can track it
        storedProducts.push(productForCategoryFromDB);
      }
    });
  }


  storedProducts.push(PHOTO_DATA);

  // We need to take the updated array and create a copy with our custom data
  // Since we added a new parameter, let's make sure we pass that in
  
  */

  // get length of initial products
  // call handlecheck to set all equal to false in a for loop
  
 

  
 

console.log("photo1: ", initialProducts)


initialProducts = makeCopyOfProductsWithCustomData(
      PHOTO,
      "hats",
  
    );

  // Now that we have the custom array with all the data we need
  // We can render our products on the page, but we will need to filter out the ones not matching the current category later on
  const [products, setProducts] = useState(initialProducts);


  console.log("set: ", products)
  
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
      //PanelInfoArray = JSON.parse(localStorage.getItem("products") || "[]");
  
      let checked = e.target.checked
      
      console.log("checked: ", checked)
      console.log("index: ", index)
      
      console.log("id: ", id)

      
      
      ////////
      
      //console.log("product: ", product)

      if (PanelInfoArray[0].options[0].checked == true) {
        console.log("entered")
      }

      index = index -1;
    let amtStars = 0;
    //options1[0].checked = true
    if (index === 0) {

      //alert("a");
      //if (product.options[0].checked == true) {
      //  console.log("made it here")
      //}
      
      //PanelInfoArray[0].options1[0].checked = true
      if (PanelInfoArray[id-1].options[0].checked == true) {
        setCheckBoxes(true,false,false,false,PanelInfoArray,id)
        amtStars = 1;
      } else if (PanelInfoArray[id - 1].options[0].checked == true) {
        setCheckBoxes(false,false,false,false,PanelInfoArray,id)
        amtStars = 0;
      } else {
        setCheckBoxes(true,false,false,false,PanelInfoArray,id)
        amtStars = 1;
      }
    }




    ////////


    /*
    if (index === 1) {
      if (PanelInfoArray[id - 1].options1[2].checked == true) {
        setCheckBoxes(true,true,false,false,PanelInfoArray,id)
        amtStars = 2;
      } else if (PanelInfoArray[id - 1].options1[1].checked == false) {
        setCheckBoxes(true,true,false,false,PanelInfoArray,id)
        amtStars = 2;
      } else {
        setCheckBoxes(false,false,false,false,PanelInfoArray,id)
        amtStars = 0;
      }
    }
    if (index === 2) {
      if (PanelInfoArray[id - 1].options1[3].checked == true) {
        setCheckBoxes(true,true,true,false,PanelInfoArray,id)
        amtStars = 3;
      } else if (PanelInfoArray[id - 1].options1[2].checked == true) {
        setCheckBoxes(false,false,false,false,PanelInfoArray,id)
        amtStars = 0;
      } else {
        setCheckBoxes(true,true,true,false,PanelInfoArray,id)
        amtStars = 3;
      }
    }
    if (index === 3) {
      if (PanelInfoArray[id - 1].options1[3].checked == true) {
        setCheckBoxes(false,false,false,false,PanelInfoArray,id)
        amtStars = 0;
      } else {
        setCheckBoxes(true,true,true,true,PanelInfoArray,id)
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

    
    let updatedProducts = [];
   

    updatedProducts = getLatestStoredNotifications()

    

    localStorage.setItem(`products`, JSON.stringify(updatedProducts));
    setProducts(updatedProducts);



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
          {stars.map((star) => {
            return <div>{star.amtstars}</div>;
          })}
          { PHOTO &&
            // Use filter to keep only the products with the matching category we want
            
              //.filter((prod) => prod.category === category)
               initialProducts.map((product) => {
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
                          src = {require('./brown-brim.png')}
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
                            onChange={e => computeStars(e, product.index, newOptIndex, ID, product)

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
