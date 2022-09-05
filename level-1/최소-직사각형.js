/**
 * 명함번호와 가로, 세로 길이 주어짐
 * 가장 긴 가로, 가장 긴 세로를 뽑아내서 해당 크기의 지갑을 만들면 모든 명함 수납가능
 * 하지만 명함의 가로, 세로를 뉘어서 배치할 수 도 있음
 * 이때 모든 명함의 기준을 충족시키는 명함 지갑을 만들어야 함
 *
 * size 길이 10000개 까지 들어올 수 있음 >> 시간 복잡도 생각하면서 풀기
 */

const sizes = [
  [60, 50],
  [30, 70],
  [60, 30],
  [80, 40],
];

// size 이차원 배열의 요소들을 정렬 한다음 2차원 배열의 첫번째 인덱스랑 두번째 인덱스중 가장 큰 놈 뽑아서 만들면 됨

function solution(sizes) {
  const [width, height] = sizes.reduce(
    (pre, cur) => {
      cur.sort((a, b) => a - b);
      if (cur[0] >= pre[0]) {
        pre[0] = cur[0];
      }
      if (cur[1] >= pre[1]) {
        pre[1] = cur[1];
      }
      return pre;
    },
    [0, 0]
  );
  return width * height;
}

console.log(solution(sizes));
