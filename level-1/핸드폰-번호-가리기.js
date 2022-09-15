function solution(phone_number) {
  return phone_number.slice(-4).padStart(phone_number.length, "*");
}

console.log(solution("01033334444"));
