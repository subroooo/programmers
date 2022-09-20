function solution(s, n) {
  const big = /^[A-Z]+$/;
  const small = /^[a-z]+$/;
  return [...s]
    .map((item) => {
      if (
        (item.match(small) &&
          String.fromCharCode(item.charCodeAt(0) + n).match(small)) ||
        (item.match(big) &&
          String.fromCharCode(item.charCodeAt(0) + n).match(big))
      ) {
        return String.fromCharCode(item.charCodeAt(0) + n);
      } else if (item.charCodeAt(0) === 32) {
        return " ";
      }
      return String.fromCharCode(item.charCodeAt(0) + n - 26);
    })
    .join("");
}
