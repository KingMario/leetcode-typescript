import {
  runTestSuite,
  TestCase,
} from "../leetCodeTestUtility";
import {
  solutions,
} from "./992";

type Solution = (typeof solutions)[0];

export const testCases: TestCase<Solution>[] = [
  {
    input: [[1, 2, 1, 2, 3], 2],
    expected: 7,
  },
  {
    input: [[1, 2, 1, 3, 4], 3],
    expected: 3,
  },
];

const suiteName = [
  "https://leetcode.com/problems/subarrays-with-k-different-integers",
  "subarraysWithKDistinct",
].join(" - ");
const caseName =
  "should return the number of subarrays with at least k distinct integers";

runTestSuite<Solution>({ suiteName, caseName, solutions, testCases });
