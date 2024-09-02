import { CategoriesContext } from "../../contexts/categories-context";
import { useContext, useState, useEffect, Fragment } from "react";
import { CategoryContainer } from "./category-styles";
import { useParams,  useNavigate } from "react-router-dom";
import Panel from "../../components/panel/panel-component";



let PHOTO = [
 
      {
        id: 1,
        name: "name1",
        imageUrl: require ("./test.png"),
        price: 25,
        options: [{option:'option1' , checked: true}, {option:'option2' , checked: false}, {option:'option3' , checked: false}, {option:'option4' , checked: false}],
        category: "art2",
        amtstars: "none"
        
        
      },

      {
      id: 2,
      name: "name2",
      imageUrl:  require ("./test.png"),
      price: 180,
      options: [{option:'option1' , checked: false}, {option:'option2' , checked: false}, {option:'option3' , checked: false}, {option:'option4' , checked: false}],
      category: "art2",
      amtstars: "none"
      },
];

let [products, setProducts] = useState(PHOTO) 

var update = [

  ...products,

   {

    id:product.id,
    name: "aaa",
    imageUrl: require ("./test.png"),
    price:  2599,
    options: [{option:'option1' , checked: check1}, {option:'option2' , checked: check2}, {option:'option3' , checked: false}, {option:'option4' , checked: false}],
    category: "art2",
    amtstars: amtString
  }

]

//this is not updating products
setProducts(update)
