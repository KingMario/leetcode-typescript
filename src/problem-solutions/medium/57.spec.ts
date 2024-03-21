import {
  runTestSuite,
  TestCase,
} from "../leetCodeTestUtility";
import {
  solutions,
} from "./57";

type Solution = (typeof solutions)[0];

export const testCases: TestCase<Solution>[] = [
  {
    input: [
      [
        [1, 3],
        [6, 9],
      ],
      [2, 5],
    ],
    expected: [
      [1, 5],
      [6, 9],
    ],
  },
  {
    input: [
      [
        [1, 2],
        [3, 5],
        [6, 7],
        [8, 10],
        [12, 16],
      ],
      [4, 8],
    ],
    expected: [
      [1, 2],
      [3, 10],
      [12, 16],
    ],
  },
  {
    input: [[], [2, 5]],
    expected: [[2, 5]],
  },
  {
    input: [[[2, 5]], [0, 1]],
    expected: [
      [0, 1],
      [2, 5],
    ],
  },
  {
    input: [[[2, 5]], [0, 3]],
    expected: [[0, 5]],
  },
  {
    input: [[[2, 5]], [0, 7]],
    expected: [[0, 7]],
  },
  {
    input: [[[2, 5]], [2, 5]],
    expected: [[2, 5]],
  },
  {
    input: [[[2, 5]], [3, 4]],
    expected: [[2, 5]],
  },
  {
    input: [[[2, 5]], [3, 7]],
    expected: [[2, 7]],
  },
  {
    input: [[[2, 5]], [6, 8]],
    expected: [
      [2, 5],
      [6, 8],
    ],
  },
  {
    input: [
      [
        [2, 5],
        [6, 7],
        [8, 9],
      ],
      [0, 1],
    ],
    expected: [
      [0, 1],
      [2, 5],
      [6, 7],
      [8, 9],
    ],
  },
  {
    input: [
      [
        [2, 5],
        [6, 7],
        [8, 9],
      ],
      [10, 11],
    ],
    expected: [
      [2, 5],
      [6, 7],
      [8, 9],
      [10, 11],
    ],
  },
];

const suiteName = [
  "https://leetcode.com/problems/insert-interval",
  "insert",
].join(" - ");
const caseName = "should insert interval into intervals";

runTestSuite<Solution>({ suiteName, caseName, solutions, testCases });
