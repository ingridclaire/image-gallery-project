import { useContext, useState, useEffect, Fragment } from 'react';
import { useParams } from 'react-router-dom';
import { CategoriesContext } from '../../contexts/categories-context';
import { CategoryContainer } from './category-styles';
import PhotoImages from '../../components/photoimages/photoimages-component'

const Category = () => {


   
        const { category } = useParams();
        const { categoriesMap } = useContext(CategoriesContext);
  const [products, setProducts] = useState(categoriesMap[category]);
   
  console.log("category :", category);
  
    return (

        
    
    
 
        <div>
        <h4>Category</h4>    
    
        <Fragment>
      
      <h1>title</h1>
      <CategoryContainer>
        {products &&
          products.map((product) => (
             
              <PhotoImages key={product.id} category={product} />
             
          ))}
                    
        { console.log(products)}
      </CategoryContainer>
    </Fragment>
        
            
           
            
        
        </div>
        
            
            

    );
};

export default Category;