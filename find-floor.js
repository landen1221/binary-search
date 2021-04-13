function findFloor(arr, val) {
  let len = arr.length;
  let start = 0;
  let end = len - 1;
  let currIdx = Math.floor(len / 2);
  let floorNumIdx = -1;

  while (start <= end) {
    if (arr[currIdx] > val) {
      end = currIdx - 1;
      currIdx = Math.floor((start + end) / 2);
    } else {
      start = currIdx + 1;
      floorNumIdx = currIdx;
      currIdx = Math.floor((start + end) / 2);
    }
  }

  return floorNumIdx === -1 ? -1 : arr[floorNumIdx];
}

module.exports = findFloor;
