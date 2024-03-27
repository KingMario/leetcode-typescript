import {
  runTestSuite,
  TestCase,
} from "../leetCodeTestUtility";
import {
  solutions,
} from "./713";

type Solution = (typeof solutions)[0];

export const testCases: TestCase<Solution>[] = [
  {
    input: [[10, 5, 2, 6], 100],
    expected: 8,
  },
  {
    input: [[1, 2, 3], 0],
    expected: 0,
  },
];

const suiteName = [
  "https://leetcode.com/problems/subarray-product-less-than-k",
  "numSubarrayProductLessThanK",
].join(" - ");
const caseName =
  "should return numbers of contiguous subarrays where the product of all the elements in the subarray is strictly less than k";

runTestSuite<Solution>({ suiteName, caseName, solutions, testCases });
