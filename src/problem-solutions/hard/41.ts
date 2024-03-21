function firstMissingPositive(nums: number[]): number {
  const { length } = nums;

  for (let i = 0; i < length; i++) {
    while (nums[i] > 0 && nums[i] <= length && nums[nums[i] - 1] !== nums[i]) {
      [nums[nums[i] - 1], nums[i]] = [nums[i], nums[nums[i] - 1]];
    }
  }

  let result = 1;
  for (let i = 0; i < length + 1; i++) {
    if (nums[i] !== i + 1) {
      result = i + 1;

      break;
    }
  }

  return result;
}

export const solutions = [firstMissingPositive];
