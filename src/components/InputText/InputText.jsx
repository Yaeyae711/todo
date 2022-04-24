import React from "react";
import IP from "./InputText.module.css";

const Inputtext = (props) => {
  return (
    <div>
      <input
        className={IP.input}
        type="text"
        value={props.inputvalue}
        onChange={props.changeHandler}
        placeholder="add the task"
      />
    </div>
  );
};

export default Inputtext;
