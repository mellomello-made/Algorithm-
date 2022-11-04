//병합 정렬 구현

let mergeSort = function (arr, compare) {
  //재귀 end 조건
  if (arr.length === 1) return arr;

  //중간에 자를 지점. 나누어 떨어지지 않으면 반올림함
  let m = (arr.length / 2).toFixed(0);
  let left = mergeSort(arr.slice(0, m), compare);
  let right = mergeSort(arr.slice(m), compare);

  let i = 0;
  j = 0;
  k = 0;

  //재귀를 반복하면서 비교함
  while (i < left.length && j < right.length) {
    //참으로 나오면 J값을 k 인덱스에 넣어줌, 아니면 i를 넣는다
    arr[k++] = compare(left[i], right[j]) ? right[j++] : left[i++];
  }
  while (i < left.length) arr[k++] = left[i++];
  while (j < right.length) arr[k++] = right[j++];

  return arr;
};
