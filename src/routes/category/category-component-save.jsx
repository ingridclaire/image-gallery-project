import { CategoriesContext } from '../../contexts/categories-context';
import { useContext, useState, Fragment } from 'react';
import { CategoryContainer } from './category-styles';
import { useParams } from 'react-router-dom';

export const createProductsWithOptions = (arrayOfProducts) => {
  if (arrayOfProducts) {
    if (arrayOfProducts.length > 0) {
      return arrayOfProducts.map(prod => {
        return {
          ...prod,
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

export default function Category() {
  let { category } = useParams();
  console.log("1: ", category);
  const { categoriesMap } = useContext(CategoriesContext);
  const storedProducts = JSON.parse(localStorage.getItem(`products`));
  const defaultProducts = createProductsWithOptions(categoriesMap[category]);
  const [products, setProducts] = useState(storedProducts || defaultProducts);

  function handleCheck(option, product) {

    let productsFromStorage = [];
    let storedProducts = localStorage.getItem(`products`);
    if (storedProducts) productsFromStorage = JSON.parse(storedProducts);

    const setCheckedOptionForProducts = (arrayOfProducts) => {
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

    let updatedProducts = productsFromStorage.length > 0 ? setCheckedOptionForProducts(productsFromStorage) : setCheckedOptionForProducts(defaultProducts);
    localStorage.setItem(`products`, JSON.stringify(updatedProducts));
    setProducts(updatedProducts);
  }

  return (
    <div>
      <h4>Rate an image:</h4>
      <Fragment>
        <CategoryContainer>
          {products &&
            products.map((product) => {
              return (
                <div key={product.name}>
                  {/* <PhotoImages1 key={product.name} category={product} productID={product.id} /> */}
                  <div>
                    <div id={`drop`}>{product.id}</div>
                    <div>
                      <h2>{product.name}</h2>
                      <h3>${product.price}.00</h3>
                      <div className={`images`}>
                        <img src={product.imageUrl} alt={``} width={90} />
                      </div>
                    </div>
                    {product.options.map((opt, optIndex) => {
                      return <input key={optIndex} id={`${product.id}-${optIndex}`} checked={opt.checked} type={`checkbox`} value={`option${optIndex}`} name={`${optIndex}`} onChange={(event) => handleCheck(opt, product)} />
                    })}
                    { <Panel key={id} category={category} productID={productID} /> }
                  </div>
                </div>
              )
            })}
        </CategoryContainer>
      </Fragment>
    </div>
  );
};