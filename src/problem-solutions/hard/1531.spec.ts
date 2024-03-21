import {
  runTestSuite,
  TestCase,
} from "../leetCodeTestUtility";
import {
  solutions,
} from "./1531";

type Solution = (typeof solutions)[0];

export const testCases: TestCase<Solution>[] = [
  {
    input: ["aaabcccd", 2],
    expected: 4,
  },
  {
    input: ["aabbaa", 2],
    expected: 2,
  },
  {
    input: ["aaaaaaaaaaa", 0],
    expected: 3,
  },
];

const suiteName = [
  "https://leetcode.com/problems/string-compression-ii",
  "getLengthOfOptimalCompression",
].join(" - ");
const caseName =
  "should find the minimum length of the run-length encoded version of s after deleting at most k characters";

runTestSuite<Solution>({ suiteName, caseName, solutions, testCases });
