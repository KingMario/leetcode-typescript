function getLengthOfOptimalCompression(s: string, k: number): number {
  const dp = Array.from({ length: s.length }, () => new Array(k + 1).fill(101));

  function dfs(i: number, k: number): number {
    if (i + k >= s.length) {
      return 0;
    }

    if (k < 0) {
      return 101;
    }

    if (dp[i][k] !== 101) {
      return dp[i][k];
    }

    dp[i][k] = dfs(i + 1, k - 1);

    let [diff, same, length] = [0, 0, 0];

    for (let j = i; j < s.length && k - diff >= 0; ++j) {
      if (s[i] === s[j]) {
        same++;
        if (same <= 2 || same === 10 || same === 100) {
          length++;
        }
      } else {
        diff++;
      }
      dp[i][k] = Math.min(dp[i][k], length + dfs(j + 1, k - diff));
    }

    return dp[i][k];
  }

  return dfs(0, k);
}

export const solutions = [getLengthOfOptimalCompression];
