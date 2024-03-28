function maxSubarrayLength(nums: number[], k: number): number {
  const { length } = nums;

  let result = k;

  let left = 0;
  const frequencies: Record<number, number> = {};
  let right = left;

  while (left < length) {
    while (right < length && (frequencies[nums[right]] || 0) < k) {
      frequencies[nums[right]] = (frequencies[nums[right]] || 0) + 1;
      right++;
    }

    result = Math.max(result, right - left);
    frequencies[nums[left]]--;
    left++;
  }

  return result;
}

export const solutions = [maxSubarrayLength];
