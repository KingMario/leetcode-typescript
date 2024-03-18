function findMinArrowShots(points: number[][]): number {
  points.sort((a, b) => a[ 1 ] - b[ 1 ]);

  let count = 1;
  let right = points[ 0 ][ 1 ];

  for (const point of points) {
    if (point[ 0 ] > right) {
      count++;
      right = point[ 1 ];
    }
  }

  return count;
}

export const solutions = [findMinArrowShots];
