import { useNavigate } from 'react-router-dom';
import { PhotoContainer, DropDown } from "./photoimages-styles";
import Panel from "../panel/panel-component";
import { createPortalcreate } from 'react-dom';
import { usePortal } from "react-dom";
import { createPortal } from 'react-dom';
import { createContext, useContex, useState, useContext, useEffect } from 'react';
import { ExampleContext } from '../../contexts/stars-context';


const PhotoImages1 = ({ category }) => {
  let show = true;
  const { id, imageUrl, name, price } = category;
  let { items, setItems } = useContext(ExampleContext)
  const navigate = useNavigate();

  const [todos, setTodos] = useState(true, true, true, true);

  useEffect(() => {
    setTodos((prevState) => ({ ...prevState, value1: false }))
    setTodos((prevState) => ({ ...prevState, value2: false }))
    setTodos((prevState) => ({ ...prevState, value3: false }))
    setTodos((prevState) => ({ ...prevState, value4: false }))
  }, [])

  function GetStars(test) {
    {
      alert(test);
      //let id = event.target.name;
      const newStars = items.filter((contact) => contact.id !== Number(id));
      setItems(newStars);

      let v = test
      setItems((items) => [...items, { id: id, name: v }])
    };
  }

  

  return (
    <div>
      <div id='drop'>
        
      
        {id}
      </div>
      <div>
        <h2>{name}</h2>
        <h3>${price}.00</h3>
        <div className="images">
          <img src={imageUrl} alt={``} width={90} />
        </div>
      </div>

      { show && <input id="0" checked={todos.value1} type="checkbox" name="1" onChange={(event) => GetStars(event)} />}
      {show && <input id="1" checked={todos.value2} type="checkbox" name="2" onChange={(event) => GetStars(event)} />}
      {show && <input id="2" checked={todos.value3} type="checkbox" name="3" onChange={(event) => GetStars(event)} />}
      {show && <input id="3" checked={todos.value4} type="checkbox" name="4" onChange={(event) => GetStars(event)} />}
      
    </div>
  );
}
export default PhotoImages1;