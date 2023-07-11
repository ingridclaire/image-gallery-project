import { createContext, useState, useEffect, useContext } from 'react';


export const StarContext = createContext({
    setStars: () => null,
    stars1: null,
});
    



export function StarProvider({ children }) {
    const [stars1, setStars] = useState(10);


    
    const value = {stars1, setStars}
    return (
        <StarContext.Provider value={ stars1 }>
        {children}
        </StarContext.Provider>
    );
}

