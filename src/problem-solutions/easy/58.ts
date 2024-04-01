function lengthOfLastWord(s: string): number {
  return (s.trimEnd().split(" ")).pop()!.length;
}

export const solutions = [lengthOfLastWord];
