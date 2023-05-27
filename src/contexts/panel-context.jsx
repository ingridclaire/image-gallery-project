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

  
  
    const value = { panelArray, setpanelArray };
  
  
    const addItemToCart = (productToAdd) => {
      setpanelArray(addCartItem(productToAdd));
    };
  
  return (
    <PanelContext.Provider value={value}>
      {children}
    </PanelContext.Provider>
  );

};
