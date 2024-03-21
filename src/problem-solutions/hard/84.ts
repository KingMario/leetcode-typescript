function largestRectangleArea(heights: number[]): number {
  const heightsWithRightBoundry = [...heights, 0];
  const { length } = heightsWithRightBoundry;

  let result = 0;
  const stack: number[] = [-1];

  for (let i = 0; i < length; i++) {
    while (
      stack.length > 1 &&
      heightsWithRightBoundry[stack.at(-1)!] > heightsWithRightBoundry[i]
    ) {
      const height = heightsWithRightBoundry[stack.pop()!];
      const width = i - stack.at(-1)! - 1;
      result = Math.max(result, height * width);
    }

    stack.push(i);
  }

  return result;
}

export const solutions = [largestRectangleArea];
