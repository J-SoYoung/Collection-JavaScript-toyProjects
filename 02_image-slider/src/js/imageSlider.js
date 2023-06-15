export default class ImageSlider {
  // 클래스 필드: 프로퍼티를 private으로 설정
  #currentPosition = 0;
  #slideNumber = 0;
  #slideWidth = 0;
  #intervalId;
  #autoPlay = true;

  // 클래스 필드: 프로퍼티를 public으로 설정
  sliderWrapEl;
  sliderListEl;
  nextBtnEl;
  previousBtnEl;
  controlWrapEl;

  constructor() {
    this.assignElement();
    this.initSliderNumber();
    this.initSliderWidth();
    this.initSliderListWidth();
    this.addEvent();
    this.createIndicator();
    this.setIndicator();
    this.initAutoPlay();
  }

  assignElement() {
    this.sliderWrapEl = document.getElementById('slider-wrap');
    this.sliderListEl = this.sliderWrapEl.querySelector('#slider');
    this.nextBtnEl = this.sliderWrapEl.querySelector('#next');
    this.previousBtnEl = this.sliderWrapEl.querySelector('#previous');
    this.indicatorWrapEl = this.sliderWrapEl.querySelector('#indicator-wrap');
    this.controlWrapEl = this.sliderWrapEl.querySelector('#control-wrap');
  }

  initSliderNumber() {
    this.#slideNumber = this.sliderListEl.querySelectorAll('li').length;
  }

  initSliderWidth() {
    // slider의 css width로 초기화함
    this.#slideWidth = this.sliderListEl.clientWidth;
  }

  initSliderListWidth() {
    this.sliderListEl.style.width = `${this.#slideNumber * this.#slideWidth}px`;
  }

  addEvent() {
    // 버튼 클릭시 이벤트
    this.nextBtnEl.addEventListener('click', this.moveToRight.bind(this));
    this.previousBtnEl.addEventListener('click', this.moveToLeft.bind(this));
    // 인디케이터 클릭시 이벤트
    this.indicatorWrapEl.addEventListener(
      'click',
      this.onClickIndicator.bind(this),
    );
    // auto control btn 클릭
    this.controlWrapEl.addEventListener('click', this.togglePlay.bind(this));
  }

  moveToRight() {
    this.#currentPosition += 1;
    if (this.#currentPosition === this.#slideNumber) {
      this.#currentPosition = 0;
    }
    this.sliderListEl.style.left = `-${
      this.#slideWidth * this.#currentPosition
    }px`;
    if (this.#autoPlay) {
      // intervalId가 새로 적용된다면 setTime을 끄고 다시시작함
      clearInterval(this.#intervalId);
      this.#intervalId = setInterval(this.moveToRight.bind(this), 3000);
    }
    this.setIndicator();
  }

  moveToLeft() {
    this.#currentPosition -= 1;
    if (this.#currentPosition === -1) {
      this.#currentPosition = this.#slideNumber - 1;
    }
    this.sliderListEl.style.left = `-${
      this.#slideWidth * this.#currentPosition
    }px`;
    if (this.#autoPlay) {
      // intervalId가 새로 적용된다면 setTime을 끄고 다시시작함
      clearInterval(this.#intervalId);
      this.#intervalId = setInterval(this.moveToRight.bind(this), 3000);
    }
    this.setIndicator();
  }

  onClickIndicator(event) {
    const indexPosition = parseInt(event.target.dataset.index);
    if (!isNaN(indexPosition)) {
      this.#currentPosition = indexPosition;
      this.sliderListEl.style.left = `-${
        this.#slideWidth * this.#currentPosition
      }px`;
      this.setIndicator();
    }
  }

  createIndicator() {
    const docFragment = document.createDocumentFragment();
    for (let i = 0; i < this.#slideNumber; i++) {
      const li = document.createElement('li');
      li.dataset.index = i;
      docFragment.appendChild(li);
    }
    this.indicatorWrapEl.querySelector('ul').appendChild(docFragment);
  }

  setIndicator() {
    // 설정 초기화 = li모두 비활성화
    this.indicatorWrapEl.querySelector('li.active')?.classList.remove('active');
    this.indicatorWrapEl
      .querySelector(`ul li:nth-child(${this.#currentPosition + 1})`)
      .classList.add('active');
  }

  initAutoPlay() {
    this.#intervalId = setInterval(this.moveToRight.bind(this), 2000);
  }
  togglePlay(event) {
    if (event.target.dataset.status === 'play') {
      this.#autoPlay = true;
      this.controlWrapEl.classList.add('play');
      this.controlWrapEl.classList.remove('pause');
      this.initAutoPlay();
    } else if (event.target.dataset.status === 'pause') {
      this.#autoPlay = false;
      this.controlWrapEl.classList.remove('play');
      this.controlWrapEl.classList.add('pause');
      clearInterval(this.#intervalId);
    }
  }
}
