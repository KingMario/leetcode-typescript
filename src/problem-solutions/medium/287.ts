function findDuplicate(nums: number[]): number {
  const numSet = new Set<number>();

  let result = 0;
  for (const num of nums) {
    if (numSet.has(num)) {
      result = num;
      break;
    }

    numSet.add(num);
  }

  return result;
}

export const solutions = [findDuplicate];
