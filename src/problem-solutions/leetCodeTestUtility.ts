// eslint-disable-next-line @typescript-eslint/no-explicit-any
export interface TestCase<T extends (...args: any[]) => any> {
  input: Parameters<T> | (() => Parameters<T>);
  expected: ReturnType<T> | ReturnType<T>[] | Parameters<T>;
  containing?: boolean;
  expectedMutatedInput?: boolean;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export interface TestSuite<T extends (...args: any[]) => any> {
  suiteName: string;
  caseName: string;
  solutions: T[];
  testCases: TestCase<T>[];
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function runTestSuite<T extends (...args: any[]) => any>({
  suiteName,
  caseName,
  solutions,
  testCases,
}: TestSuite<T>) {
  describe(suiteName, () => {
    it(caseName, () => {
      solutions.forEach((solution) => {
        testCases.forEach(
          ({ input, expected, containing, expectedMutatedInput }, caseIndex) => {
            try {
              if (typeof input === "function") {
                input = input();
              }

              if (containing) {
                expect(expected).toContainEqual(solution(...input));
              } else if (expectedMutatedInput) {
                solution(...input);
                expect(input).toEqual(expected);
              } else {
                expect(solution(...input)).toEqual(expected);
              }
            } catch (error) {
              console.debug({
                solutionName: solution.name,
                caseIndex,
              });

              throw error;
            }
          }
        );
      });
    });
  });
}
