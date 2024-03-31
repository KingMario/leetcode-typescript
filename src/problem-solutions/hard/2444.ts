function countSubarrays(nums: number[], minK: number, maxK: number): number {
  const { length } = nums;

  let result = 0;

  let minPos = -1;
  let maxPos = -1;

  let left = 0;
  let right = 0;
  while (right < length) {
    const end = nums[right];

    if (end === minK) {
      minPos = right;
    }
    if (end === maxK) {
      maxPos = right;
    }

    right++;

    if (end < minK || end > maxK) {
      minPos = -1;
      maxPos = -1;
      left = right;
      continue;
    }

    if (minPos !== -1 && maxPos !== -1) {
      result += Math.min(minPos, maxPos) + 1 - left;
    }
  }

  return result;
}

export const solutions = [countSubarrays];
