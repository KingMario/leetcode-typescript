import {
  arrayToListNode,
  ListNode,
  listNodeToArray,
} from "../../data-structure";

function reverseList(head: ListNode | null): ListNode | null {
  return arrayToListNode(listNodeToArray(head).reverse());
}

function reverseListV2(head: ListNode | null): ListNode | null {
  if (!head || !head.next) {
    return head;
  }

  const newHead = reverseListV2(head.next);
  head.next.next = head;
  head.next = null;

  return newHead;
}

function reverseListV3(head: ListNode | null): ListNode | null {
  let previous: ListNode | null = null;
  let current = head;

  while (current) {
    const next = current.next;
    current.next = previous;
    previous = current;
    current = next;
  }

  return previous;
}

export const solutions = [reverseList, reverseListV2, reverseListV3];
