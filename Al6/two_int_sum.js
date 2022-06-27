/*[프로그래머스] Lv.1 두 정수 사이의 합
https://programmers.co.kr/learn/courses/30/lessons/12912

문제 설명
두 정수 a, b가 주어졌을 때 a와 b 사이에 속한 모든 정수의 합을 리턴하는 함수, solution을 완성하세요.
예를 들어 a = 3, b = 5인 경우, 3 + 4 + 5 = 12이므로 12를 리턴합니다.

제한 조건
a와 b가 같은 경우는 둘 중 아무 수나 리턴하세요.
a와 b는 -10,000,000 이상 10,000,000 이하인 정수입니다.
a와 b의 대소관계는 정해져있지 않습니다.
입출력 예
a	b	return
3	5	12
3	3	3
5	3	12


*/

function solution(a, b) {
  let result = 0;

  if (a === b) {
    return a;
  }

  if (a < b) {
    for (let i = a; i <= b; i++) result += i;
    return result;
  }
  if (a > b) {
    for (let i = a; i >= b; i--) result += i;
    return result;
  }
}

// 1. a와 b 대소관계를 판단한다.
// 2. a = b 같은경우 return a
// 3. a < b 경우, 인자 a부터 +1해서 인자 b가 될 때까지 증가시킨다.
// 4. 초깃값은 a로 설정, i는 b보다 작거나 같을 때 까지 증가하여 합을 리턴한다.
// 5. 반대로 a > b 경우, 인자 a부터 -1해서 인자 b가 될 때까지 감소.
// 6. 초깃값은 a로 설정, i는 b보다 크거나 같을 때 까지 감소하여 합을 리턴한다.
