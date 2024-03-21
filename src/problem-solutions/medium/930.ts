import {
  incrementValueInMap,
} from "../../utilities";

function numSubarraysWithSum(nums: number[], goal: number): number {
  let count = 0;

  for (let i = 0; i < nums.length; i++) {
    let sum = 0;
    for (let j = i; j < nums.length; j++) {
      sum += nums[j];
      if (sum === goal) {
        count++;
      }
    }
  }

  return count;
}

function numSubarraysWithSumV2(nums: number[], goal: number): number {
  let sum = 0;
  let count = 0;

  const sumCount = new Map<number, number>();
  sumCount.set(0, 1);

  for (const num of nums) {
    sum += num;
    count += sumCount.get(sum - goal) || 0;
    incrementValueInMap(sumCount, sum);
  }

  return count;
}

export const solutions = [numSubarraysWithSum, numSubarraysWithSumV2];
