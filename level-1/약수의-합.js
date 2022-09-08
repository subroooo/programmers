function solution(n) {
  return divisor(n).reduce((pre, cur) => {
    return (pre += cur);
  }, 0);
}

function divisor(number) {
  const divisorsArr = [];

  for (let i = 1; i <= number; i++) {
    if (number % i === 0) divisorsArr.push(i);
  }

  return divisorsArr;
}
