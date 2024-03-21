import {
  runTestSuite,
  TestCase,
} from "../leetCodeTestUtility";
import {
  solutions,
} from "./2092";

type Solution = (typeof solutions)[0];

export const testCases: TestCase<Solution>[] = [
  {
    input: [
      8,
      [
        [1, 2, 5],
        [2, 3, 8],
        [5, 1, 10],
        [9, 5, 10],
        [4, 6, 6],
        [4, 7, 6],
      ],
      1,
    ],
    expected: [0, 1, 2, 3, 5, 9],
  },
  {
    input: [
      4,
      [
        [3, 1, 3],
        [1, 2, 2],
        [0, 3, 3],
      ],
      3,
    ],
    expected: [0, 3, 1],
  },
  {
    input: [
      5,
      [
        [3, 4, 2],
        [1, 2, 1],
        [2, 3, 1],
      ],
      1,
    ],
    expected: [0, 1, 2, 3, 4],
  },
];

const suiteName = [
  "https://leetcode.com/problems/find-all-people-with-secret",
  "findAllPeople",
].join(" - ");
const caseName =
  "should return a list of all the people that have the secret after all the meetings have taken place.";

runTestSuite<Solution>({ suiteName, caseName, solutions, testCases });
