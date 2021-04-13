function findFirst(arr, val) {
  let len = arr.length;
  let start = 0;
  let end = len - 1;
  let currIdx = Math.floor(len / 2);
  let firstValIdx = -1;

  // check first
  if (arr[0] === val) {
    return 0;
  }

  while (start <= end) {
    if (arr[currIdx] === val) {
      firstValIdx = currIdx;
      end = currIdx - 1;
      currIdx = Math.floor((start + end) / 2);
    } else {
      start = currIdx + 1;
      currIdx = Math.floor((start + end) / 2);
    }
  }

  return firstValIdx;
}

function findLast(arr, val) {
  let len = arr.length;
  let start = 0;
  let end = len - 1;
  let currIdx = Math.floor(len / 2);
  let lastValIdx = -1;

  // check last
  if (arr[arr.length - 1] === val) {
    return arr.length - 1;
  }

  while (start <= end) {
    if (arr[currIdx] === val) {
      lastValIdx = currIdx;
      start = currIdx + 1;
      currIdx = Math.floor((start + end) / 2);
    } else {
      end = currIdx - 1;
      currIdx = Math.floor((start + end) / 2);
    }
  }

  return lastValIdx;
}

function sortedFrequency(arr, val) {
  let firstIdx = findFirst(arr, val);
  if (firstIdx === -1) {
    return -1;
  }

  let lastIdx = findLast(arr, val);

  return lastIdx - firstIdx + 1;
}

module.exports = sortedFrequency;
