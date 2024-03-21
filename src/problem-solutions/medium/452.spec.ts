import {
  runTestSuite,
  TestCase,
} from "../leetCodeTestUtility";
import {
  solutions,
} from "./452";

type Solution = (typeof solutions)[0];

export const testCases: TestCase<Solution>[] = [
  {
    input: [
      [
        [10, 16],
        [2, 8],
        [1, 6],
        [7, 12],
      ],
    ],
    expected: 2,
  },
  {
    input: [
      [
        [1, 2],
        [3, 4],
        [5, 6],
        [7, 8],
      ],
    ],
    expected: 4,
  },
  {
    input: [
      [
        [1, 2],
        [2, 3],
        [3, 4],
        [4, 5],
      ],
    ],
    expected: 2,
  },
  {
    input: [
      [
        [-2, -1],
        [-3, -2],
        [-4, -3],
        [-5, -4],
      ],
    ],
    expected: 2,
  },
  {
    input: [
      [
        [-(2 ** 31), -(2 ** 31) + 1],
        [2, 3],
        [3, 4],
        [4, 5],
        [2 ** 31 - 2, 2 ** 31 - 1],
      ],
    ],
    expected: 4,
  },
];

const suiteName = [
  "https://leetcode.com/problems/minimum-number-of-arrows-to-burst-balloons",
  "findMinArrowShots",
].join(" - ");
const caseName =
  "should find the minimum number of arrows to burst all balloons";

runTestSuite<Solution>({ suiteName, caseName, solutions, testCases });
