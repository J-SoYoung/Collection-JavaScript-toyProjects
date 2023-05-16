import { useRef, useState } from "react";
import "./App.css";

function App() {
  const [showCalendar, setShowCalendar] = useState(false);
  const calendarDatesRef = useRef(null);
  // new Date()의 년,월,일을 curDate에 저장해서 사용할거다.
  const data = new Date();
  const [curDate, setCurDate] = useState({
    year: data.getFullYear(),
    month: data.getMonth(),
    date: data.getDate(),
  });

  const gridColumnStart = new Date(curDate.year, curDate.month, 1).getDay() + 1;
  const firstGridDateStyle = { gridColumnStart: gridColumnStart };
  // const saturdayStyle = () => {
  //   const calendarDatesEl = calendarDatesRef.current;
  //   console.log(calendarDatesEl);
  //   const saturdayEls = calendarDatesEl?.querySelectorAll(
  //     `.date:nth-child(7n+${7 - new Date().getDay()})`
  //   );

  //   for (let i = 0; i < saturdayEls?.length; i++) {
  //     saturdayEls[i].style.color = "blue";
  //   }
  // };

  // const sundayStyle = () => {};

  const numberDate = new Date(curDate.year, curDate.month + 1, 0).getDate();
  const dateTag = [];
  for (let i = 1; i <= numberDate; i++) {
    i === 1
      ? dateTag.push(
          <p key={1} className="date" style={firstGridDateStyle}>
            {1}
          </p>
        )
      : dateTag.push(
          <p key={i} className="date">
            {i}
          </p>
        );
  }

  return (
    <div className="App">
      <h1>Date-picker</h1>
      <div className="datePicker">
        <div
          className="dateBox"
          onClick={() => {
            setShowCalendar(!showCalendar);
            // saturdayStyle();
          }}
        >
          {`${curDate.year}년 ${curDate.month + 1}월 ${curDate.date}일`}
        </div>
        {showCalendar && (
          <div className="calendar">
            <div className="month">
              <button className="prev">&#60;</button>
              <div>2023 May</div>
              <button className="next">&#62;</button>
            </div>
            <div className="days">
              <p className="day">SUN</p>
              <p className="day">MON</p>
              <p className="day">TUE</p>
              <p className="day">WED</p>
              <p className="day">THU</p>
              <p className="day">FRI</p>
              <p className="day">SAT</p>
            </div>
            <div className="dates" ref={calendarDatesRef}>
              {dateTag}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
