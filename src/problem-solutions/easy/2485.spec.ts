import { TestCase, runTestSuite } from "../leetCodeTestUtility";
import { solutions } from "./2485";

type Solution = (typeof solutions)[0];

export const testCases: TestCase<Solution>[] = [
  {
    input: [8],
    expected: 6,
  },
  {
    input: [1],
    expected: 1,
  },
  {
    input: [4],
    expected: -1,
  },
];

const suiteName = [
  "https://leetcode.com/problems/find-the-pivot-integer",
  "pivotInteger",
].join(" - ");
const caseName = "should return the pivot integer";

runTestSuite<Solution>({ suiteName, caseName, solutions, testCases });
