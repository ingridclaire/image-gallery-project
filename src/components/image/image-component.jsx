import { Body }  from './image-styles';



const Image = ({ imageUrl }) => {

    
    return (

        <Body>


        <div>
        
        <img src={imageUrl} alt={``} width={90} />
        
            
            </div>
            </Body>
    );
};

export default Image;