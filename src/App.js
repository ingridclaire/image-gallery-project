import { Routes, Route } from "react-router-dom";
import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Directory from "./components/directory/directory-component";
import Image from "./components/images/images-component";
import PHOTO_DATA from "./photo-data";
import Navigation from "./routes/navigation/navigation-component";
import Home from "./routes/home/home-component";
import Shop from "./routes/shop/shop-component";
import Category from "./routes/category/category-component";
import PhotoImages1 from "./components/panel/panel-component";
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
