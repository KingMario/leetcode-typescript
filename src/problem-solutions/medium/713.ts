function numSubarrayProductLessThanK(nums: number[], k: number): number {
  const { length } = nums;

  let left = 0;
  let right = 0;
  let prod = 1;
  let result = 0;

  while (left < length) {
    prod *= nums[right];

    if (prod < k) {
      result++;
      right++;
    } else {
      prod = 1;
      left++;
      right = left;
    }
  }

  return result;
}

function numSubarrayProductLessThanKV2(nums: number[], k: number): number {
  const { length } = nums;

  let left = 0;
  let right = 0;
  let prod = 1;
  let result = 0;

  while (right < length) {
    prod *= nums[right];

    while (prod >= k) {
      prod /= nums[left];
      left++;
    }

    result += Math.max(right - left + 1, 0);
    right++;
  }

  return result;
}

export const solutions = [
  numSubarrayProductLessThanK,
  numSubarrayProductLessThanKV2,
];
