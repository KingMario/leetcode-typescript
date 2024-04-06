const minLength = 6;
const maxLength = 20;
const sequenceBlockSize = 3;

function strongPasswordChecker(password: string): number {
  const { length: passwordLength } = password;
  const charsToAdd = minLength - passwordLength;

  const validationPatterns = [/\d/, /[a-z]/, /[A-Z]/];

  if (passwordLength <= minLength - validationPatterns.length) {
    return charsToAdd;
  }

  const unmetCharTypes = validationPatterns
    .map((pattern) => pattern.test(password))
    .filter((found) => !found).length;
  const sequenceLengths = (password.match(/(.)\1{2,}/g) ?? []).map(
    ({ length }) => length
  );

  if (passwordLength > maxLength) {
    const excessChars = passwordLength - maxLength;

    let deletedCharsInSequences = 0;

    const deleteCharsToBreakSequence = (charsToDelete: number) => {
      for (let i = 0; i < sequenceLengths.length; i++) {
        if (
          excessChars === deletedCharsInSequences ||
          excessChars - charsToDelete < deletedCharsInSequences
        ) {
          break;
        }

        if (sequenceLengths[i] % sequenceBlockSize === charsToDelete - 1) {
          deletedCharsInSequences += charsToDelete;
          sequenceLengths[i] -= charsToDelete;
        }
      }
    };

    const delete3CharsInSequences = () => {
      for (let i = 0; i < sequenceLengths.length; i++) {
        while (
          excessChars - deletedCharsInSequences > 2 &&
          sequenceLengths[i] > 2
        ) {
          deletedCharsInSequences += sequenceBlockSize;
          sequenceLengths[i] -= sequenceBlockSize;
        }
      }
    };

    deleteCharsToBreakSequence(1);
    deleteCharsToBreakSequence(2);
    delete3CharsInSequences();

    const charsToDelete = Math.max(excessChars, deletedCharsInSequences);
    const charsToReplace = calculateCharsToReplace(
      unmetCharTypes,
      sequenceLengths
    );
    return charsToDelete + charsToReplace;
  } else if (passwordLength > minLength) {
    return calculateCharsToReplace(unmetCharTypes, sequenceLengths);
  } else {
    return Math.max(
      charsToAdd,
      calculateCharsToReplace(unmetCharTypes, sequenceLengths)
    );
  }
}

function calculateCharsToReplace(
  unmetCharTypes: number,
  sequenceLengths: number[]
): number {
  return Math.max(
    unmetCharTypes,
    sequenceLengths.reduce(
      (acc, cur) => acc + Math.floor(cur / sequenceBlockSize),
      0
    )
  );
}

export const solutions = [strongPasswordChecker];
