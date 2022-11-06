/*[프로그래머스] Lv.1 2016년 
https://school.programmers.co.kr/learn/courses/30/lessons/12901

2016년 1월 1일은 금요일입니다. 2016년 a월 b일은 무슨 요일일까요? 두 수 a ,b를 입력받아 2016년 a월 b일이 무슨 요일인지 리턴하는 함수, solution을 완성하세요. 요일의 이름은 일요일부터 토요일까지 각각 SUN,MON,TUE,WED,THU,FRI,SAT

입니다. 예를 들어 a=5, b=24라면 5월 24일은 화요일이므로 문자열 "TUE"를 반환하세요.

제한 조건
2016년은 윤년입니다.
2016년 a월 b일은 실제로 있는 날입니다. (13월 26일이나 2월 45일같은 날짜는 주어지지 않습니다)
입출력 예

| a | b | result |
|---|---|--------|
| 5 |24 | "TUE"  |

*/

function solution(a, b) {
  return new Date(2016, a - 1, b).toString().slice(0, 3).toUpperCase();
}

solution(5, 24);

//    new Date 데이트 생성자 함수에 연,월,일,시 분, 초, 밀리초를 의미하는 숫자를 인수로 전달하면
//    지정된 날짜와 시간을 나타내는 Date 객체를 반환한다.
//    이때 연,월은 반드시 지정해야 한다.
//    지정하지 않은 옵션 정보는 0또는 1로 초기화된다.
//    month 는 0~11

//    new Date(2016, 0 , 1)
