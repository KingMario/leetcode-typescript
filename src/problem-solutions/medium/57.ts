function insert(intervals: number[][], newInterval: number[]): number[][] {
  for (let i = 0; i < intervals.length; i++) {
    if (intervals[i][1] < newInterval[0]) {
      continue;
    }

    if (intervals[i][0] > newInterval[1]) {
      intervals.splice(i, 0, newInterval);

      return intervals;
    }

    newInterval[0] = Math.min(intervals[i][0], newInterval[0]);
    newInterval[1] = Math.max(intervals[i][1], newInterval[1]);
    intervals.splice(i, 1);
    i--;
  }

  intervals.push(newInterval);
  return intervals;
}

function insertV2(intervals: number[][], newInterval: number[]): number[][] {
  const { length } = intervals;

  let left = -1;
  let right = length;

  for (let i = 0; i < length; i++) {
    if (intervals[i][1] < newInterval[0]) {
      left = i;
    } else if (intervals[i][0] > newInterval[1]) {
      right = i;

      break;
    }
  }

  if (left + 1 < right) {
    newInterval[0] = Math.min(intervals[left + 1][0], newInterval[0]);
    newInterval[1] = Math.max(intervals[right - 1][1], newInterval[1]);
  }

  return intervals
    .slice(0, left + 1)
    .concat([newInterval], intervals.slice(right));
}

export const solutions = [insert, insertV2];
