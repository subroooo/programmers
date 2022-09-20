function solution(arr, divisor) {
  const filteredArr = arr.filter((item) => item % divisor === 0);
  return filteredArr.length ? filteredArr.sort((a, b) => a - b) : -1;
}

console.log(solution([2, 36, 1, 3], 1));
