export class Keyboard {
  #swichEl;
  #fontSelectEl;
  #containerEl;
  #keyboardEl;
  #inputGroupEl;
  #inputEl;

  constructor() {
    this.#assignElement();
    this.#addEvent();
  }
  #assignElement() {
    this.#containerEl = document.getElementById("container");
    this.#swichEl = this.#containerEl.querySelector("#switch");
    this.#fontSelectEl = this.#containerEl.querySelector("#font");
    this.#keyboardEl = this.#containerEl.querySelector("#keyboard");
    this.#inputGroupEl = this.#containerEl.querySelector("#input-group");
    this.#inputEl = this.#inputGroupEl.querySelector("#input");
  }
  #addEvent() {
    this.#swichEl.addEventListener("change", this.#onChangeTheme);
    this.#fontSelectEl.addEventListener("change", this.#onChangeFont);
    // event를 외부 함수로 작성하게 되면 이벤트 함수는 전역객체를 바라보게 된다.
    // 클래스로 만든 this를 바라보게 하려면 bind를 통해서 클래스this를 보게 해야햔다.
    document.addEventListener("keydown", this.#onKeydown.bind(this));
    document.addEventListener("keyup", this.#onKeyup.bind(this));
    // input에 이벤트가 발생할 때마다 콜백함수 실행
    this.#inputEl.addEventListener("input", this.#onInput);
  }

  #onChangeTheme(event) {
    document.documentElement.setAttribute(
      "theme",
      event.target.checked ? "dark-mode" : ""
    );
  }
  #onChangeFont(event) {
    document.body.style.fontFamily = event.target.value;
  }
  #onKeyup(event) {
    this.#keyboardEl
      .querySelector(`[data-code=${event.code}]`)
      ?.classList.remove("active");
  }
  #onKeydown(event) {
    this.#inputGroupEl.classList.toggle("error", event.key == "Process");
    this.#keyboardEl
      .querySelector(`[data-code=${event.code}]`)
      ?.classList.add("active");
  }
  #onInput(event) {
    event.target.value = event.target.value.replace(/[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/, "");
  }
}

// 자바스크립트에서 class에 대한 내용을 공부해야 겠네
// 저렇게 클래스를 생성하고 new Keyword()를 작성하니까 코드가 실행됨
