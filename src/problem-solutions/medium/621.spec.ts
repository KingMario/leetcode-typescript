import { runTestSuite, TestCase } from "../leetCodeTestUtility";
import { solutions } from "./621";

type Solution = (typeof solutions)[0];

export const testCases: TestCase<Solution>[] = [
  {
    input: [["A", "A", "A", "B", "B", "B"], 2],
    expected: 8,
  },
  {
    input: [["A", "C", "A", "B", "D", "B"], 1],
    expected: 6,
  },
  {
    input: [["A", "A", "A", "B", "B", "B"], 3],
    expected: 10,
  },
  {
    input: [["A", "A", "A", "B", "B", "B", "C", "C", "C", "D", "D", "E"], 2],
    expected: 12,
  },
  {
    input: [["A", "A", "A", "A", "A", "B", "B", "C", "C", "D", "D", "E"], 2],
    expected: 13,
  },
];

const suiteName = [
  "https://leetcode.com/problems/task-scheduler",
  "leastInterval",
].join(" - ");
const caseName =
  "should return the minimum number of intervals required to complete all tasks";

runTestSuite<Solution>({ suiteName, caseName, solutions, testCases });
