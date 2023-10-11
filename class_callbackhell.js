setTimeout(function(){
  console.log("첫번째 함수")

  setTimeout(function(){
    console.log("두번째 함수")

    setTimeout(function(){
      console.log("세번째 함수")

      setTimeout(function(){
        console.log("네번째 함수")
      }, 1000);

    }, 1000);

  }, 1000);

}, 1000);
// 순서를 어기는 함수(비동기)를 순서대로 처리(동기)