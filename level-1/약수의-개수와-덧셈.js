function solution(left, right) {
  const rangeArr = initRangeArr(left, right);
  const divisorArr = rangeArrToDivisorArr(rangeArr);

  return calculateResult(divisorArr);
}

function divisor(number) {
  const divisorArr = [];

  for (let i = 1; i <= number; i++) {
    if (number % i === 0) divisorArr.push(i);
  }

  return divisorArr;
}

function rangeArrToDivisorArr(arr) {
  return arr.reduce((pre, cur) => {
    pre.push(divisor(cur));
    return pre;
  }, []);
}

function initRangeArr(left, right) {
  return Array.from({ length: right - left + 1 }, (v, i) => i + left);
}

function calculateResult(arr) {
  return arr.reduce((pre, cur) => {
    if (cur.length % 2 === 0) {
      pre += cur[cur.length - 1];
    } else {
      pre -= cur[cur.length - 1];
    }

    return pre;
  }, 0);
}

console.log(solution(13, 17));
