import { useContext, useState, useEffect, Fragment } from 'react';
import { useParams } from 'react-router-dom';
import { CategoriesContext } from '../../contexts/categories-context';
import { CategoryContainer } from './category-styles';
import PhotoImages1 from '../../components/photoimages/photoimages-component'
import Panel from '../../components/panel/panel-component'

const Category = ({ }) => {
  let { category } = useParams();
  // console.log("ca: ", { category });
  const { categoriesMap } = useContext(CategoriesContext);
  const [products, setProducts] = useState(categoriesMap[category]);
  // console.log("category1 :", categoriesMap);

  

  // console.log("catego: ", categoriesMap);
  console.log({ products });

  // useEffect(() => {
  //   console.log(`initialProducts`, categoriesMap[category]);
  //   // setProducts(products)
  // }, [])

  return (
    <div>
      <h4>Rate an image:</h4>
      <Fragment>
        <CategoryContainer>
          {products &&
            products.map((product) => {
              return (
                <div key={product.name}>
                  <PhotoImages1 key={product.name} category={product} productID={product.id} />
                  
                </div>
              )
            })}
        </CategoryContainer>
      </Fragment>
    </div>
  );
};
export default Category;