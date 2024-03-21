function cherryPickup(grid: number[][]): number {
  const { length: rows } = grid;
  const { length: cols } = grid[0];

  const dp = Array.from({ length: rows }, () =>
    Array.from({ length: cols }, () =>
      Array.from<number>({ length: cols }).fill(-1)
    )
  );

  function dfs(row: number, col1: number, col2: number): number {
    if (row === rows) {
      return 0;
    }

    if (dp[row][col1][col2] !== -1) {
      return dp[row][col1][col2];
    }

    let cherries = grid[row][col1];
    if (col1 !== col2) {
      cherries += grid[row][col2];
    }

    const cherriesInNextRow: number[] = [];
    for (let newCol1 = col1 - 1; newCol1 <= col1 + 1; newCol1++) {
      for (let newCol2 = col2 - 1; newCol2 <= col2 + 1; newCol2++) {
        if (newCol1 >= 0 && newCol1 < cols && newCol2 >= 0 && newCol2 < cols) {
          cherriesInNextRow.push(dfs(row + 1, newCol1, newCol2));
        }
      }
    }

    dp[row][col1][col2] = cherries + Math.max(...cherriesInNextRow);
    return dp[row][col1][col2];
  }

  return dfs(0, 0, cols - 1);
}

export const solutions = [cherryPickup];
