function meetings(intervals) {
  intervals.sort((a, b) => a[0] - b[0]); // Sort the intervals by start time

  for (let i = 1; i < intervals.length; i++) {
    if (intervals[i][0] < intervals[i - 1][1]) {
      return false;
    }
  }

  return true;
}

const intervals = [
  [0, 30],
  [5, 10],
  [15, 20],
];
const result = meetings(intervals);
console.log(result);
