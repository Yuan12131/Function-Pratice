function sachick(first, second, callback){
  return callback (first, second)
}
const add = sachick(3, 4, function(first, second){
  return first + second
})
console.log(add)

const minus = sachick(3, 4, function(first, second){
  return first - second
})
console.log(minus)

const multiply = sachick(3, 4, function(first, second){
  return first * second
})
console.log(multiply)

const division = sachick (3, 4, function(first, second){
  return 3 / 4
})
console.log(division)