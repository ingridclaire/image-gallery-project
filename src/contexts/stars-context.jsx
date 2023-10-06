import React, { useState, useContext } from "react";

const ExampleContext = React.createContext();
const ExampleProvider = ({ children }) => {
  const [items, setItems] = useState([{ id: 1, name: "", star3: "" }]);
  
  return (
    <ExampleContext.Provider value={{ items, setItems }}>
      {children}
    </ExampleContext.Provider>
  );
};

export { ExampleContext, ExampleProvider };
