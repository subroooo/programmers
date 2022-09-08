function solution(n) {
  const number = Math.sqrt(n);

  return Number.isInteger(number) ? Math.pow(number + 1, 2) : -1;
}

console.log(solution(3));
