// 퀵 정렬
// 세가지 변수 사용
// start : 최초로 비교할 위치
// target: 비교대상
// pivot : 기준점

// 가장 오른쪽을 pivot으로 잡고 start랑 target은 같은 위치에서 시작.
// 피벗 기준으로 왼쪽은 작은 값 오른쪽은 큰 값을 만들어준다.

let quickSort = function (arr, compare, s = 0, e = arr.length - 1) {
  //start 는 index, pivot 은 값이다.
  let start = s;
  let pivot = arr[e];

  //i 루프로 타겟을 변경
  for (let i = s; i <= e; i++) {
    if (compare(pivot, arr[i])) {
      swap(arr, start, i);
      start++;
    }
  }

  swap(arr, start, e);

  //재귀 부분에 조건을 걸었음
  if (start - 1 > s) quickSort(arr, compare, s, start - 1);
  if (start + 1 < e) quickSort(arr, compare, start + 1, e);
};
