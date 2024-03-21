import {
  arrayToListNode,
} from "../../data-structure";
import {
  runTestSuite,
  TestCase,
} from "../leetCodeTestUtility";
import {
  solutions,
} from "./206";

type Solution = (typeof solutions)[0];

export const testCases: TestCase<Solution>[] = [
  {
    input: [[1, 2, 3, 4, 5]],
    expected: [5, 4, 3, 2, 1],
  },
  {
    input: [[1,2]],
    expected: [2,1],
  },
  {
    input: [[]],
    expected: [],
  },
].map(({ input, expected }) => ({
  input: () => [arrayToListNode(input[0])],
  expected: arrayToListNode(expected),
}));

const suiteName = [
  "https://leetcode.com/problems/reverse-linked-list",
  "reverseList",
].join(" - ");
const caseName = "should reverse a linked list";

runTestSuite<Solution>({ suiteName, caseName, solutions, testCases });
