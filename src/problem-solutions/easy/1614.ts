function maxDepth(s: string): number {
  let max = 0;

  let depth = 0;
  for (const c of s) {
    if (c === "(") {
      depth++;
      max = Math.max(max, depth);
    }
    if (c === ")") {
      depth--;
    }
  }

  return max;
}

export const solutions = [maxDepth];
