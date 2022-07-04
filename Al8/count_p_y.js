/*[프로그래머스] Lv.1 문자열 내 p와 y의 개수
https://programmers.co.kr/learn/courses/30/lessons/12916

문제 설명
대문자와 소문자가 섞여있는 문자열 s가 주어집니다. s에 'p'의 개수와 'y'의 개수를 비교해 같으면 True, 다르면 False를 return 하는 solution를 완성하세요. 'p', 'y' 모두 하나도 없는 경우는 항상 True를 리턴합니다. 단, 개수를 비교할 때 대문자와 소문자는 구별하지 않습니다.

예를 들어 s가 "pPoooyY"면 true를 return하고 "Pyy"라면 false를 return합니다.

제한사항
문자열 s의 길이 : 50 이하의 자연수
문자열 s는 알파벳으로만 이루어져 있습니다.

입출력 예
s	answer
"pPoooyY"	true
"Pyy"	false


입출력 예 설명
입출력 예 #1
'p'의 개수 2개, 'y'의 개수 2개로 같으므로 true를 return 합니다.

입출력 예 #2
'p'의 개수 1개, 'y'의 개수 2개로 다르므로 false를 return 합니다.


*/

function solution(s) {
  let str = s.toLowerCase(); // 소문자로 치환
  let count = 0;
  let p_count = 0;
  let y_count = 0;

  for (let i = 0; i < s.length; i++) {
    if (str[i] === "p") {
      p_count++;
    }
    if (str[i] === "y") {
      y_count++;
    }
  }
  if (p_count === y_count) {
    return true;
  }
  return false;
}

// 1. 'p', 'y' 개수가 같으면 true / 다르면 false
// 2. 'p', 'y' 개수가 없으면 true 리턴
// 3. 대소문자 섞인 문자열을 소문자로 치환한다.
// 4. 문자열 길이만큼 반복하여 p 찾고
// 5. 찾으면 p_count에 + 1 한다.
// 6. 반복문으로 y 찾고 y_count + 1 한다.
// 7. count 가 같으면 true , 아니면 false

//[다른 풀이]
// function numPY(s){
//     //함수를 완성하세요
//       return s.toUpperCase().split("P").length === s.toUpperCase().split("Y").length;
// //   }

// function numPY(s) {
//     return s.match(/p/ig).length == s.match(/y/ig).length;
//   }
//i는 대소문자 상관없이 g는 전부 찾으라는 플래그


match()와 함께 글로벌(g) 및 대/소문자 무시(i) 플래그 사용하기
다음 예제는 글로벌(g) 및 대/소문자 무시(i) 플래그를 사용하여  match()를 사용하는 방법을 보여준다. 
A부터 E 까지의 모든 문자와 a부터 e 까지의 모든 문자가 배열의 각 원소를 구성하는 형태로 반환된다.

var str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
var regexp = /[A-E]/gi;
var matches_array = str.match(regexp);

console.log(matches_array);
// ['A', 'B', 'C', 'D', 'E', 'a', 'b', 'c', 'd', 'e']