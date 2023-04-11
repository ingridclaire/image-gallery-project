import { useNavigate } from 'react-router-dom';
import { PhotoContainer } from "./photoimages-styles";

//import { Body, img, images ,DirectoryItemContainer }  from './images-styles';

const PhotoImages = ({category}) => {

    const { imageUrl } = category;
    const navigate = useNavigate();

  //const onNavigateHandler = () => navigate(route);

    //alert(imageUrl);
    
    return (
        
        
        
        //<DirectoryItemContainer onClick={onNavigateHandler}>
         //    <Body>
      
      
        

        
          <div>
            <h2>jj</h2>
            <div className = "images">
                <img src={imageUrl} alt={``} width={ 90} />
            </div>
            </div>
          
     
      
      
                
          
            
            


            
        
    );



}

export default PhotoImages;