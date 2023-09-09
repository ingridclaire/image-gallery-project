import { CategoriesContext } from '../../contexts/categories-context';
import { useContext, useState, Fragment } from 'react';
import { CategoryContainer } from './category-styles';
import { useParams } from 'react-router-dom';
import Panel from '../../components/panel/panel-component'
import { findAllByTestId } from '@testing-library/react';


export const getLatestStoredNotifications = () => {
  if (localStorage.getItem(`products`)) {
    let storedProducts = makeCopyOfProductsWithCustomData(JSON.parse(localStorage.getItem(`products`)));
    return storedProducts;
  } else {
    return [];
  }
}

// We add category as a secondary parameter in the function
export const makeCopyOfProductsWithCustomData = (arrayOfProducts, category) => {
  if (arrayOfProducts) {
    if (arrayOfProducts.length > 0) {
      return arrayOfProducts.map(prod => {
        return {
          ...prod,
          category: prod.category || category, // Adding the category as a backup property in our custom objects
          options: prod.options || [
            { option: `option1`, checked: false },
            { option: `option2`, checked: false },
            { option: `option3`, checked: false },
            { option: `option4`, checked: false }
          ]
        }
      })
    } else {
      return arrayOfProducts
    }
  } else {
    return arrayOfProducts;
  }
}

export const setCheckedOptionForProducts = (arrayOfProducts, option, product) => {
  if (arrayOfProducts.length > 0) {
    return arrayOfProducts.map(prod => {
      if (prod.id === product.id) {
        return {
          ...prod,
          options: prod.options.map(opt => {
            if (opt.option === option.option) {
              opt.checked = opt.checked;
              return opt;
            } else {
              return opt;
            }
          })
        }
      } else {
        return prod;
      }
    });
  }
}

