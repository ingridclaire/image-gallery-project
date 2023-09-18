//import { body } from '../../components/stars/stars-styles';
//import { createContext, useContext, useState, useEffect, Fragment, useReducer } from 'react';
//import { useParams } from 'react-router-dom';
//import { AmtProviderContext } from '../../contexts/stars-context';
/*
let amtStars = 0;
const Stars = () => {
  const { fourStars, setFourStars } = useContext(AmtProviderContext);
  //[fourStars, setFourStars] = useState(false, false, false, false);
  let [todos, setTodos] = useState(false, false, false, false);
  const [value, setValue] = useState(false)
  const [stars, setStars] = useState(0)
  function getStars(event) {
    amtStars = {};
    alert("getstars");
    console.log("td2: ", todos.value1);
    let id = event.target.id;
    console.log("5: ", id);
    let isChecked = event.target.checked;
    let storedID = 0;P
//fourStars {x,x,x,x} :  {3}  , {2}, {4}
    let amtOfStars = fourStars.map((c, i) => {
      if (i == id) {
        storedID = i;
        return c + 1;
      } else {
        return c;
      }
    });
    if (storedID == 1) {
      if (todos.value1 == false) {
        setTodos((prevState) => ({ ...prevState, value1: true }))
        //amtStars = amtStars + 1;
        setFourStars[0](fourStars + 1)
        //setStars(amtStars);
        alert("here1!!");
      }
      else {
        setTodos((prevState) => ({ ...prevState, value1: false }))
        //amtStars = amtStars - 1;
        //setStars(amtStars);
        setFourStars[0](fourStars - 1)
        alert("here2!!");
      }
    }
    if (id === '1') {
      if (todos.value2 == false) {
        setTodos((prevState) => ({ ...prevState, value2: true }))
        amtStars = amtStars + 1;
        setStars(amtStars);
      }
      else {
        setTodos((prevState) => ({ ...prevState, value2: false }))
        amtStars = amtStars - 1;
        setStars(amtStars);
      }
    }
    if (id === '2') {
      if (todos.value3 == false) {
        setTodos((prevState) => ({ ...prevState, value3: true }))
        amtStars = amtStars + 1;
        setStars(amtStars);
      }
      else {
        setTodos((prevState) => ({ ...prevState, value3: false }))
        amtStars = amtStars - 1;
        setStars(amtStars);
      }
    }
    if (id === '3') {
      if (todos.value4 == false) {
        setTodos((prevState) => ({ ...prevState, value4: true }))
        amtStars = amtStars + 1;
        setStars(amtStars);
      }
      else {
        setTodos((prevState) => ({ ...prevState, value4: false }))
        amtStars = amtStars - 1;
        setStars(amtStars);
      }
    }
    setValue(!value);
    setStars(amtStars);
  }
    useEffect(() => {
      setTodos((prevState) => ({ ...prevState, value1: false }))
    setTodos((prevState) => ({ ...prevState, value2: false }))
    setTodos((prevState) => ({ ...prevState, value3: false }))
  setTodos((prevState) => ({ ...prevState, value4: false }))
      }, []);
  return (
      <div>
        <input id="0" checked={todos.value1} type="checkbox" name="1" onClick={(event) => getStars(event)} />
    <input id="1" checked={todos.value2} type="checkbox" name="2" onClick={(event) => getStars(event)} />
    <input id="2" checked={todos.value3} type="checkbox" name="3" onClick={(event) => getStars(event)} />
      <input id="3" checked={todos.value4} type="checkbox" name="4" onClick={(event) => getStars(event)} />
        <p>testing-{amtStars}</p>
        </div>
    )
}
export default Stars
*/