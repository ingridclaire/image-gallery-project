import { createContext, useState, useEffect } from 'react';

export const AmtProviderContext = createContext({
    fourStars:  0,
    setFourStars: () => null,
});
  

export const AmtProvider = ({ children }) => {
    const [fourStars, setFourStars] = useState(0);
  
    
    const value = { fourStars, setFourStars };
    return (
        <AmtProviderContext.Provider value={value}>
            {children}
        </AmtProviderContext.Provider>
    );
    
};