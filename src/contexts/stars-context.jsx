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
export { ExampleContext, ExampleProvider }
