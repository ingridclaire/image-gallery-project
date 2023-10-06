import { createContext, useState, useEffect } from "react";
const addCartItem = (productToAdd) => {
  return [productToAdd];
};
export const PanelContext = createContext({
  panelArray: [],
  addItemToCart: () => {},
  setpanelArray: () => {},
});
let imageUrl = "https://i.ibb.co/X2VJP2W/blue-snapback.png";
export const PanelProvider = ({ children }) => {
  const [panelArray, setpanelArray] = useState([]);
  useEffect(() => {}, []);
  const addItemToCart = (productToAdd) => {
    const newState = [...panelArray, "hello"];
  };
  const value = { panelArray, setpanelArray, addItemToCart };
  return (
    <PanelContext.Provider value={value}>{children}</PanelContext.Provider>
  );
};
