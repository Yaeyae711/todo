import second from "./Button.module.css";

const Addbutton = (props) => {
  // const [selectedDate, setselectedDate] = useState(null);
  // const dateHandler = (event) => {
  //   let chosenDate = event.target.value;

  //   const currentDate = new Date();
  //   console.log(typeof currentDate);
  //   setselectedDate(chosenDate);
  // };
  return (
    <div>
      {/* <h4>Select the deadline : {props.value} </h4> */}
      <input type="date" onChange={props.dateHandler} /> <br />
      <button
        className={second.button}
        type="button"
        onClick={props.buttonHandler}
      >
        Add task and select date
      </button>
    </div>
  );
};

export default Addbutton;
