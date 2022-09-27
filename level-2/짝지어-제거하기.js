/**
 *  s > 알파벳 소문자 문자열 (길이 1,000,000, 모두 소문자)
 * 1. 문자열에서 같은 알파벳이 2개 붙어있는 짝을 찾기
 * 2. 둘 제거하기
 * 3. 앞뒤 이어 붙이기
 * 4. 반복
 * 5. 문자열을 모두 제거한다면 제거하기 종료
 * 6. 성공적으로 수행 ? 1 : 0 반환하면됨
 *
 * 1번 과정에서 2개 붙어있는 짝을 찾을 수 없으면 0 return 하면 됨
 *
 */

/**
이 문제는 stack 으로 풀어야 함 

1) 문장의 첫 문자(s[0]) push

2) 두번째 문자(s[1])부터 s.size만큼 반복하며 stack의 top과 비교

3) top과 비교문자가 같으면 pop

4) top과 비교문자가 다르면 push

5) 반복문 종료전 stack이 empty인 경우 비교하지 않고, push만 실행

6) 반복문 종료후 stack이 empty인지 확인
 */
function solution(s) {
  const stack = [];

  stack.push(s[0]);

  for (let i = 0; i < s.length; i++) {
    if (stack[stack.length - 1] === s[i + 1]) {
      stack.pop();
    } else {
      stack.push(s[i + 1]);
    }
  }

  return stack.length ? 0 : 1;
}

console.log(solution("accad"));

// 맨 처음에 재귀함수로 풀어야겠다는 생각으로 재귀함수를 사용해서 풀어낸 풀이 (시간 + 공간 복잡도 측면에서 매우 비효율 적)
function solution2(s) {
  let result = 0;
  const remove = (input) => {
    if (input.length === 0) {
      return (result = 1);
    }
    for (let i in input) {
      if (input[i] === input[Number(i) + 1]) {
        remove(input.replace(input[i] + input[Number(i) + 1], ""));
      }
    }
    return result;
  };

  remove(s);
  return result;
}
