function exist(board: string[][], word: string): boolean {
  const { length } = word;

  const boardWidth = board[0].length;
  const boardHeight = board.length;
  for (let i = 0; i < boardHeight; i++) {
    for (let j = 0; j < boardWidth; j++) {
      if (dfs(board, word, i, j, 0)) {
        return true;
      }
    }
  }

  return false;

  function dfs(
    board: string[][],
    word: string,
    row: number,
    col: number,
    index: number
  ): boolean {
    if (
      row < 0 ||
      row >= board.length ||
      col < 0 ||
      col >= board[0].length ||
      board[row][col] !== word[index]
    ) {
      return false;
    }

    if (index === length - 1) {
      return true;
    }

    board[row][col] = "*";

    const directions = [
      [-1, 0],
      [1, 0],
      [0, -1],
      [0, 1],
    ];

    for (const [dx, dy] of directions) {
      if (dfs(board, word, row + dx, col + dy, index + 1)) {
        return true;
      }
    }

    board[row][col] = word[index];

    return false;
  }
}

export const solutions = [exist];
