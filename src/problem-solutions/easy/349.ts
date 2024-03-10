function intersection(nums1: number[], nums2: number[]): number[] {
  const set = new Set<number>(nums1);

  return Array.from(new Set(nums2.filter((num) => set.has(num))));
}

export const solutions = [intersection];
