import {
  runTestSuite,
  TestCase,
} from "../leetCodeTestUtility";
import {
  solutions,
} from "./349";

type Solution = (typeof solutions)[0];

export const testCases: TestCase<Solution>[] = [
  {
    input: [
      [1, 2, 2, 1],
      [2, 2],
    ],
    expected: [2],
  },
  {
    input: [
      [4, 9, 5],
      [9, 4, 9, 8, 4],
    ],
    expected: [9, 4],
  },
];

const suiteName = [
  "https://leetcode.com/problems/intersection-of-two-arrays",
  "intersection",
].join(" - ");
const caseName = "should return the intersection of two arrays";

runTestSuite<Solution>({ suiteName, caseName, solutions, testCases });
