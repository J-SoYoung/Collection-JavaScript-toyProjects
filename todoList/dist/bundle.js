
(function(l, r) { if (!l || l.getElementById('livereloadscript')) return; r = l.createElement('script'); r.async = 1; r.src = '//' + (self.location.host || 'localhost').split(':')[0] + ':35729/livereload.js?snipver=1'; r.id = 'livereloadscript'; l.getElementsByTagName('head')[0].appendChild(r) })(self.document);
'use strict';



function ___$insertStylesToHeader(css) {
  if (!css) {
    return
  }
  if (typeof window === 'undefined') {
    return
  }

  const style = document.createElement('style');

  style.setAttribute('type', 'text/css');
  style.innerHTML = css;
  document.head.appendChild(style);
  return css
}

___$insertStylesToHeader(".container {\n  background-color: teal;\n  color: white;\n  padding: 10px;\n  box-sizing: border-box;\n}");

// 컴파일 된 scss파일을 index.js에서 실행시킨다

console.log("todolist");
const a = 1000;
const b = 2000;
console.log(a + b);
//# sourceMappingURL=bundle.js.map
