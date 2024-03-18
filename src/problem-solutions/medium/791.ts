function customSortString(order: string, s: string): string {
  let result = "";

  for (const c of order) {
    while (s.includes(c)) {
      result += c;
      s = s.replace(c, "");
    }
  }

  return result + s;
}

function customSortStringV2(order: string, s: string): string {
  const map = new Map<string, number>();

  for (const c of order) {
    map.set(c, 0);
  }

  let unsorted = "";
  for (const c of s) {
    const count = map.get(c);
    if (count !== undefined) {
      map.set(c, count + 1);
    } else {
      unsorted += c;
    }
  }

  let result = "";
  for (const c of order) {
    const count = map.get(c);
    if (count !== undefined) {
      result += c.repeat(count);
    }
  }

  return result + unsorted;
}

function customSortStringV3(order: string, s: string): string {
  return s
    .split("")
    .sort((a, b) => order.indexOf(a) - order.indexOf(b))
    .join("");
}

export const solutions = [
  customSortString,
  customSortStringV2,
  customSortStringV3,
];
