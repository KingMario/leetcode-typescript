import {
  addValueToArrayInMap,
} from "../../utilities";

function findAllPeople(
  n: number,
  meetings: [number, number, number][],
  firstPerson: number
): number[] {
  const knowSecretSet = new Set<number>([0, firstPerson]);
  const meetingsByTime = new Map<number, [number, number][]>();

  meetings.sort(([, , time1], [, , time2]) => time1 - time2);
  for (const [x, y, time] of meetings) {
    addValueToArrayInMap(meetingsByTime, time, [x, y]);
  }

  for (const meetingsForThisTime of meetingsByTime.values()) {
    const newNetworkMeetings = meetingsForThisTime.filter(
      ([x, y]) => !knowSecretSet.has(x) && !knowSecretSet.has(y)
    );

    const network = new Map<number, number[]>();

    for (const [x, y] of newNetworkMeetings) {
      addValueToArrayInMap(network, x, y);
      addValueToArrayInMap(network, y, x);
    }

    const spreadingMeetings = meetingsForThisTime.filter(
      ([x, y]) => knowSecretSet.has(x) || knowSecretSet.has(y)
    );

    for (let [x, y] of spreadingMeetings) {
      if (!knowSecretSet.has(x)) {
        [y, x] = [x, y];
      }

      if (!knowSecretSet.has(y)) {
        const stack = [y];

        while (stack.length > 0) {
          const currentNode = stack.pop()!;

          if (!knowSecretSet.has(currentNode)) {
            knowSecretSet.add(currentNode);

            const neighbors = network.get(currentNode) || [];
            for (const neighbor of neighbors) {
              stack.push(neighbor);
            }
          }
        }
      }
    }
  }

  return [...knowSecretSet];
}

export const solutions = [findAllPeople];
