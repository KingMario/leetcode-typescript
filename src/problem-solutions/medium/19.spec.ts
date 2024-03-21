import { arrayToListNode } from "../../data-structure";
import { runTestSuite, TestCase } from "../leetCodeTestUtility";
import { solutions } from "./19";

type Solution = (typeof solutions)[0];
type TestCaseInputMapping = [number[], number];

export const testCases: TestCase<Solution>[] = [
  {
    input: [[1, 2, 3, 4, 5], 2] as TestCaseInputMapping,
    expected: [1, 2, 3, 5],
  },
  {
    input: [[1], 1] as TestCaseInputMapping,
    expected: [],
  },
  {
    input: [[1, 2], 1] as TestCaseInputMapping,
    expected: [1],
  },
  {
    input: [[], 1] as TestCaseInputMapping,
    expected: [],
  },
].map(({ input, expected }) => ({
  input: () => [arrayToListNode(input[0]), input[1]],
  expected: arrayToListNode(expected),
}));

const suiteName = [
  "https://leetcode.com/problems/remove-nth-node-from-end-of-list",
  "removeNthFromEnd",
].join(" - ");
const caseName = "should remove the nth node from the end of the list";

runTestSuite<Solution>({ suiteName, caseName, solutions, testCases });
