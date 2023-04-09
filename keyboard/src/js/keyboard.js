export class Keyboard {
  #swichEl;
  constructor() {
    this.#assignElement();
    this.#addEvent();
  }
  #assignElement() {
    this.#swichEl = document.getElementById("switch");
  }
  #addEvent() {
    this.#swichEl.addEventListener("change", (event) => {
      document.documentElement.setAttribute(
        "theme",
        event.target.checked ? "dark-mode" : ""
      );
      console.log(event.target.checked);
    });
  }
}

// 자바스크립트에서 class에 대한 내용을 공부해야 겠네
// 저렇게 클래스를 생성하고 new Keyword()를 작성하니까 코드가 실행됨
