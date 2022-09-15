function solution(num) {
  if (num === 1) return 0;

  let count = 0;

  return temp(num, count);
}

function temp(num, count) {
  num = num % 2 === 0 ? num / 2 : num * 3 + 1;
  count++;

  if (count >= 500) return -1;
  if (num === 1) return count;

  return temp(num, count);
}
