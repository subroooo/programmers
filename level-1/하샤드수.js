function solution(x) {
  return x % [...String(x)].reduce((pre, cur) => Number(pre) + Number(cur))
    ? false
    : true;
}

console.log(solution(11));