export default function Category() {
  const [items, setItems] = useState(false)
  let { category } = useParams();
  const { categoriesMap } = useContext(CategoriesContext);
  const productsForCategoryFromDB = categoriesMap[category];

  let storedProducts = getLatestStoredNotifications();
  // Create an array of only the IDs of products
  let storedProductIDs = [];
  if (storedProducts.length > 0) storedProductIDs = storedProducts.map(productInStoredProducts => productInStoredProducts.id);

  // We need to take the generated products from the database and push them into a new array
  if (productsForCategoryFromDB && productsForCategoryFromDB.length > 0) {
    productsForCategoryFromDB.forEach(productForCategoryFromDB => {
      // If the product already exists in our array, we don't want it
      if (storedProductIDs.length > 0 && storedProductIDs.includes(productForCategoryFromDB.id)) {
        return; // So just return to do nothing
      } else {
        // But if the id is not in our storage, let's push it in so we can track it
        storedProducts.push(productForCategoryFromDB);
      }
    })
  }

  // We need to take the updated array and create a copy with our custom data
  // Since we added a new parameter, let's make sure we pass that in
  const initialProducts = makeCopyOfProductsWithCustomData(storedProducts, category);
  // Now that we have the custom array with all the data we need
  // We can render our products on the page, but we will need to filter out the ones not matching the current category later on
  const [products, setProducts] = useState(initialProducts);
  // And lets store the final generated array of products with everything we need back into our localstorage to sync it up
  localStorage.setItem(`products`, JSON.stringify(initialProducts));
  let count = 0;
  
  const computeStars = (option, product, index, id) => {
    let PanelInfoArray = JSON.parse(localStorage.getItem("products") || "[]");

    //alert(id);
    if (index === 0) {


      if (PanelInfoArray[id-1].options[1].checked == true) {

        alert("2");
        PanelInfoArray[id-1].options[0].checked = true
        PanelInfoArray[id-1].options[1].checked = false
        PanelInfoArray[id-1].options[2].checked = false
        PanelInfoArray[id-1].options[3].checked = false

        
    }
    
    else  if (PanelInfoArray[id-1].options[0].checked == true) {
        alert("1");
        PanelInfoArray[id-1].options[0].checked = false
        PanelInfoArray[id-1].options[1].checked = false
        PanelInfoArray[id-1].options[2].checked = false
        PanelInfoArray[id-1].options[3].checked = false

      }
     
      else {

        alert("3");
        PanelInfoArray[id-1].options[0].checked = true
        PanelInfoArray[id-1].options[1].checked = false
        PanelInfoArray[id-1].options[2].checked = false
        PanelInfoArray[id-1].options[3].checked = false



      }

    }

    if (index === 1) {

      if (PanelInfoArray[id-1].options[2].checked == true) {

        alert("2a");
        PanelInfoArray[id-1].options[0].checked = true
        PanelInfoArray[id-1].options[1].checked = true
        PanelInfoArray[id-1].options[2].checked = false
        PanelInfoArray[id-1].options[3].checked = false

        
    }
    
      else if (PanelInfoArray[id-1].options[1].checked == false) {
        alert("1a");
        PanelInfoArray[id-1].options[0].checked = true
        PanelInfoArray[id-1].options[1].checked = true
        PanelInfoArray[id-1].options[2].checked = false
        PanelInfoArray[id-1].options[3].checked = false

      }
      
      else {

        alert("3a");
        PanelInfoArray[id-1].options[0].checked = false
        PanelInfoArray[id-1].options[1].checked = false
        PanelInfoArray[id-1].options[2].checked = false
        PanelInfoArray[id-1].options[3].checked = false



      }

    }

    if (index === 2) {

      if (PanelInfoArray[id-1].options[3].checked == true) {
        alert("1b");
        PanelInfoArray[id-1].options[0].checked = true
        PanelInfoArray[id-1].options[1].checked = true
        PanelInfoArray[id-1].options[2].checked = true
        PanelInfoArray[id-1].options[3].checked = false

      }
      else if (PanelInfoArray[id-1].options[2].checked == true) {

        alert("2b");
        PanelInfoArray[id-1].options[0].checked = false
        PanelInfoArray[id-1].options[1].checked = false
        PanelInfoArray[id-1].options[2].checked = false
        PanelInfoArray[id-1].options[3].checked = false

        
      }
      else {

        alert("3b");
        PanelInfoArray[id-1].options[0].checked = true
        PanelInfoArray[id-1].options[1].checked = true
        PanelInfoArray[id-1].options[2].checked = true
        PanelInfoArray[id-1].options[3].checked = false



      }

    }

    if (index === 3) {

      if (PanelInfoArray[id-1].options[3].checked == true) {

        alert("2c");
        PanelInfoArray[id-1].options[0].checked = false
        PanelInfoArray[id-1].options[1].checked = false
        PanelInfoArray[id-1].options[2].checked = false
        PanelInfoArray[id-1].options[3].checked = false

        
    }
    
      else  {
        alert("1c");
        PanelInfoArray[id-1].options[0].checked = true
        PanelInfoArray[id-1].options[1].checked = true
        PanelInfoArray[id-1].options[2].checked = true
        PanelInfoArray[id-1].options[3].checked = true

      }
      
      

    }



    localStorage.setItem(`products`, JSON.stringify(PanelInfoArray));

    /*

      star = 1;
      if (todos.value1 == false) {
        setTodos((prevState) => ({ ...prevState, value1: true }))
        setTodos((prevState) => ({ ...prevState, value2: false }))
        setTodos((prevState) => ({ ...prevState, value3: false }))
        setTodos((prevState) => ({ ...prevState, value4: false }))

        amtStars = "1 Star";
        //alert("here1");
        
      }

    
    console.log("index: ", index)
    if (option.option == "option1") {
      if (option.checked == false) {
        
      }

    let PanelInfoArray = JSON.parse(localStorage.getItem("products") || "[]");
    console.log("PIA: ", PanelInfoArray[0].options[0].option)
    console.log("PIA: ", PanelInfoArray[0].options[0].checked)
    PanelInfoArray[1].options[1].checked = true
    localStorage.setItem(`products`, JSON.stringify(PanelInfoArray));
    console.log("ls: ", PanelInfoArray);
    setItems(true);


    }
    */

    handleCheck(option, product)
  }
  
  const handleCheck = (option, product) => {

    
    let amtstars = 1;
    //if (option.option == "option1" && option.checked == false)
    //{
      
    //  }
    
      let updatedProducts = [];
    if (getLatestStoredNotifications().length > 0) {
      updatedProducts = setCheckedOptionForProducts(getLatestStoredNotifications(), option, product);
    } else {
      updatedProducts = setCheckedOptionForProducts(initialProducts, option, product);
    }
    localStorage.setItem(`products`, JSON.stringify(updatedProducts));
    setProducts(updatedProducts);
    //const PanelInfoArray = ["a", "b"];
    
    var panelArray = JSON.parse(localStorage.getItem("panel") || "[]");

    var panel = {
      amtstars: amtstars,
      id: product.id,
      name1: product.name,
      url: product.imageUrl,
      price: product.price
  };
    
  const panelArray2 = panelArray.filter((contact) => contact.id !== product.id);
    panelArray2.push(panel);

    
    localStorage.setItem("panel", JSON.stringify(panelArray2));
    //
    
    
    
  }

  return (
                    
    <div>
      <h4>Rate an image:</h4>
      <Fragment>
        <CategoryContainer>
          {products &&
            // Use filter to keep only the products with the matching category we want
            products.filter(prod => prod.category === category).map((product) => {
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
                      <img src={product.imageUrl} alt={product.name} width={90} />
                    </div>
                  </div>
                  <div className="optionsContainer">
                    {product.options.map((opt, optIndex) => {
                      let newOptIndex = optIndex + 1;
                      let productOptionValue = `option${newOptIndex}`;
                      let productOptionID = `${productID}-option-${newOptIndex}`;
                      return (
                        <input key={optIndex} id={productOptionID}
                          checked={opt.checked} type={`checkbox`} value={productOptionValue}
                          name={newOptIndex} onChange={(event) => computeStars(opt, product,optIndex, ID)} />
                      )
                    })}

                    {/* <Panel key={id} category={product} productID={productID} /> */}
                    { <Panel key={product.id} category={product} productID={productID} />}
                  </div>
                </div>
              )
            })}
        </CategoryContainer>
      </Fragment>
    </div>
  );
};

