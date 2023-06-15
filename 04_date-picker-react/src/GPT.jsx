import React, { useState } from "react";

const Calendar = () => {
  const [year, setYear] = useState(new Date().getFullYear());
  const [month, setMonth] = useState(new Date().getMonth());

  const getDaysInMonth = (year, month) => {
    return new Date(year, month + 1, 0).getDate();
  };

  const getFirstDayOfMonth = (year, month) => {
    return new Date(year, month, 1).getDay();
  };

  const isSunday = (year, month, day) => {
    return new Date(year, month, day).getDay() === 0;
  };

  const isSaturday = (year, month, day) => {
    return new Date(year, month, day).getDay() === 6;
  };

  const renderCalendar = () => {
    const totalDays = getDaysInMonth(year, month);
    const firstDay = getFirstDayOfMonth(year, month);

    const calendar = [];

    // Render blank cells for days before the first day of the month
    for (let i = 0; i < firstDay; i++) {
      calendar.push(<div key={`blank-${i}`} className="blank-cell"></div>);
    }

    // Render cells for each day of the month
    for (let day = 1; day <= totalDays; day++) {
      let cellStyle = {};

      if (isSunday(year, month, day)) {
        cellStyle.color = "red";
      }

      if (isSaturday(year, month, day)) {
        cellStyle.color = "blue";
      }

      calendar.push(
        <div key={`day-${day}`} className="calendar-cell" style={cellStyle}>
          {day}
        </div>
      );
    }

    return calendar;
  };

  return (
    <div className="calendar">
      <h2>{`${year}년 ${month + 1}월`}</h2>
      <div className="calendar-grid">
        <div className="weekday-header">일</div>
        <div className="weekday-header">월</div>
        <div className="weekday-header">화</div>
        <div className="weekday-header">수</div>
        <div className="weekday-header">목</div>
        <div className="weekday-header">금</div>
        <div className="weekday-header">토</div>
        {renderCalendar()}
      </div>
    </div>
  );
};

export default Calendar;
