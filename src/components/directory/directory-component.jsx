import React from 'react';
import categories1 from '../../photo-data';
import Images1 from '../images/images-component'; 
import { DirectoryContainer } from '../directory/directory-styles';


const categories = [
    {
      id: 1,
      name: 'Al',
      imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
      route: 'shop/hats',
    },
    {
      id: 2,
      name: 'Debbie',
      imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
      route: 'shop/jackets',
    },
    {
      id: 3,
      name: 'Joe',
      imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
      route: 'shop/sneakers',
    },
    {
      id: 4,
      name: 'Kate',
      imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
      route: 'shop/womens',
    },
    {
      id: 5,
      name: 'Bill',
      imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
      route: 'shop/mens',
    },
  ];

const Directory = () => {

    
    return (

        
        
        
      <div>
        
        <DirectoryContainer>
            
            
            {categories.map((category) => (
              <Images1 key = {category.id} category={category} />
            ))}
            
            
        </DirectoryContainer>
        </div>
        
            
            

    );
};

export default Directory;