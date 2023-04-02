import { useNavigate } from 'react-router-dom';

import { Body, img, images ,DirectoryItemContainer }  from './images-styles';

const Images1 = ({category}) => {

    const { name, imageUrl, route } = category;
    const navigate = useNavigate();

  const onNavigateHandler = () => navigate(route);

    return (
        

        <DirectoryItemContainer onClick={onNavigateHandler}>
             <Body>
            <h2>{name}</h2>
            <div className = "images">
                <img src={imageUrl} alt={`${name}`} width={ 60} />
            </div>
                
            </Body>
            </DirectoryItemContainer>
            
            


            
        
    );



}

export default Images1;
