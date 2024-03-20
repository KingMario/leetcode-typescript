import { arrayToListNode } from "../../data-structure";
import { runTestSuite, TestCase } from "../leetCodeTestUtility";
import { solutions } from "./1669";

type Solution = (typeof solutions)[0];
type TestCaseInputsMapping = [number[], number, number, number[]];

export const testCases: TestCase<Solution>[] = [
  {
    input: [
      [10, 1, 13, 6, 9, 5],
      3,
      4,
      [1000000, 1000001, 1000002],
    ] as TestCaseInputsMapping,
    expected: [10, 1, 13, 1000000, 1000001, 1000002, 5],
  },
  {
    input: [
      [0, 1, 2, 3, 4, 5, 6],
      2,
      5,
      [1000000, 1000001, 1000002, 1000003, 1000004],
    ] as TestCaseInputsMapping,
    expected: [0, 1, 1000000, 1000001, 1000002, 1000003, 1000004, 6],
  },
].map(({ input, expected }) => ({
  input: [
    arrayToListNode(input[0]),
    input[1],
    input[2],
    arrayToListNode(input[3]),
  ],
  expected: arrayToListNode(expected),
}));

const suiteName = [
  "https://leetcode.com/problems/merge-in-between-linked-lists",
  "mergeInBetween",
].join(" - ");
const caseName = "should merge two linked lists";

runTestSuite<Solution>({ suiteName, caseName, solutions, testCases });
