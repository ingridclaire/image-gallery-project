


const Image = ({ imageUrl }) => {

    
    console.log("1: ", imageUrl);

    return (
        <div>
        
        <img src={imageUrl} alt={``} width={90} />
        
            
            </div>
    );
};

export default Image;