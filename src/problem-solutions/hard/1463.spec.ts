import {
  runTestSuite,
  TestCase,
} from "../leetCodeTestUtility";
import {
  solutions,
} from "./1463";

type Solution = (typeof solutions)[0];

export const testCases: TestCase<Solution>[] = [
  {
    input: [
      [
        [3, 1, 1],
        [2, 5, 1],
        [1, 5, 5],
        [2, 1, 1],
      ],
    ],
    expected: 24,
  },
  {
    input: [
      [
        [1, 0, 0, 0, 0, 0, 1],
        [2, 0, 0, 0, 0, 3, 0],
        [2, 0, 9, 0, 0, 0, 0],
        [0, 3, 0, 5, 4, 0, 0],
        [1, 0, 2, 3, 0, 0, 6],
      ],
    ],
    expected: 28,
  },
];

const suiteName = [
  "https://leetcode.com/problems/cherry-pickup-ii",
  "cherryPickup",
].join(" - ");
const caseName =
  "should return the maximum number of cherries collection using both robots";

runTestSuite<Solution>({ suiteName, caseName, solutions, testCases });
