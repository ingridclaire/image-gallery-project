import { useContext, useState, useEffect, Fragment } from "react";
import { CategoryContainer } from "./category-styles";
import { useParams, useNavigate } from "react-router-dom";
import Panel from "../../components/panel/panel-component";
import { after } from "underscore";
import { NavLink } from "../navigation/navigation-styles";
// ICC FIX IT: update below import to use .js extension
import { ARTforTestingImageImport } from "../../assets/IMAGE_DATA.js";

/////////////////////////commented code with help needed
/*

const getButton = (buttonType = BUTTON_TYPE_CLASSES.base) =>
  ({
    [BUTTON_TYPE_CLASSES.base]: BaseButton,
    [BUTTON_TYPE_CLASSES.google]: GoogleSignInButton,
    [BUTTON_TYPE_CLASSES.inverted]: InvertedButton,
  }[buttonType]);   // what is this line?

  ICC explanation:
  It looks like getButton is a function that accepts a buttonType (string) as a parameter and returns a component based on the buttonType. The component that is returned is determined by the buttonType and is selected from an object that maps buttonType strings to component types. The object is defined inline and is immediately invoked with the buttonType parameter to return the appropriate component.

  Here's an example of what this object looks like:
  buttonTypes = {
    base: BaseButton,
    google: GoogleSignInButton,
    inverted: InvertedButton,
  };
  Then, the line in question about that you asked about is accessing ONE of these properties in the object - either "base", "google" or "inverted" with the bracket notation:
  buttonTypes[buttonType]
  This would be the same as using dot notation with the specific key name:
  buttonTypes.base OR buttonTypes.google OR buttonTypes.inverted

  When using a variable for the key you want to access in an object, you use bracket notation instead of dot notation

  The result is that you have a function that will return the desired component based on the passed in buttonType string.

*/
///////////////////////////////////////////////

// ICC: I see that you have a lot of commented code in this file. It's a good idea to remove commented code that is no longer needed. It can make your code harder to read and maintain. If you need to keep the code for reference, consider using version control or a code snippet manager.

// ICC: I also see a lot of console.log statements remaining. These should definitely be removed before showcasing your code. If you need to keep them for debugging purposes, at least comment them out so they don't all run when your code runs.

