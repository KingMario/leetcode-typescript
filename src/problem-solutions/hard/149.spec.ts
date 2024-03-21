import {
  runTestSuite,
  TestCase,
} from "../leetCodeTestUtility";
import {
  solutions,
} from "./149";

type Solution = (typeof solutions)[0];

export const testCases: TestCase<Solution>[] = [
  {
    input: [[[1, 1]]],
    expected: 1,
  },
  {
    input: [
      [
        [1, 1],
        [2, 2],
        [3, 3],
      ],
    ],
    expected: 3,
  },
  {
    input: [
      [
        [1, 1],
        [3, 2],
        [5, 3],
        [4, 1],
        [2, 3],
        [1, 4],
      ],
    ],
    expected: 4,
  },
];

const suiteName = [
  "https://leetcode.com/problems/max-points-on-a-line",
  "maxPoints",
].join(" - ");
const caseName =
  "should return the maximum number of points that lie on the same straight line";

runTestSuite<Solution>({ suiteName, caseName, solutions, testCases });
