/*[프로그래머스] Lv.1 핸드폰 번호 가리기
프로그래머스 모바일은 개인정보 보호를 위해 고지서를 보낼 때 고객들의 전화번호의 일부를 가립니다.
전화번호가 문자열 phone_number로 주어졌을 때, 전화번호의 뒷 4자리를 제외한 나머지 숫자를 전부 *으로 가린 문자열을 리턴하는 함수, solution을 완성해주세요.

제한 조건
phone_number는 길이 4 이상, 20이하인 문자열입니다.

입출력          |    예
phone_numberv |  return
"01033334444" |	"*******4444"
"027778888"   | "*****8888"

*/

function solution(phone_number) {
  //substr() 함수는, 파라미터로 입력받은 start index부터 length 길이만큼 string을 잘라내어 반환하는 함수이다
  // 마지막 4글자를 가져오기 위해서 파라미터로 phone_number.length-4 세팅하여 substr() 함수를 호출.

  let str = "";
  let temp = "";

  str = phone_number.replace(/[0-9]/g, "*").slice(0, -4); //숫자 모두 *로 치환.인덱스 0부터 마지막 4자리 전까지 slice한다.
  temp = phone_number.substr(phone_number.length - 4); //마지막 4글자는 그대로 보존한다.

  return str + temp;
  //문자열 합쳐서 결과 출력한다.
}
