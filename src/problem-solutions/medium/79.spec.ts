import {
  runTestSuite,
  TestCase,
} from "../leetCodeTestUtility";
import {
  solutions,
} from "./79";

type Solution = (typeof solutions)[0];

export const testCases: TestCase<Solution>[] = [
  {
    input: [
      [
        ["A", "B", "C", "E"],
        ["S", "F", "C", "S"],
        ["A", "D", "E", "E"],
      ],
      "ABCCED",
    ],
    expected: true,
  },
  {
    input: [
      [
        ["A", "B", "C", "E"],
        ["S", "F", "C", "S"],
        ["A", "D", "E", "E"],
      ],
      "SEE",
    ],
    expected: true,
  },
  {
    input: [
      [
        ["A", "B", "C", "E"],
        ["S", "F", "C", "S"],
        ["A", "D", "E", "E"],
      ],
      "ABCB",
    ],
    expected: false,
  },
];

const suiteName = ["https://leetcode.com/problems/word-search", "exist"].join(
  " - "
);
const caseName = "should return if word exists in the grid";

runTestSuite<Solution>({ suiteName, caseName, solutions, testCases });
