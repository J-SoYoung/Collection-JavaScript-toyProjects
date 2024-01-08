# Let's GetIt JavaScript programming

프로그래밍적 사고를 기르기 위한 연습,

## 끝말잇기 게임 만들기

```jsx
<!DOCTYPE html>
<head>
  <meta charset="utf-8">
  <title>계산기</title>
  <style>
    * { box-sizing: border-box }
    #result { width: 180px; height: 50px; margin: 5px; text-align: right }
    #operator { width: 50px; height: 50px; margin: 5px; text-align: center }
    button { width: 50px; height: 50px; margin: 5px }
  </style>
</head>

<!-- 계산기 버튼 구현 -->
<body>
  <input readonly id="operator">
  <input readonly type="number" id="result">
  <div class="row">
    <button id="num_7">7</button>
    <button id="num_8">8</button>
    <button id="num_9">9</button>
    <button id="plus">+</button>
  </div>
  <div class="row">
    <button id="num_4">4</button>
    <button id="num_5">5</button>
    <button id="num_6">6</button>
    <button id="minus">-</button>
  </div>
  <div class="row">
    <button id="num_1">1</button>
    <button id="num_2">2</button>
    <button id="num_3">3</button>
    <button id="divide">/</button>
  </div>
  <div class="row">
    <button id="clear">C</button>
    <button id="num_0">0</button>
    <button id="calculate">=</button>
    <button id="multiply">x</button>
  </div>
    <script>
      let numOne = ''
      let numTwo = ''
      let operator = ''
      const $operator = document.querySelector('#operator')
      const $result = document.querySelector('#result')

      const calculatorFunc =  (event) =>{
        if(!operator){ // 첫번째 자리가 비어있다면 
          numOne = event.target.textContent
          $result.value += event.target.textContent
          return;
        }
        if(!numTwo) { // 연산자가 있고, 두번째 자리가 비어있다면 
          $result.value=''
        }
        numTwo += event.target.textContent
        $result.value += event.target.textContent
        
      }

      const operatorFunc = (event)=> {
        if (numOne){
          $operator.value = event.target.textContent
          operator = event.target.textContent
        } else {
          alert('숫자를 먼저입력하세요')
        } 
      }

      const clearFunc = (event) =>{
        numOne = ''
        numTwo = ''
        operator = ''
        $result.value = ''
        $operator.value = ''
      }

      const calculateResultFunc = () =>{
        console.log(numOne, operator, numTwo)

        if(numTwo){
          switch(operator){
            case '+' :
            $result.value = parseInt(numOne) + parseInt(numTwo);
            break;
          case '-' :
            $result.value = parseInt(numOne) - parseInt(numTwo);
            break;
          case '/' :
            $result.value = parseInt(numOne) / parseInt(numTwo);
            break;
          case '*' :
            $result.value = parseInt(numOne) * parseInt(numTwo);
            break;
          default: break;
        }
      } else {
        alert('계산할 숫자를 입력해주세요')
      }

      }

      document.querySelector('#num_0').addEventListener('click',calculatorFunc)
      document.querySelector('#num_1').addEventListener('click',calculatorFunc)
      document.querySelector('#num_2').addEventListener('click',calculatorFunc)
      document.querySelector('#num_3').addEventListener('click',calculatorFunc)
      document.querySelector('#num_4').addEventListener('click',calculatorFunc)
      document.querySelector('#num_5').addEventListener('click',calculatorFunc)
      document.querySelector('#num_6').addEventListener('click',calculatorFunc)
      document.querySelector('#num_7').addEventListener('click',calculatorFunc)
      document.querySelector('#num_8').addEventListener('click',calculatorFunc)
      document.querySelector('#num_9').addEventListener('click',calculatorFunc)

      document.querySelector('#plus').addEventListener('click',operatorFunc)
      document.querySelector('#minus').addEventListener('click',operatorFunc)
      document.querySelector('#multiply').addEventListener('click',operatorFunc)
      document.querySelector('#divide').addEventListener('click',operatorFunc)
      
      document.querySelector('#calculate').addEventListener('click',calculateResultFunc)
      document.querySelector('#clear').addEventListener('click',clearFunc)
    </script>
</body>

</html>
```
