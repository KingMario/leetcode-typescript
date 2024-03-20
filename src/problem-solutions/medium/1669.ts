import {
  arrayToListNode,
  ListNode,
  listNodeToArray,
} from "../../data-structure";

function mergeInBetween(
  list1: ListNode | null,
  a: number,
  b: number,
  list2: ListNode | null
): ListNode | null {
  const list1Array = listNodeToArray(list1);
  const list2Array = listNodeToArray(list2);

  list1Array.splice(a, b - a + 1, ...list2Array);

  return arrayToListNode(list1Array);
}

export const solutions = [mergeInBetween];
