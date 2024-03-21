function judgePoint24(cards: number[]): boolean {
  const judgeEqual = (a: number, b = 24) => Math.abs(a - b) < 1e-6;

  if (cards.length === 2) {
    const [a, b] = cards;

    return (
      judgeEqual(a + b) ||
      judgeEqual(Math.abs(a - b)) ||
      judgeEqual(a * b) ||
      (!judgeEqual(b, 0) &&
        !judgeEqual(a, 0) &&
        judgeEqual(Math.max(...cards) / Math.min(...cards)))
    );
  }

  for (let i = 0; i < cards.length; i++) {
    for (let j = i + 1; j < cards.length; j++) {
      const restCards = cards.filter((v, k) => k !== i && k !== j);
      if (judgePoint24([cards[i] + cards[j], ...restCards])) {
        return true;
      }

      if (judgePoint24([Math.abs(cards[i] - cards[j]), ...restCards])) {
        return true;
      }

      if (judgePoint24([cards[i] * cards[j], ...restCards])) {
        return true;
      }

      if (
        !judgeEqual(cards[j], 0) &&
        judgePoint24([cards[i] / cards[j], ...restCards])
      ) {
        return true;
      }

      if (
        !judgeEqual(cards[i], 0) &&
        judgePoint24([cards[j] / cards[i], ...restCards])
      ) {
        return true;
      }
    }
  }

  return false;
}

export const solutions = [judgePoint24];
