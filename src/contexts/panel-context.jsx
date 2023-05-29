import { createContext, useState, useEffect } from 'react';

const addCartItem = (productToAdd) => {
  return [productToAdd];
};
  
export const PanelContext = createContext({
  panelArray: [],
  addItemToCart: () => { },
  setpanelArray: () => { },

});

//setCartItems(addCartItem(productToAdd))
  


let imageUrl = 'https://i.ibb.co/X2VJP2W/blue-snapback.png'; 



export const PanelProvider = ({ children }) => {
  
  
  const [panelArray, setpanelArray] = useState([]);
  
  useEffect(() => {
    //alert("3");
    //setpanelArray(imageUrl);
  
  }, []);

  
  
  const addItemToCart = (productToAdd) => {
    
    const newState = [...panelArray, 'hello'];
    
    //setpanelArray(newState);
    
    
  };


    const value = { panelArray, setpanelArray, addItemToCart};
  
  
    
  return (
    <PanelContext.Provider value={value}>
      {children}
    </PanelContext.Provider>
  );

};
