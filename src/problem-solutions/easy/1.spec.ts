import { runTestSuite, TestCase } from "../leetCodeTestUtility";
import { solutions } from "./1";

type Solution = (typeof solutions)[0];

export const testCases: TestCase<Solution>[] = [
  {
    input: [[2, 7, 11, 15], 9],
    expected: [0, 1],
  },
  {
    input: [[3, 2, 4], 6],
    expected: [1, 2],
  },
  {
    input: [[3, 3], 6],
    expected: [0, 1],
  },
  {
    input: [[-3, 4, 3, 90], 10],
    expected: [],
  },
];

const suiteName = ["https://leetcode.com/problems/two-sum", "twoSum"].join(
  " - "
);
const caseName =
  "should return indices of the two numbers such that they add up to the target";

runTestSuite<Solution>({ suiteName, caseName, solutions, testCases });
