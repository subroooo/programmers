// n이 2~1000000개 까지 들어옴 중첩 반복문 사용자제하기

function solution(n) {
  let count = 0;

  for (i = 2; i <= n; i++) {
    if (checkIsPrime(i)) {
      count += 1;
    }
  }

  return count;
}

function checkIsPrime(num) {
  for (let i = 2; i * i <= num; i++) {
    if (num % i === 0) {
      return false;
    }
  }

  return true;
}

console.log(solution(10));
