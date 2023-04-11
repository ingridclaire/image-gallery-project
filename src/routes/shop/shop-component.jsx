import { Outlet } from "react-router-dom";
import Images1 from '../../components/images/images-component';



import PhotoImages from '../../components/photoimages/photoimages-component';
import { PhotoContainer } from "./shop-styles";

import { product1 } from '../../photo-data';
import { Fragment } from 'react';
import { useContext } from 'react';
import { CategoriesContext } from '../../contexts/categories-context';



let products2 = [
    {
        title: 'Hats',
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


const Shop = () => {

    
    return (


        
        <Fragment>
            {
                Object.keys(products2).map((title) => (
                <Fragment key={title}>
                    <h2>{title}</h2>
                    <PhotoContainer>
                        {products2[title].map((category) => (
                            <PhotoImages key={category.id} category={category} />
                        ))}
                
                    </PhotoContainer >
                </Fragment>
            ))}
        </Fragment>
    );
};
        
            
        
        
        

        


    /*  <div>
        
      
      
      {products2.map((item, index) => (
      <div key = {index}>
    
    {item.items.map((c, i) => (
        <div key={i}>  
        

            <PhotoContainer>
                <div>
                    <PhotoImages category={c} />
                    </div>
            </PhotoContainer>

        
           </div>
    ))}
  </div>
))}
                
        
      
      
    </div>

*/




        
        
            
            
            
            
        
            
        
            
       
            



export default Shop;