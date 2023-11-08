const workVariable = {
  first: "1",
  second:"2.5",
}

/**
 * @param {object} obj
 * @returns object
 * 
 * 객체를 조회하여 속성의 값이 정수로 변환될 수 있는지 확인하는 함수
*/

function convertToIntegers(obj){
  const result = {};

  for (const key in obj){ // key가 두개 뿐이지만 for in 문을 사용하여 객체의 모든 속성을 순회
    try{
      // parseInt 함수를 사용하여 문자열을 정수로 변환
      // 변환된 값이 원래 값과 다르면 (소수점 등으로 인해) 에러 발생 시킴
      const valueAsInteger = parseInt(obj[key], 10) // 두번째 매개변수 10은 10진수를 의미
      if(valueAsInteger.toString() !== obj[key]){
        throw new Error(`${obj[key]}은(는) 정수로 정확하게 변환될 수 없습니다.`);
        // 위 ERROR를 발생시키면, catch 구문으로 실행으로 넘어감
      }
      // if() 조건식은 falsy(실패스러운) 원하는 값이 아닌 경우에만 실행
      // 즉, valueAsInteger가 NaN이 아닌 경우에만 실행
      result[key] = valueAsInteger;
    } catch (error) {
      // 변환 중 에러가 발생하면 여기서 처리
      console.log(`"${key}" 속성 처리 중 오류 발생 : ${error.message}`);
      /**
       * 예외처리와 에러발생을 동의어로 혼동하는 경우가 매우 많기 때문에 구분함
       * 에러는 try부분에서 발생하고, catch부분에서 처리(후처리)
       * 에러는 발생시키는 것과 다르게, catch 부분은 콘솔에 '에러'임을 명시했을 뿐
       * 에러를 발생시키지는 않음
       * 원하는 값을 반환하거나 다른 처리할 수 있음
       */
    }
  }

  return result;
}
const convertedValues = convertToIntegers(workVariable);
console.log(convertedValues);