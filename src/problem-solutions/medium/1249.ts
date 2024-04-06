function minRemoveToMakeValid(s: string): string {
  const parenthesisPositions = [];
  const chars = s.split("");

  for (let i = 0; i < s.length; i++) {
    const char = s[i];

    if (char === "(") {
      parenthesisPositions.push(i);
    } else if (char === ")") {
      if (
        parenthesisPositions.length &&
        s[parenthesisPositions.at(-1)!] === "("
      ) {
        parenthesisPositions.pop();
      } else {
        parenthesisPositions.push(i);
      }
    }
  }

  for (let i = 0; i < parenthesisPositions.length; i++) {
    chars[parenthesisPositions[i]] = "";
  }

  return chars.join("");
}

export const solutions = [minRemoveToMakeValid];
