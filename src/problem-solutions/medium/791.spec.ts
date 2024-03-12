import { expect } from "@jest/globals";
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
    expected: "cba,d",
  },
  {
    input: ["vle", "level"],
    expected: "vllee",
  },
  {
    input: ["ignore", "reorganization"],
    expected: "iignnoorre,azat",
  },
  {
    input: ["fun", "funfair"],
    expected: "ffun,air",
  },
];

const suiteName = [
  "https://leetcode.com/problems/custom-sort-string",
  "customSortString",
].join(" - ");
const caseName = "should custom sort the string";

expect.addEqualityTesters([
  (a: string, b: string) => {
    if (a === b) {
      return true;
    }

    const parts = b.split(",");
    return a === parts.join("") || a === parts.reverse().join("");
  },
]);

runTestSuite<Solution>({ suiteName, caseName, solutions, testCases });
