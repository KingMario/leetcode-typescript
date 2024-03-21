function trap(height: number[]): number {
  const { length } = height;

  const lMax: number[] = Array(length).fill(0);
  const rMax: number[] = Array(length).fill(0);

  lMax[0] = height[0];
  rMax[length - 1] = height.at(-1)!;

  for (let i = 1; i < length; i++) {
    lMax[i] = Math.max(height[i], lMax[i - 1]);
    rMax[length - 1 - i] = Math.max(height[length - 1 - i], rMax[length - i]);
  }

  let result = 0;
  for (let i = 1; i < length - 1; i++) {
    result += Math.min(lMax[i], rMax[i]) - height[i];
  }

  return result;
}

export const solutions = [trap];
