function subarraysWithKDistinct(nums: number[], k: number): number {
  const { length } = nums;
  let result = 0;

  const frequencies = Array(length + 1).fill(0);
  let unique = 0;
  let left = 0;
  let right = 0;

  while (right < length) {
    const frequency = ++frequencies[nums[right]];
    if (frequency === 1) {
      unique++;
    }

    while (unique > k) {
      const frequency = --frequencies[nums[left]];
      if (frequency === 0) {
        unique--;
      }
      left++;
    }

    let i = left;
    while (unique === k) {
      result++;

      const frequency = --frequencies[nums[i]];
      i++;
      if (frequency === 0) {
        break;
      }
    }

    while (i > left) {
      i--;
      frequencies[nums[i]]++;
    }

    right++;
  }

  return result;
}

export const solutions = [subarraysWithKDistinct];
