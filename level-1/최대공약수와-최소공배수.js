function solution(num1, num2) {
  return [getGCD(num1, num2), getLCM(num1, num2)];
}

/*
두 수를 소인수분해를 한 뒤, 
두 수의 공통된 소인수를 모두 곱하면 최대공약수, 
두 수의 모든 소인수를 곱하면 최소공배수
*/

// 최대 공약수 >> 두 수를 같은 수로 나누었을 때 두 수 모두 나머지가 0인 최초의 수 특정 변수가 분모로 들어감
let getGCD = (num1, num2) => {
  let gcd = 1;

  for (let i = 2; i <= Math.min(num1, num2); i++) {
    if (num1 % i === 0 && num2 % i === 0) {
      gcd = i;
    }
  }

  return gcd;
};

// 최소 공배수 >> 어떤 수를 두 수로 나누었는데 두 수의 나머지가 모두 0인 최초의 수 특정 변수가 분자로 들어감
let getLCM = (num1, num2) => {
  let lcm = 1;

  while (true) {
    if (lcm % num1 === 0 && lcm % num2 === 0) {
      break;
    }
    lcm++;
  }
  return lcm;
};
