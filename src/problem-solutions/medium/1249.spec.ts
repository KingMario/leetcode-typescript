import {
  runTestSuite,
  TestCase,
} from "../leetCodeTestUtility";
import {
  solutions,
} from "./1249";

type Solution = (typeof solutions)[0];

export const testCases: TestCase<Solution>[] = [
  {
    input: ["lee(t(c)o)de)"],
    expected: "lee(t(c)o)de",
  },
  {
    input: ["a)b(c)d"],
    expected: "ab(c)d",
  },
  {
    input: ["))(("],
    expected: "",
  },
  {
    input: ["())()((("],
    expected: "()()",
  },
];

const suiteName = [
  "https://leetcode.com/problems/minimum-remove-to-make-valid-parentheses",
  "minRemoveToMakeValid",
].join(" - ");
const caseName =
  "should return a valid parentheses string with minimum number of removals";

runTestSuite<Solution>({ suiteName, caseName, solutions, testCases });
