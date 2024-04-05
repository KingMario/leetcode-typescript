import {
  runTestSuite,
  TestCase,
} from "../leetCodeTestUtility";
import {
  solutions,
} from "./420";

type Solution = (typeof solutions)[0];

export const testCases: TestCase<Solution>[] = [
  {
    input: ["a"],
    expected: 5,
  },
  {
    input: ["aaa"],
    expected: 3,
  },
  {
    input: ["0000"],
    expected: 2,
  },
  {
    input: ["AAAAA"],
    expected: 2,
  },
  {
    input: ["aaA1b"],
    expected: 1,
  },
  {
    input: ["!!!!!"],
    expected: 3,
  },
  {
    input: ["1337C0d3"],
    expected: 0,
  },
  {
    input: ["aaaaaaaAA"],
    expected: 2,
  },
  {
    input: ["aaaaaaaaaaaaaaaaaaaaaaaaaa"],
    expected: 12,
  },
  {
    input: ["aaaaaaaaaaaaaaabcdefghijklmo"],
    expected: 10,
  },
  {
    input: ["aaaaaaaabaaaaaaabcdefghijklmo"],
    expected: 11,
  },
  {
    input: ["..!!!...!.!!!...!..!!.."],
    expected: 6,
  },
  {
    input: ["aaaaAAAAAA000000123456"],
    expected: 5,
  },
  {
    input: ["aaaaabbbbccccddddeeeeffffgggghhhh"],
    expected: 15,
  },
];

const suiteName = [
  "https://leetcode.com/problems/strong-password-checker",
  "strongPasswordChecker",
].join(" - ");
const caseName = "should return the minimum number of changes required to make the password strong";

runTestSuite<Solution>({ suiteName, caseName, solutions, testCases});
