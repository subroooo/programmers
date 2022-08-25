function rejectSameNumber(arr) {
  return arr.filter((item, index) => {
    return item !== arr[index + 1];
  });
}
