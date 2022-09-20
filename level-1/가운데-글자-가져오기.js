function solution(s) {
  const halfLength = parseInt(s.length / 2);

  return s.length % 2 === 0 ? s[halfLength - 1] + s[halfLength] : s[halfLength];
}
