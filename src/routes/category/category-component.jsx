 import { useContext, useState, useEffect, Fragment } from 'react';
import { useParams } from 'react-router-dom';
import { CategoriesContext } from '../../contexts/categories-context';
import { CategoryContainer } from './category-styles';
import PhotoImages1 from '../../components/photoimages/photoimages-component'
import Panel from '../../components/panel/panel-component'

const Category = ({}) => {

   // log.console("cat", {category});
   
  let { category } = useParams();
  
    console.log("ca: ", { category });  
  //category = "hats";
  const { categoriesMap } = useContext(CategoriesContext);
  const [products, setProducts] = useState(categoriesMap[category]);
   
  console.log("category1 :", categoriesMap);

    useEffect(() => {

      
    },[]);

  
    console.log("catego: ", categoriesMap);
    return (

        
    
    
 
        <div>
        <h4>Rate an image:</h4>    
        
        <Fragment>
      
      
      <CategoryContainer>
        {products &&
          products.map((product) => (
             
              <div>
              <PhotoImages1 key={product.name} category={product} />
                  <Panel key={product.imageUrl} category={product} />
                  </div>
           
             
          ))}
                    
        
      </CategoryContainer>
    </Fragment>
        
            
           
            
        
        </div>
        
            
            

    );
};

export default Category;