import { TestCase, runTestSuite } from "../leetCodeTestUtility";
import { solutions } from "./525";

type Solution = (typeof solutions)[0];

export const testCases: TestCase<Solution>[] = [
  {
    input: [[0, 1]],
    expected: 2,
  },
  {
    input: [[0, 1, 0]],
    expected: 2,
  },
  {
    input: [[0, 0, 1]],
    expected: 2,
  },
  {
    input: [[0, 0, 1, 0, 1, 0, 0]],
    expected: 4,
  },
  {
    input: [[1, 1, 0, 1]],
    expected: 2,
  },
  {
    input: [new Array(1e5).fill(0)],
    expected: 0,
  },
  {
    input: [new Array(1e5).fill(1)],
    expected: 0,
  },
];

const suiteName = [
  "https://leetcode.com/problems/contiguous-array",
  "findMaxLength",
].join(" - ");
const caseName =
  "should return the maximum length of contiguous subarray with equal number of 0 and 1";

runTestSuite<Solution>({ suiteName, caseName, solutions, testCases });
