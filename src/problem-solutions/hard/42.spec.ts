import { runTestSuite, TestCase } from "../leetCodeTestUtility";
import { solutions } from "./42";

type Solution = (typeof solutions)[0];

export const testCases: TestCase<Solution>[] = [
  {
    input: [[0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]],
    expected: 6,
  },
  {
    input: [[4, 2, 0, 3, 2, 5]],
    expected: 9,
  },
];

const suiteName = [
  "https://leetcode.com/problems/trapping-rain-water",
  "trap",
].join(" - ");
const caseName = "should compute how much water it can trap after raining";

runTestSuite<Solution>({ suiteName, caseName, solutions, testCases });
