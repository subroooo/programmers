function solution(n, arr1, arr2) {
  const binaryArr1 = arr1.map((item) => {
    return arrToBinary(item, n);
  });
  const binaryArr2 = arr2.map((item) => {
    return arrToBinary(item, n);
  });

  let result = [];

  for (let i = 0; i < n; i++) {
    const low = [];

    for (let j = 0; j < n; j++) {
      if (Number(binaryArr1[i][j]) + Number(binaryArr2[i][j]) === 0) {
        low.push(" ");
      } else {
        low.push("#");
      }
    }

    result.push(low.join(""));
  }

  return result;
}

function arrToBinary(item, n) {
  return item.toString(2).length < n
    ? Array.from({ length: n - item.toString(2).length }, (v) => 0).join("") +
        item.toString(2)
    : item.toString(2);
}

console.log(solution(5, [9, 20, 28, 18, 11], [30, 1, 21, 17, 28]));
