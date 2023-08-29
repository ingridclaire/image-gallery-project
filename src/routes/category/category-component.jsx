import { CategoriesContext } from '../../contexts/categories-context';
import { useContext, useState, Fragment } from 'react';
import { CategoryContainer } from './category-styles';
import { useParams } from 'react-router-dom';

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
            {option: `option1`, checked: false},
            {option: `option2`, checked: false},
            {option: `option3`, checked: false},
            {option: `option4`, checked: false}
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
              opt.checked = !opt.checked;
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

  const handleCheck = (option, product) => {
    let updatedProducts = [];
    if (getLatestStoredNotifications().length > 0) {
      updatedProducts = setCheckedOptionForProducts(getLatestStoredNotifications(), option, product);
    } else {
      updatedProducts = setCheckedOptionForProducts(initialProducts, option, product);
    }
    localStorage.setItem(`products`, JSON.stringify(updatedProducts));
    setProducts(updatedProducts);
  }

  return (
    <div>
      <h4>Rate an image:</h4>
      <Fragment>
        <CategoryContainer>
          {products &&
            // Use filter to keep only the products with the matching category we want
            products.filter(prod => prod.category === category).map((product) => {
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
                        name={newOptIndex} onChange={(event) => handleCheck(opt, product)} />
                      )
                    })}
                  </div>
                </div>
              )
            })}
        </CategoryContainer>
      </Fragment>
    </div>
  );
};