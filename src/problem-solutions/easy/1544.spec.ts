import {
  runTestSuite,
  TestCase,
} from "../leetCodeTestUtility";
import {
  solutions,
} from "./1544";

type Solution = (typeof solutions)[0];

export const testCases: TestCase<Solution>[] = [
  {
    input: ["leEeetcode"],
    expected: "leetcode",
  },
  {
    input: ["abBAcC"],
    expected: "",
  },
  {
    input: ["s"],
    expected: "s",
  },
];

const suiteName = [
  "https://leetcode.com/problems/make-the-string-great",
  "makeGood",
].join(" - ");
const caseName = "should return the string after making it good";

runTestSuite<Solution>({ suiteName, caseName, solutions, testCases});
