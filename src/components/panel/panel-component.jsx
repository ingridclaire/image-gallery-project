//import { PanelContext } from '../../contexts/panel-context';
import { DropDown } from "./panel-styles"
import { useState} from 'react';
let count = 0;
function Panel( ) {
  const id2 = 2;
  const [items, setItems] = useState([])
  var PanelInfoArray = JSON.parse(localStorage.getItem("panel") || "[]");
    return (
          <div>
              <DropDown id="id1">
              <div className="images">
                {count++}
                {PanelInfoArray && PanelInfoArray.map((item, index) => (
                  <div key={index}>
                    <p >{item.name1}</p>
                    <img src={item.url} width="80" height="80" />
                    <p >${item.price}.00</p>
                    <p >{item.amtstars}</p>
                    <p>----</p>
                  </div>
                ))}  
              </div>
            </DropDown>
          </div>
    )
}
export default Panel;
