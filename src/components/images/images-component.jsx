

import { Body }  from './images-styles';

const Images1 = ({category}) => {

    const { name, imageUrl } = category;

    return (
        

            <Body>
            <h2>{name}</h2>
            <div class = "images">
            <img src={imageUrl} alt={`${name}`} />
            </div>
                
            </Body>

            


            
        
    );



}

export default Images1;
