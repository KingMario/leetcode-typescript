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

Each problem is accompanied by a set of test cases. These test cases are a mix of those directly derived from the problem and custom ones designed to handle edge cases, ensuring a thorough testing of the solution. The test file shares the same name as the problem file, appended with a `test-cases` suffix. It exports an array of test cases, where each case is an object comprising `input` and `expected` fields. These fields represent the function's input and the anticipated output, respectively.

You can run the test cases using the following command:

```bash
npm test
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
