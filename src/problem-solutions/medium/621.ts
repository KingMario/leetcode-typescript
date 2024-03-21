import {
  incrementValueInMap,
} from "../../utilities";

function leastInterval(tasks: string[], n: number): number {
  const map = new Map<string, number>();

  for (const task of tasks) {
    incrementValueInMap(map, task);
  }

  const sorted = [...map.entries()].sort((a, b) => b[1] - a[1]);

  return Math.max(
    (sorted[0][1] - 1) * (n + 1) +
      sorted.filter(([, times]) => times === sorted[0][1]).length,
    tasks.length
  );
}

export const solutions = [leastInterval];
