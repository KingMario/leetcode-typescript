import { arrayToListNode } from "../../data-structure";
import { runTestSuite, TestCase } from "../leetCodeTestUtility";
import { solutions } from "./1171";

type Solution = (typeof solutions)[0];

export const testCases: TestCase<Solution>[] = [
  {
    input: [[1, 2, -3, 3, 1]],
    expected: [
      [1, 2, 1],
      [3, 1],
    ],
  },
  {
    input: [[1, 2, 3, -3, 4]],
    expected: [[1, 2, 4]],
  },
  {
    input: [[1, 2, 3, -3, -2]],
    expected: [[1]],
  },
  {
    input: [[1, -1]],
    expected: [[]],
  },
  {
    input: [[1, 3, 2, -3, -2, 5, 5, -5, 1]],
    expected: [[1, 5, 1]],
  },
  {
    input: [[]],
    expected: [[]],
  },
].map(({ input: [head], expected }) => ({
  input: [arrayToListNode(head)],
  expected: expected.map(arrayToListNode),
  containing: true,
}));

const suiteName = [
  "https://leetcode.com/problems/remove-zero-sum-consecutive-nodes-from-linked-list",
  "removeZeroSumSublists",
].join(" - ");
const caseName = "should remove zero sum sublists from the linked list";

runTestSuite<Solution>({ suiteName, caseName, solutions, testCases });
