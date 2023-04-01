

import { Body, img, images }  from './images-styles';

const Images1 = ({category}) => {

    const { name, imageUrl } = category;

    return (
        

            <Body>
            <h2>{name}</h2>
            <div className = "images">
                <img src={imageUrl} alt={`${name}`} width={ 60} />
            </div>
                
            </Body>

            


            
        
    );



}

export default Images1;
