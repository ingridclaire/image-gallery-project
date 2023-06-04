 import { useContext, useState, useEffect, Fragment } from 'react';
import { useParams } from 'react-router-dom';
import { CategoriesContext } from '../../contexts/categories-context';
import { CategoryContainer } from './category-styles';
import PhotoImages1 from '../../components/photoimages/photoimages-component'
import Panel from '../../components/panel/panel-component'

const Category = ({}) => {

   // log.console("cat", {category});
   
  let { category } = useParams();
  
    //console.log("ca: ",category);  
  //category = "hats";
  const { categoriesMap } = useContext(CategoriesContext);
  const [products, setProducts] = useState(categoriesMap[category]);
   
  console.log("category :", category);


    useEffect(() => {

        //<Panel key={category.id} category={category} />

    },[]);

  /*
  categoriesMap[category] = 
    
  [
    {
        title: 'hats',
        items: [
            {
                id: 1,
                name: 'Brown Brim',
                imageUrl: 'https://i.ibb.co/ZYW3VTp/brown-brim.png',
                price: 25,
            },
            {
                id: 2,
                name: 'Blue Beanie',
                imageUrl: 'https://i.ibb.co/ypkgK0X/blue-beanie.png',
                price: 18,
            },
            {
                id: 3,
                name: 'Brown Cowboy',
                imageUrl: 'https://i.ibb.co/QdJwgmp/brown-cowboy.png',
                price: 35,
            },
            {
                id: 4,
                name: 'Grey Brim',
                imageUrl: 'https://i.ibb.co/RjBLWxB/grey-brim.png',
                price: 25,
            },
            {
                id: 5,
                name: 'Green Beanie',
                imageUrl: 'https://i.ibb.co/YTjW3vF/green-beanie.png',
                price: 18,
            },
            {
                id: 6,
                name: 'Palm Tree Cap',
                imageUrl: 'https://i.ibb.co/rKBDvJX/palm-tree-cap.png',
                price: 14,
            },
            {
                id: 7,
                name: 'Red Beanie',
                imageUrl: 'https://i.ibb.co/bLB646Z/red-beanie.png',
                price: 18,
            },
            {
                id: 8,
                name: 'Wolf Cap',
                imageUrl: 'https://i.ibb.co/1f2nWMM/wolf-cap.png',
                price: 14,
            },
            {
                id: 9,
                name: 'Blue Snapback',
                imageUrl: 'https://i.ibb.co/X2VJP2W/blue-snapback.png',
                price: 16,
            },
        ],
    },
  ];
  */
    return (

        
    
    
 
        <div>
        <h4>Category</h4>    
        
        <Fragment>
      
      <h1>title</h1>
      <CategoryContainer>
        {products &&
          products.map((product) => (
             
              <div>
              <PhotoImages1 key={product.id} category={product} />
                  <Panel key={product.id} category={product} />
                  </div>
           
             
          ))}
                    
        
      </CategoryContainer>
    </Fragment>
        
            
           
            
        
        </div>
        
            
            

    );
};

export default Category;