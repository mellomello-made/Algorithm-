//swap함수는 arr를 받고 매개변수 두개를 받아 각각의 인덱스를 받는다.
let swap = function (arr, idx_1, idx_2) {
  //원소의 값 교환
  let tmp = arr[idx_1];
  arr[idx_1] = arr[idx_2];
  arr[idx_2] = tmp;
};

let bubbleSort_1 = function (arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    // 총 수행 횟수
    for (let j = 0; j < arr.length - 1; j++) {
      //인접한 인덱스끼리 비교함
      if (arr[j] > arr[j + 1]) {
        swap(arr, j, j + 1);
      }
    }
  }
};

let bubbleSort_2 = function (arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      // -i 이미 정렬된 부분은 다시 정렬처리 되지 않도록 넘어간다.
      if (arr[j] > arr[j + 1]) {
        swap(arr, j, j + 1);
      }
    }
  }
};

let bubbleSort_3 = function (arr) {
  let swapped;
  for (let i = 0; i < arr.length - 1; i++) {
    swapped = false; //swapped가
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        swap(arr, j, j + 1);
        swapped = true; //한번이라도 swapped하면 정렬이 필요한 상태이다.
      }
    }
    if (!swapped) break; //swapped가 한번도 실행되지 않았다하면 이미 정렬되어 있다고 판단 할 수 있다.
    //swapped 여부를 통해 swapped를 끝낼지 말지 선택할 수 있다.
  }
};
