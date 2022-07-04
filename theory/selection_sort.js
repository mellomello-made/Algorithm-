let swap = function (arr, idx_1, idx_2) {
  let tmp = arr[idx_1];
  arr[idx_1] = arr[idx_2];
  arr[idx_2] = tmp;
};

let ascending = function (x, y) {
  return x > y;
};

let descending = function (x, y) {
  return x < y;
};

let selectionSort = function (arr, compare) {
  for (let i = 0; i < arr.length; i++) {
    //최솟값 인덱스를 변수k로 지정
    let k = i;
    for (let j = i + 1; j < arr.length; j++) {
      //현재 설정되어있는 k값과 어레이의 j값을 비교해서 k값이 크면 k 자리에 j를 위치한다.
      if (compare(arr[k], arr[j])) k = j;
    }
    swap(arr, i, k);
  }
};
