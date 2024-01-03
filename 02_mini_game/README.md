# Let's GetIt JavaScript programming

프로그래밍적 사고를 기르기 위한 연습,

## 끝말잇기 게임 만들기
```jsx
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
  <link rel="stylesheet" href="styles.css">

</head>
<body>
  <button id="start_button">게임시작</button>
  <div id="game_box" style="display: none;">
    <div><span id="order">1</span>번째 유저</div>
    <div>제시어 : <span id="word"> </span></div>
    <div><input type="text"/> <button id="word_enter_button">입력</button></div>
  </div>

  <script>
  const $start_button = document.querySelector('#start_button')
  const $game_box = document.querySelector('#game_box')
  const $order = document.querySelector('#order')
  const $word = document.querySelector('#word')
  const $input = document.querySelector('input')
  const $word_enter_button = document.querySelector('#word_enter_button')

  let number = 0
  let word = ''
  let newWord = ''
  let order = 1
  console.log(`order- ${order}, number-${number}` )
  
  const onClickGameStart = () =>{
    number = Number(prompt('게임 진행자는 몇 명인가요?'))
    console.log(`order- ${order}, number-${number}` )
    if ( number < 1){
      alert('최소 1명 이상은 있어야 게임이 시작됩니다.')
      return
    } 
    $game_box.style.display = 'block';
    $start_button.style.display= 'none';
    $input.focus();
  }
  
  const onInput = (e)=>{
    newWord = e.target.value;
  }
  
  const onClickButton = ()=>{
    if(!word){
      // 제시어가 없다. 첫번째 작성자다. 
      $word.textContent = newWord;
      $input.value = "";
      $input.focus();
      order += 1
      $order.textContent = order;
    } else {
      // 제시어가 있다. 
      console.log(`order-${order}/ ${typeof(order)}, number-${number}/${typeof(order)}` )
      // 마지막 작성자의 다음 순서는 맨 처음 작성자로 가야 한다. 
      if(order === number){
        // order = 1 
        // $order.textContent = order;
        $word.textContent = newWord;
        $input.value = "";
        $input.focus();
      } else {
        $word.textContent = newWord;
        $input.value = "";
        $input.focus();
        // $order.textContent = order + 1;
      }
    }

  }

  $start_button.addEventListener('click', onClickGameStart)
  $input.addEventListener('input',onInput)
  $word_enter_button.addEventListener('click', onClickButton)

  </script>

</body>
</html>
```
