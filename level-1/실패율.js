function solution(N, stages) {
  const initedClearStagesObj = initClearStagesObj(N);
  const initedClearStayStagesObj = initClearStagesObj(N);

  clearStagesUsers(stages, initedClearStagesObj, initedClearStayStagesObj);
  return failure(initedClearStagesObj, initedClearStayStagesObj);
}

function initClearStagesObj(N) {
  const arr = Array.from({ length: N }, (v, i) => i + 1);
  const clearStagesObj = {};

  arr.forEach((item) => {
    clearStagesObj[item] = 0;
  });

  return clearStagesObj;
}

function clearStagesUsers(
  stages,
  initedClearStagesObj,
  initedClearStayStagesObj
) {
  stages.reduce((pre, cur) => {
    for (let i = 1; i < cur; i++) {
      initedClearStagesObj[i] += 1;
    }

    return cur;
  }, initedClearStagesObj);

  stages.reduce((pre, cur) => {
    initedClearStayStagesObj[cur] += 1;

    return cur;
  }, initedClearStayStagesObj);

  return { initedClearStagesObj, initedClearStayStagesObj };
}

function failure(initedClearStagesObj, initedClearStayStagesObj) {
  const failureObj = {};

  for (let key in initedClearStagesObj) {
    failureObj[key] = initedClearStayStagesObj[key] / initedClearStagesObj[key];
  }
  const sortedFailureArr = Object.keys(failureObj).sort(function (a, b) {
    return failureObj[b] - failureObj[a];
  });

  return sortedFailureArr.map((item) => Number(item));
}
console.log(solution(5, [2, 1, 2, 6, 2, 4, 3, 3]));
