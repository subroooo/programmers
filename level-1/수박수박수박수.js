// n의 길이가 10,000 이 될 수 있으므로 array보다는 string으로 푸는 것이 효율적
// 짝수면 박으로 끝나고 홀수면 수로 끝남

function solution(n) {
  return n % 2 ? "수박".repeat(n / 2) + "수" : "수박".repeat(n / 2);
}

console.log(solution(5));
