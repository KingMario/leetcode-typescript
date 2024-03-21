import {
  runTestSuite,
  TestCase,
} from "../leetCodeTestUtility";
import {
  solutions,
} from "./679";

type Solution = (typeof solutions)[0];

export const testCases: TestCase<Solution>[] = [
  {
    input: [[1, 1, 1, 8]],
    expected: true,
  },
  {
    input: [[8, 2, 9, 3]],
    expected: true,
  },
  {
    input: [[4, 1, 8, 7]],
    expected: true,
  },
  {
    input: [[1, 2, 1, 2]],
    expected: false,
  },
  {
    input: [[3, 8, 3, 8]],
    expected: true,
  },
  {
    input: [[4, 4, 10, 10]],
    expected: true,
  },
];

const suiteName = [
  "https://leetcode.com/problems/24-game",
  "judgePoint24",
].join(" - ");
const caseName = "should judge point 24";

runTestSuite<Solution>({ suiteName, caseName, solutions, testCases });
