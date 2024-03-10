function getCommon(nums1: number[], nums2: number[]): number {
  const set = new Set<number>(nums1);

  for (const num of nums2) {
    if (set.has(num)) {
      return num;
    }
  }

  return -1;
}

// Optimized by two-pointer
function getCommonV2(nums1: number[], nums2: number[]): number {
  let p1 = 0;
  let p2 = 0;

  while (p1 < nums1.length && p2 < nums2.length) {
    if (nums1[p1] === nums2[p2]) {
      return nums1[p1];
    } else if (nums1[p1] > nums2[p2]) {
      p2++;
    } else {
      p1++;
    }
  }

  return -1;
}

export const solutions = [getCommon, getCommonV2];
