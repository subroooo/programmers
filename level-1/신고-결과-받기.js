const id_list = ["muzi", "frodo", "apeach", "neo"];
const report = [
  "muzi frodo",
  "apeach frodo",
  "frodo neo",
  "muzi neo",
  "apeach muzi",
];
const k = 2;

function solution(idList, report, k) {
  const idObj = {};
  const sendMailId = {};
  idList.forEach((id) => {
    idObj[id] = 0;
    sendMailId[id] = 0;
  });

  const newReport = [...new Set(report)];

  countingReportedId(newReport, idObj);

  sendingMail(idObj, newReport, k, sendMailId);

  return Object.values(sendMailId);
}

function countingReportedId(newReport, idObj) {
  newReport.forEach((report) => {
    idObj[report.split(" ")[1]] = idObj[report.split(" ")[1]] + 1;
  });
}

function sendingMail(idObj, newReport, k, sendMailId) {
  for (let reportedId in idObj) {
    const sendingMailIdList = filterdSendMailId(newReport, reportedId);

    if (idObj[reportedId] >= k && sendingMailIdList.length) {
      sendingMailIdList.forEach((sendingMailId) => {
        sendMailId[sendingMailId] = sendMailId[sendingMailId] + 1;
      });
    }
  }
}

function filterdSendMailId(newReport, reportedId) {
  const filteredReport = newReport.filter(
    (report) => report.split(" ")[1] === reportedId
  );
  return filteredReport.map((report) => report.split(" ")[0]);
}

// function solution(id_list, report, k) {
//   const reportResult = report.reduce((a, c) => {
//     const [user, reported] = c.split(" ");
//     a[reported] = a[reported] ? a[reported].add(user) : new Set().add(user);
//     return a;
//   }, {});

//   const mailed = Object.values(reportResult)
//     .filter((set) => set.size >= k)
//     .flatMap((set) => [...set]);
//   console.log(mailed);
//   return id_list.map((id) => mailed.filter((user) => user === id).length);
// }

console.log(solution(id_list, report, k));
