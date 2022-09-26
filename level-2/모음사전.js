// for 문에서 쌓아줄 요소 > ["A", "E", "I", "O", "U"];
// dfs에서 깊이를 결정지을 요소 > 쌓아올린 문자의 길이가 주어진 모든 모음의 합의 길이인 5일 때
// dfs를 실행하기 이전에 필요한 변수 > 몇 번째 순서지를 나타내는 count 답을 낼 result
// dfs에서 문제의 조건을 만족시키는 경우에 다가 왔을 때 break나 return때려도
// 재귀함수를 반복적으로 호출하기 때문에 해당 재귀함수에서만 빠져나오지 전체 재귀에서는 빠져나오지 못한다는 것을 알고 있어야 함

function solution(word) {
  const vowels = ["A", "E", "I", "O", "U"];
  let result;
  let count = 0;
  const dfs = (input) => {
    console.log("input:", input, "count:", count); // 헷갈릴 때 찍어볼 것
    if (input === word) {
      result = count;
    }

    if (input.length >= 5) {
      return;
    }

    for (let i = 0; i < vowels.length; i++) {
      count += 1;
      dfs(input + vowels[i]);
    }
  };

  dfs("");

  return result;
}

console.log(solution("AAAE"));
