const lee = {
name : "이유안",
age : 28,
address : "대전시 유성구"
}

function a(obj){
  if(typeof(obj) === "object"){
    let keyList = Object.keys(obj)
    console.log(keyList)
  } else {
    console.error("객체 타입이 아닙니다.")
  }
}
a(lee)