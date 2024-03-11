import { TestCase, runTestSuite } from "../leetCodeTestUtility";
import { solutions } from "./791";

type Solution = (typeof solutions)[0];

export const testCases: TestCase<Solution>[] = [
  {
    input: ["abc", ""],
    expected: "",
  },
  {
    input: ["cba", "abcd"],
    expected: "cbad",
  },
  {
    input: ["vle", "level"],
    expected: "vllee",
  },
  {
    input: ["ignore", "reorganization"],
    expected: "iignnoorreazat",
  },
  {
    input: ["fun", "funfair"],
    expected: "ffunair",
  },
];

const suiteName = [
  "https://leetcode.com/problems/custom-sort-string",
  "customSortString",
].join(" - ");
const caseName = "should return the intersection of two arrays";

runTestSuite<Solution>({ suiteName, caseName, solutions, testCases });
