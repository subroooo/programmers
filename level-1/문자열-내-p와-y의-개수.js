function solution(s) {
  const pyObj = [...s].reduce(
    (pre, cur) => {
      if (cur === "P" || cur === "p") pre.p += 1;
      if (cur === "Y" || cur === "y") pre.y += 1;

      return pre;
    },
    { p: 0, y: 0 }
  );

  return pyObj.p === pyObj.y ? true : false;
}

console.log(solution("Pyy"));
