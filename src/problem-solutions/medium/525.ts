function findMaxLength(nums: number[]): number {
  let maxLength = 0;
  let sum = 0;

  const map = new Map<number, number>();
  map.set(0, -1);

  for (let i = 0; i < nums.length; i++) {
    sum += nums[i] - 0.5;
    const prevIndex = map.get(sum);

    if (prevIndex !== undefined) {
      maxLength = Math.max(maxLength, i - prevIndex);
    } else {
      map.set(sum, i);
    }
  }

  return maxLength;
}

export const solutions = [findMaxLength];
