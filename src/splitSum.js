/*
 function splitSum1
    accepts tours - an array of group sizes

  calculate the sum of all numbers in the tours array and assign it to a variable named total
  initialize a variable named preSum to the value 0
  initialize a variable named postSum to the value of total
  initialize a variable named smallest to the largest possible number

  for i = 0 to the length of tours - 1 do:
    set preSum to the sum of preSum and tours[i]
    set postSum to postSum - tours[i]
    find the absolute difference between preSum and postSum

    if the difference is less than smallest then
      set smallest to the difference

  return smallest
 */
function splitSum1(tours) {
  const total = tours.reduce((x, y) => x + y);
  let preSum = 0;
  let postSum = total;
  let smallest = Number.POSITIVE_INFINITY;

  for (let i = 0; i <= tours.length - 1; i++) {
    preSum = preSum + tours[i];
    postSum = postSum - tours[i];
    const absDiff = Math.abs(preSum - postSum);
    if (absDiff < smallest) {
      smallest = absDiff;
    }
  }
  return smallest;
}
/*
function splitSum2
  accepts tours - an array of group sizes

  initialize a variable named smallest to the largest possible number
  for k = 0 to the length of the tours array - 1 do:
    calculate the sum of numbers from index 0 to index i of tours and assign to a variable named preSum
    calculate the sum of the numbers from index i + 1 to the end of tours and assign to a variable named postSum
    find the absolute difference between preSum and postSum

    if the difference is less than smallest then
      set smallest to the difference

  return smallest
 */
function splitSum2(tours) {
  let smallest = Number.POSITIVE_INFINITY;
  for (let i = 0; i <= tours.length - 1; i++) {
    let preSum = 0;
    let postSum = 0;
    for (let j = 0; j <= i; j++) {
      preSum += tours[j];
    }
    for (let k = i + 1; k < tours.length; k++) {
      postSum += tours[k];
    }
    const absDiff = Math.abs(preSum - postSum);
    if (absDiff < smallest) {
      smallest = absDiff;
    }
  }

  return smallest;
}

module.exports = { splitSum1, splitSum2 };
