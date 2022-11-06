/* [프로그래머스] Lv.2 JadenCase 문자열 만들기

https://school.programmers.co.kr/learn/courses/30/lessons/12951


문제 설명
JadenCase란 모든 단어의 첫 문자가 대문자이고, 그 외의 알파벳은 소문자인 문자열입니다. 단, 첫 문자가 알파벳이 아닐 때에는 이어지는 알파벳은 소문자로 쓰면 됩니다. (첫 번째 입출력 예 참고)
문자열 s가 주어졌을 때, s를 JadenCase로 바꾼 문자열을 리턴하는 함수, solution을 완성해주세요.

제한 조건
s는 길이 1 이상 200 이하인 문자열입니다.
s는 알파벳과 숫자, 공백문자(" ")로 이루어져 있습니다.
숫자는 단어의 첫 문자로만 나옵니다.
숫자로만 이루어진 단어는 없습니다.
공백문자가 연속해서 나올 수 있습니다.

s : "3people unFollowed me" 
return : "3people Unfollowed Me"
*/

function solution(s) {
  let answer = "";

  answer = s
    .split(" ")
    .map(
      (word) => word.substr(0, 1).toUpperCase() + word.substr(1).toLowerCase()
    );

  return answer.join(" ");
}

// 1. 공백을 기준으로 나누어 배열로 변환. >>> "3people unFollowed me"	>>> ["3people", "unFollowed", "me"]
// 2. 공백을 기준으로 첫번째 알파벳을 대문자(Upper Case)로 변환하고 나머지는 소문자(Lower Case)로 변환한다 >>> substr 0번째에서 1개만 뽑는다
// 3. join(' ') 함수를 사용하여 공백을 포함시킨다.

// 실패한 코드(1)
//  let newStr = firstChar.toUpperCase() + others;

//  s = s.split(" ");

//   for(let i = 0; i < s.length ; i++){
//       result += s[i].charAt(0).toUpperCase()+ s[i].slice(1)+ " ";

//   }
//   answer.slice(0, result.length -1);

//   return result;

// 실패한 코드(2)
//  let newStr = s.replace(/\b[a-z]/g, char => char.toUpperCase());
//  let firstChar = string.charAt(0); //문자열의 첫번째 글자 가져오기
//  let others = s.slice(1); // slice(1)으로 첫번째 문자를 제외한 나머지 문자열을 잘라서 가져오기
