import {
  arrayToListNode,
  ListNode,
  listNodeToArray,
} from "../../data-structure";

function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
  if (!head) {
    return null;
  }

  let fast = head;
  let slow = head;
  let i = 0;
  while (i < n) {
    fast = fast.next!;
    i++;
  }
  if (!fast) {
    return head.next;
  }
  while (fast.next) {
    fast = fast.next;
    slow = slow.next!;
  }
  slow.next = slow.next!.next;

  return head;
}

function removeNthFromEndV2(head: ListNode | null, n: number): ListNode | null {
  if (!head) {
    return null;
  }

  const list: ListNode[] = [];

  let current: ListNode | null = head;
  while (current) {
    list.push(current);
    current = current.next;
  }

  if (list.length === n) {
    return head.next;
  }

  list[list.length - n - 1].next = list[list.length - n].next;

  return head;
}

function removeNthFromEndV3(head: ListNode | null, n: number): ListNode | null {
  if (!head) {
    return null;
  }

  const values = listNodeToArray(head);

  values.splice(values.length - n, 1);

  return arrayToListNode(values);
}

export const solutions = [removeNthFromEnd, removeNthFromEndV2, removeNthFromEndV3];
