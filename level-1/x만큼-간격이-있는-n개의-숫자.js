/**
 * x 부터 시작해 x 씩 증가하는 숫자 n개를 지니는 배열 return
 */
function solution(x, n) {
  return Array.from({ length: n }, (v, i) => (i + 1) * x);
}
console.log(solution(2, 5));