// ICC: Not good practice to declare variables like storedPanel and infoArray outside of the component function. This can lead to unexpected behavior and bugs. It's better to declare them inside the component function, or beter yet, store them in another file and import them as needed. These kind of variables should only be used for constants, not for data that will change, which should be stored in state variables within the component.
let storedPanel = [];
let infoArray = [
  {
    id: 0,
    name: "name",
    imageUrl: require("../../assets/1.png"),
    price: 25,
    options: [
      { option: "option1", checked: false },
      { option: "option2", checked: false },
      { option: "option3", checked: false },
      { option: "option4", checked: false },
    ],
    category: "art1",
    amtstars: "none",
  },
];
let ART = [
  /*
  {
    id: 0,
    name: "Title",
    imageUrl: require("../../assets/1.png"),
    price: 10,
    options: [
      { option: "option1", checked: false },
      { option: "option2", checked: false },
      { option: "option3", checked: false },
      { option: "option4", checked: false },
    ],
    category: "art1",
    amtstars: "none",
  },

  
  {
    id: 1,
    name: "Title",
    imageUrl: require("../../assets/3.png"),
    price: 10,
    options: [
      { option: "option1", checked: false },
      { option: "option2", checked: false },
      { option: "option3", checked: false },
      { option: "option4", checked: false },
    ],
    category: "art1",
    amtstars: "none",
  },
  */
  {
    id: 2,
    name: "Title",
    imageUrl: require("../../assets/4.png"),
    price: 10,
    options: [
      { option: "option1", checked: false },
      { option: "option2", checked: false },
      { option: "option3", checked: false },
      { option: "option4", checked: false },
    ],
    category: "art1",
    amtstars: "none",
  },

  {
    id: 4,
    name: "Title",
    imageUrl: require("../../assets/6.png"),
    price: 10,
    options: [
      { option: "option1", checked: false },
      { option: "option2", checked: false },
      { option: "option3", checked: false },
      { option: "option4", checked: false },
    ],
    category: "art1",
    amtstars: "none",
  },

  {
    id: 3,
    name: "Title",
    imageUrl: require("../../assets/5.png"),
    price: 10,
    options: [
      { option: "option1", checked: false },
      { option: "option2", checked: false },
      { option: "option3", checked: false },
      { option: "option4", checked: false },
    ],
    category: "art1",
    amtstars: "none",
  },

  /*
  {
    
    id: 6,
    name: "Title",
    imageUrl: require("../../assets/8.png"),
    price: 10,
    options: [
      { option: "option1", checked: false },
      { option: "option2", checked: false },
      { option: "option3", checked: false },
      { option: "option4", checked: false },
    ],
    category: "art2",
    amtstars: "none",
  },

  */
  {
    id: 7,
    name: "Title",
    imageUrl: require("../../assets/9.png"),
    price: 10,
    options: [
      { option: "option1", checked: false },
      { option: "option2", checked: false },
      { option: "option3", checked: false },
      { option: "option4", checked: false },
    ],
    category: "art2",
    amtstars: "none",
  },
  {
    id: 8,
    name: "Title",
    imageUrl: require("../../assets/10.png"),
    price: 10,
    options: [
      { option: "option1", checked: false },
      { option: "option2", checked: false },
      { option: "option3", checked: false },
      { option: "option4", checked: false },
    ],
    category: "art2",
    amtstars: "none",
  },
  {
    id: 9,
    name: "Title",
    imageUrl: require("../../assets/11.png"),
    price: 10,
    options: [
      { option: "option1", checked: false },
      { option: "option2", checked: false },
      { option: "option3", checked: false },
      { option: "option4", checked: false },
    ],
    category: "art2",
    amtstars: "none",
  },
  {
    id: 10,
    name: "Title",
    imageUrl: require("../../assets/12.png"),
    price: 10,
    options: [
      { option: "option1", checked: false },
      { option: "option2", checked: false },
      { option: "option3", checked: false },
      { option: "option4", checked: false },
    ],
    category: "art3",
    amtstars: "none",
  },
  {
    id: 11,
    name: "Title",
    imageUrl: require("../../assets/13.png"),
    price: 10,
    options: [
      { option: "option1", checked: false },
      { option: "option2", checked: false },
      { option: "option3", checked: false },
      { option: "option4", checked: false },
    ],
    category: "art3",
    amtstars: "none",
  },
  {
    id: 12,
    name: "Title",
    imageUrl: require("../../assets/14.png"),
    price: 10,
    options: [
      { option: "option1", checked: false },
      { option: "option2", checked: false },
      { option: "option3", checked: false },
      { option: "option4", checked: false },
    ],
    category: "art3",
    amtstars: "none",
  },
  {
    id: 13,
    name: "Title",
    imageUrl: require("../../assets/15.png"),
    price: 10,
    options: [
      { option: "option1", checked: false },
      { option: "option2", checked: false },
      { option: "option3", checked: false },
      { option: "option4", checked: false },
    ],
    category: "art3",
    amtstars: "none",
  },
  {
    id: 14,
    name: "Title",
    imageUrl: require("../../assets/16.png"),
    price: 10,
    options: [
      { option: "option1", checked: false },
      { option: "option2", checked: false },
      { option: "option3", checked: false },
      { option: "option4", checked: false },
    ],
    category: "art3",
    amtstars: "none",
  },
  {
    id: 15,
    name: "Title",
    imageUrl: require("../../assets/17.png"),
    price: 10,
    options: [
      { option: "option1", checked: false },
      { option: "option2", checked: false },
      { option: "option3", checked: false },
      { option: "option4", checked: false },
    ],
    category: "art3",
    amtstars: "none",
  },
  {
    id: 16,
    name: "Title",
    imageUrl: require("../../assets/18.png"),
    price: 10,
    options: [
      { option: "option1", checked: false },
      { option: "option2", checked: false },
      { option: "option3", checked: false },
      { option: "option4", checked: false },
    ],
    category: "art4",
    amtstars: "none",
  },
  {
    id: 17,
    name: "Title",
    imageUrl: require("../../assets/19.png"),
    price: 10,
    options: [
      { option: "option1", checked: false },
      { option: "option2", checked: false },
      { option: "option3", checked: false },
      { option: "option4", checked: false },
    ],
    category: "art4",
    amtstars: "none",
  },
  {
    id: 18,
    name: "Title",
    imageUrl: require("../../assets/20.png"),
    price: 10,
    options: [
      { option: "option1", checked: false },
      { option: "option2", checked: false },
      { option: "option3", checked: false },
      { option: "option4", checked: false },
    ],
    category: "art4",
    amtstars: "none",
  },
  {
    id: 19,
    name: "Title",
    imageUrl: require("../../assets/21.png"),
    price: 10,
    options: [
      { option: "option1", checked: false },
      { option: "option2", checked: false },
      { option: "option3", checked: false },
      { option: "option4", checked: false },
    ],
    category: "art5",
    amtstars: "none",
  },
  {
    id: 20,
    name: "Title",
    imageUrl: require("../../assets/22.png"),
    price: 10,
    options: [
      { option: "option1", checked: false },
      { option: "option2", checked: false },
      { option: "option3", checked: false },
      { option: "option4", checked: false },
    ],
    category: "art5",
    amtstars: "none",
  },
  {
    id: 21,
    name: "Title",
    imageUrl: require("../../assets/23.png"),
    price: 10,
    options: [
      { option: "option1", checked: false },
      { option: "option2", checked: false },
      { option: "option3", checked: false },
      { option: "option4", checked: false },
    ],
    category: "art5",
    amtstars: "none",
  },
];
//used
// ICC: another variable (star1) that should not be declared here outside component function. Should be declared within the component that needs it, or in another file if it is a constant unchanging value that other components may need to use.
var star1 = "++++";
// Kept, because it is interesting.
// ICC: do you mean you kept the following function bc it's interesting? That's fine, but it should not stay here in this file. You can move it to another "utils" file or something similar, and import it as needed.
export const makeCopyOfProductsWithCustomData = (arrayOfProducts, category) => {
  console.log("was in function: ", arrayOfProducts);
  // ICC: this function returns on the next line, which means all the code after the return statement will not be executed. So the console.log statement above will be the only thing that runs in this function. In JS, once you use the return statement, the function will exit and return the value specified in the return statement.
  return arrayOfProducts;
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
// ICC: again, the two following variables should not be declared here outside component scope. They should be declared within the component function or in another file. It looks like these are arrays that probably change, so they should be stored in state variables within the component.Actually, it looks like initialProducts is never used, so it can be removed.
let initialProducts = [];
let artPiecesOfCategoryArray = [];

export default function Category() {
  artPiecesOfCategoryArray = ARTforTestingImageImport.filter(
    (element) => element.category === "art2"
  );

  const [loading, setLoading] = useState(true);
  //ICC looks like oldArray and hasrun is never used, so lines 415 & 416 should be removed.
  let [oldArray, setOldArray] = useState(ART);
  let [hasrun, setHasRun] = useState(false);
  //setCheckBoxes(true,true,true,true, PanelInfoArray)//
  const route = useParams();
  console.log("cp2: ", { route });
  //console.log("route: ", route)
  let imageCategoryToShow = route.category;
  // locallyStoredProducts never used, should be removed
  let locallyStoredProducts = [];
  let [products, setProducts] = useState(ART);
  artPiecesOfCategoryArray = products.filter(
    (element) => element.category === imageCategoryToShow
  );
  console.log("route: ", artPiecesOfCategoryArray);
  useEffect(() => {
    console.log("here!");
    const productsArrayStored = JSON.parse(localStorage.getItem("products"));
    const panelsArrayStored = JSON.parse(localStorage.getItem("panel"));
    if (productsArrayStored) {
      setProducts(productsArrayStored);
    }
    if (panelsArrayStored) {
      setPanelInformation(panelsArrayStored);
    }
  }, []);
  const onComplete = after(products.length, () => {
    setLoading(false);
    console.log("loaded");
  });
  let [panelInformation, setPanelInformation] = useState([]);
  console.log("PE2: ", panelInformation);
  useEffect(() => {}, []);
  const [stars, setStars] = useState([]);
  let [showPanel, setShowPanel] = useState(false);
  let count = 0;
  let IsElementSameID = false;
  //amount of stars is what was selected from that interface

  const setPanelInfo = (amtountOfChecks, product) => {
    let panelInformationListLeftElements = [];
    let panelArrayWithDeletedElement = [];
    if (amtountOfChecks == 1) {
      setElement(
        product.id,
        product.name,
        product.imageUrl,
        product.price,
        true,
        false,
        false,
        false,
        product.category,
        "One Check"
      );
    } else if (amtountOfChecks == 2) {
      setElement(
        product.id,
        product.name,
        product.imageUrl,
        product.price,
        true,
        false,
        false,
        false,
        product.category,
        "Two Checks"
      );
    } else if (amtountOfChecks == 3) {
      setElement(
        product.id,
        product.name,
        product.imageUrl,
        product.price,
        true,
        false,
        false,
        false,
        product.category,
        "Three Checks"
      );
    } else if (amtountOfChecks == 4) {
      setElement(
        product.id,
        product.name,
        product.imageUrl,
        product.price,
        true,
        false,
        false,
        false,
        product.category,
        "Four Checks"
      );
    } else {
      let arrayWithoutElement = panelInformation.filter(
        (panelElement) => panelElement.id != product.id
      );
      setPanelInformation(arrayWithoutElement);
      localStorage.setItem(`panel`, JSON.stringify(arrayWithoutElement));
    }
  };

  function redistributeTheIds(id, panelInformation) {
    let currentid = -1;
    let missingIDIndex = -1;
    let arrayOfIDS = [];
    for (let i = 0; i < panelInformation.length; i++) {
      let IDVariable = panelInformation[i].id;
      arrayOfIDS[i] = IDVariable;
    }
    return arrayOfIDS;
  }
  const setElement = (
    id,
    name,
    url,
    price,
    option1,
    option2,
    option3,
    option4,
    category,
    amountstars
  ) => {
    let panelInformationElementToAdd = {
      id: id,
      name: name,
      imageUrl: url,
      price: price,
      options: [
        { option: "option1", checked: option1 },
        { option: "option2", checked: option2 },
        { option: "option3", checked: option3 },
        { option: "option4", checked: option4 },
      ],
      category: category,
      amtstars: amountstars,
    };
    let panelInformation2 = panelInformation.filter(
      (panelElement) => panelElement.id === id
    );
    //there are no elements in array for panel with this new info
    if (panelInformation2.length == 0) {
      let arrayFOrPanel = [...panelInformation, panelInformationElementToAdd];
      setPanelInformation(arrayFOrPanel);
      localStorage.setItem(`panel`, JSON.stringify(arrayFOrPanel));
    } else {
      ///there is an element with this check, and stars have changed
      let arrayOfIDs = [];
      const panelInformationChanged = panelInformation.map((pan, index) => {
        arrayOfIDs = redistributeTheIds(id, panelInformation);
        let indexOfElement = arrayOfIDs[index];
        if (indexOfElement === id) {
          return panelInformationElementToAdd;
        } else {
          return pan;
        }
      });
      setPanelInformation(panelInformationChanged);
      localStorage.setItem(`panel`, JSON.stringify(panelInformationChanged));
    }
    console.log("here!");
  };

  const setCheckboxes = (check1, check2, check3, check4, infoArray, id) => {
    infoArray[id - 1].options[0].checked = check1;
    infoArray[id - 1].options[1].checked = check2;
    infoArray[id - 1].options[2].checked = check3;
    infoArray[id - 1].options[3].checked = check4;
    return infoArray;
  };

  const computeStars = (e, index, howManyChecked, id, product) => {
    let infoArray = [...products];
    console.log("1oldarray: ", oldArray);
    let checked = e.target.checked;
    let amtStars = 0;
    console.log("prod:", products);
    //index of four stars satring at zero
    index = index - 1;
    id = id + 1;
    //index is which star, zero through three
    //infoarray was set to products above, in this function
    //how the check boxes work:
    //for any checked box, all boxes before this box will be checked
    //reclicking on a checked box will result in that box and all boxes to the right to be unchecked and the left to be checked.
    //check boxes start all false
    //appply to first box
    if (index === 0) {
      //all check boxes start as false
      //if there is a check on second box and than box one is checked, the check will result in box one being checked
      if (infoArray[id - 1].options[1].checked == true) {
        amtStars = 1;
        setCheckboxes(true, false, false, false, infoArray, id);
      }
      //all check boxes start as false
      //apply check to second box
      //check box one is checked and than index checks one.  so, results in no checks
      else if (infoArray[id - 1].options[0].checked == true) {
        amtStars = 0;
        setCheckboxes(false, false, false, false, infoArray, id);
      } else {
        amtStars = 1;
        //all check boxes start as false
        //apply check to second box
        //three falses,  so it will be a simple check on first box
        setCheckboxes(true, false, false, false, infoArray, id);
      }
    }
    //check boxes start all false
    //apply check to second box
    if (index === 1) {
      if (infoArray[id - 1].options[2].checked == true) {
        amtStars = 2;
        //all check boxes start as false
        //if third box is true and box two is than checked there will be two stars
        setCheckboxes(true, true, false, false, infoArray, id);
      }
      //all check boxes start as false
      //if second box is false and box two is than starred, there will be two stars
      else if (infoArray[id - 1].options[1].checked == false) {
        amtStars = 2;
        setCheckboxes(true, true, false, false, infoArray, id);
      }
      //all check boxes start as false
      //isn't checked on third box and is checked on second box (using else)
      //box two is than changed with index that reverts box two to false
      else {
        amtStars = 0;
        setCheckboxes(false, false, false, false, infoArray, id);
      }
    }
    //all check boxes start as false
    //apply check to third box
    if (index === 2) {
      //all check boxes start as false
      //if box four is checked, and three is checked with index, there will be three checks
      if (infoArray[id - 1].options[3].checked == true) {
        amtStars = 3;
        setCheckboxes(true, true, true, false, infoArray, id);
      }
      //all check boxes start as false
      //if box three is checked and index is applied with third box, all false
      else if (infoArray[id - 1].options[2].checked == true) {
        amtStars = 0;
        setCheckboxes(false, false, false, false, infoArray, id);
      } else {
        //all check boxes start as false
        //by negation of above, fourth star is false, and and third check is false
        //index applied, three trues and a false
        amtStars = 3;
        setCheckboxes(true, true, true, false, infoArray, id);
      }
    }
    //all check boxes start as false
    //apply check to fourth box
    if (index === 3) {
      //all check boxes start as false
      //index is three so will be all stars, all stars with last element checked with index will be all false
      if (infoArray[id - 1].options[3].checked == true) {
        amtStars = 0;
        setCheckboxes(false, false, false, false, infoArray, id);
      }
      //all check boxes start as false
      //there is a check on fourth box, so is all true.
      else {
        amtStars = 4;
        setCheckboxes(true, true, true, true, infoArray, id);
      }
    }
    setProducts(infoArray);
    let var1 = JSON.parse(localStorage.getItem("products"));
    setPanelInfo(amtStars, product);
    localStorage.setItem(`products`, JSON.stringify(infoArray));
  };

  return (
    <div>
      <br></br>
      <br></br>
      <h1>Would you like to rate these works?</h1>
      <br></br>
      <button
        className="buttonShow"
        onClick={() => {
          //
          setShowPanel((showPanel) => !showPanel);
        }}
      >
        Show Panel
      </button>
      {/* ICC: not best practice to use all these br tags, instead use CSS to add margin or padding as necessary */}
      <br></br>
      <br></br>
      <br></br>
      <NavLink to="/">Home Page</NavLink>
      <br></br>
      <br></br>
      <br></br>
      <Fragment>
        <CategoryContainer>
          {/* ICC: artPiecesOfCategoryArray is not a state variable - is this a list that ever changes or is it static? if it will change, you should be using a state variable here */}
          {artPiecesOfCategoryArray.map((product) => {
            // ICC: unnecessary to create the ID variable, just use product.id when needed
            let ID = product.id;
            //ICC: best practice would be to create a component for the following returned JSX code and import it here. This will make your code more modular and easier to read and maintain. You could create a component called ArtPiece or something similar that takes the product as a prop and renders the JSX code below. It would look something like this:
            // <ArtPiece key={product.imageUrl} product={product} onComplete={onComplete} computeStars={computeStars} showPanel={showPanel} panelInformation={panelInformation} />
            return (
              <div key={product.imageUrl}>
                <div>
                  <h2>{product.name}</h2>
                  <h3>${product.price}.00</h3>
                  <div>
                    <img
                      type="Image"
                      src={product.imageUrl}
                      onLoad={onComplete}
                      onError={onComplete}
                      alt={product.name}
                      width={220}
                    />
                  </div>
                </div>
                <div>
                  {product.options.map((opt, optIndex) => {
                    let newOptIndex = optIndex + 1;
                    return (
                      <input
                        key={optIndex}
                        checked={opt.checked}
                        type={`checkbox`}
                        name={newOptIndex}
                        onChange={(e) =>
                          computeStars(e, newOptIndex, newOptIndex, ID, product)
                        }
                      />
                    );
                  })}
                  {showPanel && (
                    <Panel
                      key={panelInformation.id}
                      category={panelInformation}
                    />
                  )}
                </div>
              </div>
            );
          })}
        </CategoryContainer>
      </Fragment>
    </div>
  );
}
