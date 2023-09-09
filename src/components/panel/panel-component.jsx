import { PanelContext } from '../../contexts/panel-context';
import { DropDown } from "./panel-styles"
import { useEffect, useState} from 'react';

let count = 0;

function Panel({ category }) {
  console.log("cl: ", category)
  const id2 = 2;
  const [items, setItems] = useState([])
  //const { name } = Category;
  
  useEffect(() => {
    setItems((items) => [...items, { id: category.id, name: category.name }])
  }, [])

  //const PanelInfoArray = JSON.parse(localStorage.getItem(`panelInfo`))
  var PanelInfoArray = JSON.parse(localStorage.getItem("panel") || "[]");
  //console.log("PIA: ", PanelInfoArray);
    return (
        /////////////////////////////
        //!!!!!CONTENT WAS HERE  - 688 ... after {listcategory}  !!!!!! PROBABLY FOR PANEL DISPLAY - couldnt comment out!
        ////////////////////////////category    <div>
          <div>
    
              <DropDown id="id1">
              <div className="images">
                {count++}
    
            
            
              
            
                
                {PanelInfoArray && PanelInfoArray.map((item) => (
              
                  <div>
                    <p >{item.name1}</p>
                    <img src={item.url} width="80" height="80" />
                    <p >${item.price}.00</p>
                    <p>----</p>
                    
                  </div>
              ))}   
    
    
              </div>
            </DropDown>
    
    
          </div>
        
    )
    

}
export default Panel;