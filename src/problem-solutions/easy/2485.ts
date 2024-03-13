function pivotInteger(n: number): number {
  const result = Math.sqrt((n * (n + 1)) / 2);

  return Number.isInteger(result) ? result : -1;
}

export const solutions = [pivotInteger];
