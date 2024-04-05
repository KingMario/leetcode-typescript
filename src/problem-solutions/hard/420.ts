function strongPasswordChecker(password: string): number {
  const { length: passwordLength } = password;
  const charsToAdd = 6 - passwordLength;

  if (passwordLength < 5) {
    return charsToAdd;
  }

  const unmetCharTypes = [/\d/, /[a-z]/, /[A-Z]/]
    .map((pattern) => pattern.test(password))
    .filter((found) => !found).length;
  const sequenceLengths = (password.match(/(.)\1{2,}/g) ?? []).map(
    ({ length }) => length
  );

  const calculateCharsToReplace = () =>
    Math.max(
      unmetCharTypes,
      sequenceLengths.reduce((acc, cur) => acc + Math.floor(cur / 3), 0)
    );

  if (passwordLength < 7) {
    return Math.max(charsToAdd, calculateCharsToReplace());
  } else if (passwordLength < 21) {
    return calculateCharsToReplace();
  }

  const excessChars = passwordLength - 20;

  let deletedCharsInSequences = 0;

  const deleteCharsToBreakSequence = (charsToDelete: number) => {
    for (let i = 0; i < sequenceLengths.length; i++) {
      if (excessChars === deletedCharsInSequences) {
        break;
      }

      if (sequenceLengths[i] % 3 === charsToDelete - 1) {
        deletedCharsInSequences += charsToDelete;
        sequenceLengths[i] -= charsToDelete;
      }
    }
  };

  const delete3CharsInSequences = () => {
    for (let i = 0; i < sequenceLengths.length; i++) {
      while (excessChars - deletedCharsInSequences > 2 && sequenceLengths[i] > 2) {
        deletedCharsInSequences += 3;
        sequenceLengths[i] -= 3;
      }
    }
  };

  deleteCharsToBreakSequence(1);
  deleteCharsToBreakSequence(2);
  delete3CharsInSequences();

  const charsToDelete = Math.max(excessChars, deletedCharsInSequences);
  return charsToDelete + calculateCharsToReplace();
}

export const solutions = [strongPasswordChecker];
