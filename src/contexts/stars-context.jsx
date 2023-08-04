/*import { createContext, useState, useEffect, useContext } from 'react';


export const StarContext = createContext({
    setStars: () => null,
    stars1: [],
});
    



export function StarProvider({ children }) {
    const [stars1, setStars] = useState(10);


    
    const value = {stars1, setStars}
    return (
        <StarContext.Provider value={{ stars1, setStars }}>
        {children}
        </StarContext.Provider>
    );
}

*/

import React, { useState, useContext } from "react"

const ExampleContext = React.createContext()

const ExampleProvider = ({ children }) => {
  const [items, setItems] = useState([
    { id: 1, name: "item1" },
    { id: 2, name: "item2" },
    { id: 3, name: "item3" }
  ])

  return (
    <ExampleContext.Provider value={{ items, setItems }}>
      {children}
    </ExampleContext.Provider>
  )
}



export { ExampleContext, ExampleProvider, Example }
