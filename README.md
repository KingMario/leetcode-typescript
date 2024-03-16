# LeetCode Daily Challenge Solutions in TypeScript

This repository serves as a record of my daily progress in solving LeetCode challenges, all of which are implemented in TypeScript.

## Folder Structure

The codebase is primarily split into two main directories: `data-structure` and `problem-solutions`, both of which are located within the `src` directory.

The `data-structure` directory houses a variety of data structures that are frequently used in problem solutions, including ListNode, Binary Tree, Max Heap, Min Heap, Priority Queue, and more. For some data structures, helper methods such as `arrayToList` and `ListToArray` are provided to aid in testing, aligning with the format of LeetCode's test cases. This directory is continuously updated and enhanced to meet the evolving needs of the problems.

The `problem-solutions` directory is organized into three subdirectories: `easy`, `medium`, and `hard`. These subdirectories categorize the solutions to the daily problems based on their level of difficulty.

## Instalation

```bash
npm install
```

## Test Run

Jest, a JavaScript Testing Framework, is utilized in this project due to its simplicity and out-of-the-box compatibility with TypeScript, the primary language used in this project.

Each problem is accompanied by a set of test cases. These test cases are a mix of those directly derived from the problem and custom ones designed to handle edge cases, ensuring a thorough testing of the solution. The test file shares the same name as the problem file, appended with a `spec` suffix. It defines an array of test cases, where each case is an object comprising `input` and `expected` fields. These fields represent the function's input and the anticipated output, respectively.

The function `runTestSuite` is designed to streamline the creation of test suites, and is frequently utilized in this context. It takes a `TestSuite` object as an argument. It uses the `describe` and `it` functions to create test cases for the provided solutions and test cases. The function executes each solution using the associated test case inputs, then verifies whether the output aligns with the anticipated result. This is achieved by employing the `expect` function in conjunction with the `toEqual` matcher.

In certain scenarios or for specific solutions, the use of specialized equality testers may be necessary. For additional information, please consult the [expect.addEqualityTesters](https://jestjs.io/docs/expect#expectaddequalitytesterstesters) section in the Jest documentation.

You can run the test cases using the following command:

```bash
npm test
```

or

```bash
npm run test:watch
```

The second command will continuously monitor your code for changes as you work.

## Shortcuts for VS Code

### Tasks

Tasks are configured for testing and linting. You can use the `Run Task...` command found under the Terminal menu in VS Code.

### Snippets

Custom snippets are configured for TypeScript.

You can use the `lc-solution` snippet to quickly scaffold a new solution file. Here's how to use it:

1. Open a new TypeScript file.
2. Type `lc-solution` and press the `tab` key.
3. The snippet will automatically expand and provide a basic structure for your solution.

Here's what the `lc-solution` snippet looks like:

```ts
function functionName(para: number[]): number {
  
  return 0;
}

export const solutions = [functionName];
```

You can quickly scaffold a new spec file using the `lc-spec` snippet. Here's how to use it:
1. Open a new TypeScript file.
2. Type `lc-spec` and press the `tab` key.
3. The snippet will automatically expand and provide a basic structure for your spec file.

Here's what the `lc-spec` snippet looks like:

```ts
import { TestCase, runTestSuite } from "../leetCodeTestUtility";
import { solutions } from "./fileName";

type Solution = (typeof solutions)[0];

export const testCases: TestCase<Solution>[] = [
  
];

const suiteName = [
    "url",
    "suiteName",
  ].join(" - ");
const caseName = "should work";

runTestSuite<Solution>({ suiteName, caseName, solutions, testCases});
```

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.

## Contributing

If you're interested in contributing to this project, we welcome your support! Here are the steps to get started:

1. Fork the repository.
2. Create your feature branch (`git checkout -b feature/YourFeature`).
3. Commit your changes (`git commit -m 'Add some feature'`).
4. Push to the branch (`git push origin feature/YourFeature`).
5. Open a Pull Request.

Your contributions are greatly appreciated!
