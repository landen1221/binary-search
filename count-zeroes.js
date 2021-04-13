function countZeroes(arr) {
  let len = arr.length
  let start = 0;
  let end = len - 1;
  let currIdx = Math.floor(len / 2);
  let zeroIdx = -1;

  while (start <= end) {
    if (arr[currIdx] === 0) {
      zeroIdx = currIdx;
      end = currIdx-1;
      currIdx = Math.floor((start + end) / 2);
    } else {
      start = currIdx+1;
      currIdx = Math.floor((start + end) / 2);
    }
  }
  
  return (zeroIdx === -1 ? 0 : len - zeroIdx);
}

module.exports = countZeroes