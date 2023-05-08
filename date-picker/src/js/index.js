class DatePicker {
  monthDate = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];

  #calendarDate = {
    data: '',
    date: 0,
    month: 0,
    year: 0,
  };
  selecedDate = {
    data: '',
    date: 0,
    month: 0,
    year: 0,
  };

  datePickerEl;
  dateInputEl;
  calendarMonthEl;
  monthContentEl;
  nextBtnEl;
  prevBtnEl;
  calendarDatesEl;

  constructor() {
    this.initCalendarDate();
    this.assignElement();
    this.addEvent();
  }

  // 달력날짜 초기화
  initCalendarDate() {
    const data = new Date();
    const date = data.getDate();
    const month = data.getMonth();
    const year = data.getFullYear();
    this.#calendarDate = {
      data,
      date,
      month,
      year,
    };
  }

  // element 초기화
  assignElement() {
    this.datePickerEl = document.getElementById('date-picker');
    this.dateInputEl = this.datePickerEl.querySelector('#date-input');
    this.calendarEl = this.datePickerEl.querySelector('#calendar');

    this.calendarMonthEl = this.calendarEl.querySelector('#month');
    this.monthContentEl = this.calendarMonthEl.querySelector('#content');
    this.nextBtnEl = this.calendarMonthEl.querySelector('#next');
    this.prevBtnEl = this.calendarMonthEl.querySelector('#prev');

    this.calendarDatesEl = this.calendarEl.querySelector('#dates');
  }

  // event 설정
  addEvent() {
    // 기본 날짜 클릭 -> 캘린더 보여지는 이벤트
    this.dateInputEl.addEventListener('click', this.toggleCalendar.bind(this));
  }
  // 캘린더 생성, 월/일 생성하는 함수포함
  toggleCalendar() {
    this.calendarEl.classList.toggle('active');
    this.updateMonth();
    this.updateDates();
  }
  updateMonth() {
    console.log(this.#calendarDate.year, this.#calendarDate.month);
    this.monthContentEl.textContent = `${this.#calendarDate.year} ${
      this.monthDate[this.#calendarDate.month]
    }`;
  }
  updateDates() {
    this.calendarDatesEl.innerHTML = '';
    const numberOfDates = new Date(
      this.#calendarDate.year,
      this.#calendarDate.month + 1,
      0,
    ).getDate();
    const fragment = new DocumentFragment();
    for (let i = 0; i < numberOfDates; i++) {
      const dateEl = document.createElement('div');
      dateEl.classList.add('date');
      dateEl.textContent = i + 1;
      dateEl.dataset.date = i + 1;
      fragment.appendChild(dateEl);
    }
    this.calendarDatesEl.appendChild(fragment);
  }
}

new DatePicker();
