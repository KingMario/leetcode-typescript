import {
  runTestSuite,
  TestCase,
} from "../leetCodeTestUtility";
import {
  solutions,
} from "./2444";

type Solution = (typeof solutions)[0];

export const testCases: TestCase<Solution>[] = [
  {
    input: [[1, 3, 5, 2, 7, 5], 1, 5],
    expected: 2,
  },
  {
    input: [[1, 1, 1, 1], 1, 1],
    expected: 10,
  },
];

const suiteName = [
  "https://leetcode.com/problems/count-subarrays-with-fixed-bounds",
  "countSubarrays",
].join(" - ");
const caseName = "should work";

runTestSuite<Solution>({ suiteName, caseName, solutions, testCases });
