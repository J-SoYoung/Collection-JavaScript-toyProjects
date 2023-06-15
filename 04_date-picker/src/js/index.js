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
    this.initSelectedDate();
    this.assignElement();
    this.setDateInput();
    this.addEvent();
  }

  // 달력 메인날짜 초기화( 오늘 날짜로 default )
  initSelectedDate() {
    this.selecedDate = { ...this.#calendarDate };
  }
  setDateInput() {
    this.dateInputEl.textContent = this.formatDate(this.selecedDate.data);
    this.dateInputEl.dataset.value = this.selecedDate.data;
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
    // prev, next버튼
    this.nextBtnEl.addEventListener('click', this.moveToNextMonth.bind(this));
    this.prevBtnEl.addEventListener('click', this.moveToPrevMonth.bind(this));
    // calendar클릭 -> mainbox에 date출력하기
    this.calendarDatesEl.addEventListener(
      'click',
      this.onClickSelctDate.bind(this),
    );
  }

  onClickSelctDate(event) {
    const eventTarget = event.target;
    if (eventTarget.dataset.date) {
      this.calendarDatesEl
        .querySelector('.selected')
        ?.classList.remove('selected');
      eventTarget.classList.add('selected');
      this.selecedDate = {
        data: new Date(
          this.#calendarDate.year,
          this.#calendarDate.month,
          eventTarget.dataset.date,
        ),
        year: this.#calendarDate.year,
        month: this.#calendarDate.month,
        date: eventTarget.dataset.date,
      };
      this.setDateInput();
    }
  }

  formatDate(dateData) {
    let date = dateData.getDate();
    if (date < 10) {
      date = `0${date}`;
    }

    let month = dateData.getMonth() + 1;
    if (month < 10) {
      month = `0${month}`;
    }

    let year = dateData.getFullYear();
    return `${year}/${month}/${date}`;
  }

  // 버튼 이벤트 함수
  moveToNextMonth() {
    this.#calendarDate.month++;
    if (this.#calendarDate.month > 11) {
      this.#calendarDate.month = 0;
      this.#calendarDate.year++;
    }
    this.updateMonth();
    this.updateDates();
  }

  moveToPrevMonth() {
    this.#calendarDate.month--;
    if (this.#calendarDate.month < 1) {
      this.#calendarDate.month = 11;
      this.#calendarDate.year--;
    }
    this.updateMonth();
    this.updateDates();
  }

  // 캘린더 생성, 월/일 생성하는 함수포함
  toggleCalendar() {
    if (this.calendarEl.classList.contains('active')) {
      this.#calendarDate = { ...this.selecedDate };
    }
    this.calendarEl.classList.toggle('active');
    this.updateMonth();
    this.updateDates();
  }

  updateMonth() {
    // console.log(this.#calendarDate.year, this.#calendarDate.month);
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
    // new Date (2023,0,1).getDay() +1
    // => grid스타일이 어느 컬럼부터 시작해야 하는지 알려준다.
    // getDay는 0-6가지의 index를 가지고 요일을 나타낸다.
    // 1일이 어떤 요일인지 getDay()로 확인한 뒤, +1 을 하여 해당grid를 찾는다
    fragment.firstChild.style.gridColumnStart =
      new Date(this.#calendarDate.year, this.#calendarDate.month, 1).getDay() +
      1;
    this.calendarDatesEl.appendChild(fragment);
    this.colorSaturday();
    this.colorSunday();
    this.markToday();
    this.markSelectedDate();
  }

  colorSaturday() {
    // n은 0부터 시작해서 date의 child개수가 끝나기 전까지 1씩 늘어남
    // 매월 1일이 시작된 요일을 구해서 7- 요일idx 를 nth-child(7n + a) a에 넣으면
    // 토요일이 시작되는 date ele를 구할 수 있다.
    const saturdayEls = this.calendarDatesEl.querySelectorAll(
      `.date:nth-child(7n+${
        7 -
        new Date(this.#calendarDate.year, this.#calendarDate.month, 1).getDay()
      })`,
    );
    for (let i = 0; i < saturdayEls.length; i++) {
      saturdayEls[i].style.color = 'blue';
    }
  }

  colorSunday() {
    // 일요일 구하기 : 해당 월의 첫번째 요일을 구한 뒤, 그 요일로부터 일요일을 구하는 함수를 작성
    // console.log(new Date(this.#calendarDate.year, this.#calendarDate.month, 1).getDay());
    // 8 -(1) = (7) % 7 = 0 // 7*n + 0 = 0, 7, 14 ... => 일요일이됨
    const sundayEls = this.calendarDatesEl.querySelectorAll(
      `.date:nth-child(7n+${
        (8 -
          new Date(
            this.#calendarDate.year,
            this.#calendarDate.month,
            1,
          ).getDay()) %
        7
      })`,
    );
    for (let i = 0; i < sundayEls.length; i++) {
      sundayEls[i].style.color = 'red';
    }
  }

  markToday() {
    const currentDate = new Date();
    const currentMonth = currentDate.getMonth();
    const currentYear = currentDate.getFullYear();
    const today = currentDate.getDate();
    if (
      currentYear === this.#calendarDate.year &&
      currentMonth === this.#calendarDate.month
    ) {
      this.calendarDatesEl
        .querySelector(`[data-date ='${today}']`)
        .classList.add('today');
    }
  }

  markSelectedDate() {
    if (
      this.selecedDate.year === this.#calendarDate.year &&
      this.selecedDate.month === this.#calendarDate.month
    ) {
      this.calendarDatesEl
        .querySelector(`[data-date='${this.selecedDate.date}']`)
        .classList.add('selected');
    }
  }
}

new DatePicker();
