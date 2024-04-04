import {
  runTestSuite,
  TestCase,
} from "../leetCodeTestUtility";
import {
  solutions,
} from "./1614";

type Solution = (typeof solutions)[0];

export const testCases: TestCase<Solution>[] = [
  {
    input: ["(1+(2*3)+((8)/4))+1"],
    expected: 3,
  },
  {
    input: ["(1)+((2))+(((3)))"],
    expected: 3,
  },
];

const suiteName = [
  "https://leetcode.com/problems/maximum-nesting-depth-of-the-parentheses",
  "maxDepth",
].join(" - ");
const caseName = "should return the maximum nesting depth of the parentheses";

runTestSuite<Solution>({ suiteName, caseName, solutions, testCases });
