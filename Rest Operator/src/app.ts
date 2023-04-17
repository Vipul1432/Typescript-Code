const sumAll = (...nums: number[]): number => {
  return nums.reduce((prev, curr) => prev + curr);
};

const logMsg = (msg: any) => {
  console.log(msg);
};

logMsg(sumAll(1, 2, 3, 4, 5, 6, 7, 8, 9));
