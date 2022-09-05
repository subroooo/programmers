/**
 * 주어진 숫자중 3개를 더했을 때 소수가 되는 경우의 개수 구하기
 * nums로 들어오는 녀석들 1000개까지 들어올 수 있음
 * nums에 중복된 숫자 없다.
 *
 * 소수의 정의 : 1과 자신 외에 어떤 수로도 나누어 지지 말아야 함
 */
const nums = [1, 2, 3, 4];

function solution(nums) {
  // nums에서 3개 뽑아서 나올 수 있는 배열 만들어야 함
  // 고딩때 배운 순열과 조합에서 조합으로 3개 뽑아서 나올 수 있는 배열 만들 수 있음

  const combinations = getCombinations(nums, 3);

  const combinationNumbers = combinations.map((item) =>
    item.reduce((pre, cur) => {
      return pre + cur;
    })
  );

  return combinationNumbers.filter((item) => checkIsPrime(item)).length;
}

function getCombinations(arr, selectNumber) {
  const results = [];
  if (selectNumber === 1) return arr.map((value) => [value]);

  arr.forEach((fixed, index, origin) => {
    const rest = origin.slice(index + 1);
    const combinations = getCombinations(rest, selectNumber - 1);
    const attached = combinations.map((combination) => [fixed, ...combination]);
    results.push(...attached);
  });

  return results;
}

function checkIsPrime(num) {
  for (let i = 2; i * i <= num; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}
