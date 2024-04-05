function makeGood(s: string): string {
  const stack: string[] = [];

  for (const c of s) {
    const top = stack.at(-1);
    if ((c !== top && c.toLowerCase()) === top?.toLowerCase()) {
      stack.pop();
    } else {
      stack.push(c);
    }
  }

  return stack.join("");
}

function makeGoodV2(s: string): string {
  const stack: string[] = [];

  for (const c of s) {
    const top = stack.at(-1);
    if (top && Math.abs(c.charCodeAt(0) - top.charCodeAt(0)) === 32) {
      stack.pop();
    } else {
      stack.push(c);
    }
  }

  return stack.join("");
}

export const solutions = [makeGood, makeGoodV2];
