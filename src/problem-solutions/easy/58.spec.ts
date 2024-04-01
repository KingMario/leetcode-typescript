import {
  runTestSuite,
  TestCase,
} from "../leetCodeTestUtility";
import {
  solutions,
} from "./58";

type Solution = (typeof solutions)[0];

export const testCases: TestCase<Solution>[] = [
  {
    input: ["Hello World"],
    expected: 5,
  },
  {
    input: ["   fly me   to   the moon  "],
    expected: 4,
  },
  {
    input: ["luffy is still joyboy"],
    expected: 6,
  },
];

const suiteName = [
  "https://leetcode.com/problems/length-of-last-word",
  "lengthOfLastWord",
].join(" - ");
const caseName = "should work";

runTestSuite<Solution>({ suiteName, caseName, solutions, testCases });
