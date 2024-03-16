import { expect } from "@jest/globals";
import { TestCase, runTestSuite } from "../leetCodeTestUtility";
import { solutions } from "./238";

type Solution = (typeof solutions)[0];

export const testCases: TestCase<Solution>[] = [
  {
    input: [[1, 2, 3, 4]],
    expected: [24, 12, 8, 6],
  },
  {
    input: [[-1, 1, 0, -3, 3]],
    expected: [0, 0, 9, 0, 0],
  },
];

const suiteName = [
  "https://leetcode.com/problems/product-of-array-except-self",
  "productExceptSelf",
].join(" - ");
const caseName = "should return product of array except self";

expect.addEqualityTesters([
  (a: number[], b: number[]) => a.every((v, i) => v === b[i]),
]);

runTestSuite<Solution>({ suiteName, caseName, solutions, testCases });
