function typeCheck(parameter){
  let tagnames = ["li", "p", "h1"]
  for (i = 0; i < tagnames.length; i++){
    if(parameter === tagnames[i]){
      console.log("<" + tagnames[i] + ">")
      break
    } else {
      console.error("잘못 적은 태그입니다.")
      break
    }
  }
}
typeCheck("li")