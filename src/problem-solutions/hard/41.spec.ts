import {
  runTestSuite,
  TestCase,
} from "../leetCodeTestUtility";
import {
  solutions,
} from "./41";

type Solution = (typeof solutions)[0];

export const testCases: TestCase<Solution>[] = [
  {
    input: [[1, 2, 0]],
    expected: 3,
  },
  {
    input: [[3, 4, -1, 1]],
    expected: 2,
  },
  {
    input: [[7, 8, 9, 11, 12]],
    expected: 1,
  },
];

const suiteName = [
  "https://leetcode.com/problems/first-missing-positive",
  "firstMissingPositive",
].join(" - ");
const caseName =
  "should return the smallest positive integer that is not present in nums array";

runTestSuite<Solution>({ suiteName, caseName, solutions, testCases });
