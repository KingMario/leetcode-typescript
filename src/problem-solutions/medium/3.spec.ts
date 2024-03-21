import {
  runTestSuite,
  TestCase,
} from "../leetCodeTestUtility";
import {
  solutions,
} from "./3";

type Solution = (typeof solutions)[0];

export const testCases: TestCase<Solution>[] = [
  {
    input: ["abcabcbb"],
    expected: 3,
  },
  {
    input: ["bbbbb"],
    expected: 1,
  },
  {
    input: ["pwwkew"],
    expected: 3,
  },
];

const suiteName = [
  "leetcode.com/problems/longest-substring-without-repeating-characters",
  "lengthOfLongestSubstring",
].join(" - ");
const caseName = "should find the length of the longest substring without repeating characters";

runTestSuite<Solution>({ suiteName, caseName, solutions, testCases});
