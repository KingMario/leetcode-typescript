import {
  runTestSuite,
  TestCase,
} from "../leetCodeTestUtility";
import {
  solutions,
} from "./442";

type Solution = (typeof solutions)[0];

export const testCases: TestCase<Solution>[] = [
  {
    input: [[4,3,2,7,8,2,3,1]],
    expected: [2,3],
  },
  {
    input: [[1,1,2]],
    expected: [1],
  },
  {
    input: [[1]],
    expected: [],
  },
];

const suiteName = [
  "https://leetcode.com/problems/find-all-duplicates-in-an-array",
  "findDuplicates",
].join(" - ");
const caseName = "should return all duplicates in an array";

runTestSuite<Solution>({ suiteName, caseName, solutions, testCases});
