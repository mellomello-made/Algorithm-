/*[프로그래머스] Lv.2 최댓값과 최솟값

https://school.programmers.co.kr/learn/courses/30/lessons/12939

문제 설명
문자열 s에는 공백으로 구분된 숫자들이 저장되어 있습니다. str에 나타나는 숫자 중 최소값과 최대값을 찾아 이를 "(최소값) (최대값)"형태의 문자열을 반환하는 함수, solution을 완성하세요.
예를들어 s가 "1 2 3 4"라면 "1 4"를 리턴하고, "-1 -2 -3 -4"라면 "-4 -1"을 리턴하면 됩니다.

제한 조건
s에는 둘 이상의 정수가 공백으로 구분되어 있습니다.
*/

function solution(s) {
  let answer = "";

  s = s.split(" ");

  let min = Math.min(...s);
  let max = Math.max(...s);

  return min + " " + max;
}

// 1. s 문자열에서 공백을 기준으로 잘라서 배열로 만들어주기
// 문자열의 문자들을 분리하여 배열로 변환 : Spread Operator
// 2. 문자열에서 가장 큰 작은 찾기 math.min
// 3. 문자열에서 가장 큰 수 찾기 math.max
// 4. Min+공백+Max 로 리턴
