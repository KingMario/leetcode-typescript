import {
  runTestSuite,
  TestCase,
} from "../leetCodeTestUtility";
import {
  solutions,
} from "./2958";

type Solution = (typeof solutions)[0];

export const testCases: TestCase<Solution>[] = [
  {
    input: [[1, 2, 3, 1, 2, 3, 1, 2], 2],
    expected: 6,
  },
  {
    input: [[1, 2, 1, 2, 1, 2, 1, 2], 1],
    expected: 2,
  },
  {
    input: [[5, 5, 5, 5, 5, 5, 5], 4],
    expected: 4,
  },
];

const suiteName = [
  "https://leetcode.com/problems/length-of-longest-subarray-with-at-most-k-frequency",
  "maxSubarrayLength",
].join(" - ");
const caseName =
  "should return the length of the longest good subarray of nums";

runTestSuite<Solution>({ suiteName, caseName, solutions, testCases });
