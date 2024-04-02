import {
  runTestSuite,
  TestCase,
} from "../leetCodeTestUtility";
import {
  solutions,
} from "./205";

type Solution = (typeof solutions)[0];

export const testCases: TestCase<Solution>[] = [
  {
    input: ["egg", "add"],
    expected: true,
  },
  {
    input: ["foo", "bar"],
    expected: false,
  },
  {
    input: ["paper", "title"],
    expected: true,
  },
];

const suiteName = [
  "https://leetcode.com/problems/isomorphic-strings",
  "isIsomorphic",
].join(" - ");
const caseName = "should determine if strings are isomorphic";

runTestSuite<Solution>({ suiteName, caseName, solutions, testCases });
