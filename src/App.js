import { Routes, Route } from "react-router-dom";
import React from "react";
import "./App.css";
import Navigation from "./routes/navigation/navigation-component";
import Home from "./routes/home/home-component";
import Category from "./routes/category/category-component";

const App = () => {
 
  return (
    //< Directory />
    <div className="App">
      <header className="App-header">
        <Routes>
          <Route path="/" element={<Navigation />}>
            <Route index element={<Home />} />
            {/*<Route path='shop/*' element={<PhotoImages1 />} />*/}
            <Route path="category/:category" element={<Category />} />
          </Route>
        </Routes>
      </header>
    </div>
  );
};

export default App;
