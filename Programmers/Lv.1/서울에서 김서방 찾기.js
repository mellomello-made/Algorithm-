/*[프로그래머스] Lv.1 서울에서 김서방 찾기

문제 설명
String형 배열 seoul의 element중 "Kim"의 위치 x를 찾아, "김서방은 x에 있다"는 String을 반환하는 함수, solution을 완성하세요. seoul에 "Kim"은 오직 한 번만 나타나며 잘못된 값이 입력되는 경우는 없습니다.

제한 사항
seoul은 길이 1 이상, 1000 이하인 배열입니다.
seoul의 원소는 길이 1 이상, 20 이하인 문자열입니다.
"Kim"은 반드시 seoul 안에 포함되어 있습니다.

*/

//첫번째 방법

function solution(seoul) {
  //선형검색으로 배열의 모든 요소를 처음부터 특정 요소 'kim'을 발견할 때 까지 차례대로 검색한다.
  //return문 주의점 : 대문자 'K', ~있다. 온점 금지
  //템플릿 리터럴 문자열 표기법: 표현식 삽입하면 문자열이 강제로 변환되어 삽입된다.

  for (let i = 0; i < seoul.length; i++) {
    if (seoul[i] === "Kim") return `김서방은 ${i}에 있다`;
  }
}

//두번째 방법

function solution(seoul) {
  //indexOf 메서드로 seoul 배열에 'Kim' 요소가  존재하는지 확인한다.
  //요소가 존재하는 인덱스를 result 변수에 할당하여 출력한다.
  let result = seoul.indexOf("Kim");
  return `김서방은 ${result}에 있다`;
}
