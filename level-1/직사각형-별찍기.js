process.stdin.setEncoding("utf8");
process.stdin.on("data", (data) => {
  const n = data.split(" ");
  const a = Number(n[0]),
    b = Number(n[1]);
  // 가로 a 세로 b
  const str = "*";
  for (let i = 0; i < b; i++) {
    console.log(str.padStart(a, "*"));
  }
});
