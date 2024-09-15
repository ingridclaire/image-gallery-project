import { DropDown } from "./panel-styles";
import { useState } from "react";

let count = 0;

function Panel({category}) {
  {}
  console.log("cat: ", category)
  const id2 = 2;
  const [items, setItems] = useState([]);
  //var PanelInfoArray = JSON.parse(localStorage.getItem(`panel`));
  //console.log("PIA: ", PanelInfoArray)
  return (
    <div>
      <DropDown id="id1">
        <div className="images">
         
          {category &&
            category.map((item, index) => (


              <div key={index}>
                <p>{item.name1}</p>
                <img src={item.imageUrl} width="100" height="100" />
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
