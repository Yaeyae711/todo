import React from "react";
import css from "./List.module.css";

const List = (props) => {
  return (
    <>
      <ol className={css.deco}>{props.list}</ol>
    </>
  );
};

export default List;
