import { useEffect, useRef, useState } from "react";
import "./App.css";

function App() {
  const [showCalendar, setShowCalendar] = useState(false);
  const curCalendarRef = useRef();

  // new Date()의 년,월,일을 curDate에 저장해서 사용할거다.
  const data = new Date();
  const [curDate, setCurDate] = useState({
    year: data.getFullYear(),
    month: data.getMonth(),
    date: data.getDate(),
  });
  const [selectDate, setSelectDate] = useState();
  // 콘솔 출력이 2번되는 이유눈 렌더링 (1), curDate-update되서 렌더링(2)
  // 이부분.음 뭔가 처리해줘야할듯
  // 렌더링이 2번되니까, 1번은 color안된거 2번재는 color바뀐거 . 첫번재꺼 안보여줄 순 없?
  useEffect(() => {
    updateCalendar();
  }, [curDate]);

  const isSunday = (year, month, day) => {
    return new Date(year, month, day).getDay() === 0;
  };

  const isSaturday = (year, month, day) => {
    return new Date(year, month, day).getDay() === 6;
  };

  const handleSelectDate = (date) => {
    setSelectDate({ ...curDate, date });
  };

  // 달력 생성
  const updateCalendar = () => {
    const calendarList = [];
    const numberDate = new Date(curDate.year, curDate.month + 1, 0).getDate();

    // month 1일의 시작 grid-style
    const gridColumnStart =
      new Date(curDate.year, curDate.month, 1).getDay() + 1;
    const firstGridDateStyle = { gridColumnStart: gridColumnStart };

    for (let i = 1; i <= numberDate; i++) {
      // 토, 일요일 color
      let cellStyle = {};
      if (isSunday(curDate.year, curDate.month, i)) {
        cellStyle.color = "red";
      }

      if (isSaturday(curDate.year, curDate.month, i)) {
        cellStyle.color = "blue";
      }

      // 오늘 날짜에 배경색 ++
      if (
        i === curDate.date &&
        curDate.month === data.getMonth() &&
        curDate.year === data.getFullYear()
      ) {
        cellStyle.background = "#eee";
        cellStyle.borderRadius = "8px";
      }

      // 클릭한 날짜에 배경색 ++
      if (i === selectDate?.date) {
        console.log(i);
        cellStyle.background = "#eee";
      }

      i === 1
        ? calendarList.push(
            <p
              key={1}
              className="date"
              style={{ ...firstGridDateStyle, ...cellStyle }}
              onClick={() => handleSelectDate(1)}
            >
              {1}
            </p>
          )
        : calendarList.push(
            <p
              key={i}
              className="date"
              style={cellStyle}
              onClick={() => handleSelectDate(i)}
            >
              {i}
            </p>
          );
    }
    return calendarList;
  };

  const movePrevMonth = () => {
    setCurDate((state) => {
      const prevMonth = state.month - 1;
      const prevYear = state.year;
      if (state.month < 1) {
        return { ...state, month: 11, year: prevYear - 1 };
      }
      return { ...state, month: prevMonth };
    });
  };

  const moveNextMonth = () => {
    setCurDate((state) => {
      const nextMonth = state.month + 1;
      const nextYear = state.year;
      if (state.month > 10) {
        return { ...state, month: 0, year: nextYear + 1 };
      }
      return { ...state, month: nextMonth };
    });
  };

  return (
    <div className="App">
      <h1>Date-picker</h1>
      <div className="datePicker">
        <div
          className="dateBox"
          onClick={() => {
            setShowCalendar(!showCalendar);
          }}
        >
          {selectDate
            ? `${selectDate.year}년 ${selectDate.month + 1}월 ${
                selectDate.date
              }일`
            : `${curDate.year}년 ${curDate.month + 1}월 ${curDate.date}일`}
        </div>
        {showCalendar && (
          <div className="calendar">
            <div className="month">
              <button className="prev" onClick={movePrevMonth}>
                &#60;
              </button>
              <div>{`${curDate.year}년 ${curDate.month + 1}월`}</div>
              <button className="next" onClick={moveNextMonth}>
                &#62;
              </button>
            </div>
            <div className="days">
              <p className="day sun">SUN</p>
              <p className="day">MON</p>
              <p className="day">TUE</p>
              <p className="day">WED</p>
              <p className="day">THU</p>
              <p className="day">FRI</p>
              <p className="day sat">SAT</p>
            </div>
            <div className="dates">{updateCalendar()}</div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
