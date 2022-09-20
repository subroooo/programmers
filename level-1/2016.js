function solution(a, b) {
  let week = ["일", "월", "화", "수", "목", "금", "토"];

  return (
    week[new Date(Number(2016), Number(a) - 1, Number(b)).getDay()] + "요일"
  );
}

solution();
