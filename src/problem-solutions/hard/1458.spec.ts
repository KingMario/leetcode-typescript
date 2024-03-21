import {
  runTestSuite,
  TestCase,
} from "../leetCodeTestUtility";
import {
  solutions,
} from "./1458";

type Solution = (typeof solutions)[0];

export const testCases: TestCase<Solution>[] = [
  {
    input: [
      [2, 1, -2, 5],
      [3, 0, -6],
    ],
    expected: 18,
  },
  {
    input: [
      [3, -2],
      [2, -6, 7],
    ],
    expected: 21,
  },
  {
    input: [
      [-1, -1],
      [1, 1],
    ],
    expected: -1,
  },
];

const suiteName = [
  "https://leetcode.com/problems/max-dot-product-of-two-subsequences",
  "maxDotProduct",
].join(" - ");
const caseName =
  "should return the maximum dot product between non-empty subsequences of nums1 and nums2 with the same length";

runTestSuite<Solution>({ suiteName, caseName, solutions, testCases });
