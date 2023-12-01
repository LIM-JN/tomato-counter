import "./styles.css";
import { useState } from "react";
/*
  1. Select day, Turn it bold (default "M")
  2. Create a state for each day's tomatoes 🍅 
  3. Increment / decrement should work based
     which day is selected 
*/

const days = ["M", "T", "W", "Th", "F", "Sa", "Su"];

export default function App() {
  const [day1, setDay1] = useState("M");

  const [allTomatoes, setTomatoes] = useState({
    M: "",
    T: "",
    W: "",
    Th: "",
    F: "",
    Sa: "",
    Su: ""
  });

  return (
    <div className="App">
      <div className="window">
        <h2>Tomato Counter</h2>
        {days.map((day, i) => (
          <div key={day} className="tomato-box" onClick={() => setDay1(day)}>
            <h3 className={day1 === day ? "selected" : ""}>{day}</h3>
            <div className="tomato-day-box">{allTomatoes[day]}</div>
          </div>
        ))}
        <div className="buttons-container">
          <div
            className="button"
            onClick={() =>
              setTomatoes({
                ...allTomatoes,
                [day1]: allTomatoes[day1].slice(0, -2)
              })
            }
          >
            -
          </div>
          <div
            className="button"
            onClick={() =>
              setTomatoes({ ...allTomatoes, [day1]: `${allTomatoes[day1]}🍅` })
            }
          >
            +
          </div>
        </div>
      </div>
    </div>
  );
}
