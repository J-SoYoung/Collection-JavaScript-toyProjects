import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>Date-picker</h1>
      <div className="date-picker">
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
          <div className="dates">
            <p className="date">1</p>
            <p className="date">2</p>
            <p className="date">3</p>
            <p className="date">4</p>
            <p className="date">5</p>
            <p className="date">6</p>
            <p className="date">7</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
