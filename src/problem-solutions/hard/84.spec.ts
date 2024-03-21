import {
  runTestSuite,
  TestCase,
} from "../leetCodeTestUtility";
import {
  solutions,
} from "./84";

type Solution = (typeof solutions)[0];

export const testCases: TestCase<Solution>[] = [
  {
    input: [[2, 1, 5, 6, 2, 3]],
    expected: 10,
  },
  {
    input: [[2, 4]],
    expected: 4,
  },
];

const suiteName = [
  "leetcode.com/problems/largest-rectangle-in-histogram",
  "largestRectangleArea",
].join(" - ");
const caseName = "should return the area of the largest rectangle in the histogram";

runTestSuite<Solution>({ suiteName, caseName, solutions, testCases});
