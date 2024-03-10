import { TestCase, runTestSuite } from "../leetCodeTestUtility";
import { solutions } from "./2540";

type Solution = (typeof solutions)[0];

export const testCases: TestCase<Solution>[] = [
  {
    input: [
      [1, 2, 3],
      [2, 4],
    ],
    expected: 2,
  },
  {
    input: [
      [1, 2, 3],
      [4, 5],
    ],
    expected: -1,
  },
  {
    input: [
      [2, 4],
      [1, 1, 2],
    ],
    expected: 2,
  },
  {
    input: [
      [1, 1, 2],
      [2, 4],
    ],
    expected: 2,
  },
];

const suiteName = [
  "https://leetcode.com/problems/minimum-common-value",
  "getCommon",
].join(" - ");
const caseName = "should return the minimum common number in the two arrays";

runTestSuite<Solution>({ suiteName, caseName, solutions, testCases });
