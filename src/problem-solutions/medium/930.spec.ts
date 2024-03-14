import { TestCase, runTestSuite } from "../leetCodeTestUtility";
import { solutions } from "./930";

type Solution = (typeof solutions)[0];

export const testCases: TestCase<Solution>[] = [
  {
    input: [[1, 0, 1, 0, 1], 2],
    expected: 4,
  },
  {
    input: [[1, 1, 0, 0, 0, 0, 1, 1], 2],
    expected: 11,
  },
  {
    input: [[0, 0, 0, 0, 0], 0],
    expected: 15,
  },
  {
    input: [[0, 0, 0], 1],
    expected: 0,
  },
];

const suiteName = [
  "https://leetcode.com/problems/binary-subarrays-with-sum",
  "numSubarraysWithSum",
].join(" - ");
const caseName = "should return number of subarrays with sum";

runTestSuite<Solution>({ suiteName, caseName, solutions, testCases });
