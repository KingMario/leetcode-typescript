# LeetCode Daily Challenge Solutions in TypeScript

This repository serves as a record of my daily progress in solving LeetCode challenges, all of which are implemented in TypeScript.

This project also showcases the following best practices in front-end engineering, which are instrumental in creating maintainable and extensible code:

* Utilizing the Jest testing framework for verifying algorithm correctness
* Creating a unified test suite that supports TypeScript generics
* Developing VS Code snippets to enhance coding efficiency
* Leveraging VS Code plugins and commands to standardize code style and import order
* Configuring VS Code tasks and Husky scripts to ensure the quality of committed code
* Generating a code coverage report during testing
* Setting up the Live Preview plugin in VS Code to host and instantly open the report for viewing
* Striving for 100% code coverage in unit tests
* Refactoring to achieve code readability, maintainability, and extensibility

## Folder Structure

The codebase is primarily split into three main directories: `data-structure`, `utilities` and `problem-solutions`, all of which are located within the `src` directory.

The `data-structure` directory houses a variety of data structures that are frequently used in problem solutions, including ListNode, Binary Tree, Max Heap, Min Heap, Priority Queue, and more. For some data structures, helper methods such as `arrayToList` and `ListToArray` are provided to aid in testing, aligning with the format of LeetCode's test cases. This directory is continuously updated and enhanced to meet the evolving needs of the problems.

The `utilities` directory houses a variety of common utilities that are frequently used across different problem solutions. These utilities include functions and classes that perform common tasks or operations, such as sorting, searching, and data manipulation. This directory is continuously updated and enhanced to meet the evolving needs of the problems and to promote code reuse and maintainability.

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
4. Use the `tab` key to navigate and edit the function and parameter names.
5. After making the above changes, hit `tab` again to move to the first line of the function body.

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
4. Use the `tab` key to navigate and edit placeholders such as module name, URL, suite name, and case name.
5. After making the above changes, hit `tab` again to move to the first line of the testCases array.

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
