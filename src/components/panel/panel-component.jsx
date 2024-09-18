import { DropDown } from "./panel-styles";
import { useState } from "react";

let count = 0;

function Panel({category}) {
  {}
  console.log("cat: ", category)
  const id2 = 2;
  const [items, setItems] = useState([]);
  return (
    <div>
      <DropDown id="id1">
        <div className="images">
         
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
