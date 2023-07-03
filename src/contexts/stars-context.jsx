import { createContext, useState, useEffect } from 'react';

export const CategoriesContext = createContext({
    amtStars: {},
});
  

export const CategoriesProvider = ({ children }) => {
    const [stars, setStars] = useState({});
  
    
    const value = { stars };
    return (
        <CategoriesContext.Provider value={value}>
            {children}
        </CategoriesContext.Provider>
    );
    
};