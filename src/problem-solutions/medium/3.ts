function lengthOfLongestSubstring(s: string): number {
  const { length } = s;

  let max = 0;
  let start = 0;
  const map = new Map<string, number>();

  for (let end = 0; end < length; end++) {
    const char = s[end];
    const index = map.get(char);
    if (index !== undefined && index >= start) {
      start = index + 1;
    }
    max = Math.max(max, end - start + 1);
    map.set(char, end);
  }

  return max;
}

export const solutions = [lengthOfLongestSubstring];
