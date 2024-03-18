import { runTestSuite, TestCase } from "../leetCodeTestUtility";
import { solutions } from "./2789";

type Solution = (typeof solutions)[0];

export const testCases: TestCase<Solution>[] = [
  {
    input: [[2, 3, 7, 9, 3]],
    expected: 21,
  },
  {
    input: [[5, 3, 3]],
    expected: 11,
  },
  {
    input: [[77]],
    expected: 77,
  },
];

const suiteName = [
  "https://leetcode.com/problems/largest-element-in-an-array-after-merge-operations",
  "maxArrayValue",
].join(" - ");
const caseName =
  "should return lagest element in an array after merge operations";

runTestSuite<Solution>({ suiteName, caseName, solutions, testCases });
