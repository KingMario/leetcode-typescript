import {
  runTestSuite,
  TestCase,
} from "../leetCodeTestUtility";
import {
  solutions,
} from "./287";

type Solution = (typeof solutions)[0];

export const testCases: TestCase<Solution>[] = [
  {
    input: [[1, 3, 4, 2, 2]],
    expected: 2,
  },
  {
    input: [[3, 1, 3, 4, 2]],
    expected: 3,
  },
  {
    input: [[3, 3, 3, 3, 3]],
    expected: 3,
  },
  {
    input: [[1, 2, 4, 4, 3]],
    expected: 4,
  },
];

const suiteName = [
  "https://leetcode.com/problems/find-the-duplicate-number",
  "findDuplicate",
].join(" - ");
const caseName = "should find the repeated number";

runTestSuite<Solution>({ suiteName, caseName, solutions, testCases });
