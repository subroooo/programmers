/**
 * N 마리중 N/2마리 데려가도 됨
 * 같은 종류의 포켓몬이 존재할 수 있음
 * 최대한 다양한 종류의 포켓몬을 데려와야 함
 * N 마리의 포켓몬의 종류가 담긴 배열 nums
 * N/2 마리의 포켓몬을 선택하는 방법중
 * 가장 많은 종류의 포켓몬을 선택하는 방법 찾기
 * 그리고 포켓몬의 종류 번호의 개수를 return 하는 solution
 * nums의 길이 1~10000 항상 짝수
 * 포켓몬 종류 번호 1~200000 자연수 > 시간복잡도 고려해야 함
 *
 */

const nums = [3, 3, 3, 2, 2, 2];

function solution(nums) {
  const set = [...new Set(nums)];

  return nums.length / 2 > set.length ? set.length : nums.length / 2;
}

console.log(solution(nums));
