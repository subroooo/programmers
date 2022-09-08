function solution(n) {
  return Number([...String(n)].sort().reverse().join(""));
}
console.log(solution(118372));
