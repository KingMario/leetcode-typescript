import {
  incrementValueInMap,
} from "../../utilities";

function maxPoints(points: number[][]): number {
  if (points.length === 1) {
    return 1;
  }
  let result = 2;
  for (let i = 0; i < points.length; i++) {
    const count = new Map<number, number>();
    for (let j = 0; j < points.length; j++) {
      if (j === i) {
        continue;
      }

      const slope =
        (points[j][1] - points[i][1]) / (points[j][0] - points[i][0]);
      incrementValueInMap(count, slope);

      result = Math.max(result, count.get(slope)! + 1);
    }
  }

  return result;
}

export const solutions = [maxPoints];
