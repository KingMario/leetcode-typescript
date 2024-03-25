function findDuplicates(nums: number[]): number[] {
  const result: number[] = [];

  for (const num of nums) {
    const index = Math.abs(num) - 1;

    if (nums[ index ] < 0) {
      result.push(Math.abs(num));
    } else {
      nums[index] *= -1;
    }
  }

  return result;
}

export const solutions = [findDuplicates];
