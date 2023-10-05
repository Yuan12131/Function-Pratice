function exampleCallback(a,b){
  return a+b;
}

function one(a, b, callback){
  return callback(a, b)
}

// 기존에 있던 함수를 콜백함수로 활용
let testOne = one(1, 2, exampleCallback)
  console.log(testOne);

function two(a, b, callback){
  return callback(a, b)
}

// 호출할 때 함수를 작성해주는 일반적인 콜백함수 작성법
let testTwo = two(2, 3, function(a, b){
  return a-b;
})

console.log(testTwo)

// 전혀 다른 함수를 가져오는 방식으로 콜백함수가 아님
function three(a, b){
  return anotherFunc(a, b)
}

let testThree = three(3, 4);
console.log(testThree)