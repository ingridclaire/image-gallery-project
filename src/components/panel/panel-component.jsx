import { createPortal } from 'react-dom'
import { DropDown } from "./panel-styles"
import Images1 from '../images/images-component'; 
import { CategoriesContext } from '../../contexts/categories-context';
import { useContext, useState, useEffect, Fragment } from 'react';
import { useParams } from 'react-router-dom';
import PhotoImages from '../../components/photoimages/photoimages-component'

const PHOTO_DATA = [
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


function Panel({ category } ) {

  const { id, imageUrl, name} = category;
  console.log({imageUrl});
  const [object, setObject] = useState({
  

  });

  function updateObject(){
    
    let link = 'https://i.ibb.co/X2VJP2W/blue-snapback.png';
    
    setObject(() => {
      console.log("2. : ", category); 
      console.log("6 ", link);
      
      
      //return { ...previousState, id: 1, name: "blue", imageUrl: 'https://i.ibb.co/X2VJP2W/blue-snapback.png'  }
      
});
  }
  
  //console.log("6 ",previousState.imageUrl);

  useEffect(() => {
  
  }, [object, setObject]);
  
  //console.log("4. ", { imageUrl });

  return (

    <div>
      <div>

        hhha
        
        
      
        <DropDown id="id1" >
          <div className="images">
      
      
            
           
            a
           
            <img src={imageUrl} alt={``} width={90} />
        
            
            
            <h1>{name}</h1>

            
             
            <Images1 key={category.id} category={category} />
           
             
        
      
      
        
          
          </div>
        </DropDown>
      
        <button type="button" onClick = {updateObject}>Button</button>
      
          
          
          
       
          
      </div>
      
        
        
    </div>
    
    



      
      

    
  );
};

export default Panel;