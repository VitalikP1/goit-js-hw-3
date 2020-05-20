const findBestEmployee = function (employees) {
  let taskResult;

  const entries = Object.entries(employees);

  let person = entries[0];

  for (const entry of entries) {
    if (person[1] <= entry[1]) {
      taskResult = entry[0];
    }
  }
  return taskResult;
};

console.log(
  findBestEmployee({
    ann: 29,
    david: 35,
    helen: 1,
    lorence: 99,
  })
); // lorence
console.log(
  findBestEmployee({
    poly: 12,
    mango: 17,
    ajax: 4,
  })
); // mango
console.log(
  findBestEmployee({
    lux: 147,
    david: 21,
    kiwi: 19,
    chelsy: 38,
  })
); // lux
