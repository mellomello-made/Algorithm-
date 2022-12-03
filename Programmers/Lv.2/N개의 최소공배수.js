/* [프로그래머스] Lv.2 N개의 최소공배수

https://school.programmers.co.kr/learn/courses/30/lessons/12953

문제 설명
두 수의 최소공배수(Least Common Multiple)란 입력된 두 수의 배수 중 공통이 되는 가장 작은 숫자를 의미합니다. 예를 들어 2와 7의 최소공배수는 14가 됩니다. 정의를 확장해서, n개의 수의 최소공배수는 n 개의 수들의 배수 중 공통이 되는 가장 작은 숫자가 됩니다. n개의 숫자를 담은 배열 arr이 입력되었을 때 이 수들의 최소공배수를 반환하는 함수, solution을 완성해 주세요.

제한 사항
arr은 길이 1이상, 15이하인 배열입니다.
arr의 원소는 100 이하인 자연수입니다.
*/
function solution(arr) {
  return arr.reduce((a, b) => (a * b) / gcd(a, b));
}

function gcd(a, b) {
  if (b === 0) return a;
  return gcd(b, a % b);
}

// 2*6 / gcd(2,6) -> return gcd(6, 2 % 6) -> gcd()

// 최소공배수 = x * y / 최대공약수
// 1, 2와 7의 최소 공배수는 14
// 2. n개의 수의 최소공배수는 n개의 수들의 배수 중 공통이 되는 가장 작은 숫자
// 3. arr 배열의 최소 공배수 반환
// 4. [2,6,8,14] => 168 (2*6*14)
// 5. [1,2,3] => 6 (1*2*3)
// 6. 최소공배수(LCM) 구하기 >>> 유클리드호제법
// lcm을 1부터 시작하여 점차 lcm++하면서 각각의 두 수를 lcm으로 나누었을 때 나머지 값이 0인지를 비교한다.
//  const lcm = (a, b) => a * b / gcd(a, b);
