function challengeTwo(arr) {
  let n = arr.length;

  for (let i = 0; i < n-1; i++){
    for (let j = 0; j < n-1; j++){
      // 다음 원소와 비교
      if (arr[j] > arr [j + 1]){
        // 큰 원소를 temp에 보관
        let temp = arr[j];
        arr[j] = arr[j + 1]
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}

const unsortedArray = [64, 34, 25, 12, 22, 11, 90];
console.log(challengeTwo(unsortedArray));

// 원소의 값을 큰 순서부터 나열해주는 함수