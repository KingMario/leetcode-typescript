import {
  arrayToListNode,
} from "../../data-structure";
import {
  runTestSuite,
  TestCase,
} from "../leetCodeTestUtility";
import {
  solutions,
} from "./143";

type Solution = (typeof solutions)[0];

export const testCases: TestCase<Solution>[] = [
  {
    input: [[]],
    expected: [],
  },
  {
    input: [[1]],
    expected: [1],
  },
  {
    input: [[1, 2, 3, 4]],
    expected: [1, 4, 2, 3],
  },
  {
    input: [[1, 2, 3, 4, 5]],
    expected: [1, 5, 2, 4, 3],
  },
].map(({ input, expected }) => {
  return {
    input: [arrayToListNode(input[0])],
    expected: [arrayToListNode(expected)],
    expectedMutatedInput: true,
  };
});

const suiteName = [
  "https://leetcode.com/problems/reorder-list",
  "reorderList",
].join(" - ");
const caseName = "should reorder a linked list";

runTestSuite<Solution>({ suiteName, caseName, solutions, testCases });
