import { DropDown } from "./panel-styles";
// ICC you don't need to import useState here
import { useState } from "react";

function Panel({ category }) {
  // ICC you don't need this state variable
  const [items, setItems] = useState([]);
  return (
    <div>
      <DropDown>
        <div>
          {category &&
            category.map((item, index) => (
              <div key={index}>
                <p>{item.name1}</p>
                <br></br>
                {/* ICC add an alt property to the img tag per html best practice */}
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
