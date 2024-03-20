import { arrayToListNode } from "../../data-structure";
import { runTestSuite, TestCase } from "../leetCodeTestUtility";
import { solutions } from "./1669";

type Solution = (typeof solutions)[0];

export const testCases: TestCase<Solution>[] = [
  {
    input: [
      arrayToListNode([10, 1, 13, 6, 9, 5]),
      3,
      4,
      arrayToListNode([1000000, 1000001, 1000002]),
    ],
    expected: arrayToListNode([10, 1, 13, 1000000, 1000001, 1000002, 5]),
  },
  {
    input: [
      arrayToListNode([0, 1, 2, 3, 4, 5, 6]),
      2,
      5,
      arrayToListNode([1000000, 1000001, 1000002, 1000003, 1000004]),
    ],
    expected: arrayToListNode([
      0, 1, 1000000, 1000001, 1000002, 1000003, 1000004, 6,
    ]),
  },
];

const suiteName = [
  "https://leetcode.com/problems/merge-in-between-linked-lists",
  "mergeInBetween",
].join(" - ");
const caseName = "should merge two linked lists";

runTestSuite<Solution>({ suiteName, caseName, solutions, testCases });
