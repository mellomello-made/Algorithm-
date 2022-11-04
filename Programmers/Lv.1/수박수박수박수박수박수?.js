/*[프로그래머스] Lv.1 수박수박수박수박수박수?

문제 설명
길이가 n이고, "수박수박수박수...."와 같은 패턴을 유지하는 문자열을 리턴하는 함수, solution을 완성하세요. 예를들어 n이 4이면 "수박수박"을 리턴하고 3이라면 "수박수"를 리턴하면 됩니다.

제한 조건
n은 길이 10,000이하인 자연수입니다.

*/

function solution(n) {

    let str = "수박";
    let temp = '';
    let str1 = '';
    
    temp = str.repeat(n);
    str1 = temp.substring(0,n);
    
    //return str.repeat(n).substring(0,n); 으로 한줄로 쓸 수 있다.
    
   return str1;
}
//'수', '박' 이 n개 출력되니까 n이랑 글자수가 매칭된다.
//temp 임시변수를 만들어 수박이 반복해서 나온 값을 할당하고 substring으로 맨 앞에서 n개 만큼 출력한다. 

