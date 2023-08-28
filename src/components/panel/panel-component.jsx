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
    return (
        /////////////////////////////
        //!!!!!CONTENT WAS HERE  - 688 ... after {listcategory}  !!!!!! PROBABLY FOR PANEL DISPLAY - couldnt comment out!
        ////////////////////////////category    <div>
          <div>
    
              <DropDown id="id1">
              <div className="images">
                {count++}
    
    
            
                {items.map((item) => (
              
                  <div>
                  <p >{item.id}</p>
                  <p >{item.name}</p>
                  </div>
                ))}
    
    
              </div>
            </DropDown>
    
    
          </div>
        
    )
    

}
export default Panel;