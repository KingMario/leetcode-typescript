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
      10,
      [
        [1, 2, 5],
        [2, 3, 8],
        [1, 5, 10],
        [4, 2, 9],
        [6, 7, 6],
        [6, 9, 6],
        [8, 7, 6],
      ],
      1,
    ],
    expected: [0, 1, 2, 3, 4, 5],
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
