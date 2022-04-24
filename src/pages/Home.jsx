import React from "react";
import Todo from "../components/Todo/Todo";
import styles from "./Home.module.css";

const Home = () => {
  return (
    <div className={styles.page}>
      <Todo />
    </div>
  );
};

export default Home;
