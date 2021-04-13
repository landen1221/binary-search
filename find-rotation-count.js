function findRotationCount(arr, start = 0, end = arr.length - 1) {
    if (end < start) return 0;
    if (end === start) return start;
    let mid = Math.floor((start + end) / 2);
  
    if (mid < end && arr[mid + 1] < arr[mid]) return mid + 1;
  
    if (mid > start && arr[mid] < arr[mid - 1]) {
      return mid;
    }
  
    if (arr[end] > arr[mid]) {
      return findRotationCount(arr, start, mid - 1);
    }
  
    return findRotationCount(arr, mid + 1, end);
  }

module.exports = findRotationCount