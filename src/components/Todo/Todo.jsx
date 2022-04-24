import React, { useState } from "react";
import Addbutton from "../AddButon/AddButton";
import Header from "../Header/Header";
import Inputtext from "../InputText/InputText";
import List from "../List/List";
import "./Todo.css";

const Todo = () => {
  const [inputList, setInputList] = useState("");
  const [Items, setItems] = useState([]);
  const [checked, setChecked] = useState([]);

  const [selectedDate, setselectedDate] = useState();
  const onDateHandler = (event) => {
    let chosenDate = event.target.value;

    const date = new Date();
    var todayDateInmsc = Date.parse(date);
    console.log(todayDateInmsc);
    var chosenDatemsc = Date.parse(chosenDate);
    console.log(chosenDatemsc);
    if (todayDateInmsc < chosenDatemsc) {
      setselectedDate(chosenDate);
      console.log("imp");
    } else {
      alert("please select the upcoming date");
    }
  };

  const onchangeHandler = (event) => {
    setInputList(event.target.value);
  };
  const onButtonHandler = () => {
    if (inputList.trim()) {
      const item = [...Items];
      item.push(inputList);
      setItems(item);
    }
    setInputList("");
  };
  const handleCheck = (event) => {
    var updatedList = [...checked];
    if (event.target.checked) {
      updatedList = [...checked, event.target.value];
    } else {
      updatedList.splice(checked.indexOf(event.target.value), 1);
    }
    setChecked(updatedList);
  };
  const isChecked = (item) =>
    checked.includes(item) ? "checked-item" : "not-checked-item";

  const itemsHandler = Items.map((value) => {
    return (
      <>
        <div className="list">
          <li>
            <input value={value} type="checkbox" onChange={handleCheck} />
            <span className={isChecked(value)}>{value}</span>
            
            <span>{selectedDate}</span>
          </li>
        </div>
      </>
    );
  });

  return (
    <div>
      <Header />
      <Inputtext changeHandler={onchangeHandler} inputvalue={inputList} />
      <Addbutton buttonHandler={onButtonHandler} dateHandler={onDateHandler} />
      <List list={itemsHandler} />
    </div>
  );
};

export default Todo;
