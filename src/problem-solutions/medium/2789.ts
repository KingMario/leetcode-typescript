function maxArrayValue(nums: number[]): number {
  let i = nums.length - 1;

  while (i > 0) {
    if (nums[ i - 1 ] <= nums[ i ]) {
      nums.splice(i - 1, 2, nums[ i - 1 ] + nums[ i ]);
    }

    i--;
  }

  return Math.max(...nums);
}

export const solutions = [maxArrayValue];
