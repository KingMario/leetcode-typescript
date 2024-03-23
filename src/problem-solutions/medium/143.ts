import {
  arrayToListNode,
  ListNode,
  listNodeToArray,
} from "../../data-structure";

function reorderList(head: ListNode | null): void {
  if (!head || !head.next) {
    return;
  }

  const values = listNodeToArray(head);

  const newValue = [];
  let i = 1;
  while (i <= Math.floor(values.length / 2)) {
    newValue.push(values[ values.length - i ]);
    newValue.push(values[i]);
    i++;
  }

  if (values.length % 2 === 0) {
    newValue.pop();
  }

  head.next = arrayToListNode(newValue);
}

export const solutions = [reorderList];
