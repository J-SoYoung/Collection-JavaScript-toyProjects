export class Keyboard {
  #swichEl;
  #fontSelectEl;

  constructor() {
    this.#assignElement();
    this.#addEvent();
  }
  #assignElement() {
    this.#swichEl = document.getElementById("switch");
    this.#fontSelectEl = document.getElementById("font");
  }
  #addEvent() {
    this.#swichEl.addEventListener("change", (event) => {
      document.documentElement.setAttribute(
        "theme",
        event.target.checked ? "dark-mode" : ""
      );
    });
    this.#fontSelectEl.addEventListener("change", (event) => {
      document.body.style.fontFamily = event.target.value;
    });
  }
}

// 자바스크립트에서 class에 대한 내용을 공부해야 겠네
// 저렇게 클래스를 생성하고 new Keyword()를 작성하니까 코드가 실행됨
