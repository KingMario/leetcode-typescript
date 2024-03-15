function productExceptSelf(nums: number[]): number[] {
  const result = new Array(nums.length).fill(1);

  for (let i = 1; i < nums.length; i++) {
    result[i] = result[i - 1] * nums[i - 1];
  }

  let right = 1;
  for (let i = nums.length - 1; i >= 0; i--) {
    result[i] *= right;
    right *= nums[i];
  }

  return result;
}

function productExceptSelfV2(nums: number[]): number[] {
  const result = new Array(nums.length).fill(1);
  let left = 1;
  let right = 1;

  for (let i = 0; i < nums.length; i++) {
    left *= nums[i - 1] ?? 1;
    right *= nums[nums.length - i] ?? 1;
    result[i] *= left;
    result[nums.length - i - 1] *= right;
  }

  return result;
}

export const solutions = [productExceptSelf, productExceptSelfV2];
