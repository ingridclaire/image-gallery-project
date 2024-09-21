import { DropDown } from "./panel-styles";
import { useState } from "react";

//ICC: remove count variable as it's not used
let count = 0;

function Panel({ category }) {
  //ICC: remove this curly braces block on line 8 as it's not used
  {
  }
  console.log("cat: ", category);
  //ICC: remove id2 variable as it's not used
  const id2 = 2;
  //ICC: remove items and setItems as they are not used, or utilize them if needed
  const [items, setItems] = useState([]);
  return (
    <div>
      <DropDown id="id1">
        <div className="images">
          {/* if category is an array, you don't need the conditional check (category &&) */}
          {category &&
            category.map((item, index) => (
              <div key={index}>
                <p>{item.name1}</p>
                <br></br>
                <img src={item.imageUrl} width="100" height="106" />
                <p>${item.price}.00</p>
                <p>{item.amtstars}</p>
                <p>----</p>
              </div>
            ))}
        </div>
      </DropDown>
    </div>
  );
}

export default Panel;
