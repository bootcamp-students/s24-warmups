function maxSequence(arr) {
  let maxSum = 0;
  let currentSum = 0;

  for (let num of arr) {
    currentSum = Math.max(0, currentSum + num);
    maxSum = Math.max(maxSum, currentSum);
  }

  return maxSum;
}
