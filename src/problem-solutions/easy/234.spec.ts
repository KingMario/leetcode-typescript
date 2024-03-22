import {
  arrayToListNode,
} from "../../data-structure";
import {
  runTestSuite,
  TestCase,
} from "../leetCodeTestUtility";
import {
  solutions,
} from "./234";

type Solution = (typeof solutions)[0];

export const testCases: TestCase<Solution>[] = [
  {
    input: [[1, 2, 2, 1]],
    expected: true,
  },
  {
    input: [[1, 2]],
    expected: false,
  },
  {
    input: [[1, 2, 4, 3, 2, 1]],
    expected: false,
  },
].map(({ input, expected }) => ({
  input: [arrayToListNode(input[0])],
  expected,
}));

const suiteName = [
  "https://leetcode.com/problems/palindrome-linked-list",
  "isPalindrome",
].join(" - ");
const caseName = "should judge a palindrome linked list";

runTestSuite<Solution>({ suiteName, caseName, solutions, testCases });
