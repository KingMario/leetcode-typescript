function maxDotProduct(nums1: number[], nums2: number[]): number {
  const m = nums1.length;
  const n = nums2.length;

  const dp: number[][] = new Array(m + 1);
  for (let i = 0; i <= m; i++) {
    dp[i] = new Array(n + 1).fill(Number.NEGATIVE_INFINITY);
  }

  dp[0][0] = 0;

  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      const product = nums1[i - 1] * nums2[j - 1];
      dp[i][j] = Math.max(
        product,
        dp[i - 1][j - 1] + product,
        dp[i][j - 1],
        dp[i - 1][j]
      );
    }
  }

  return dp[m][n];
}

export const solutions = [maxDotProduct];
